// import React from 'react'
// // import "../App.css"
// import { useState } from 'react';

// // import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
// // import '../ProductStyle.css'

// // axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com/admin';

// const SidebarAdmin = () =>{
//   //giup bat tat add section
// //setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
// const[addSection, setAddSection] = useState(false)


// return(
//     <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
//       <div class="sidenav-header">
//         <a class="navbar-brand m-0" href="#" target="_blank">
         
//           <span class="ms-1 font-weight-bold text-white pl-40 fs-24">Uni Magazine</span>
//         </a>
//       </div>
//       <hr class="horizontal light mt-0 mb-2" />
//       <div class="collapse navbar-collapse w-auto " id="sidenav-collapse-main">
//         <ul class="navbar-nav">
//           <li class="nav-item">
//             <a class="nav-link text-white " href="/manageAccount">
//               <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
//                 <i class="ti ti-harddrives opacity-10"></i>
//               </div>
//               <span class="nav-link-text ms-1">Manage Account</span>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-white " href="/statistics">
//               <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
//                 <i class="ti ti-write opacity-10"></i>
//               </div>
//               <span class="nav-link-text ms-1">Statistics</span>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-white " href="./manageEvent">
//               <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
//                 <i class="ti ti-agenda opacity-10"></i>
//               </div>
//               <span class="nav-link-text ms-1">Manage Semester</span>
//             </a>
//           </li>
//           <li class="nav-item mt-3">
//             <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-white " href="/profile">
//               <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
//                 <i class="ti ti-user opacity-10"></i>
//               </div>
//               <span class="nav-link-text ms-1">Profile</span>
//             </a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link text-white " href="./signup">
//               <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
//                 <i class="ti ti-plus opacity-10"></i>
//               </div>
//               <span class="nav-link-text ms-1">Add</span>
//             </a>
//           </li>
//         </ul>
//       </div>
//     </aside>
// );
// }


// export default SidebarAdmin




import React from 'react';

const SidebarAdmin = () => {
    return (
        <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
            <div className="sidenav-header">
                <a className="navbar-brand m-0" href="#" target="_blank">
                    <span className="ms-1 font-weight-bold text-white pl-40 fs-24">Uni Magazine</span>
                </a>
            </div>
            <hr className="horizontal light mt-0 mb-2" />
            <div className="collapse navbar-collapse w-auto" id="sidenav-collapse-main">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/manageAccount">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-harddrives opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Manage Account</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/statistics">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-write opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Statistics</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="./manageEvent">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-agenda opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Manage Semester</span>
                        </a>
                    </li>
                    <li className="nav-item mt-3">
                        <h6 className="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/profile">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-user opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Profile</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="./signup">
                            <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                <i className="ti ti-plus opacity-10"></i>
                            </div>
                            <span className="nav-link-text ms-1">Add</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SidebarAdmin;
