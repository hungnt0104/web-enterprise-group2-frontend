
import React, { useState } from "react";    
import axios from 'axios';

function Article() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    const handleUpload = async (e) => {
        e.preventDefault();
        
        if (!image) {
            console.error("No image selected");
            return;
        }

        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("image", image);

        try {
            const response = await axios.post('http://localhost:5000/articles/createArticle', formData, {
                headers: {"Content-Type": "multipart/form-data"},
            });
            setUploadStatus(response.data.message);
        } catch (error) {
            console.error("Error uploading image:", error);
            setUploadStatus("Error uploading image");
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
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
                    <input type="file" accept="image/*" onChange={handleImageChange} />
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
