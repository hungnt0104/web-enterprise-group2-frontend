import React from 'react'
// import "../App.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import SidebarAdmin from './component/SidebarAdmin';
// import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../ProductStyle.css'

// axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com/admin';
// axios.defaults.baseURL = 'http://localhost:5000/admin'

const ManageEvent = () =>{
  //giup bat tat add section
//setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
const[addSection, setAddSection] = useState(false)
//bat tat update section
const [editSection, setEditSection] = useState(false)

//giup lay du lieu trong form
//setFormData la built-in function trong React
const[formData, setFormData] = useState({
  name: "",
  description: "",
  status: "",
  department: "",
  startDate: "",
  firstDeadline: ""
})
const[formDataEdit, setFormDataEdit] = useState({
    _id : "",
    name: "",
  description: "",
  status: "",
  department: "",
  startDate: "",
  firstDeadline: ""
})

//giup lay du lieu tu backend
const [dataList, setDataList] = useState([])

const handleOnChange = (e)=>{ //e: event triggered. Trong truong hop nay la khi minh update. khi minh gan no vao onChange, React tu hieu e la 1 event
  const {value, name} = e.target //target la cac input, value va name la value va name cua cac input
  setFormData((previous)=>{ //previous: previous state trong form
    return{
      ...previous,//neu k co previous thi data se k lay dc het ma chi lay dc cai state ngay trc do
      [name] : value //update value trong form data
    }
  })
}

//fetch data from db, display all data
const getFetchData = async()=>{
  const data = await axios.get("/admin/events")
  // console.log(data)
  if(data.status === 200){
    setDataList(data.data)
    // alert(data.data.message)
  }
}

useEffect(()=>{
  getFetchData()
}, [])

//delete
const handleDelete = async(id)=>{
  const data = await axios.delete("/admin/deleteEvent/"+id)
//   console.log(data)
  if (data.status === 200)
  {
    getFetchData()
    alert('Delete Event Successfully')
  }
}

//update
const handleUpdate = async(e, id)=>{
  e.preventDefault()

  const data = await axios.put("/admin/updateEvent/"+id, formDataEdit)
  // console.log(data)
  if (data.status == 200)
  {
    getFetchData()
    alert("Updated successfully")
    setEditSection(false)
  }
}

const handleEditOnChange = async(e)=>{
  const {value, name} = e.target
  setFormDataEdit((previous)=>{
    return{
      ...previous,
      [name] : value
    }
  })
}

const handleEdit = (el) =>{
  setFormDataEdit(el)
  setEditSection(true)
}

const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };



return(
  <body class="g-sidenav-show bg-gray-200">
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"/>
        <link href="https://cdn.jsdelivr.net/npm/@icon/themify-icons@1.0.1-alpha.3/themify-icons.min.css" rel="stylesheet"/>
  
        <SidebarAdmin/>
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
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
                    <a href="#" class="nav-link text-body font-weight-bold px-0"  onClick={logOut}>
                      <i class="fa fa-user me-sm-1"></i>
                      <span class="d-sm-inline d-none">Log out</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="container-fluid py-4">
            <div class="card mb-2">
              <div class="row">
              <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card">
                  {/* <div class="card-header p-3 pt-2">
                    <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                      <i class="ti ti-book opacity-10"></i>
                    </div>
                    <div class="text-end pt-1">
                      <p class="text-sm mb-0 text-capitalize">Total Articles</p>
                      <h4 class="mb-0">169</h4>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>  
            {
        addSection && ( //neu addSection la true thi moi hien thi form
        <div className='addContainer'>
          <div className='addContainer'>

</div>
        </div>
        )
      }
      {
        editSection &&(
          <div className='addContainer'>
          <form onSubmit={(e) => handleUpdate(e, formDataEdit._id)} className="container">
  <button className='close-btn btn btn-outline-danger mt-3' onClick={() => setEditSection(false)}>X</button>

  <div className="form-group">
    
    <label htmlFor='name'>Name:</label>
    <input type="text" className="form-control" id='name' name='name' onChange={handleEditOnChange} value={formDataEdit.name} required/>
  </div>

  <div className="form-group">
    <label htmlFor='email'>Description:</label>
    <input type="text" className="form-control" id='description' name='description' onChange={handleEditOnChange} value={formDataEdit.description} />
  </div>

  <div className="row">
                    <div className="col-md-12 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="emailAddress">Start Date</label>
                        {/* <input type="email" id="emailAddress" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)}/> */}
                        <input 
                            name = "startDate"
                           type="datetime-local" id="datetime"  className="form-control form-control-lg" onChange={handleEditOnChange} value={formDataEdit.startDate} required/>

                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="emailAddress">First Deadline</label>
                        {/* <input type="email" id="emailAddress" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)}/> */}
                        <input 
                        name = "firstDeadline"
                           type="datetime-local" id="datetime"  className="form-control form-control-lg" onChange={handleEditOnChange} value={formDataEdit.firstDeadline} required/>

                      </div>
                    </div>
                  </div>



  <button className='btn btn-primary' >Submit</button>
</form>

        </div>
        )
      }
              <div class="row">
                <div class="col-12">
                <Link to="/createEvent">
         <button className='btn' >Add Semester</button> &nbsp;
       </Link>
                  <div class="card my-4">            
                    <div class="card-body px-0 pb-2 pt-0">
                      <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0">
                          <thead>
                            <tr>
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-5">Name</th>
                              {/* <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-3">Status</th> */}
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-5">Start Date</th>
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-5">First Deadline</th>
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-5">Final Deadline</th>
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dataList.map((el) => (
                              <tr key={el._id}>
                                <td>
                                  <div class="d-flex px-2 py-1">
                                    <div class="d-flex flex-column justify-content-center">
                                      <h6 class="mb-0 text-sm">{el.name}</h6>
                                    </div>
                                  </div>
                                </td>
                                {/* <td>
                                  <p class="text-xs font-weight-bold mb-0">{el.status}</p>
                                  
                                </td> */}
                                <td>
                                <p class="text-xs font-weight-bold mb-0 pl-4">{el.startDate}</p>
                                </td>
                                <td><p class="text-xs font-weight-bold mb-0 ">{el.closureDates.firstDeadline}</p></td>
                                <td><p class="text-xs font-weight-bold mb-0 ">{el.closureDates.finalClosureDate}</p></td>
                                <td class="align-middle">
                                 <a href={el._id} class="text-secondary font-weight-bold text-xs pl-3" data-toggle="tooltip" data-original-title="Edit user"  onClick={() => handleEdit(el)}>
                                    Detail
                                  </a>
                                  <a href="#" class="text-secondary font-weight-bold text-xs pl-3" data-toggle="tooltip" data-original-title="Edit user"  onClick={() => handleEdit(el)}>
                                    | Edit
                                  </a>
                                  <a href="#"class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user" onClick={() => handleDelete(el._id)}>
                                    | Delete
                                  </a>
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
                      © <script>document.write(new Date().getFullYear())</script>, made with <i class="fa fa-heart"></i> by Duy & nhung nguoi ban for a better web.
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                      <li class="nav-item">
                        <a href="" class="nav-link text-muted" target="_blank">TAE</a>
                      </li>
                      <li class="nav-item">
                        <a href="" class="nav-link text-muted" target="_blank">About Us</a>
                      </li>
                      <li class="nav-item">
                        <a href="" class="nav-link text-muted" target="_blank">Blog</a>
                      </li>
                      <li class="nav-item">
                        <a href="" class="nav-link pe-0 text-muted" target="_blank">License</a>
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
  }
  
  export default ManageEvent