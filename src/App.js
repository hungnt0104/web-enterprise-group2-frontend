/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

import io from 'socket.io-client';


import axios from 'axios'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ManageAccount from './pages/ManageAccount';
import CreateEvent from './pages/CreateEvent';


import ManageEvent from './pages/ManageEvent';
import GetArticle from './pages/GetArticle';
import Profile from './pages/Profile';
import GetOneArticle from './pages/GetOneArticle';
import UpdateArticle from './pages/UpdateArticle';

import CreateArticle from './pages/Article';
import Comment from './pages/Comment';
import HomePage from './pages/HomePage'
import AllArticle from './pages/AllArticle'

import TokenExpirationChecker from './TokenExpirationChecker';
import Statistics from './pages/Statistics';
import GetEvent from './pages/GetEvent'
import EventDetail from './pages/EventDetail'

import Chatroom from './pages/Chatroom';
import Chat from './pages/Chat';
const socket = io.connect('http://localhost:5000');

axios.defaults.baseURL = 'http://localhost:5000';



function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn")
  const role = window.localStorage.getItem("role")
  return (
    <Router>
      <TokenExpirationChecker> {/* Wrap the Routes with TokenExpirationChecker */}
        <Routes>
          <Route
            path="/"
            element={isLoggedIn == "true" ? <GetArticle /> : <Login />}
          />
          <Route
            path="/menu"
            element={isLoggedIn == "true" ? <GetArticle /> : <Login />}
          />
          <Route
            path="/home"
            element={isLoggedIn == "true" ? <HomePage /> : <Login />}
          />
          <Route
            path="/events"
            element={isLoggedIn == "true" ? <GetEvent /> : <Login />}
          />
          <Route path="/:id" element={<DataResolver />} />
          <Route
            path="/:id"
            element={isLoggedIn == "true" ? <EventDetail /> : <Login />}
          />
          <Route
            path="/allArticles"
            element={isLoggedIn == "true" ? <AllArticle /> : <Login />}
          />
          <Route
            path="/profile"
            element={isLoggedIn == "true" ? <Profile /> : <Login />}
          />
          <Route
            path="/:id"
            element={isLoggedIn == "true" ? <GetOneArticle /> : <Login />}
          />
          
          
          <Route path="/login" element={<Login />} />
          <Route 
            path="/signup" 
            element={role === "Admin" ? <SignUp /> : <Forbidden />} 
          />
          <Route 
            path="/manageaccount" 
            element={role === "Admin" ? <ManageAccount /> : <Forbidden />} 
          />
          <Route 
            path="/createEvent" 
            element={role === "Admin" ? <CreateEvent /> : <Forbidden />} 
          />
          <Route 
            path="/manageEvent" 
            element={role === "Admin" ? <ManageEvent /> : <Forbidden />} 
          />
          <Route 
            path="/statistics" 
            element={role === "Admin" ? <Statistics /> : <Forbidden />} 
          />
          
          <Route 
            path="/articleDetail/:id/comment" 
            element={isLoggedIn == "true" ? <Comment /> : <Login />}
          />
          <Route 
            path="/createArticle" 
            element={<CreateArticle />} 
          />
          
          
        
          <Route
            path='/chatroom'
            element={
              <Chatroom               
                socket={socket}
              />}/>
            <Route
            path='/message'
            element={<Chat socket={socket} />}
          />




           <Route>           
        </Route>
          <Route path="/forbidden" element={<Forbidden />} />
        </Routes>
      </TokenExpirationChecker>
    </Router>
  );
  function DataResolver() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    // const [isLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true"); // Assuming store login state in localStorage
    const [type, setType] = useState("");
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`/articles/getArticles/${id}`);
          console.log(response, "This is an article");
          setType("Article");
          setData(response.data)
          // const jsonData = await response.json();
          // setData(jsonData);
        } catch (error) {
          const response = await axios.get(`/admin/getEvent/${id}`);
          console.log(response, "This is an event");
          setType("Event");
          setData(response.data)
          // const jsonData = await response.json();
          // setData(jsonData);
        }
      }
  
      fetchData();
    }, [id]);
  
    if (!isLoggedIn) {
      return <Login />;
    }
  
    if (!data) {
      return <p>Loading...</p>; // Or some loading component
    }
  
    return type === 'Event' ? <EventDetail data={data} /> : <GetOneArticle data={data} />;
  }
}

function Forbidden() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', /* Set the height of the container to full viewport height */
    }}>
      <h1>Forbidden: You have to be admin to use this function.</h1>
    </div>
  );
}

function DataResolver() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true"); // Assuming store login state in localStorage
  const [type, setType] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/articles/getArticle/${id}`);
        console.log(response, "This is an article");
        setType("Article");
        // const jsonData = await response.json();
        // setData(jsonData);
      } catch (error) {
        const response = await axios.get(`/admin/getEvent/${id}`);
        console.log(response, "This is an event");
        setType("Event");
        // const jsonData = await response.json();
        // setData(jsonData);
      }
    }

    fetchData();
  }, [id]);

  if (!isLoggedIn) {
    return <Login />;
  }

  if (!data) {
    return <p>Loading...</p>; // Or some loading component
  }

  return type === 'Event' ? <EventDetail data={data} /> : <GetOneArticle data={data} />;
}

export default App;