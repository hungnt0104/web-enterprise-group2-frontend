/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// import React from 'react'
// import "../App.css"
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';



// axios.defaults.baseURL = 'http://localhost:5000/articles'

// const GetOneArticle = () =>{
//   //giup bat tat add section
// //setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
// const[addSection, setAddSection] = useState(false)
// //bat tat update section
// const [editSection, setEditSection] = useState(false)
// const [error, setError] = useState(null);
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

// const { id } = useParams();
// console.log(id)
// const [article, setArticle] = useState(false);


// //fetch data from db, display all data
// // const id  = useParams();
// const getFetchData = async(id)=>{
//   const data = await axios.get("/getArticles/"+id)
//   if(data.statusText === 'OK'){
//     setArticle(data.data)
//   }
// }

// useEffect(()=>{
//   getFetchData(id)
// }, [])

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


// // Dowload ZIP

// const handleDownloadAsZip = async () => {
//   try {
//     // Create a new JSZip instance
//     const zip = new JSZip();

//     // Fetch article data from your backend API
//     const response = await axios.get(`/getArticles/${id}`);
//     const articleData = response.data;

//     // Fetch PDF file data from your backend API
//     const pdfUrl = `http://localhost:5000/pdfs/${articleData.pdfs}`;
//     const pdfResponse = await axios.get(pdfUrl, {
//       responseType: 'arraybuffer' // Ensure binary response
//     });

//     // Add the PDF file to the zip
//     zip.file(`${articleData.title}.pdf`, pdfResponse.data);

//     // Add other article fields to the zip
//     zip.file('name.txt', articleData.name);
//     zip.file('content.txt', articleData.content);

//     // Fetch image data and add them to the zip
//     const imageUrl = `http://localhost:5000/images/${articleData.images}`;
//     const imageResponse = await axios.get(imageUrl, {
//       responseType: 'arraybuffer' // Ensure binary response
//     });

//     if (imageResponse.status !== 200) {
//       setError('Error fetching article images.'); // Set error message
//       return;
//     }

//     zip.file(`${articleData.images}`, imageResponse.data);

//     // Generate the zip file
//     const zipBlob = await zip.generateAsync({ type: 'blob' });

//     // Save the zip file
//     saveAs(zipBlob, `${articleData.title}.zip`);
//   } catch (error) {
//     console.error('Error downloading article as zip:', error);
//     setError('Error downloading article as zip. Please try again later.'); // Set error message
//   }
// };











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
//             <h2 className="heading-section">Article Detail</h2>
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
//                     <th className='category-header'>Files</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                       <tr key={article._id}>
//                         <td>{article.title}</td>
//                         <td>{article.content}</td>
//                         <td><img src={`http://localhost:5000/images/${article.images}`} alt="Example" style={{ width: '500px', height: '350px' }} /></td>
//                         <td><a href={`http://localhost:5000/pdfs/${article.pdfs}`} target="_blank" rel="noopener noreferrer">Open PDF</a></td>
//                       </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     {error && <div className="alert alert-danger" role="alert">{error}</div>}
//       <div className="row justify-content-center">
        
     
//         <button onClick={handleDownloadAsZip} className="btn btn-secondary">Download as Zip</button>

//       </div>
// <br /><br />
// </div>
//  )
// }

// export default GetOneArticle


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

axios.defaults.baseURL = 'http://localhost:5000/articles';

const GetOneArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(id);
    }, [id]);

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`/getArticles/${id}`);
            setArticle(response.data);
        } catch (error) {
            console.error('Error fetching article:', error);
            setError('Error fetching article. Please try again later.');
        }
    };

    const handleDownloadAsZip = async () => {
        try {
            const zip = new JSZip();
            const promises = [];

            // Add images to zip
            article.images.forEach((image, index) => {
                const imageUrl = `http://localhost:5000/images/${image}`;
                promises.push(
                    axios.get(imageUrl, { responseType: 'blob' })
                        .then(response => {
                            zip.file(`image_${index + 1}.jpg`, response.data);
                        })
                );
            });

            // Add PDFs to zip
            article.pdfs.forEach((pdf, index) => {
                zip.file(`pdf_${index + 1}.pdf`, pdf);
            });

            // Add docs to zip
            article.docs.forEach((doc, index) => {
                zip.file(`doc_${index + 1}.doc`, doc);
            });

            await Promise.all(promises);

            // Generate zip file
            const zipBlob = await zip.generateAsync({ type: 'blob' });

            // Save zip file
            saveAs(zipBlob, `${article.title}_files.zip`);
        } catch (error) {
            console.error('Error downloading files as zip:', error);
            setError('Error downloading files as zip. Please try again later.');
        }
    };

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
        <div className='container'>
            <br /><br />
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Article Detail</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h4>Title: {article.title}</h4>
                                <p>Content: {article.content}</p>
                            </div>
                            <div>
                                <h4>Images:</h4>
                                {article.images.map((image, index) => (
                                    <img key={index} src={`http://localhost:5000/images/${image}`} alt={`Image ${index}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>PDFs:</h4>
                            <ul>
                                {article.pdfs.map((pdf, index) => (
                                    <li key={index}><a href={`http://localhost:5000/pdfs/${pdf}`} target="_blank" rel="noopener noreferrer">PDF {index + 1}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Docs:</h4>
                            <ul>
                                {article.docs.map((doc, index) => (
                                    <li key={index}><a href={`http://localhost:5000/docs/${doc}`} target="_blank" rel="noopener noreferrer">Doc {index + 1}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <div className="row justify-content-center">
                <button onClick={handleDownloadAsZip} className="btn btn-secondary">Download All Files as ZIP</button>
            </div>
            <br /><br />
        </div>
    );
}

export default GetOneArticle;

