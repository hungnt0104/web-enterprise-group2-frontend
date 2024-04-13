/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { routes } from './routes/index'

import axios from 'axios'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ManageAccount from './pages/ManageAccount';
import CreateEvent from './pages/CreateEvent';

//<<<<<<< HEAD
import ManageEvent from './pages/ManageEvent';
import GetArticle from './pages/GetArticle';
import Profile from './pages/Profile';
import GetOneArticle from './pages/GetOneArticle';
//=======
import CreateArticle from './pages/Article';
import Comment from './pages/Comment';
import TokenExpirationChecker from './TokenExpirationChecker';

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
            path="/articleDetail/:id/comment" 
            element={isLoggedIn == "true" ? <Comment /> : <Login />}
          />
          <Route 
            path="/articles/createArticle" 
            element={<CreateArticle />} 
          />
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