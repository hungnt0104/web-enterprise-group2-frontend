


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
// import '../../assets/img'

const HomePage = () => {
    const [articleList, setArticleList] = useState([]);
    const [facultyList, setFacultyList] = useState([]);
    // const facultyName = `nav-${facultyList.name}-tab`
    let allArticles = []
    let title = ""
    let content = ""

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/articles/getSelectedArticles');
            setArticleList(response.data);
            allArticles = response.data
            // console.log(allArticles)
            title = allArticles[0].title
            console.log(title)
            // console.log(response.data)
            const data = await axios.get("/admin/faculty")
            // console.log(data)
            // console.log(articleList)

                if(data.data.success){
                setFacultyList(data.data.data)
                console.log(facultyList)
                // alert(data.data.message)
            }
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };

    // Create an array of indices of articleList sorted by the number of comments
    const sortedIndices = [...articleList.keys()].sort((a, b) => articleList[b].comments.length - articleList[a].comments.length);

    // Select the top 5 articles using the sorted indices
    const topFiveArticles = sortedIndices.slice(0, 4).map(index => articleList[index]);
    // console.log(allArticles)
    
    const [currentPage, setCurrentPage] = useState(0);
    const articlesPerPage = 6;

    const indexOfLastArticle = (currentPage + 1) * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const changePage = (newPage) => {
        setCurrentPage(newPage);
    }

    return (
        facultyList && articleList &&
        <div>
            <Header/>
        <div class="about-area2 gray-bg pt-60 pb-60">
        <div class="container">
                <div class="row">
                <div class="col-lg-12">
                    <div class="whats-news-wrapper">
                            <div class="row justify-content-between align-items-end mb-15">
                                <div class="col-xl-4">
                                    <div class="section-tittle mb-30">
                                        <h3>Articles in all semesters</h3>
                                    </div>
                                </div>
                                <div class="col-xl-8 col-md-9">
                                    <div class="properties__button">  
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    {facultyList.map((faculty, index) => (
                                    <a
                                        key={faculty.name} // Use faculty name for uniqueness if it's guaranteed to be unique
                                        className={`nav-item nav-link ${index === 0 ? 'active' : ''}`} // Only the first tab is active
                                        id={`nav-${faculty.name}-tab`}
                                        data-toggle="tab"
                                        href={`#nav-${faculty.name}`}
                                        role="tab"
                                        aria-controls={`nav-${faculty.name}`}
                                        aria-selected={index === 0 ? "true" : "false"} // Reflects active state
                                        style={{ color: 'grey' }}
                                    >
                                        {faculty.name}
                                    </a>
                                    ))}
                                </div>
                                
                                </nav>            
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="tab-content" id="nav-tabContent">
                                    {facultyList.map((faculty, index) => (
                <div
                    key={faculty.name}
                    className={`tab-pane fade ${index === 0 ? 'show active' : ''}`}
                    id={`nav-${faculty.name}`}
                    role="tabpanel"
                    aria-labelledby={`nav-${faculty.name}-tab`}
                >
                    <div className="row">
                        <div className="row">
                            {articleList
                                .filter(article => article.department === faculty.name)
                                .sort((a, b) => b.id - a.id)
                                .slice(indexOfFirstArticle, indexOfLastArticle)
                                .map(article => (
                                    <div key={article.id} className="col-xl-4 col-lg-4 col-md-4">
                                        <div className="whats-news-single mb-40">
                                            <div className="whates-img">
                                                <img
                                                    src={`http://localhost:5000/images/${article.images[0]}`}
                                                    alt={article.title}
                                                />
                                            </div>
                                            <div className="whates-caption whates-caption2">
                                                <h4><a href={article._id}>{article.title}</a></h4>
                                                <span>by {article.name} - {article.date}</span>
                                                <p>{article.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            ))}
                                    {/* {facultyList.map((faculty) => (
                                <div
                                key={faculty.name}
                                className={`tab-pane fade ${facultyList.indexOf(faculty) === 0 ? 'show active' : ''}`}
                                id={`nav-${faculty.name}`}
                                role="tabpanel"
                                aria-labelledby={`nav-${faculty.name}-tab`}
                                >
                                <div className="row">
    <div className="row">
    {articleList
    .filter(article => article.department === faculty.name) // Filter articles by department matching faculty name
    .sort((a, b) => b.id - a.id) // Sort articles by id in descending order
    .map(article => (
        <div key={article.id} className="col-xl-4 col-lg-4 col-md-4">
            <div className="whats-news-single mb-40">
                <div className="whates-img">
                    <img
                        src={`http://localhost:5000/images/${article.images[0]}`} // Assuming `images` is an array and you want the first image
                        alt={article.title} // Always provide an alt attribute for accessibility
                    />
                </div>
                <div className="whates-caption whates-caption2">
                    <h4><a href="#">{article.title}</a></h4>
                    <span>by {article.author} - {article.date}</span>
                    <p>{article.content}</p>
                </div>
            </div>
        </div>
    ))}
    </div>
</div>
      </div>
    // </div>
  ))} */}
                                    </div>
                                {/* <!-- End Nav Card --> */}
                                </div>
                            </div>
                    </div>
                    </div>
                    <div class="col-lg-4">
                        
                    </div>
                </div>
        </div>
    </div>
    <div className="pagination-area gray-bg pb-45">
    <div className="container">
        <div className="row">
            <div className="col-xl-12">
                <div className="single-wrap">
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-start">
                            
                        {Array.from({ length: Math.ceil(articleList.length / articlesPerPage) }, (_, i) => (
        <li className={`page-item ${currentPage === i ? 'active' : ''}`} key={i} style={{ color: 'grey' }}>
        <a className="page-link" onClick={() => changePage(i)}>
            {i + 1}
        </a>
    </li>
    ))}
                                
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>
    <Footer/>
    </div>
    );
};

export default HomePage;
