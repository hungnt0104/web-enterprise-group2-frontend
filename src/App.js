/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// import { useParams} from 'react-router-dom';
// import { useEffect } from 'react';
// import { useState } from 'react';

// import io from 'socket.io-client';


// import axios from 'axios'
// import Login from './pages/Login';
// import SignUp from './pages/Signup';
// import ManageAccount from './pages/ManageAccount';
// import CreateEvent from './pages/CreateEvent';


// import ManageEvent from './pages/ManageEvent';
// import GetArticle from './pages/GetArticle';
// import Profile from './pages/Profile';
// import GetOneArticle from './pages/GetOneArticle';


// import CreateArticle from './pages/Article';
// import Comment from './pages/Comment';
// import HomePage from './pages/HomePage'
// import AllArticle from './pages/AllArticle'

// import TokenExpirationChecker from './TokenExpirationChecker';
// import Statistics from './pages/Statistics';
// import GetEvent from './pages/GetEvent'
// import EventDetail from './pages/EventDetail'
// import MyArticle from './pages/MyArticle';

// import Chatroom from './pages/Chatroom';
// import Chat from './pages/Chat';
// // const socket = io.connect('http://localhost:5000');
// const socket = io.connect('https://web-enterprise-group2-backend-test.onrender.com');

// axios.defaults.baseURL = 'https://web-enterprise-group2-backend-test.onrender.com';



// function App() {
//   const isLoggedIn = window.localStorage.getItem("loggedIn")
//   const role = window.localStorage.getItem("role")
//   return (
//     <Router>
//       <TokenExpirationChecker> {/* Wrap the Routes with TokenExpirationChecker */}
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route
//             path="/menu"
//             element={role == "Coordinator" ? <GetArticle /> : <Forbidden />}
//           />
//           <Route
//             path="/events"
//             element={isLoggedIn == "true" ? <GetEvent /> : <Login />}
//           />
//           <Route
//             path="/allArticles"
//             element={isLoggedIn == "true" ? <AllArticle /> : <Login />}
//           />
//           <Route
//             path="/myArticle"
//             element={isLoggedIn == "true" ? <MyArticle /> : <Login />}
//           />
//           <Route
//             path="/profile"
//             element={isLoggedIn == "true" ? <Profile /> : <Login />}
//           />
//           <Route path="/login" element={<Login />} />
//           <Route 
//             path="/signup" 
//             element={role === "Admin" ? <SignUp /> : <Forbidden />} 
//           />
//           <Route 
//             path="/manageaccount" 
//             element={role === "Admin" ? <ManageAccount /> : <Forbidden />} 
//           />
//           <Route 
//             path="/createEvent" 
//             element={role === "Admin" ? <CreateEvent /> : <Forbidden />} 
//           />
//           <Route 
//             path="/manageEvent" 
//             element={role === "Admin" ? <ManageEvent /> : <Forbidden />} 
//           />
//           <Route 
//             path="/statistics" 
//             element={role === "Admin" ? <Statistics /> : <Forbidden />} 
//           />
          
//           <Route 
//             path="/articleDetail/:id/comment" 
//             element={isLoggedIn == "true" ? <Comment /> : <Login />}
//           />
//           <Route 
//             path="/createArticle" 
//             element={isLoggedIn == "true" ? <CreateArticle /> : <Login />}
//           />
          
          
        
//           <Route
//             path='/chatroom'
//             element={
//               <Chatroom               
//                 socket={socket}
//               />}/>
//             <Route
//             path='/message'
//             element={<Chat socket={socket} />}
//           />
//           <Route path="/:id" element={<DataResolver />} />



//            {/* <Route>           
//         </Route> */}
//           <Route path="/forbidden" element={<Forbidden />} />
//         </Routes>
//       </TokenExpirationChecker>
//     </Router>
//   );
//   function DataResolver() {
//     const { id } = useParams();
//     const [data, setData] = useState(null);
//     // const [isLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true"); // Assuming store login state in localStorage
//     const [type, setType] = useState("");
  
//     useEffect(() => {
//       async function fetchData() {
//         try {
//           const response = await axios.get(`/articles/getArticles/${id}`);
//           console.log(response, "This is an article");
//           setType("Article");
//           setData(response.data)
//           // const jsonData = await response.json();
//           // setData(jsonData);
//         } catch (error) {
//           const response = await axios.get(`/admin/getEvent/${id}`);
//           console.log(response, "This is an event");
//           setType("Event");
//           setData(response.data)
//           // const jsonData = await response.json();
//           // setData(jsonData);
//         }
//       }
  
//       fetchData();
//     }, [id]);
  
//     if (!isLoggedIn) {
//       return <Login />;
//     }
  
//     if (!data) {
//       return <p>Loading...</p>; // Or some loading component
//     }
  
//     return type === 'Event' ? <EventDetail /> : <GetOneArticle />;
//   }
// }

// function Forbidden() {
//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '100vh', /* Set the height of the container to full viewport height */
//     }}>
//       <h1>Forbidden: You don't have permission to use this page</h1>
//     </div>
//   );
// }

// function DataResolver() {
//   const { id } = useParams();
//   const [data, setData] = useState(null);
//   const [isLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true"); // Assuming store login state in localStorage
//   const [type, setType] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(`/articles/getArticle/${id}`);
//         console.log(response, "This is an article");
//         setType("Article");
//         // const jsonData = await response.json();
//         // setData(jsonData);
//       } catch (error) {
//         const response = await axios.get(`/admin/getEvent/${id}`);
//         console.log(response, "This is an event");
//         setType("Event");
//         // const jsonData = await response.json();
//         // setData(jsonData);
//       }
//     }

//     fetchData();
//   }, [id]);

//   if (!isLoggedIn) {
//     return <Login />;
//   }

//   if (!data) {
//     return <p>Loading...</p>; // Or some loading component
//   }

//   return type === 'Event' ? <EventDetail data={data} /> : <GetOneArticle data={data} />;
// }

//export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

import Login from './pages/Login';
import SignUp from './pages/Signup';
import ManageAccount from './pages/ManageAccount';
import CreateEvent from './pages/CreateEvent';
import ManageEvent from './pages/ManageEvent';
import GetArticle from './pages/GetArticle';
import Profile from './pages/Profile';
import GetOneArticle from './pages/GetOneArticle';
import CreateArticle from './pages/Article';
import Comment from './pages/Comment';
import HomePage from './pages/HomePage';
import AllArticle from './pages/AllArticle';
import TokenExpirationChecker from './TokenExpirationChecker';
import Statistics from './pages/Statistics';
import GetEvent from './pages/GetEvent';
import EventDetail from './pages/EventDetail';
import MyArticle from './pages/MyArticle';
import Chatroom from './pages/Chatroom';
import Chat from './pages/Chat';

const socket = io.connect('https://web-enterprise-group2-backend-test.onrender.com');
axios.defaults.baseURL = 'https://web-enterprise-group2-backend-test.onrender.com';

function App() {
  const isLoggedIn = window.localStorage.getItem('loggedIn');
  const role = window.localStorage.getItem('role');

  return (
    <Router>
      <TokenExpirationChecker>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/menu" element={role === 'Coordinator' ? <GetArticle /> : <Forbidden />} />
          <Route path="/events" element={isLoggedIn === 'true' ? <GetEvent /> : <Login />} />
          <Route path="/allArticles" element={isLoggedIn === 'true' ? <AllArticle /> : <Login />} />
          <Route path="/myArticle" element={isLoggedIn === 'true' ? <MyArticle /> : <Login />} />
          <Route path="/profile" element={isLoggedIn === 'true' ? <Profile /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={role === 'Admin' ? <SignUp /> : <Forbidden />} />
          <Route path="/manageaccount" element={role === 'Admin' ? <ManageAccount /> : <Forbidden />} />
          <Route path="/createEvent" element={role === 'Admin' ? <CreateEvent /> : <Forbidden />} />
          <Route path="/manageEvent" element={role === 'Admin' ? <ManageEvent /> : <Forbidden />} />
          <Route path="/statistics" element={role === 'Admin' ? <Statistics /> : <Forbidden />} />
          <Route path="/articleDetail/:id/comment" element={isLoggedIn === 'true' ? <Comment /> : <Login />} />
          <Route path="/createArticle" element={isLoggedIn === 'true' ? <CreateArticle /> : <Login />} />
          <Route path="/chatroom" element={<Chatroom socket={socket} />} />
          <Route path="/message" element={<Chat socket={socket} />} />
          <Route path="/:id" element={<DataResolver />} />
          <Route path="/forbidden" element={<Forbidden />} />
        </Routes>
      </TokenExpirationChecker>
    </Router>
  );

  function DataResolver() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [type, setType] = useState('');

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get(`/articles/getArticles/${id}`);
          setType('Article');
          setData(response.data);
        } catch (error) {
          const response = await axios.get(`/admin/getEvent/${id}`);
          setType('Event');
          setData(response.data);
        }
      }
  
      fetchData();
    }, [id]);
  
    if (!isLoggedIn) {
      return <Login />;
    }
  
    if (!data) {
      return <p>Loading...</p>;
    }
  
    return type === 'Event' ? <EventDetail /> : <GetOneArticle />;
  }
}

function Forbidden() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1>Forbidden: You don't have permission to use this page</h1>
    </div>
  );
}

export default App;
