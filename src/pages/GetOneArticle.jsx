import React from 'react'
import "../App.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../ProductStyle.css'

// axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com/admin';
axios.defaults.baseURL = 'http://localhost:5000/articles'

const GetOneArticle = () =>{
  //giup bat tat add section
//setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
const[addSection, setAddSection] = useState(false)
//bat tat update section
const [editSection, setEditSection] = useState(false)

//giup lay du lieu trong form
//setFormData la built-in function trong React
const[formData, setFormData] = useState({
  title: "",
  content: "",
  images: ""
})
const[formDataEdit, setFormDataEdit] = useState({
    _id : "",
    title: "",
  content: "",
  images: ""
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

const { id } = useParams();
console.log(id)
const [article, setArticle] = useState(false);

//   useEffect(() => {
//     // Fetch article details from backend using the article ID
//     axios.get(`http://localhost:5000/articles/getArticles/${id}`)
//       .then(response => {
//         console.log(response.data)
//         setArticle(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching article details:', error);
//       });
//   }, [id]);

//fetch data from db, display all data
// const id  = useParams();
const getFetchData = async(id)=>{
  const data = await axios.get("/getArticles/"+id)
//   console.log(id)
//   console.log(data)
  if(data.statusText === 'OK'){
    setArticle(data.data)
    // alert(data.data.message)
  }
}

useEffect(()=>{
  getFetchData(id)
}, [])

// //delete
// const handleDelete = async(id)=>{
//   const data = await axios.delete("/deleteEvent/"+id)
// //   console.log(data)
//   if (data.statusText === 'OK')
//   {
//     getFetchData()
//     alert('Delete Event Successfully')
//   }
// }

// //update
// const handleUpdate = async(e, id)=>{
//   e.preventDefault()

//   const data = await axios.put("/updateEvent/"+id, formDataEdit)
//   if (data.data.success)
//   {
//     getFetchData()
//     alert(data.data.message)
//     setEditSection(false)
//   }
// }

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
        <div className='text-end'>
        <button onClick={logOut} className="btn btn-primary text-end">
          Log Out
        </button> 
        </div>
        &nbsp;

<section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Article Detail</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="table-wrap"  style={{ overflowX: 'auto' }}>
              <table className="table">
                <thead className="thead-primary">
                  <tr>
                    <th className='category-header'>Title</th>
                    <th className='category-header'>Content</th>
                    <th className='category-header'>Images</th>
                  </tr>
                </thead>
                <tbody>
                      <tr key={article._id}>
                        <td>{article.title}</td>
                        <td>{article.content}</td>
                        <td><img src={`http://localhost:5000/images/${article.images}`} alt="Example" /></td>
                      </tr>
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

export default GetOneArticle