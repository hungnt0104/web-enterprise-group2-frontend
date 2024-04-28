/* eslint-disable jsx-a11y/anchor-is-valid */

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Header from './component/Header';
// import Footer from './component/Footer';
// import Sidebar from './component/Sidebar'; // Import the Sidebar component

// const GetArticle = () => {
//     const [articleList, setArticleList] = useState([]);
//     const [displayedArticles, setDisplayedArticles] = useState([]);
//     const faculty = window.localStorage.getItem("department")

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`/articles/getFacultyArticles/${faculty}`);
//             setArticleList(response.data);
//             setDisplayedArticles(response.data);
//         } catch (error) {
//             console.error('Error fetching articles:', error);
//         }
//     };

//     const handleSearch = (e) => {
//         e.preventDefault();
//         const searchInput = e.target.querySelector('input[type="text"]');
//         if (searchInput) {
//             const keyword = searchInput.value.trim().toLowerCase();
//             // Check if keyword is a string before performing search
//             if (typeof keyword === 'string' && keyword.length > 0) {
//             const filtered = articleList.filter(article =>
//                 article.title.toLowerCase().includes(keyword)
//             );
//             setDisplayedArticles(filtered);
//             } else {
//             // If keyword is empty or not a string, reset the article list
//             setDisplayedArticles(articleList);
//             }
//         }
//     };

//     const removeSort = () => {
//         setDisplayedArticles(articleList);
//     }

//     const sortByComments = () => {
//       const sortedArticles = [...articleList].sort((a, b) => b.comments.length - a.comments.length);
//       setDisplayedArticles(sortedArticles);
//   };

//   const sortByDate = () => {
//       const sortedArticles = [...articleList].sort((a, b) => new Date(a.date) - new Date(b.date));
//       setDisplayedArticles(sortedArticles);
//   };

//   const sortByName = () => {
//       const sortedArticles = [...articleList].sort((a, b) => a.title.localeCompare(b.title));
//       setDisplayedArticles(sortedArticles);
//   };

//   const [currentPage, setCurrentPage] = useState(1);
//     const articlesPerPage = 5;

//     // Calculate the current articles to display
//     const indexOfLastArticle = currentPage * articlesPerPage;
//     const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
//     const currentArticles = displayedArticles.slice(indexOfFirstArticle, indexOfLastArticle);

//     // Change page handler
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const totalPages = Math.ceil(displayedArticles.length / articlesPerPage);

//     return (
//         <div>
//             <Header />
//             <section className="blog_area section-padding">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-8 mb-5 mb-lg-0">
//                             <div className="blog_left_sidebar">
//                             {currentArticles.map((article, index) => {
//                 const date = new Date(article.date);
//                 const dayOfMonth = date.getDate();
//                 const monthText = date.toLocaleDateString('en-US', { month: 'long' });

//                 return (
//                     <article className="blog_item" key={index}>
//                         <div className="blog_item_img">
//                             <img
//                                 style={{ height: '200px', width: '100%', objectFit: 'cover' }}
//                                 className="card-img rounded-0"
//                                 src={`https://web-enterprise-group2-backend-test.onrender.com/images/${article.images[0]}`}
//                                 alt={`Article ${index}`}
//                             />
//                             <a href="#" className="blog_item_date">
//                                 <h3>{dayOfMonth}</h3>
//                                 <p>{monthText}</p>
//                             </a>
//                         </div>
//                         <div className="blog_details">
//                             <a className="d-inline-block" href={`/${article._id}`}>
//                                 <h2>{article.title}</h2>
//                             </a>
//                             <p>{article.content}</p>
//                             <ul className="blog-info-link">
//                                 <li><a href="#"><i className="fa fa-user"></i> {article.name}</a></li>
//                                 <li><a href="#"><i className="fa fa-comments"></i> {article.comments.length} Comments</a></li>
//                             </ul>
//                         </div>
//                     </article>
//                 );
//             })}

//             <nav className="blog-pagination justify-content-center d-flex">
//                 <ul className="pagination">
//                     <li className="page-item">
//                         <a href="#" className="page-link" aria-label="Previous" onClick={() => paginate(Math.max(currentPage - 1, 1))}>
//                             <i className="ti-angle-left"></i>
//                         </a>
//                     </li>
//                     {Array.from({ length: totalPages }, (_, i) => (
//                         <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
//                             <a href="#" className="page-link" onClick={() => paginate(i + 1)}>
//                                 {i + 1}
//                             </a>
//                         </li>
//                     ))}
//                     <li className="page-item">
//                         <a href="#" className="page-link" aria-label="Next" onClick={() => paginate(Math.min(currentPage + 1, totalPages))}>
//                             <i className="ti-angle-right"></i>
//                         </a>
//                     </li>
//                 </ul>
//             </nav>
//                             </div>
//                         </div>
//                         <Sidebar
//                             removeSort={removeSort}
//                             handleSearch={handleSearch}
//                             sortByComments={sortByComments}
//                             sortByDate={sortByDate}
//                             sortByName={sortByName}
//                         />
//                     </div>
//                 </div>
//             </section>
//             <Footer />
//         </div>
//     );
// };

// export default GetArticle;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Sidebar from './component/Sidebar';

const GetArticle = () => {
    const [articleList, setArticleList] = useState([]);
    const [displayedArticles, setDisplayedArticles] = useState([]);
    const faculty = window.localStorage.getItem("department");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`/articles/getFacultyArticles/${faculty}`);
            setArticleList(response.data);
            setDisplayedArticles(response.data);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const searchInput = e.target.querySelector('input[type="text"]');
        if (searchInput) {
            const keyword = searchInput.value.trim().toLowerCase();
            if (typeof keyword === 'string' && keyword.length > 0) {
                const filtered = articleList.filter(article =>
                    article.title.toLowerCase().includes(keyword)
                );
                setDisplayedArticles(filtered);
            } else {
                setDisplayedArticles(articleList);
            }
        }
    };

    const removeSort = () => {
        setDisplayedArticles(articleList);
    };

    const sortByComments = () => {
        const sortedArticles = [...articleList].sort((a, b) => b.comments.length - a.comments.length);
        setDisplayedArticles(sortedArticles);
    };

    const sortByDate = () => {
        const sortedArticles = [...articleList].sort((a, b) => new Date(a.date) - new Date(b.date));
        setDisplayedArticles(sortedArticles);
    };

    const sortByName = () => {
        const sortedArticles = [...articleList].sort((a, b) => a.title.localeCompare(b.title));
        setDisplayedArticles(sortedArticles);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 5;
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = displayedArticles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(displayedArticles.length / articlesPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Header />
            <section className="blog_area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="blog_left_sidebar">
                                {currentArticles.map((article, index) => (
                                    <article className="blog_item" key={index}>
                                        <div className="blog_item_img">
                                            <img
                                                style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                                                className="card-img rounded-0"
                                                src={`https://web-enterprise-group2-backend-test.onrender.com/images/${article.images[0]}`}
                                                alt={`Article ${index}`}
                                            />
                                            <a href="#" className="blog_item_date">
                                                <h3>{new Date(article.date).getDate()}</h3>
                                                <p>{new Date(article.date).toLocaleDateString('en-US', { month: 'long' })}</p>
                                            </a>
                                        </div>
                                        <div className="blog_details">
                                            <Link className="d-inline-block" to={`/${article._id}`}>
                                                <h2>{article.title}</h2>
                                            </Link>
                                            <p>{article.content}</p>
                                            <ul className="blog-info-link">
                                                <li><a href="#"><i className="fa fa-user"></i> {article.name}</a></li>
                                                <li><a href="#"><i className="fa fa-comments"></i> {article.comments.length} Comments</a></li>
                                            </ul>
                                        </div>
                                    </article>
                                ))}

                                <nav className="blog-pagination justify-content-center d-flex">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Previous" onClick={() => paginate(Math.max(currentPage - 1, 1))}>
                                                <i className="ti-angle-left"></i>
                                            </a>
                                        </li>
                                        {Array.from({ length: totalPages }, (_, i) => (
                                            <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                                                <a href="#" className="page-link" onClick={() => paginate(i + 1)}>
                                                    {i + 1}
                                                </a>
                                            </li>
                                        ))}
                                        <li className="page-item">
                                            <a href="#" className="page-link" aria-label="Next" onClick={() => paginate(Math.min(currentPage + 1, totalPages))}>
                                                <i className="ti-angle-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <Sidebar
                            removeSort={removeSort}
                            handleSearch={handleSearch}
                            sortByComments={sortByComments}
                            sortByDate={sortByDate}
                            sortByName={sortByName}
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default GetArticle;

