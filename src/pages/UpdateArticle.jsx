/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from "react";    
// import axios from 'axios';
// import { useLocation, useHistory } from 'react-router-dom'; // Import useHistory

// const UpdateArticle = () => {
    
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [imageFiles, setImageFiles] = useState([]);
//     const [pdfFiles, setPdfFiles] = useState([]);
//     const [docFiles, setDocFiles] = useState([]);
//     const [uploadStatus, setUploadStatus] = useState("");
//     const [error, setError] = useState("");
//     const [articleData, setArticleData] = useState(null);
//     const location = useLocation();
//     const history = useHistory(); // Use useHistory
//     const eventId = location.pathname.split('/')[2];

//     useEffect(() => {
//         const fetchArticleData = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5000/articles/getArticle/${eventId}`);
//                 const { title, content, images, pdfs, docs } = response.data.article;
//                 setTitle(title);
//                 setContent(content);
//                 setArticleData(response.data.article);
//             } catch (error) {
//                 console.error("Error fetching article data:", error);
//                 setError("Error fetching article data");
//             }
//         };

//         fetchArticleData();
//     }, [eventId]);

//     const handleUpdate = async (e) => {
//         e.preventDefault();

//         if (imageFiles.length > 3 || pdfFiles.length > 5 || docFiles.length > 2) {
//             setError("Maximum upload limits exceeded. Please upload no more than 3 images, 5 PDFs, and 2 documents.");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("title", title);
//         formData.append("content", content);
//         formData.append("eventId", eventId);

//         imageFiles.forEach(file => {
//             formData.append("images", file);
//         });

//         pdfFiles.forEach(file => {
//             formData.append("pdfs", file);
//         });

//         docFiles.forEach(file => {
//             formData.append("docs", file);
//         });

//         try {
//             const response = await axios.put(`http://localhost:5000/articles/updateArticle/${eventId}`, formData, {
//                 headers: {"Content-Type": "multipart/form-data"},
//             });
//             window.alert("Article updated successfully");
//             setUploadStatus(response.data.message);
//             history.push(`/article/${eventId}`); // Use history.push to navigate
//         } catch (error) {
//             window.alert(error.response.data.message);
//             console.error("Error updating article:", error);
//             setUploadStatus("Error updating article");
//         }
//     };

//     const handleImageChange = (e) => {
//         const imageList = Array.from(e.target.files);
//         setImageFiles(imageList);
//     };

//     const handlePdfChange = (e) => {
//         const pdfList = Array.from(e.target.files);
//         setPdfFiles(pdfList);
//     };

//     const handleDocChange = (e) => {
//         const docList = Array.from(e.target.files);
//         setDocFiles(docList);
//     };

//     return (
//         <div className="container">
//             <h2 className="label">Update Article</h2>
//             <div className="card">
//                 <div className="card-body">
//                     {articleData ? (
//                         <form onSubmit={handleUpdate}>
//                             <div className="mb-3">
//                                 <label htmlFor="title" className="form-label">Title:</label>
//                                 <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="content" className="form-label">Content:</label>
//                                 <textarea className="form-control" id="content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="images" className="form-label">Images (Maximum 3):</label>
//                                 <input type="file" className="form-control transparent-file-input" id="images" accept="image/*" onChange={handleImageChange} multiple />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="pdfs" className="form-label">PDFs (Maximum 5):</label>
//                                 <input type="file" className="form-control transparent-file-input" id="pdfs" accept="application/pdf" onChange={handlePdfChange} multiple />
//                             </div>
//                             <div className="mb-3">
//                                 <label htmlFor="docs" className="form-label">Documents (Maximum 2):</label>
//                                 <input type="file" className="form-control transparent-file-input" id="docs" accept=".doc,.docx,.txt" onChange={handleDocChange} multiple />
//                             </div>
//                             <button type="submit" className="btn btn-primary">Update</button>
//                         </form>
//                     ) : (
//                         <p>Loading article data...</p>
//                     )}
//                     {error && <p style={{ color: "red" }}>{error}</p>}
//                     {uploadStatus && <p>{uploadStatus}</p>}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default UpdateArticle;
