import React from 'react'
// import "../App.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const NavbarAdmin = () =>{
  //giup bat tat add section
//setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
const[addSection, setAddSection] = useState(false)
//bat tat update section


const logOut = () => {
    window.localStorage.clear();
    window.location.href = "/login";
  };


return(
    
      <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
        <div class="container-fluid py-1 px-3">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
              <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark">Pages</a></li>
              <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Manage</li>
            </ol>
            <h6 class="font-weight-bolder mb-0">Uni News</h6>
          </nav>
          <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
            <div class="ms-md-auto pe-md-3 d-flex align-items-center">
              <div class="input-group input-group-outline">
                {/* <label class="form-label">Type here...</label>
                <input type="text" class="form-control" /> */}
              </div>
            </div>
            <ul class="navbar-nav  justify-content-end">
              <li class="nav-item d-flex align-items-center">
              <a href="#" className="nav-link text-body font-weight-bold px-0" onClick={logOut}>
                        <i className="fa fa-user me-sm-1"></i>
                        <span className="d-sm-inline d-none">Log out</span>
                        </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
);
}


export default NavbarAdmin