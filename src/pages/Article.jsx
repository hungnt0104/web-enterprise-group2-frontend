
import React, { useState } from "react";    
import axios from 'axios';
import { useEffect } from "react";
import {  useLocation } from 'react-router-dom';
import Header from "./component/Header";
import { Modal, Button } from 'react-bootstrap';


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

    const [currentEvent, setCurrentEvent] = useState("");

    const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

    useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async (e) => {
      try {
          const response = await axios.get(`/admin/currentEvent`);
          setCurrentEvent(response.data);
      } catch (error) {
          console.error('Error fetching article:', error);
          setError('Error fetching article. Please try again later.');
      }
  };

    const handleUpload = async (e) => {
        e.preventDefault();

        // Check maximum file upload limits
        if (imageFiles.length > 3 || pdfFiles.length > 5 || docFiles.length > 2) {
            setError("Maximum upload limits exceeded. Please upload no more than 3 images, 5 PDFs, and 2 documents.");
            window.alert("Maximum upload limits exceeded. Please upload no more than 3 images, 5 PDFs, and 2 documents.")
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("department", department);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("eventId", currentEvent._id);

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
            const response = await axios.post('/articles/createArticle', formData, {
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

    

    // console.log(currentEvent)

    return (
      <div>
       <Header/>
      
<div class="container">
  <h2 class="label mt-6">Create Article</h2>
  <div class="row mt-3">
  <div class="col-lg-4 ">
    <div class="card">
        <div class="card-body">
        {currentEvent && (
    <div>
        <h5>Event Information</h5>
        <p>Name: {currentEvent.name}</p>
        <p>Start Date: {currentEvent.startDate}</p>
        <p>First Deadline: {currentEvent.closureDates.firstDeadline}</p>
        <p>Final Deadline: {currentEvent.closureDates.finalClosureDate}</p>
    </div>
)}
            {/* <h5>Event Information</h5>
            <p>Name: {currentEvent.name}</p>
            <p>Start Date: {currentEvent.startDate}</p>
            <p>First Deadline: {currentEvent.closureDates.firstDeadline}</p>
            <p>Final Deadline: {currentEvent.closureDates.finalClosureDate}</p> */}
        </div>
    </div>
</div>
  <div class="col-lg-8">
    <div class="card">
      <div class="card-body">
        <form onSubmit={handleUpload}>
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
          <div className="mb-3 form-check">
        <input type="checkbox" className="" id="termsCheckbox" required/>
        <label className="form-check-label" htmlFor="termsCheckbox">
          I have read and agree with the <span onClick={handleShow} style={{color: 'blue', textDecoration: 'underline', cursor: 'pointer'}}>Terms and Conditions</span>
        </label>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Place your terms and conditions text here */}
          <ol>
    <li><strong>Ownership:</strong> By uploading an article to the university platform, you agree that you are the rightful owner of the content, or you have obtained necessary permissions or licenses for its use.</li>
    
    <li><strong>Accuracy and Legality:</strong> You certify that the article is accurate, truthful, and does not infringe upon the intellectual property rights, privacy, or any other rights of any third party. You also agree that the content complies with all applicable laws and regulations.</li>
    
    <li><strong>Usage Rights:</strong> You grant the university a non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display the article worldwide in any media or format for educational and promotional purposes.</li>
    
    <li><strong>Responsibility:</strong> You are solely responsible for the content of the article and any consequences that may arise from its publication. The university shall not be liable for any damages or losses resulting from the use of the article.</li>
    
</ol>

{/* <p>By uploading an article to the university platform, you acknowledge that you have read, understood, and agreed to abide by these terms and conditions.</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          <button type="submit" class="btn">Upload</button>
        </form>
        {error && <p style="color: red;">{error}</p>}
        {uploadStatus && <p>{uploadStatus}</p>}
      </div>
    </div>
  </div>
  
</div>
</div>
</div>

    );
}

export default Article;
