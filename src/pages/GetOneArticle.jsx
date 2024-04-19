


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import Header from './component/Header';

axios.defaults.baseURL = 'http://localhost:5000/articles';

const GetOneArticle = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState('');
    const [isSelected, setIsSelected] = useState('');
	// const [author, setAuthor] = useState('');
    const author = window.localStorage.getItem('name')
	const location = useLocation();
    const articleId = location.pathname.split('/')[2];

    const handleSelect = async (e) => {
      e.preventDefault();
      
      try {
          const response = await axios.post(`http://localhost:5000/articles/setIsSelected/${articleId}`);
          console.log(response.data); // Log success message
    window.alert('You have approved this article successfully!'); // Show success message
    window.location.reload();
          // window.history.back();
          // Optionally, you can reset the comment state or show a success message to the user
      } catch (error) {
          console.error(error); // Log error message
      }
  };
    const handleDisSelect = async (e) => {
      e.preventDefault();
      
      try {
          const response = await axios.post(`http://localhost:5000/articles/setIsSelectedToFalse/${articleId}`);
          console.log(response.data); // Log success message
    window.alert('You have disapproved this article successfully!'); // Show success message
    window.location.reload();
          // window.history.back();
          // Optionally, you can reset the comment state or show a success message to the user
      } catch (error) {
          console.error(error); // Log error message
      }
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
			// console.log(articleId)
            const response = await axios.post(`http://localhost:5000/articles/commentArticle/${articleId}`, {
                comment, author
            });
            console.log(response.data); // Log success message
			window.alert('Comment submitted successfully!'); // Show success message
      window.location.reload();
            // window.history.back();
            // Optionally, you can reset the comment state or show a success message to the user
        } catch (error) {
            console.error(error); // Log error message
            // Optionally, you can show an error message to the user
        }
    };


    useEffect(() => {
        fetchData(id);
    }, [id]);

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5000/articles/getArticles/${id}`);
            setArticle(response.data);
        } catch (error) {
            console.error('Error fetching article:', error);
            setError('Error fetching article. Please try again later.');
        }
    };

    const handleDownloadAsZip = async () => {
        try {
            const zip = new JSZip();
            const promises = [];

            // Add images to zip
            article.images.forEach((image, index) => {
                const imageUrl = `http://localhost:5000/images/${image}`;
                promises.push(
                    axios.get(imageUrl, { responseType: 'blob' })
                        .then(response => {
                            zip.file(`image_${index + 1}.jpg`, response.data);
                        })
                );
            });

            // Add PDFs to zip
            article.pdfs.forEach((pdf, index) => {
                zip.file(`pdf_${index + 1}.pdf`, pdf);
            });

            // Add docs to zip
            article.docs.forEach((doc, index) => {
                zip.file(`doc_${index + 1}.doc`, doc);
            });

            await Promise.all(promises);

            // Generate zip file
            const zipBlob = await zip.generateAsync({ type: 'blob' });

            // Save zip file
            saveAs(zipBlob, `${article.title}_files.zip`);
        } catch (error) {
            console.error('Error downloading files as zip:', error);
            setError('Error downloading files as zip. Please try again later.');
        }
    };

    if (!article) {
        return <div>Loading...</div>;
    }

    return (
      <div>
      <Header/>
        <div className='container'>
            <main>
                
      {/* Blog Area */}
      <section className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post">
                <div className="feature-img">
                  
                </div>
                <div className="blog_details">
                  <h2>{article.title}
                  </h2>
                  <ul className="blog-info-link mt-3 mb-4">
                    <li><a href="#"><i className="fa fa-user"></i> {article.department}</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i>{article.comments.length}</a></li>
                  </ul>
                  <p>
                    {article.content}
                  </p>
                  {article.images.map((image, index) => (
                                    <img key={index} src={`http://localhost:5000/images/${image}`} alt={`Image ${index}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                                ))}
                </div>
              </div>
              <div className="navigation-top">
                <div className="d-sm-flex justify-content-between text-center">
                  <div className="col-sm-4 text-center my-2 my-sm-0">
                    {/* Comment count */}
                  </div>
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
                      <div className="thumb">
                      </div>
                      <div className="arrow">
                        <a href="#">
                          <span className="lnr text-white ti-arrow-left"></span>
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      {/* Right navigation */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-author">
                <div className="media align-items-center">
                  <img src="https://www.svgrepo.com/show/452030/avatar-default.svg" alt="" />
                  <div className="media-body">
                    <a href="#">
                      <h4>{article.name}</h4>
                    </a>
                    <p>{article.email}</p>
                  </div>
                </div>
              </div>
              <div className="comments-area">
                <h4>{article.comments.length} Comments</h4>
                <div className="comment-list">
 {article.comments.map((comment, index) => (
  <div key={index} className="single-comment justify-content-between d-flex">
    <div className="user justify-content-between d-flex">
      <div className="thumb">
        <img src="assets/img/comment/comment_3.png" alt="" />
      </div>
      <div className="desc">
        <p className="comment">
          {comment.text}
        </p>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h5>
              <a href="#">{comment.author}</a>
            </h5>
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
                <form className="form-contact comment_form" action="#" id="commentForm"  required onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <textarea className="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment" value={comment}
                   onChange={(e) => setComment(e.target.value)} required></textarea>
                      </div>
                    </div>
                    
                  </div>
                  <div className="form-group">
                    <button type="submit" className="button button-contactForm btn_1 boxed-btn">Send Message</button>
                    
                  </div>
                  <div className="form-group">
                  
                  </div>
                </form>
                <button  onClick={handleDownloadAsZip} type="submit" className="button button-contactForm btn_1 boxed-btn">Download ZIP</button>
                  &nbsp;&nbsp;&nbsp;
                  {!article.isSelected ? (
                    <button onClick={handleSelect} type="submit" className="button button-contactForm btn_1 boxed-btn">Approve</button>
                  ) : (
                    <button onClick={handleDisSelect} type="submit" className="button button-contactForm btn_1 boxed-btn">Disapprove</button>
                  )}
                  {/* <button onClick={handleSelect} type="submit" className="button button-contactForm btn_1 boxed-btn">Approve</button> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder='Search Keyword' />
                        <div className="input-group-append">
                          <button className="btns" type="button"><i className="ti-search"></i></button>
                        </div>
                      </div>
                    </div>
                    <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn" type="submit">Search</button>
                  </form>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                <h4 className="widget_title">Attachment</h4>
                <ul className=" cat-list">
                  {/* <li>
                    <a href="#" className="d-flex"> */}
                      {article.pdfs.map((pdf, index) => (
                                    <li key={index}><a href={`http://localhost:5000/pdfs/${pdf}`} target="_blank" rel="noopener noreferrer"><p>PDF {index + 1}</p></a></li>
                                ))}
                      {article.docs.map((doc, index) => (
                                    <li key={index}><a href={`http://localhost:5000/docs/${doc}`} target="_blank" rel="noopener noreferrer"><p>Doc {index + 1}</p></a></li>
                                ))}
                    {/* </a>
                  </li> */}
                  {/* Other list items */}
                </ul>
              </aside>
                {/* Other widgets */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Area end */}
    </main>
            {/* <br /><br />
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Article Detail</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div>
                                <h4>Title: {article.title}</h4>
                                <p>Content: {article.content}</p>
                            </div>
                            <div>
                                <h4>Images:</h4>
                                {article.images.map((image, index) => (
                                    <img key={index} src={`http://localhost:5000/images/${image}`} alt={`Image ${index}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                                ))}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <h4>PDFs:</h4>
                            <ul>
                                {article.pdfs.map((pdf, index) => (
                                    <li key={index}><a href={`http://localhost:5000/pdfs/${pdf}`} target="_blank" rel="noopener noreferrer">PDF {index + 1}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Docs:</h4>
                            <ul>
                                {article.docs.map((doc, index) => (
                                    <li key={index}><a href={`http://localhost:5000/docs/${doc}`} target="_blank" rel="noopener noreferrer">Doc {index + 1}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h4>Comments:</h4>
                            <ul>
                                {article.comments.map((comment, index) => (
                                    <li key={index}>{comment}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <div className="row justify-content-center">
                <button onClick={handleDownloadAsZip} className="btn btn-secondary">Download All Files as ZIP</button>
                <button onClick={handleCommentButtonClick} className="btn btn-primary">Comment</button>
            </div>
            <br /><br /> */}
        </div>
        </div>
    );
}

export default GetOneArticle;

