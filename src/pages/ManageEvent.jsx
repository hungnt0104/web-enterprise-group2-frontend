import React from 'react'
// import "../App.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
// import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../ProductStyle.css'

// axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com/admin';
axios.defaults.baseURL = 'http://localhost:5000/admin'

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
  firstDeadline: ""
})
const[formDataEdit, setFormDataEdit] = useState({
    _id : "",
    name: "",
  description: "",
  status: "",
  department: "",
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
  const data = await axios.get("http://localhost:5000/admin/events")
  console.log(data.statusText)
  if(data.statusText === 'OK'){
    setDataList(data.data)
    // alert(data.data.message)
  }
}

useEffect(()=>{
  getFetchData()
}, [])

//delete
const handleDelete = async(id)=>{
  const data = await axios.delete("http://localhost:5000/admin/deleteEvent/"+id)
//   console.log(data)
  if (data.statusText === 'OK')
  {
    getFetchData()
    alert('Delete Event Successfully')
  }
}

//update
const handleUpdate = async(e, id)=>{
  e.preventDefault()

  const data = await axios.put("http://localhost:5000/admin/updateEvent/"+id, formDataEdit)
  if (data.data.success)
  {
    getFetchData()
    alert(data.data.message)
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
<div className='container'>
  <br /><br />
  <Link to="/createEvent">
        <button className='btn btn-success' onClick={()=>setAddSection(true)}>Add</button> &nbsp;
        </Link>
        <div className='text-end'>
        <button onClick={logOut} className="btn btn-primary text-end">
          Log Out
        </button> 
        </div>
        &nbsp;
        
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
    <input type="text" className="form-control" id='name' name='name' onChange={handleEditOnChange} value={formDataEdit.name} />
  </div>

  <div className="form-group">
    <label htmlFor='email'>Description:</label>
    <input type="text" className="form-control" id='description' name='description' onChange={handleEditOnChange} value={formDataEdit.description}/>
  </div>

  <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Select the status: </h6>
                        <input className="form-check-input" type="radio"
                        name="Status"
                        value="Available"
                        onChange={handleEditOnChange}/>
                        <label className="form-check-label" htmlFor="femaleGender">&nbsp;Available &nbsp; &nbsp;</label>
                        <input className="form-check-input" type="radio"
                          name="Status"
                          value="Unavailable"
                          onChange={handleEditOnChange}/>
                        <label className="form-check-label" htmlFor="femaleGender">&nbsp;Unavailable</label>
                        
                    </div>

  {/* <div className="form-group">
    <label htmlFor='department'>Choose a department:</label>
    <select className="form-control" name="department" id="department" onChange={handleEditOnChange}>
      <option value="">Select an option</option>
      <option value="IT">IT</option>
      <option value="Business">Business</option>
      <option value="Design">Design</option>
    </select>
  </div> */}
  <div className="mb-3">
                          <label>Faculty</label>
                          <select
                            className="form-control"
                            onChange={handleEditOnChange}
                          >
                            <option value="All">All Faculties</option>
                            {dataList.map((el) => {
                                return (
                                    <option key={el._id} value={el.name}>
                                    {el.name}
                                  </option>
                                );
                            })}
                          </select>
                        </div>

                        <div className="form-group">
    <label htmlFor='email'>Description:</label>
    <input type="datetime-local" id="datetime" className="form-control form-control-lg" onChange={handleEditOnChange}></input>
  </div>

  <button className='btn btn-primary' >Submit</button>
</form>

        </div>
        )
      }

<section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Event Management</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap"  style={{ overflowX: 'auto' }}>
              <table className="table">
                <thead className="thead-primary">
                  <tr>
                    <th className='category-header'>Name</th>
                    <th className='category-header'>Status</th>
                    <th className='category-header'>Department</th>
                    <th className='category-header'>First Deadline</th>
                    <th className='category-header'>Final Deadline</th>
                    <th className='category-header'>Action</th>
                  </tr>
                </thead>
                <tbody>
                {dataList.map((el) => {
                    return (
                      <tr key={el._id}>
                        <td>{el.name}</td>
                        <td>{el.status}</td>
                        {/* <td>{el.password}</td> */}
                        <td>{el.department}</td>
                        <td>{el.closureDates.firstDeadline}</td>
                        <td>{el.closureDates.finalClosureDate}</td>
                        <td>
                          <button className='btn btn-primary gradient-custom gradient-custom-2 edit-button' onClick={() => handleEdit(el)}>Edit</button>
                          <button className='btn btn-danger' onClick={() => handleDelete(el._id)}>Delete</button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

<br /><br />
</div>
 )
}

export default ManageEvent