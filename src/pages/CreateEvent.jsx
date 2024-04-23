/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { Component, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import SidebarAdmin from "./component/SidebarAdmin";

export default function CreateEvent() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [firstDeadline, setFirstDeadline] = useState("");
  const [startDate, setStartDate] = useState("");
  const [secondDeadline, setSecondDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");

  const [dataList, setDataList] = useState([])
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split('T')[0];

  // const currentDate = new Date().toISOString().slice(0, new Date().toISOString().lastIndexOf(":"));
  const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 1);

const formattedDate = currentDate.toISOString().slice(0, new Date().toISOString().lastIndexOf(":"));

  const handleSubmit = (e) => {

    {
      e.preventDefault();

    //   console.log(name, email, password, department);
    //   axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com';
      // axios.defaults.baseURL = 'http://localhost:5000';

axios.post('/admin/createEvent', {
  name,
  description,
  status,
  department,
  startDate,
  firstDeadline
})
  .then((response) => {
    const data = response.data;
    console.log(data, 'userRegister');
    if (data.status === 'ok') {
      setDepartment(null);
      alert('Create Event Successfully');
      window.location.href = "/manageEvent";
    } else {
      alert('Something went wrong');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    }
  };

//fetch data from db, display all data
const getFetchData = async()=>{
    const data = await axios.get("/admin/faculty")
    console.log(data)
    if(data.data.success){
      setDataList(data.data.data)
      // alert(data.data.message)
    }
  }
  
  useEffect(()=>{
    getFetchData()
  }, [])

  return (

    <section className="vh-100 gradient-custom"   style={{ overflowY: 'auto' }}>
      <SidebarAdmin/>
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Create a semester</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="firstName">Name</label>
                        <input type="text" id="firstName" className="form-control form-control-lg" onChange={(e) => setName(e.target.value)}/>
                        
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="firstName">Description</label>
                        <textarea type="text" id="firstName" className="form-control form-control-lg" onChange={(e) => setDescription(e.target.value)}/>
                        
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {/* <div className="col-md-6 mb-4">
                      <h6 className="mb-2 pb-1">Select the status: </h6>
                        <input className="form-check-input" type="radio"
                        name="Status"
                        value="Available"
                        onChange={(e) => setStatus(e.target.value)}/>
                        <label className="form-check-label" htmlFor="femaleGender">&nbsp;Available &nbsp; &nbsp;</label>
                        <input className="form-check-input" type="radio"
                          name="Status"
                          value="Unavailable"
                          onChange={(e) => setStatus(e.target.value)}/>
                        <label className="form-check-label" htmlFor="femaleGender">&nbsp;Unavailable</label>
                        
                    </div> */}
                          {/* <div className="mb-3">
                          <label>Faculty</label>
                          <select
                            className="form-control"
                            onChange={(e) => setDepartment(e.target.value)}
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
                        </div> */}
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="emailAddress">Start Date</label>
                        {/* <input type="email" id="emailAddress" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)}/> */}
                        <input 
                         min={formattedDate}
                           type="datetime-local" id="datetime"  className="form-control form-control-lg" onChange={(e) => setStartDate(e.target.value)} required></input>

                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="emailAddress">First Deadline</label>
                        {/* <input type="email" id="emailAddress" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)}/> */}
                        <input 
                         min={startDate}
                           type="datetime-local" id="datetime"  className="form-control form-control-lg" onChange={(e) => setFirstDeadline(e.target.value)} required></input>

                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <button type="submit" className="btn btn-lg gradient-custom">Submit</button>&nbsp;&nbsp;
                    {/* <a href="/login" className="btn btn-warning btn-lg gradient-custom-2">Login Now</a> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}