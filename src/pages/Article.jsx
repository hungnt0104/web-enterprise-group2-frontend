
import React, { useState } from "react";    
import axios from 'axios';



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
            setUploadStatus(response.data.message);
            // Clear form fields and file inputs after successful upload
            setTitle("");
            setContent("");
            setImageFiles([]);
            setPdfFiles([]);
            setDocFiles([]);
            setError(""); // Clear any previous error message
        } catch (error) {
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
<div>
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Contact Form #02</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <div className="row no-gutters">
                                <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Get in touch</h3>
                                        <form className="contactForm">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="name">Full Name</label>
                                                        <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6"> 
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="email">Email Address</label>
                                                        <input type="email" className="form-control" name="email" id="email" placeholder="Email"  />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="subject">Subject</label>
                                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="message">Message</label>
                                                        <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message" ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input type="submit" value="Send Message" className="btn btn-primary" />
                                                        <div className="submitting"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                    <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                                        <h3>Let's get in touch</h3>
                                        <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                        <div className="dbox w-100 d-flex align-items-start">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-map-marker"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-phone"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                            </div>
                                        </div>
                                        <div className="dbox w-100 d-flex align-items-center">
                                            <div className="icon d-flex align-items-center justify-content-center">
                                                <span className="fa fa-globe"></span>
                                            </div>
                                            <div className="text pl-3">
                                                <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <div>
            <form onSubmit={handleUpload}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="images">Images (Maximum 3):</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} multiple />
                </div>
                <div>
                    <label htmlFor="pdfs">PDFs (Maximum 5):</label>
                    <input type="file" accept="application/pdf" onChange={handlePdfChange} multiple />
                </div>
                <div>
                    <label htmlFor="docs">Documents (Maximum 2):</label>
                    <input type="file" accept=".doc,.docx,.txt" onChange={handleDocChange} multiple />
                </div>
                <div>
                    <button type="submit">Upload</button>
                </div>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
        </div>
    );
}

export default Article;
