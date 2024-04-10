
import React, { useState } from "react";    
import axios from 'axios';

// function Article() {
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [files, setFiles] = useState(null);
//     const [uploadStatus, setUploadStatus] = useState("");

//     const handleUpload = async (e) => {
//         e.preventDefault();
        


//         const formData = new FormData();
//         formData.append("title", title);
//         formData.append("content", content);
//         files.forEach(file => {
//             formData.append("files", file);
//         });


//         try {
//             const response = await axios.post('http://localhost:5000/articles/createArticle', formData, {
//                 headers: {"Content-Type": "multipart/form-data"},
//             });
//             setUploadStatus(response.data.message);
            
//         } catch (error) {
//             console.error("Error uploading files:", error);
//             setUploadStatus("Error uploading files");
//         }
//     };

//     const handleFileChange = (e) => {
//         const fileList = Array.from(e.target.files);
//         setFiles(fileList);
//     };
    

//     return (
//         <div>
//             <form onSubmit={handleUpload}>
//                 <div>
//                     <label htmlFor="title">Title:</label>
//                     <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
//                 </div>
//                 <div>
//                     <label htmlFor="content">Content:</label>
//                     <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
//                 </div>              
//                 <div>
//                     <label htmlFor="files">Select Files:</label>
//                     <input type="file" accept="image/*,.pdf,.doc,.docx" onChange={handleFileChange} multiple />
//                 </div>
//                 <div>
//                     <button type="submit">Upload</button>
//                 </div>
//             </form>
//             {uploadStatus && <p>{uploadStatus}</p>}
//         </div>
//     );
// }

// export default Article;



const Article = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [pdfFiles, setPdfFiles] = useState([]);
    const [docFiles, setDocFiles] = useState([]);
    const [uploadStatus, setUploadStatus] = useState("");
    const [error, setError] = useState("");

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
    );
}

export default Article;
