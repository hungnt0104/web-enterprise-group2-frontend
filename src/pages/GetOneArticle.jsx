/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */


// import Header from './component/Header';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useParams } from 'react-router-dom';
// import {  useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import JSZip from 'jszip';
// import { saveAs } from 'file-saver';


// // axios.defaults.baseURL = 'http://localhost:5000/articles';

// const GetOneArticle = () => {
//     const { id } = useParams();
//     const [article, setArticle] = useState(null);
//     const [error, setError] = useState(null);
//     const [comment, setComment] = useState('');
//     const [isSelected, setIsSelected] = useState('');
 
// 	// const [author, setAuthor] = useState('');
//     const author = window.localStorage.getItem('name')
//     const role = window.localStorage.getItem("role")
// 	const location = useLocation();
//     const articleId = location.pathname.split('/')[1];

//     const handleSelect = async (e) => {
//       e.preventDefault();
      
//       try {
//           const response = await axios.post(`/articles/setIsSelected/${articleId}`);
//           console.log(response.data); // Log success message
//     window.alert('You have approved this article successfully!'); // Show success message
//     window.location.reload();
//       } catch (error) {
//           console.error(error); // Log error message
//       }
//   };
//     const handleDisSelect = async (e) => {
//       e.preventDefault();
      
//       try {
//           const response = await axios.post(`/articles/setIsSelectedToFalse/${articleId}`);
//           console.log(response.data); // Log success message
//     window.alert('You have disapproved this article successfully!'); // Show success message
//     window.location.reload();
//           // window.history.back();
//           // Optionally, you can reset the comment state or show a success message to the user
//       } catch (error) {
//           console.error(error); // Log error message
//       }
//   };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         try {
//             const event = await axios.get(`/admin/getEvent/${article.eventId}`)
//             const finalDeadline = event.data.closureDates.finalClosureDate
            
// 			console.log(finalDeadline)
//             const response = await axios.post(`/articles/commentArticle/${articleId}`, {
//                 comment, author, finalDeadline
//             });
//             console.log(response.data); // Log success message
// 			window.alert('Comment submitted successfully!'); // Show success message
//       window.location.reload();
//             // window.history.back();
//             // Optionally, you can reset the comment state or show a success message to the user
//         } catch (error) {
//             console.error(error); // Log error message
//             window.alert('The final deadline was passed')
//             // Optionally, you can show an error message to the user
//         }
//     };


//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async (e) => {
//         try {
//             const response = await axios.get(`/articles/getArticles/${articleId}`);
//             setArticle(response.data);
//         } catch (error) {
//             console.error('Error fetching article:', error);
//             setError('Error fetching article. Please try again later.');
//         }
//     };

//     const handleDownloadAsZip = async () => {
//         try {
//           if (role !== "Manager"){
//             window.alert("You have to be manager!")
//             return
//           }
//             const zip = new JSZip();
//             const promises = [];
//             // Add images to zip
//             article.images.forEach((image, index) => {
//                 const imageUrl = `https://web-enterprise-group2-backend-test.onrender.com/images/${image}`;
//                 promises.push(
//                     axios.get(imageUrl, { responseType: 'blob' })
//                         .then(response => {
//                             zip.file(`image_${index + 1}.jpg`, response.data);
//                         })
//                 );
//             });
//             // Add PDFs to zip
//             article.pdfs.forEach((pdf, index) => {
//                 zip.file(`pdf_${index + 1}.pdf`, pdf);
//             });
//             // Add docs to zip
//             article.docs.forEach((doc, index) => {
//                 zip.file(`doc_${index + 1}.doc`, doc);
//             });
//             await Promise.all(promises);
//             // Generate zip file
//             const zipBlob = await zip.generateAsync({ type: 'blob' });
//             // Save zip file
//             saveAs(zipBlob, `${article.title}_files.zip`);
//         } catch (error) {
//             console.error('Error downloading files as zip:', error);
//             setError('Error downloading files as zip. Please try again later.');
//         }
//     };

//     // if (!article) {
//     //     return <div>Loading...</div>;
//     // }

//     return (
//       article &&
//       <div>
//       <Header/>
//         <div className='container'>
//             <main>
                
//       <section className="blog_area single-post-area section-padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 posts-list">
//               <div className="single-post">
//                 <div className="feature-img">
                  
//                 </div>
//                 <div className="blog_details">
//                   <h2>{article.title}
//                   </h2>
//                   <ul className="blog-info-link mt-3 mb-4">
//                     <li><a href="#"><i className="fa fa-user"></i> {article.department}</a></li>
//                     <li><a href="#"><i className="fa fa-comments"></i>{article.comments.length}</a></li>
//                   </ul>
//                   <p>
//                     {article.content}
//                   </p>
//                   {article.images.map((image, index) => (
//                                     <img key={index} src={`https://web-enterprise-group2-backend-test.onrender.com/images/${image}`} alt={`Image ${index}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
//                                 ))}
//                 </div>
//               </div>
//               <div className="navigation-top">
//                 <div className="d-sm-flex justify-content-between text-center">
//                   <div className="col-sm-4 text-center my-2 my-sm-0">

//                   </div>
//                   <ul className="social-icons">
//                     <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
//                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                     <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
//                     <li><a href="#"><i className="fab fa-behance"></i></a></li>
//                   </ul>
//                 </div>
//                 <div className="navigation-area">
//                   <div className="row">
//                     <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
//                       <div className="thumb">
//                       </div>
//                       <div className="arrow">
//                         <a href="#">
//                           <span className="lnr text-white ti-arrow-left"></span>
//                         </a>
//                       </div>
//                     </div>
//                     <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="blog-author">
//                 <div className="media align-items-center">
//                   <img src="https://www.svgrepo.com/show/452030/avatar-default.svg" alt="" />
//                   <div className="media-body">
//                     <a href="#">
//                       <h4>{article.name}</h4>
//                     </a>
//                     <p>{article.email}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="comments-area">
//                 <h4>{article.comments.length} Comments</h4>
//                 <div className="comment-list">
//  {article.comments.map((comment, index) => (
//   <div key={index} className="single-comment justify-content-between d-flex" style={{ marginBottom: '20px' }}>
//     <div className="user justify-content-between d-flex">
//       <div className="thumb">
//         <img src="https://www.svgrepo.com/show/452030/avatar-default.svg" alt="" />
//       </div>
//       <div className="desc">
//         <p className="comment">
//           {comment.text}
//         </p>
//         <div className="d-flex justify-content-between">
//           <div className="d-flex align-items-center">
//             <h5>
//               <a href="#">{comment.author}</a>
//             </h5>
//             <p className="date">{comment.date}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <br />
//   </div>
// ))}
// </div>
//               </div>
//               <div className="comment-form">
//                 <h4>Leave a Comment</h4>
//                 <form className="form-contact comment_form" action="#" id="commentForm"  required onSubmit={handleSubmit}>
//                   <div className="row">
//                     <div className="col-12">
//                       <div className="form-group">
//                         <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment" value={comment}
//                    onChange={(e) => setComment(e.target.value)} required></textarea>
//                       </div>
//                     </div>
                    
//                   </div>
//                   <div className="form-group">
//                     <button type="submit" className="button button-contactForm btn_1 boxed-btn">Send Message</button>
                    
//                   </div>
//                   <div className="form-group">
                  
//                   </div>
//                 </form>
//                 <button  onClick={handleDownloadAsZip} type="submit" className="button button-contactForm btn_1 boxed-btn">Download ZIP</button>
    
//                   &nbsp;&nbsp;&nbsp;
                 
//                   {/* {!article.isSelected ? (
//                     <button onClick={handleSelect} type="submit" className="button button-contactForm btn_1 boxed-btn">Approve</button>
//                   ) : (
//                     <button onClick={handleDisSelect} type="submit" className="button button-contactForm btn_1 boxed-btn">Disapprove</button>
//                   )} */}
//                   {role === "Coordinator" && !article.isSelected ? (
//   <button onClick={handleSelect} type="submit" className="button button-contactForm btn_1 boxed-btn">Approve</button>
// ) : role === "Coordinator" && (
//   <button onClick={handleDisSelect} type="submit" className="button button-contactForm btn_1 boxed-btn">Disapprove</button>
// )}
                  
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="blog_right_sidebar">
//                 {/* <aside className="single_sidebar_widget search_widget">
//                   <form action="#">
//                     <div className="form-group">
//                       <div className="input-group mb-3">
//                         <input type="text" className="form-control" placeholder='Search Keyword' />
//                         <div className="input-group-append">
//                           <button className="btns" type="button"><i className="ti-search"></i></button>
//                         </div>
//                       </div>
//                     </div>
//                     <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
//                   </form>
//                 </aside> */}
//                 <aside className="single_sidebar_widget post_category_widget">
//                 <h4 className="widget_title">Attachment</h4>
//                 <ul className=" cat-list">
//                       {article.pdfs.map((pdf, index) => (
//                                     <li key={index}><a href={`https://web-enterprise-group2-backend-test.onrender.com/pdfs/${pdf}`} target="_blank" rel="noopener noreferrer"><p>PDF {index + 1}</p></a></li>
//                                 ))}
//                       {article.docs.map((doc, index) => (
//                                     <li key={index}><a href={`https://web-enterprise-group2-backend-test.onrender.com/docs/${doc}`} target="_blank" rel="noopener noreferrer"><p>Doc {index + 1}</p></a></li>
//                                 ))}
//                 </ul>
//               </aside>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//         </div>
//         </div>
//     );
// }

// export default GetOneArticle;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './component/Header';
import { useParams, useLocation } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const GetOneArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState('');
    const [isSelected, setIsSelected] = useState('');
    const author = window.localStorage.getItem('name');
    const role = window.localStorage.getItem("role");
    const location = useLocation();
    const articleId = location.pathname.split('/')[1];

    const fetchData = async () => {
        try {
            const response = await axios.get(`/articles/getArticles/${articleId}`);
            setArticle(response.data);
        } catch (error) {
            console.error('Error fetching article:', error);
            setError('Error fetching article. Please try again later.');
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleSelect = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/articles/setIsSelected/${articleId}`);
            console.log(response.data);
            window.alert('You have approved this article successfully!');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    const handleDisSelect = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`/articles/setIsSelectedToFalse/${articleId}`);
            console.log(response.data);
            window.alert('You have disapproved this article successfully!');
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const event = await axios.get(`/admin/getEvent/${article.eventId}`)
            const finalDeadline = event.data.closureDates.finalClosureDate;
            const response = await axios.post(`/articles/commentArticle/${articleId}`, {
                comment, author, finalDeadline
            });
            console.log(response.data);
            window.alert('Comment submitted successfully!');
            window.location.reload();
        } catch (error) {
            console.error(error);
            window.alert('The final deadline was passed');
        }
    };

    const handleDownloadAsZip = async () => {
        try {
            if (role !== "Manager") {
                window.alert("You have to be manager!");
                return;
            }
            const zip = new JSZip();
            const promises = [];
            article.images.forEach((image, index) => {
                const imageUrl = `https://web-enterprise-group2-backend-test.onrender.com/images/${image}`;
                promises.push(
                    axios.get(imageUrl, { responseType: 'blob' })
                        .then(response => {
                            zip.file(`image_${index + 1}.jpg`, response.data);
                        })
                );
            });
            article.pdfs.forEach((pdf, index) => {
                zip.file(`pdf_${index + 1}.pdf`, pdf);
            });
            article.docs.forEach((doc, index) => {
                zip.file(`doc_${index + 1}.doc`, doc);
            });
            await Promise.all(promises);
            const zipBlob = await zip.generateAsync({ type: 'blob' });
            saveAs(zipBlob, `${article.title}_files.zip`);
        } catch (error) {
            console.error('Error downloading files as zip:', error);
            setError('Error downloading files as zip. Please try again later.');
        }
    };

    return (
        article &&
        <div>
            <Header />
            <div className='container'>
                <main>
                    <section className="blog_area single-post-area section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 posts-list">
                                    <div className="single-post">
                                        <div className="blog_details">
                                            <h2>{article.title}</h2>
                                            <ul className="blog-info-link mt-3 mb-4">
                                                <li><a href="#"><i className="fa fa-user"></i> {article.department}</a></li>
                                                <li><a href="#"><i className="fa fa-comments"></i>{article.comments.length}</a></li>
                                            </ul>
                                            <p>{article.content}</p>
                                            {article.images.map((image, index) => (
                                                <img key={index} src={`https://web-enterprise-group2-backend-test.onrender.com/images/${image}`} alt={`Image ${index}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="navigation-top">
                                        <div className="d-sm-flex justify-content-between text-center">
                                            <ul className="social-icons">
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                            </ul>
                                        </div>
                                        <div className="navigation-area">
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                                                    <div className="thumb"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-author">
                                        <div className="media align-items-center">
                                            <img src="https://www.svgrepo.com/show/452030/avatar-default.svg" alt="" />
                                            <div className="media-body">
                                                <a href="#"><h4>{article.name}</h4></a>
                                                <p>{article.email}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments-area">
                                        <h4>{article.comments.length} Comments</h4>
                                        <div className="comment-list">
                                            {article.comments.map((comment, index) => (
                                                <div key={index} className="single-comment justify-content-between d-flex" style={{ marginBottom: '20px' }}>
                                                    <div className="user justify-content-between d-flex">
                                                        <div className="thumb">
                                                            <img src="https://www.svgrepo.com/show/452030/avatar-default.svg" alt="" />
                                                        </div>
                                                        <div className="desc">
                                                            <p className="comment">{comment.text}</p>
                                                            <div className="d-flex justify-content-between">
                                                                <div className="d-flex align-items-center">
                                                                    <h5><a href="#">{comment.author}</a></h5>
                                                                    <p className="date">{comment.date}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="comment-form">
                                        <h4>Leave a Comment</h4>
                                        <form className="form-contact comment_form" action="#" id="commentForm" required onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment" value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="button button-contactForm btn_1 boxed-btn">Send Message</button>
                                            </div>
                                        </form>
                                        <button onClick={handleDownloadAsZip} type="button" className="button button-contactForm btn_1 boxed-btn">Download ZIP</button>
                                        {role === "Coordinator" && !article.isSelected ? (
                                            <button onClick={handleSelect} type="button" className="button button-contactForm btn_1 boxed-btn">Approve</button>
                                        ) : role === "Coordinator" && (
                                            <button onClick={handleDisSelect} type="button" className="button button-contactForm btn_1 boxed-btn">Disapprove</button>
                                        )}
                                    </div>
                                </div>
                                <div className="col-lg-4">
               <div className="blog_right_sidebar">
              <aside className="single_sidebar_widget post_category_widget">
               <h4 className="widget_title">Attachment</h4>
                <ul className=" cat-list">
                       {article.pdfs.map((pdf, index) => (
                                    <li key={index}><a href={`https://web-enterprise-group2-backend-test.onrender.com/pdfs/${pdf}`} target="_blank" rel="noopener noreferrer"><p>PDF {index + 1}</p></a></li>
                                ))}
                      {article.docs.map((doc, index) => (
                                    <li key={index}><a href={`https://web-enterprise-group2-backend-test.onrender.com/docs/${doc}`} target="_blank" rel="noopener noreferrer"><p>Doc {index + 1}</p></a></li>
                                ))}
                </ul>
              </aside>
              </div>
            </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default GetOneArticle;
