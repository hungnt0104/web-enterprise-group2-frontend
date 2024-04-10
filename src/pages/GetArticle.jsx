/* eslint-disable no-unused-vars */
/* eslint-disable react/style-prop-object */
// import React from 'react'
// import "../App.css"
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios'
// // import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
// // import '../ProductStyle.css'

// // axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com/admin';
// axios.defaults.baseURL = 'http://localhost:5000/articles'

// const GetArticle = () =>{
//   //giup bat tat add section
// //setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
// const[addSection, setAddSection] = useState(false)
// //bat tat update section
// const [editSection, setEditSection] = useState(false)

// //giup lay du lieu trong form
// //setFormData la built-in function trong React
// const[formData, setFormData] = useState({
//   title: "",
//   content: "",
//   images: ""
// })
// const[formDataEdit, setFormDataEdit] = useState({
//     _id : "",
//     title: "",
//   content: "",
//   images: ""
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
//   const data = await axios.get("/getArticles")
//   console.log(data.statusText)
//   if(data.statusText === 'OK'){
//     setDataList(data.data)
//     // alert(data.data.message)
//   }
// }

// useEffect(()=>{
//   getFetchData()
// }, [])

// //get detail
// // const handleDetail = async(id)=>{
// //     const data = await axios.get("/getArticles/"+id)
// //     console.log(data)
// //     if(data.statusText === 'OK'){
// //       setDataList(data.data)
// //       // alert(data.data.message)
// //     }
// // }

// // //update
// // const handleUpdate = async(e, id)=>{
// //   e.preventDefault()

// //   const data = await axios.put("/updateEvent/"+id, formDataEdit)
// //   if (data.data.success)
// //   {
// //     getFetchData()
// //     alert(data.data.message)
// //     setEditSection(false)
// //   }
// // }

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
// <div className='container'>
//   <br /><br />
//         <div className='text-end'>
//         <button onClick={logOut} className="btn btn-primary text-end">
//           Log Out
//         </button> 
//         </div>
//         &nbsp;

// <section className="ftco-section">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-6 text-center mb-5">
//             <h2 className="heading-section">All Articles</h2>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-md-12">
//             <div className="table-wrap"  style={{ overflowX: 'auto' }}>
//               <table className="table">
//                 <thead className="thead-primary">
//                   <tr>
//                     <th className='category-header'>Title</th>
//                     <th className='category-header'>Content</th>
//                     <th className='category-header'>Images</th>
//                     <th className='category-header'>Selected</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                 {dataList.map((el) => {
//                     return (
//                       <tr key={el._id}>
//                         <td>{el.title}</td>
//                         <td>{el.content}</td>
//                         <td>
//   <img src={`http://localhost:5000/images/${el.images}`}
//     alt="Example" style={{ width: '200px', height: '150px' }}
//   />
// </td>

//                         <td>
//                         <Link to={`/articleDetail/${el._id}`}>
//                           <button className='btn btn-danger' >Detail</button>
//                           </Link>
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

// <br /><br />
// </div>
//  )
// }

// export default GetArticle







import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const GetArticle = () => {
    const [articleList, setArticleList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/articles/getArticles');
            setArticleList(response.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    return (
        <div className="container">
            <h2>All Articles</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Images</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {articleList.map((article, index) => (
                        <tr key={index}>
                            <td>{article.title}</td>
                            <td>{article.content}</td>
                            <td>
                                <img src={`http://localhost:5000/images/${article.images[0]}`} alt={`Image ${index}`} style={{ width: '100px', height: 'auto' }} />
                            </td>
                            <td>
                                <Link to={`/articleDetail/${article._id}`} className="btn btn-primary">View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetArticle;
