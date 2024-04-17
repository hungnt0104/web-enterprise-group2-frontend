/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
import React, { Component, useState } from "react";
import axios from 'axios';
// import '../assets/css/signup.css';

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const handleSubmit = (e) => {
    // if (userType == "Admin" && secretKey != "group2") {
    //   e.preventDefault();
    //   alert("Invalid Admin");
    // } 
    // else 
    {
      e.preventDefault();

      console.log(name, email, password, department);
    //   axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com';
      axios.defaults.baseURL = 'http://localhost:5000';

axios.post('/admin/createAccount', {
  name,
  email,
  password,
  role,
  department
})
  .then((response) => {
    const data = response.data;
    console.log(data, 'userRegister');
    if (data.status === 'ok') {
      setDepartment(null);
      alert('Registration Successful');
    } else {
      alert('Something went wrong');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    }
  };

  return (

    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Create an account</h3>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="firstName">Name</label>
                        <input type="text" id="firstName" className="form-control form-control-lg" onChange={(e) => setName(e.target.value)}/>
                        
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  <div class="col-md-6 mb-4">
  <h6 class="mb-2 pb-1">Select the role: </h6>
  <div class="role-container">
    <div class="role-row">
      <input class="form-check-input" type="radio" name="Role" value="Admin" onChange={(e) => setRole(e.target.value)}/>
      <label class="form-check-label role-label" htmlFor="femaleGender">Admin</label>
    </div>
    <div class="role-row">
      <input class="form-check-input" type="radio" name="Role" value="Staff" onChange={(e) => setRole(e.target.value)}/>
      <label class="form-check-label role-label" htmlFor="femaleGender">Staff</label>
    </div>
    <div class="role-row">
      <input class="form-check-input" type="radio" name="Role" value="QAM" onChange={(e) => setRole(e.target.value)}/>
      <label class="form-check-label role-label" htmlFor="femaleGender">QAM</label>
    </div>
    <div class="role-row">
      <input class="form-check-input" type="radio" name="Role" value="QAC" onChange={(e) => setRole(e.target.value)}/>
      <label class="form-check-label role-label" htmlFor="femaleGender">QAC</label>
    </div>
  </div>
</div>
                      {role === "Staff" || role === "QAC"? (
                          <div className="mb-3">
                          <label>Department</label>
                          <select
                            className="form-control"
                            onChange={(e) => setDepartment(e.target.value)}
                          >
                            <option value="">Select Department</option>
                            <option value="IT">IT</option>
                            <option value="Business">Business</option>
                            <option value="Design">Design</option>
                          </select>
                        </div>
                        ) : 
                        (
                          <option value="null">No Department</option>
                        )
                        }
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="emailAddress">Email</label>
                        <input type="email" id="emailAddress" className="form-control form-control-lg" onChange={(e) => setEmail(e.target.value)}/>
                        
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <label className="form-label" htmlFor="phoneNumber">Password</label>
                        <input type="password" className="form-control form-control-lg" onChange={(e) => setPassword(e.target.value)}/>
                        
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-2">
                    <button type="submit" className="btn btn-primary btn-lg gradient-custom">Submit</button>&nbsp;&nbsp;
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