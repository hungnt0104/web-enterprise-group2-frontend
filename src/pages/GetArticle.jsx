


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
// import '../assets/img'

const GetArticle = () => {
    const [articleList, setArticleList] = useState([]);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/articles/getArticles');
            setArticleList(response.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    return (
        
        <div>
            <Header/>
            <section className="blog_area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <div className="blog_left_sidebar">
              
              {/* <article className="blog_item">
                
                <div className="blog_item_img">
                  <img className="card-img rounded-0" src="../assets/img/blog/single_blog_1.png" alt="" />
                  <a href="#" className="blog_item_date">
                    <h3>15</h3>
                    <p>Jan</p>
                  </a>
                </div>

                <div className="blog_details">
                  <a className="d-inline-block" href="single-blog.html">
                    <h2>Google inks pact for new 35-storey office</h2>
                  </a>
                  <p>That dominion stars lights dominion divide years for fourth have don't stars is that
                      he earth it first without heaven in place seed it second morning saying.</p>
                  <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> Travel, Lifestyle</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> 03 Comments</a></li>
                  </ul>
                </div>
              </article> */}

{articleList.map((article, index) => {
    const date = new Date(article.date);
    const dayOfMonth = date.getDate();
    const monthText = date.toLocaleDateString('en-US', { month: 'long' });

    return (
        <article className="blog_item" key={index}>
            <div className="blog_item_img">
                <img style={{ height: '200px', width: '100%', objectFit: 'cover' }} className="card-img rounded-0" src={`http://localhost:5000/images/${article.images[0]}`} alt={`Article ${index}`} />
                <a href="#" className="blog_item_date">
                    <h3>{dayOfMonth}</h3>
                    <p>{monthText}</p>
                </a>
            </div>

            <div className="blog_details">
                <a className="d-inline-block" href={`/articleDetail/${article._id}`}>
                    <h2>{article.title}</h2>
                </a>
                <p>{article.content}</p>
                <ul className="blog-info-link">
                    <li><a href="#"><i className="fa fa-user"></i> {article.name}</a></li>
                    <li><a href="#"><i className="fa fa-comments"></i> {article.comments.length} Comments</a></li>
                </ul>
            </div>
        </article>
    );
})}

              <nav className="blog-pagination justify-content-center d-flex">
                <ul className="pagination">
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Previous">
                      <i className="ti-angle-left"></i>
                    </a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link">1</a>
                  </li>
                  <li className="page-item active">
                    <a href="#" className="page-link">2</a>
                  </li>
                  <li className="page-item">
                    <a href="#" className="page-link" aria-label="Next">
                      <i className="ti-angle-right"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog_right_sidebar">
              <aside className="single_sidebar_widget search_widget">
                <form action="#">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <input type="text" className="form-control" placeholder='Search Keyword'
                          onFocus={(e) => e.target.placeholder = ''}
                          onBlur={(e) => e.target.placeholder = 'Search Keyword'} />
                      <div className="input-group-append">
                        <button className="btns" type="button"><i className="ti-search"></i></button>
                      </div>
                    </div>
                  </div>
                  <button className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit">Search</button>
                </form>
              </aside>

              <aside className="single_sidebar_widget post_category_widget">
                <h4 className="widget_title">Category</h4>
                <ul className="list cat-list">
                  <li>
                    <a href="#" className="d-flex">
                      <p>Resaurant food</p>
                      <p>(37)</p>
                    </a>
                  </li>
                  {/* Other list items */}
                </ul>
              </aside>

              {/* Other aside widgets */}
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
            {/* <h2>All Articles</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Images</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {articleList.map((article, index) => (
                        <tr key={index}>
                            <td>{article.title}</td>
                            <td>{article.content}</td>
                            <td>
                                <img src={`http://localhost:5000/images/${article.images[0]}`} alt={`Image ${index}`} style={{ width: '100px', height: 'auto' }} />
                            </td>
                            <td>
                                <Link to={`/articleDetail/${article._id}`} className="btn btn-primary">View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
        </div>
    );
};

export default GetArticle;
