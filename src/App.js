/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

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
import HomePage from './pages/HomePage';

import TokenExpirationChecker from './TokenExpirationChecker';
import Statistics from './pages/Statistics';


import Chatroom from './pages/Chatroom';
import Chat from './pages/Chat';
const socket = io.connect('http://localhost:5000');



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
            path="/profile"
            element={isLoggedIn == "true" ? <Profile /> : <Login />}
          />
          <Route
            path="/articleDetail/:id"
            element={isLoggedIn == "true" ? <GetOneArticle /> : <Login />}
          />
          
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route 
            path="/manageaccount" 
            element={role === "admin" ? <ManageAccount /> : <Forbidden />} 
          />
          <Route 
            path="/createEvent" 
            element={role === "admin" ? <CreateEvent /> : <Forbidden />} 
          />
          <Route 
            path="/manageEvent" 
            element={role === "admin" ? <ManageEvent /> : <Forbidden />} 
          />
          <Route 
            path="/statistics" 
            element={role === "admin" ? <Statistics /> : <Forbidden />} 
          />
          
          <Route 
            path="/articleDetail/:id/comment" 
            element={isLoggedIn == "true" ? <Comment /> : <Login />}
          />
          <Route 
            path="/event/:id/createArticle" 
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
}

function Forbidden() {
  return <h1>Forbidden: You have to be admin to use this function.</h1>;
}

export default App;