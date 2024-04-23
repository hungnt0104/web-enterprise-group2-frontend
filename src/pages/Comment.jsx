import React, { Component, useState } from "react";
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from "./component/Header";
import Footer from "./component/Footer";

// // import styles from "../styles/Comment/style.module.scss"; // Import your CSS module

export default function Profile() {

	const [comment, setComment] = useState('');
	// const [author, setAuthor] = useState('');
    const author = window.localStorage.getItem('name')
	const location = useLocation();
    const articleId = location.pathname.split('/')[2];

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
			// console.log(articleId)
            const response = await axios.post(`/articles/commentArticle/${articleId}`, {
                comment, author
            });
            console.log(response.data); // Log success message
			window.alert('Comment submitted successfully!'); // Show success message
            window.history.back();
            // Optionally, you can reset the comment state or show a success message to the user
        } catch (error) {
            console.error(error); // Log error message
            // Optionally, you can show an error message to the user
        }
    };


    return (
        <div>
<Header/>
        <div className="container">
            
        <div className="row" style={{ marginTop: '30px' }}>
        <div className="col-12">
          <h2 className="contact-title">Make your comment</h2>
        </div>
        <div className="col-lg-8">
          <form className="form-contact contact_form" action="contact_process.php" method="post" id="contactForm" required onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder=" Enter Message"
                   required value={comment}
                   onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
              </div>
              
            </div>
            <div className="form-group mt-3">
              <button type="submit" className="button button-contactForm boxed-btn">Send</button>
            </div>
          </form>
        </div>
        <div className="col-lg-3 offset-lg-1">
          {/* <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h3>support@colorlib.com</h3>
              <p>Send us your query anytime!</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    <Footer/>
    </div>

        // <div className={wrapper}>
        //     <div className={inner}>
        //         <form action="" onSubmit={handleSubmit}>
        //             <h3 className={color}>Comment</h3>
        //             <p  className={color}>Make your comment to this article</p>
                    
        //             <label className={["form-group"]} >
        //                 <textarea name="" id="" className={styles["form-control"]} required value={comment}
        //                     onChange={(e) => setComment(e.target.value)}> 
		// 					</textarea>
        //                 <span htmlFor="">Your Comment</span>
        //                 <span className={styles.border}></span>
        //             </label>
        //             <button>Submit 
        //                 <i className="zmdi zmdi-arrow-right"></i>
        //             </button>
        //         </form>
        //     </div>
        // </div>
    );
}