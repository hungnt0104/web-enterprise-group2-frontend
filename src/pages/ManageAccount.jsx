/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
// import React from 'react'
// // import "../App.css"
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios'
// import SidebarAdmin from './component/SidebarAdmin';
// import NavbarAdmin from './component/NavbarAdmin';
// import SubNavbarAdmin from './component/SubNavbarAdmin';
// // import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
// // import '../ProductStyle.css'


// const ManageAccount = () =>{
//   //giup bat tat add section
// //setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
// const[addSection, setAddSection] = useState(false)
// //bat tat update section
// const [editSection, setEditSection] = useState(false)

// //giup lay du lieu trong form
// //setFormData la built-in function trong React
// const[formData, setFormData] = useState({
//   name: "",
//   email: "",
//   password: "",
//   role: ""
// })
// const[formDataEdit, setFormDataEdit] = useState({
//     _id : "",
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//     department: ""
// })
// //giup lay du lieu tu backend
// const [dataList, setDataList] = useState([])

// const handleOnChange = (e)=>{ //e: event triggered. Trong truong hop nay la khi minh update. khi minh gan no vao onChange, React tu hieu e la 1 event
//   const {value, name} = e.target //target la cac input, value va name la value va name cua cac input
//   setFormData((previous)=>{ //previous: previous state trong form
//     return{
//       ...previous,//neu k co previous thi data se k lay dc het ma chi lay dc cai state ngay trc do
//       [name] : value //update value trong form data
//     }
//   })
// }

// //fetch data from db, display all data
// const getFetchData = async()=>{
//   const data = await axios.get("/admin/")
//   console.log(data)
//   if(data.data.success){
//     setDataList(data.data.data)
//   }
// }

// useEffect(()=>{
//   getFetchData()
// }, [])
// //delete
// const handleDelete = async(id)=>{
//   const data = await axios.delete("/admin/deleteAccount/"+id)
//   if (data.data.success)
//   {
    
//     getFetchData()
//     alert(data.data.message)
//     window.location.reload();
//   }
// }
// //update
// const handleUpdate = async(e, id)=>{
//   e.preventDefault()

//   const data = await axios.put("admin/updateAccount/"+id, formDataEdit)
//   if (data.data.success)
//   {
//     getFetchData()
//     alert(data.data.message)
//     setEditSection(false)
//   }
// }

// const handleEditOnChange = async(e)=>{
//   const {value, name} = e.target
//   setFormDataEdit((previous)=>{
//     return{
//       ...previous,
//       [name] : value
//     }
//   })
// }

// const handleEdit = (el) =>{
//   setFormDataEdit(el)
//   setEditSection(true)
// }

// const logOut = () => {
//     window.localStorage.clear();
//     window.location.href = "./login";
//   };




// return(
// <body class="g-sidenav-show bg-gray-200">
//     <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"/>
//     <link href="https://cdn.jsdelivr.net/npm/@icon/themify-icons@1.0.1-alpha.3/themify-icons.min.css" rel="stylesheet"/>
//     <SidebarAdmin/>
//     <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
   
//       <NavbarAdmin/>
//       <div class="container-fluid py-4">
//         <div class="card mb-2">
//           <SubNavbarAdmin/>
        
//           {
//         editSection &&(
//           <div className='addContainer'>
//           <form onSubmit={(e) => handleUpdate(e, formDataEdit._id)} className="container">
//   <button className='close-btn btn btn-outline-danger mt-3' onClick={() => setEditSection(false)}>X</button>

//   <div className="form-group">
    
//     <label htmlFor='name'>Name:</label>
//     <input type="text" className="form-control" id='name' name='name' onChange={handleEditOnChange} value={formDataEdit.name} />
//   </div>

//   <div className="form-group">
//     <label htmlFor='email'>Email:</label>
//     <input type="text" className="form-control" id='email' name='email' onChange={handleEditOnChange} value={formDataEdit.email} readOnly/>
//   </div>

//   <div className="form-group">
//     <label htmlFor='password'>Password:</label>
//     <input type="password" className="form-control" id='password' name='password' onChange={handleEditOnChange} required/>
//   </div>

//   <div className="form-group">
//     <label htmlFor='role'>Choose a role:</label>
//     <select className="form-control" name="role" id="role" onChange={handleEditOnChange}>
//       {/* <option value="Staff" selected>Staff</option> */}
//       <option value="Admin">Admin</option>
//       <option value="Manager">Manager</option>
//       <option value="Coordinator">Coordinator</option>
//       <option value="Student" selected>Student</option>
//     </select>
//   </div>

//   <div className="form-group">
//     <label htmlFor='department'>Choose a department:</label>
//     <select className="form-control" name="department" id="department" onChange={handleEditOnChange}>
//       <option value="">Select an option</option>
//       <option value="IT">IT</option>
//       <option value="Business">Business</option>
//       <option value="Design">Design</option>
//     </select>
//   </div>

//   <button className='btn' >Submit</button>
// </form>
// <br/>

//         </div>
//         )
//       }
//           <div class="row">
            
//             <div class="col-12">
//               <Link to="/Signup">
//          <button className='btn' onClick={()=>setAddSection(true)}>Add Account</button> &nbsp;
//        </Link>
//               <div class="card my-4">
                
//                 <div class="card-body px-0 pb-2 pt-0">
//                   <div class="table-responsive p-0">
//                     <table class="table align-items-center mb-0">
//                       <thead>
//                         <tr>
//                           <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Account</th>
//                           <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ">Role</th>
//                           <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-4">Department</th>
//                           <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {dataList.map((el) => (
//                           <tr key={el._id}>
//                             <td>
//                               <div class="d-flex px-2 py-1">
//                                 <div class="d-flex flex-column justify-content-center">
//                                   <h6 class="mb-0 text-sm">{el.name}</h6>
//                                   <p class="text-xs text-secondary mb-0">{el.email}</p>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <p class="text-xs font-weight-bold mb-0">{el.role}</p>
                              
//                             </td>
//                             <td>
//                             <p class="text-xs font-weight-bold mb-0 pl-3">{el.department}</p>
//                             </td>
//                             <td class="align-middle">
//                               <a href="#" class="text-secondary font-weight-bold text-xs pl-1" data-toggle="tooltip" data-original-title="Edit user"  onClick={() => handleEdit(el)}>
//                                 Edit
//                               </a>
//                               <a href="#"class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" onClick={() => handleDelete(el._id)}>
//                                 | Delete
//                               </a>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <footer class="footer py-4  ">
//           <div class="container-fluid">
//             <div class="row align-items-center justify-content-lg-between">
//               <div class="col-lg-6 mb-lg-0 mb-4">
//                 <div class="copyright text-center text-sm text-muted text-lg-start">
//                   © <script>document.write(new Date().getFullYear())</script>, made with <i class="fa fa-heart"></i> by <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Duy & nhung nguoi ban</a> for a better web.
//                 </div>
//               </div>
//               <div class="col-lg-6">
//                 <ul class="nav nav-footer justify-content-center justify-content-lg-end">
//                   <li class="nav-item">
//                     <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">TAE</a>
//                   </li>
//                   <li class="nav-item">
//                     <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
//                   </li>
//                   <li class="nav-item">
//                     <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
//                   </li>
//                   <li class="nav-item">
//                     <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </main>
//   </body>
// );
// }


// export default ManageAccount




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SidebarAdmin from './component/SidebarAdmin';
import NavbarAdmin from './component/NavbarAdmin';
import SubNavbarAdmin from './component/SubNavbarAdmin';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

const ManageAccount = () => {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const [formDataEdit, setFormDataEdit] = useState({
    _id: "",
    name: "",
    email: "",
    password: "",
    role: "",
    department: "",
  });
  const [dataList, setDataList] = useState([]);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const getFetchData = async () => {
    try {
      const data = await axios.get("/admin/");
      if (data.data.success) {
        setDataList(data.data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log(id)
      const data = await axios.delete("/admin/deleteAccount/"+id);
      console.log(data)
      if (data.data.success) {
        getFetchData();
        alert(data.data.message);
        // setShowModal(false);
        // window.location.reload();
      }
    } catch (error) {
      console.error('Error deleting account:', error);
    }
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      const data = await axios.put("admin/updateAccount/" + id, formDataEdit);
      if (data.data.success) {
        getFetchData();
        alert(data.data.message);
        setEditSection(false);
      }
    } catch (error) {
      console.error('Error updating account:', error);
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
  };

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

  return (
    <body class="g-sidenav-show bg-gray-200">
      <SidebarAdmin />
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <NavbarAdmin />
        <div class="container-fluid py-4">
          <div class="card mb-2">
            <SubNavbarAdmin />
            {editSection && (
              <div className='addContainer'>
                <form onSubmit={(e) => handleUpdate(e, formDataEdit._id)} className="container">
                  <button className='close-btn btn btn-outline-danger mt-3' onClick={() => setEditSection(false)}>X</button>

                  <div className="form-group">
                    <label htmlFor='name'>Name:</label>
                    <input type="text" className="form-control" id='name' name='name' onChange={handleEditOnChange} value={formDataEdit.name} />
                  </div>

                  <div className="form-group">
                    <label htmlFor='email'>Email:</label>
                    <input type="text" className="form-control" id='email' name='email' onChange={handleEditOnChange} value={formDataEdit.email} readOnly />
                  </div>

                  <div className="form-group">
                    <label htmlFor='password'>Password:</label>
                    <input type="password" className="form-control" id='password' name='password' onChange={handleEditOnChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor='role'>Choose a role:</label>
                    <select className="form-control" name="role" id="role" onChange={handleEditOnChange}>
                      <option value="Admin">Admin</option>
                      <option value="Manager">Manager</option>
                      <option value="Coordinator">Coordinator</option>
                      <option value="Student">Student</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor='department'>Choose a department:</label>
                    <select className="form-control" name="department" id="department" onChange={handleEditOnChange}>
                      <option value="">Select an option</option>
                      <option value="IT">IT</option>
                      <option value="Business">Business</option>
                      <option value="Design">Design</option>
                    </select>
                  </div>

                  <button className='btn' >Submit</button>
                </form>
                <br />
              </div>
            )}
            <div class="row">
              <div class="col-12">
                <Link to="/Signup">
                  <button className='btn' onClick={() => setAddSection(true)}>Add Account</button> &nbsp;
                </Link>
                <div class="card my-4">
                  <div class="card-body px-0 pb-2 pt-0">
                    <div class="table-responsive p-0">
                      <table class="table align-items-center mb-0">
                        <thead>
                          <tr>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Account</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ">Role</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-4">Department</th>
                            <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataList.map((el) => (
                            <tr key={el._id}>
                              <td>
                                <div class="d-flex px-2 py-1">
                                  <div class="d-flex flex-column justify-content-center">
                                    <h6 class="mb-0 text-sm">{el.name}</h6>
                                    <p class="text-xs text-secondary mb-0">{el.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <p class="text-xs font-weight-bold mb-0">{el.role}</p>
                              </td>
                              <td>
                                <p class="text-xs font-weight-bold mb-0 pl-3">{el.department}</p>
                              </td>
                              <td class="align-middle">
                                <a href="#" class="text-secondary font-weight-bold text-xs pl-1" data-toggle="tooltip" data-original-title="Edit user" onClick={() => handleEdit(el)}>
                                  Edit
                                </a>
                                <a href="#"class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" onClick={() => handleDelete(el._id)}>
                                | Delete
                              </a>
                              <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                    <Button variant="danger" onClick={() => handleDelete(el._id)}>{el.email}</Button>
                </Modal.Footer>
            </Modal>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="footer py-4  ">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="copyright text-center text-sm text-muted text-lg-start">
                    © <script>document.write(new Date().getFullYear())</script>, made with <i class="fa fa-heart"></i> by <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Duy & nhung nguoi ban</a> for a better web.
                  </div>
                </div>
                <div class="col-lg-6">
                  <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                    <li class="nav-item">
                      <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">TAE</a>
                    </li>
                    <li class="nav-item">
                      <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
                    </li>
                    <li class="nav-item">
                      <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
                    </li>
                    <li class="nav-item">
                      <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </body>
  );
};

export default ManageAccount;
