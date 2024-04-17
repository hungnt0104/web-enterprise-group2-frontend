
import React, { useState } from "react";    
import axios from 'axios';
import {  useLocation } from 'react-router-dom';
// import '../assets/css/article.css';


const Article = () => {
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [pdfFiles, setPdfFiles] = useState([]);
    const [docFiles, setDocFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState("");
    const [error, setError] = useState("");
    const department = window.localStorage.getItem('department');
    const name = window.localStorage.getItem('name');
    const email = window.localStorage.getItem('email');
    const location = useLocation();
    const eventId = location.pathname.split('/')[2];

    const handleUpload = async (e) => {
        e.preventDefault();

        // Check maximum file upload limits
        if (imageFiles.length > 3 || pdfFiles.length > 5 || docFiles.length > 2) {
            setError("Maximum upload limits exceeded. Please upload no more than 3 images, 5 PDFs, and 2 documents.");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("department", department);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("eventId", eventId);

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
            const response = await axios.post('http://localhost:5000/articles/createArticle', formData, {
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

    return (
<div class="container">
  <h2 class="label">Create Article</h2>
  <div class="card">
    <div class="card-body">
      <form onSubmit={handleUpload}>
        <div class="mb-3">
          <label for="title" class="form-label">Title:</label>
          <input type="text" class="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="content" class="form-label">Content:</label>
          <textarea class="form-control" id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
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
        <button type="submit" class="btn btn-primary">Upload</button>
      </form>
      {error && <p style="color: red;">{error}</p>}
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  </div>
</div>


    );
}

export default Article;
