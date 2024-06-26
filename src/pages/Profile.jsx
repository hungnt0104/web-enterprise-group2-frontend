

// import React, { Component, useState } from "react";
// import axios from 'axios';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function Profile() {
//     const [userData, setUserData] = useState(null);
//     const id = window.localStorage.getItem('userId');
//     const role =  window.localStorage.getItem('role');
//     const email = window.localStorage.getItem('email');
//     const name =  window.localStorage.getItem('name');

//     const logOut = () => {
//         window.localStorage.clear();
//         window.location.href = "/login";
//       };

//   return (
// <div class="container mt-5">
    
//     <div class="row d-flex justify-content-center">
        
//         <div class="col-md-7">
            
//             <div class="card p-3 py-4">
                
//                 <div class="text-center">
//                     <img src="https://www.svgrepo.com/show/452030/avatar-default.svg" width="100" class="rounded-circle"/>
//                 </div>
                
//                 <div class="text-center mt-3">
//                     <span class="bg-secondary p-1 px-4 rounded text-white">{role}</span>
//                     <h5 class="mt-2 mb-0">{name}</h5>
//                     <span>{email}</span>
//                     <div class="buttons">
                        
//                         <button onClick={logOut} class="btn px-4">Logout</button>
//                         <Link to="/">
//                         <button class="btn px-4 ms-3">Home</button>
//                         </Link>
//                     </div>
                    
                    
//                 </div>
                
               
                
                
//             </div>
            
//         </div>
        
//     </div>
    
// </div>
//   );
// }


import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const id = window.localStorage.getItem('userId');
    const role =  window.localStorage.getItem('role');
    const email = window.localStorage.getItem('email');
    const name =  window.localStorage.getItem('name');

    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "/login";
    };

  return (
    <div>
    <Header/>
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
                        
                        <button onClick={logOut} class="btn px-4">Logout</button>
                        <Link to="/">
                        <button class="btn px-4 ms-3">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
</div>

</div>
  );
}
