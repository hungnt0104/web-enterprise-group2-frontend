














import React, { Component, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const id = window.localStorage.getItem('userId');
    const role =  window.localStorage.getItem('role');
    const email = window.localStorage.getItem('email');
    const name =  window.localStorage.getItem('name');

  return (
<div class="container mt-5">
    
    <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                <div class="text-center">
                    <img src="https://www.svgrepo.com/show/452030/avatar-default.svg" width="100" class="rounded-circle"/>
                </div>
                
                <div class="text-center mt-3">
                    <span class="bg-secondary p-1 px-4 rounded text-white">{role}</span>
                    <h5 class="mt-2 mb-0">{name}</h5>
                    <span>{email}</span>
                    <div class="buttons">
                        
                        <button class="btn btn-outline-primary px-4">Logout</button>
                        <Link to="/menu">
                        <button class="btn btn-primary px-4 ms-3">Menu</button>
                        </Link>
                    </div>
                    
                    
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
    
</div>
  );
}
