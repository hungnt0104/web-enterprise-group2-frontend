import React from 'react'
// import "../App.css"
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import SidebarAdmin from './component/SidebarAdmin';
import Header from './component/Header';
// import 'node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../ProductStyle.css'

// axios.defaults.baseURL = 'https://backend-test-ad5x.onrender.com/admin';
// axios.defaults.baseURL = 'http://localhost:5000/admin'

const MyArticle = () =>{
  //giup bat tat add section
//setAddSection la 1 function de update addSection, useState de set mac dinh addSection la false
const[addSection, setAddSection] = useState(false)
//bat tat update section
const [editSection, setEditSection] = useState(false)
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [imageFiles, setImageFiles] = useState([]);
const [pdfFiles, setPdfFiles] = useState([]);
const [docFiles, setDocFiles] = useState([]);
const [uploadStatus, setUploadStatus] = useState("");
const [error, setError] = useState("");

const email = window.localStorage.getItem("email")

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
    title: "",
  content: "",
  images: "",
  pdfs: "",
  docs: "",
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
  const data = await axios.get(`/articles/getMyArticle/${email}`)
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
  const data = await axios.delete("/articles/deleteArticle/"+id)
//   console.log(data)
  if (data.statusText === 'OK')
  {
    getFetchData()
    alert('Delete Article Successfully')
  }
}

//update
// const handleUpdate = async(e, id)=>{
//   e.preventDefault()

//   const data = await axios.put("/articles/updateArticle/"+id, formDataEdit)
//   // console.log(data)
//   if (data.statusText == "OK")
//   {
//     getFetchData()
//     alert("Updated successfully")
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

const handleEditOnChange = async (e) => {
    const { name, value, files } = e.target;
  
    // Check if files are present
    if (files && files.length > 0) {
      // If files are present, update the formDataEdit state with the selected file
      const file = files[0]; // Assuming only one file is selected
      setFormDataEdit((previous) => ({
        ...previous,
        [name]: file
      }));
    } else {
      // If it's not a file input or no files selected, update the formDataEdit state with the text input value
      setFormDataEdit((previous) => ({
        ...previous,
        [name]: value
      }));
    }
  };

const handleEdit = (el) =>{
  setFormDataEdit(el)
  setEditSection(true)
}

const handleUpdate = async (e, id) => {
  e.preventDefault();

  // Check maximum file upload limits
  if (imageFiles.length > 3 || pdfFiles.length > 5 || docFiles.length > 2) {
      setError("Maximum upload limits exceeded. Please upload no more than 3 images, 5 PDFs, and 2 documents.");
      return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);

  // Append image files
  imageFiles.forEach(file => {
      formData.append("images", file);
  });

  // Append PDF files
  pdfFiles.forEach(file => {
      formData.append("pdfs", file);
  });

  // Append document files
  docFiles.forEach(file => {
      formData.append("docs", file);
  });

  try {
      console.log(formData)
      const response = await axios.put(`/articles/updateArticle/${id}`, formData, {
          headers: {"Content-Type": "multipart/form-data"},
      });
      window.alert("You've created article successfully")
      setUploadStatus(response.data.message);
      // Clear form fields and file inputs after successful upload
      setTitle("");
      setContent("");
      setImageFiles([]);
      setPdfFiles([]);
      setDocFiles([]);
      setError(""); // Clear any previous error message
          getFetchData()
      alert("Updated successfully")
      setEditSection(false)
  } catch (error) {
      window.alert(error.response.data.message)
      console.error("Error uploading files:", error);
      setUploadStatus("Error uploading files");
  }
};

const handleImageChange = (e) => {
  const imageList = Array.from(e.target.files);
  setImageFiles(imageList);
};

const handlePdfChange = (e) => {
  const pdfList = Array.from(e.target.files);
  setPdfFiles(pdfList);
};

const handleDocChange = (e) => {
  const docList = Array.from(e.target.files);
  setDocFiles(docList);
};

return(
  <body class="g-sidenav-show bg-gray-200">
  
        <Header/>
        <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          {/* <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" data-scroll="true">
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
          </nav> */}
          <div class="container-fluid py-4">
            <div class="card mb-2">
              <div class="row">
              <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                <div class="card">
                  
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

  <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input type="text" class="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required/>
          </div>
          <div class="mb-3">
            <label for="content" class="form-label">Content:</label>
            <textarea class="form-control" id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
          </div>
          <div class="mb-3">
            <label for="images" class="form-label">Images (Maximum 3):</label>
            <input type="file" class="form-control transparent-file-input" id="images" accept="image/*" onChange={handleImageChange} multiple />
          </div>
          <div class="mb-3">
            <label for="pdfs" class="form-label">PDFs (Maximum 5):</label>
            <input type="file" class="form-control transparent-file-input" id="pdfs" accept="application/pdf" onChange={handlePdfChange} multiple />
          </div>
          <div class="mb-3">
            <label for="docs" class="form-label">Documents (Maximum 2):</label>
            <input type="file" class="form-control transparent-file-input" id="docs" accept=".doc,.docx,.txt" onChange={handleDocChange} multiple />
          </div>
  {/* <div className="form-group">
    
    <label htmlFor='name'>Title:</label>
    <input type="text" className="form-control" id='name' name='title' onChange={handleEditOnChange} value={formDataEdit.title} required/>
  </div>

  <div className="form-group">
    <label htmlFor='email'>Content:</label>
    <input type="text" className="form-control" id='description' name='content' onChange={handleEditOnChange} value={formDataEdit.content} />
  </div>
  <div class="mb-3">
            <label for="images" class="form-label">Images (Maximum 3):</label>
            <input type="file" name="images"  class="form-control transparent-file-input" id="images" accept="image/*" onChange={handleEditOnChange} multiple />
          </div>
          <div class="mb-3">
            <label for="pdfs" class="form-label">PDFs (Maximum 5):</label>
            <input type="file" name="pdfs"  class="form-control transparent-file-input" id="pdfs" accept="application/pdf" onChange={handleEditOnChange} multiple />
          </div>
          <div class="mb-3">
            <label for="docs" class="form-label">Documents (Maximum 2):</label>
            <input type="file" name="docs"  class="form-control transparent-file-input" id="docs" accept=".doc,.docx,.txt" onChange={handleEditOnChange} multiple />
          </div> */}

  <button className='btn btn-primary' >Submit</button>
</form>

        </div>
        )
      }
              <div class="row">
                <div class="col-12">
                  <div class="card my-4">            
                    <div class="card-body px-0 pb-2 pt-0">
                      <div class="table-responsive p-0">
                        <table class="table align-items-center mb-0">
                          <thead>
                            <tr>
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-5">Name</th>
                              {/* <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-3">Status</th> */}
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 pl-5">Image</th>
                              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dataList.map((el) => (
                              <tr key={el._id}>
                                <td>
                                  <div class="d-flex px-2 py-1">
                                    <div class="d-flex flex-column justify-content-center">
                                      <h6 class="mb-0 text-sm">{el.title}</h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div class="d-flex px-2 py-1">
                                    <div class="d-flex flex-column justify-content-center">
                                    <img
                                style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                                className="card-img rounded-0"
                                src={`http://localhost:5000/images/${el.images[0]}`}
                                alt=""
                            />
                                    </div>
                                  </div>
                                </td>
                                {/* <td>
                                  <p class="text-xs font-weight-bold mb-0">{el.status}</p>
                                  
                                </td> */}
                                {/* <td>
                                <p class="text-xs font-weight-bold mb-0 pl-4">{el.startDate}</p>
                                </td>
                                <td><p class="text-xs font-weight-bold mb-0 ">{el.closureDates.firstDeadline}</p></td>
                                <td><p class="text-xs font-weight-bold mb-0 ">{el.closureDates.finalClosureDate}</p></td> */}
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
          </div>
        </main>
      </body>
   );
  }
  
  export default MyArticle