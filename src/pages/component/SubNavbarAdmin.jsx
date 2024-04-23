import React from 'react'
// import "../App.css"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'

const SubNavbarAdmin = () =>{
  //giup bat tat add section
//setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
const[addSection, setAddSection] = useState(false)
//bat tat update section
const [totalArticles, setTotalArticles] = useState("")
const [totalContributors, setContributors] = useState("")
const [totalFaculty, setTotalFaculty] = useState("")
const [totalUsers, setTotalUsers] = useState("")


useEffect(() => {
    const fetchStatistics = async () => {
      try {

        const response = await axios.get('/articles/getStatistics');
        const { totalArticles, totalContributors, totalFaculties, totalUsers, departmentCounts, articlesByMonth } = response.data;

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



return(
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
);
}


export default SubNavbarAdmin