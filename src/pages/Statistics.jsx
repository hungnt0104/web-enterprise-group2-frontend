import React from 'react'
// import "../App.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, BarChart } from 'recharts';
// import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../ProductStyle.css'

// axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com/admin';
axios.defaults.baseURL = 'http://localhost:5000/admin'

const Statistics = () =>{
  //giup bat tat add section
//setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
const[addSection, setAddSection] = useState(false)
//bat tat update section
const [totalArticles, setTotalArticles] = useState("")
const [totalContributors, setContributors] = useState("")
const [totalFaculty, setTotalFaculty] = useState("")
const [totalUsers, setTotalUsers] = useState("")


//giup lay du lieu tu backend
const [dataList, setDataList] = useState([])

useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('http://localhost:5000/articles/getStatistics');
        const { totalArticles, totalContributors, totalFaculties, totalUsers } = response.data;
        // console.log(totalArticles)
        setTotalArticles(totalArticles);
        setContributors(totalContributors);
        setTotalFaculty(totalFaculties);
        setTotalUsers(totalUsers);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);



//fetch data from db, display all data
// const getFetchData = async()=>{
//   const data = await axios.get("http://localhost:5000/articles/getStatistics")
//   console.log(data)
//   if(data.statusText === 'OK'){
//     setDataList(data.data)
//     // alert(data.data.message)
//   }
// }

// useEffect(()=>{
//   getFetchData()
// }, [])


const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };


const data = [
  {      name: 'Jan',      accounts: 40,      articles: 24,      amt: 24,    },
  {
    name: 'Feb',
    accounts: 30,
    articles: 13,
    amt: 22,
  },
  {
    name: 'Mar',
    accounts: 20,
    articles: 98,
    amt: 22,
  },
  {
    name: 'Apr',
    accounts: 27,
    articles: 39,
    amt: 20,
  },
  {
    name: 'May',
    accounts: 18,
    articles: 48,
    amt: 21,
  },
  {
    name: 'Jun',
    accounts: 23,
    articles: 38,
    amt: 25,
  },
  {
    name: 'Jul',
    accounts: 34,
    articles: 43,
    amt: 21,
  },
];

const data1 = [
  {
    name: 'IT',
    uv: 4000,
    Contribution: 2400,
    amt: 2400,
  },
  {
    name: 'BUSINESS',
    uv: 3000,
    Contribution: 1398,
    amt: 2210,
  },
  {
    name: 'DESIGN',
    uv: 2000,
    Contribution: 9800,
    amt: 2290,
  },
];


return(
<body class="g-sidenav-show bg-gray-200">
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"/>
    <link href="https://cdn.jsdelivr.net/npm/@icon/themify-icons@1.0.1-alpha.3/themify-icons.min.css" rel="stylesheet"/>

    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-gradient-dark" id="sidenav-main">
      <div class="sidenav-header">
        <a class="navbar-brand m-0" href="https://demos.creative-tim.com/material-dashboard/pages/dashboard" target="_blank">
         
          <span class="ms-1 font-weight-bold text-white pl-40 fs-24">Uni Magazine</span>
        </a>
      </div>
      <hr class="horizontal light mt-0 mb-2" />
      <div class="collapse navbar-collapse w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white " href="../pages/dashboard.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ti ti-harddrives opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Manage Account</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="../pages/tables.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ti ti-write opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Manage Articles</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="../pages/tables.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ti ti-agenda opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Manage Event</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="../pages/billing.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ti ti-comment-alt opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Chat bot</span>
            </a>
          </li>
          <li class="nav-item mt-3">
            <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages</h6>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="../pages/profile.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ti ti-user opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Profile</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="../pages/sign-up.html">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="ti ti-plus opacity-10"></i>
              </div>
              <span class="nav-link-text ms-1">Add</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
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
                <label class="form-label">Type here...</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <ul class="navbar-nav  justify-content-end">
              <li class="nav-item d-flex align-items-center">
                <a href="../pages/sign-in.html" class="nav-link text-body font-weight-bold px-0">
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
              <div class="card-header p-3 pt-2">
                <div class="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                  <i class="ti ti-book opacity-10"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Total Articles</p>
                  <h4 class="mb-0">{totalArticles}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-header p-3 pt-2">
                <div class="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                  <i class="ti ti-user opacity-10"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Total Contributors</p>
                  <h4 class="mb-0">{totalContributors}</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-header p-3 pt-2">
                <div class="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                  <i class="ti ti-menu opacity-10"></i>
                </div>
                <div class="text-end pt-1">
                  <p class="text-sm mb-0 text-capitalize">Total Faculties</p>
                  <h4 class="mb-0">{totalFaculty}</h4>
                </div>
              </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="card mb-40">
          <div class="card-header p-3 pt-2">
            <div class="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
              <i class="ti ti-stamp opacity-10"></i>
            </div>
            <div class="text-end pt-1">
              <p class="text-sm mb-0 text-capitalize">Total Accounts</p>
              <h4 class="mb-0">{totalUsers}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
          <div class="row">
          <div className="chart-container">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="articles" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="accounts" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="chart-container">
            <ResponsiveContainer width="100%"  >
              <BarChart
                width={300}
                height={300}
                data={data1}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
                barCategoryGap={5}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="Contribution" fill="#8884d8"  />
              </BarChart>
            </ResponsiveContainer>
            </div>
          {/* <div className="chart-container"> */}
    {/* <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="articles" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="accounts" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer> */}
  {/* </div> */}
            {/* <div class="col-12">
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
                              <a href="#" class="text-secondary font-weight-bold text-xs pl-1" data-toggle="tooltip" data-original-title="Edit user">
                                Edit
                              </a>
                              <a href="#"class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
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
            </div> */}
          </div>
        </div>
      </div>
    </main>
  </body>
);
}


export default Statistics