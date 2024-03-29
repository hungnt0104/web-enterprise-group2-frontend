import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { routes } from './routes/index'

import axios from 'axios'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ManageAccount from './pages/ManageAccount';
import CreateEvent from './pages/CreateEvent';
// import UserDetails from './components/userDetails';
// import Product from './components/Product';
// import Cart from './components/Cart';
// import Payment from './components/Payment';
// import AllPayment from './components/AllPayment'
// import Index from './components/Index'

// axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com/admin';
axios.defaults.baseURL = 'http://localhost:5000/admin'

function App() {
  // const isLoggedIn = window.localStorage.getItem("loggedIn")
  const role = window.localStorage.getItem("role")
  return (
    <Router>
      <Routes>
        {/* <Route
            path="/menu"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          /> */}
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route 
        path="/signup" 
        element={role === "admin" ? <SignUp /> : <Navigate to="/forbidden" />} 
      />
        <Route 
        path="/manageaccount" 
        element={role === "admin" ? <ManageAccount /> : <Navigate to="/forbidden" />} 
      />
        <Route 
        path="/createEvent" 
        element={role === "admin" ? <CreateEvent /> : <Navigate to="/forbidden" />} 
      />
      {/* Define a Forbidden component for unauthorized access */}
      <Route path="/forbidden" element={<Forbidden />} />
        {/* <Route path="/menu" element={<UserDetails />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}

        {/* <Route 
            path="/payment" 
            element={role == "Admin" ? <AllPayment /> : <Payment/>} />

        <Route path="/allPayment" element={<AllPayment />} />
        <Route path="/" element={<Index />} /> */}
      </Routes>
    </Router>
  );
}

function Forbidden() {
  return <h1>Forbidden: You have to be admin to use this function.</h1>;
}

export default App;