


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import {  useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import Header from './component/Header';

// axios.defaults.baseURL = 'http://localhost:5000/articles';

const EventDetail = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [error, setError] = useState(null);
    
    // window.localStorage.setItem('eventId', id);

	const location = useLocation();
    const eventId = location.pathname.split('/')[2];

    useEffect(() => {
        fetchData(id);
    }, [id]);

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`/admin/getEvent/${id}`);
            setEvent(response.data);
        } catch (error) {
            console.error('Error fetching article:', error);
            setError('Error fetching article. Please try again later.');
        }
    };

    if (!event) {
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
                  <h2>{event.name}
                  </h2>
                  <ul className="blog-info-link mt-3 mb-4">
                    <li><a href="#"><i className="fa fa-user"></i> {event.status}</a></li>
                    {/* <li><a href="#"><i className="fa fa-comments"></i>{event.comments.length}</a></li> */}
                  </ul>
                  <img width="100%" src="https://www.greenwichsu.co.uk/pageassets/aboutus/locations/uni.jpg" alt="" />
                  <p>
                    {event.description}
                  </p>

                  {/* {article.images.map((image, index) => (
                                    <img key={index} src={`http://localhost:5000/images/${image}`} alt={`Image ${index}`} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                                ))} */}
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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSRpZvlnKKyXchflZbZfGEeF45sMbBVm2LP2U750H6Q&s" alt="" />
                  <div className="media-body">
                    <a href="#">
                      <h4>Start Date: {event.startDate}</h4>
                    </a>
                    <br />
                    <a href="#">
                      <h4>First Deadline: {event.closureDates.firstDeadline}</h4>
                    </a>
                    <br />
                    <a href="#">
                      <h4>Final Deadline: {event.closureDates.finalClosureDate}</h4>
                    </a>
                  </div>
                </div>
              </div>
              <div className="comment-form">
                
                <a  href={`/createArticle`} type="submit" className="button button-contactForm btn_1 boxed-btn">Submit Idea Now</a>
                  &nbsp;&nbsp;&nbsp;
                  {/* <button onClick={handleSelect} type="submit" className="button button-contactForm btn_1 boxed-btn">Approve</button> */}
              </div>
            </div>
            {/* <div className="col-lg-4"> */}
              {/* <div className="blog_right_sidebar">
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
                      {article.pdfs.map((pdf, index) => (
                                    <li key={index}><a href={`http://localhost:5000/pdfs/${pdf}`} target="_blank" rel="noopener noreferrer"><p>PDF {index + 1}</p></a></li>
                                ))}
                      {article.docs.map((doc, index) => (
                                    <li key={index}><a href={`http://localhost:5000/docs/${doc}`} target="_blank" rel="noopener noreferrer"><p>Doc {index + 1}</p></a></li>
                                ))}
                </ul>
              </aside>
              </div> */}
            {/* </div> */}
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

export default EventDetail;

