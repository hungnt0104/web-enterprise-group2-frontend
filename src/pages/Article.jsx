
import React, { useState } from "react";    
import axios from 'axios';

function Article() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [pdf, setPdf] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleUpload = async (e) => {
        e.preventDefault();
        
        if (!image || !pdf) {
            console.error("Please select both an image and a PDF file");
            setUploadStatus("Please select both an image and a PDF file");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", image);
        formData.append("pdf", pdf);

        try {
            const response = await axios.post('http://localhost:5000/articles/createArticle', formData, {
                headers: {"Content-Type": "multipart/form-data"},
            });
            setUploadStatus(response.data.message);
        } catch (error) {
            console.error("Error uploading files:", error);
            setUploadStatus("Error uploading files");
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handlePdfChange = (e) => {
        setPdf(e.target.files[0]);
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
                    <label htmlFor="image">Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                </div>
                <div>
                    <label htmlFor="pdf">PDF:</label>
                    <input type="file" accept="application/pdf" onChange={handlePdfChange} />
                </div>
                <div>
                    <button type="submit">Upload</button>
                </div>
            </form>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
}

export default Article;