import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import { routes } from './routes/index'

import axios from 'axios'
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ManageAccount from './pages/ManageAccount';
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
  // const role = window.localStorage.getItem("role")
  return (
    <Router>
      <Routes>
        {/* <Route
            path="/menu"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          /> */}
        {/* <Route path="/product" element={<Product />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/manageaccount" element={<ManageAccount />} />
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

export default App;