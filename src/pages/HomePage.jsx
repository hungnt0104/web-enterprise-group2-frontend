


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
// import '../../assets/img'

const HomePage = () => {
    const [articleList, setArticleList] = useState([]);
    const [facultyList, setFacultyList] = useState([]);
    const [currentEvent, setCurrentEvent] = useState("");
    // const facultyName = `nav-${facultyList.name}-tab`
    let allArticles = []
    let title = ""
    let content = ""

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await axios.get("/admin/faculty")
            // console.log(data)

            const event = await axios.get("/admin/currentEvent")
            // setCurrentEvent(event.data)
            // console.log(event, currentEvent)
            const response = await axios.get(`/articles/getCurrentSelectedArticles/${event.data._id}`);
            setArticleList(response.data);
            allArticles = response.data
            // console.log(allArticles)
            title = allArticles[0].title
            // console.log(title)
            // console.log(response.data)
            
            // console.log(articleList)

                if(data.data.success){
                setFacultyList(data.data.data)
                // console.log(facultyList)
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
    

    return (
        // articleList && 
        <div>

            <Header/>
            <main>
    <div class="trending-area fix pt-25 gray-bg">
        <div class="container">
            <h1 align="center" class="section-tittle mb-30">Articles in this semester</h1>
            <div class="trending-main">
                <div class="row">
                <div className="col-lg-8">
    <div className="slider-active">
        {articleList.map((article, index) => {
            if (index === 2) {  // Check if the current index is 2 (third article)
                const date = new Date(article.date);
                const dayOfMonth = date.getDate();
                const monthText = date.toLocaleDateString('en-US', { month: 'long' });

                return (
                    <div className="single-slider" key={index}>
                        <div className="trending-top mb-30">
                            <div className="trend-top-img">
                                <img src={`http://localhost:5000/images/${article.images[0]}`} alt={`Article ${index}`} />
                                <div className="trend-top-cap">
                                    <span className="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">Business</span>
                                    <h2><a href={`/${article._id}`} data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">{article.title}</a></h2>
                                    <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">by {article.name} - {monthText} {dayOfMonth}, {date.getFullYear()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            return null; // Return null for other indices
        })}
    </div>
</div>
                    <div class="col-lg-4">
    <div class="row">
        
            {articleList.slice(0, 2).map((article, index) => (
    <div key={index} className="col-lg-12 col-md-6 col-sm-6">
        <div className="trending-top mb-30">
            <div className="trend-top-img">
                <img src={`http://localhost:5000/images/${article.images[0]}`} alt={`Article ${index}`} />
                <div className="trend-top-cap trend-top-cap2">
                    <span className={`bgg`}>{article.department}</span>
                    <h2><a href={`${article._id}`}>{article.title}</a></h2>
                    <p>by {article.name} - {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                </div>
            </div>
        </div>
    </div>
))}
        
        
    </div>
</div>

                </div>
            </div>
        </div>
    </div>
    <section class="whats-news-area pt-50 pb-20 gray-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                <div class="whats-news-wrapper">
                    <div class="row justify-content-between align-items-end mb-15">
                        <div class="col-xl-4">
                            <div class="section-tittle mb-30">
                                <h3>New Articles By Faculty</h3>
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
                            {/* <div class="tab-content" id="nav-tabContent"> */}
                            <div className="tab-content" id="nav-tabContent">
                            {facultyList.map((faculty) => (
                                <div
                                key={faculty.name}
                                className={`tab-pane fade ${facultyList.indexOf(faculty) === 0 ? 'show active' : ''}`}
                                id={`nav-${faculty.name}`}
                                role="tabpanel"
                                aria-labelledby={`nav-${faculty.name}-tab`}
                                >
                                <div className="row">
                                    {/* Main Article */}
                                    {articleList
                                    .filter(article => article.department === faculty.name)
                                    .sort((a, b) => b.id - a.id) // Assuming articles are sorted by ID or date
                                    .slice(0, 1) // Get only the first article after sorting
                                    .map(article => (
                                        <div key={article.id} className="col-xl-6">
                                        <div className="whats-news-single mb-40">
                                            <div className="whates-img">
                                                                                    <img
                                                                                        src={`http://localhost:5000/images/${article.images[0]}`}
                                                                                    />
                                            </div>
                                            <div className="whates-caption">
                                            <h4><a href={article._id}>{article.title}</a></h4>
                                            <span>by {article.name} - {article.date}</span>
                                            <p>{article.content}</p>
                                            </div>
                                        </div>
                                        </div>
                                    ))}

        {/* Remaining Articles */}
        <div className="col-xl-6 col-lg-12">
    <div className="row">
        {articleList
            .filter(article => article.department === faculty.name) // Filter articles by department matching faculty name
            .sort((a, b) => b.id - a.id) // Sort articles by id in descending order
            .slice(1, 4) // Get articles from the second to the sixth (maximum four articles)
            .map(article => (
                <div key={article.id} className="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                    <div className="whats-right-single mb-20">
                        <div className="whats-right-img">
                            <img
                                height='104px'
                                src={`http://localhost:5000/images/${article.images[0]}`} // Assuming `images` is an array and you want the first image
                                alt={article.title} // Always provide an alt attribute for accessibility
                            />
                        </div>
                        <div className="whats-right-cap">
                            <h4><a href="latest_news.html">{article.title}</a></h4>
                            <p>{article.date}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
</div>
      </div>
    </div>
  ))}
</div>
                
                        </div>
                    </div>
                </div>
                {/* <div class="banner-one mt-20 mb-30">
                    <img src="../assets/img/gallery/body_card1.png" alt=""/>
                </div> */}
                </div>
                <div class="col-lg-4">
                    <div className="most-recent-area">
    <div className="small-tittle mb-20">
        <h4>Most Recent</h4>
    </div>
    <div className="most-recent mb-40">
        {/* Most recent (last in the list) */}
        {articleList.slice(-1).map(article => (
            <div key={article.id} className="most-recent-img">
                <img src={`http://localhost:5000/images/${article.images[0]}`}  />
                <div className="most-recent-cap">
                    <span className="bgbeg">MOST RECENT</span>
                    <h4><a href={article._id}>{article.title}</a></h4>
                    <p>{article.name}  |  {article.timeAgo}</p>
                </div>
            </div>
        ))}
    </div>
    {/* Second and third most recent */}
    {articleList.slice(-3, -1).map(article => (
        <div key={article.id} className="most-recent-single">
            <div className="most-recent-images">
            <img src={`http://localhost:5000/images/${article.images[0]}`}  width='85px'/>
            </div>
            <div className="most-recent-capt">
                <h4><a href={article._id}>{article.title}</a></h4>
                <p>{article.name}  |  {article.date}</p>
            </div>
        </div>
    ))}
</div>
                </div>
            </div>
        </div>
    </section>
    <div class="weekly2-news-area pt-50 pb-30 gray-bg">
        <div class="container">
            <div class="weekly2-wrapper">
                <div class="row">
                    {/* <div class="col-lg-3">
                        <div class="home-banner2 d-none d-lg-block">
                            <img src="../assets/img/gallery/body_card2.png" alt=""/>
                        </div>
                    </div> */}
                    <div class="col-lg-12">
                        <div class="slider-wrapper">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="small-tittle mb-30">
                                        <h4>Most Comment</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="weekly2-news-active d-flex">
                                        {topFiveArticles.map(article => (
                                            <div class="weekly2-single">
                                                <div class="weekly2-img">
                                                <img style={{ height: '300px' }} src={`http://localhost:5000/images/${article.images[0]}`} alt="" />
                                                </div>
                                                <div class="weekly2-caption">
                                                    <h4><a href={article._id}>{article.title}</a></h4>
                                                    <p>{article.name} | {article.comments.length} Comments</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="weekly2-news-active d-flex">
                                    <div class="weekly2-single">
    <div class="weekly2-img">
        {/* <img src={`http://localhost:5000/images/${topFiveArticles[0].images[0]}`} alt=""/> */}
    </div>
</div>
                                        {/* <div class="weekly2-single">
                                            <div class="weekly2-img">
                                                <img src="../assets/img/gallery/weeklyNews2.png" alt=""/>
                                            </div>
                                            <div class="weekly2-caption">
                                                <h4><a href="#">Scarlett’s disappointment at latest accolade</a></h4>
                                                <p>Jhon  |  2 hours ago</p>
                                            </div>
                                        </div> 
                                        <div class="weekly2-single">
                                            <div class="weekly2-img">
                                                <img src="../assets/img/gallery/weeklyNews2.png" alt=""/>
                                            </div>
                                            <div class="weekly2-caption">
                                                <h4><a href="#">Scarlett’s disappointment at latest accolade</a></h4>
                                                <p>Jhon  |  2 hours ago</p>
                                            </div>
                                        </div> 
                                        <div class="weekly2-single">
                                            <div class="weekly2-img">
                                                <img src="../assets/img/gallery/weeklyNews2.png" alt=""/>
                                            </div>
                                            <div class="weekly2-caption">
                                                <h4><a href="#">Scarlett’s disappointment at latest accolade</a></h4>
                                                <p>Jhon  |  2 hours ago</p>
                                            </div>
                                        </div>  */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>           
    {/* <div class="recent-articles pt-80 pb-80">
        <div class="container">
            <div class="recent-wrapper">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-tittle mb-30">
                            <h3>Trending  News</h3>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="recent-active dot-style d-flex dot-style">
                            <div class="single-recent">
                                <div class="what-img">
                                    <img src="../assets/img/gallery/tranding1.png" alt=""/>
                                </div>
                                <div class="what-cap">
                                    <h4><a href="#" > <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4></a></h4>
                                    <p>Jun 19, 2020</p>
                                    <a class="popup-video btn-icon" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><span class="flaticon-play-button"></span></a>
                                    
                                </div>
                            </div>
                            <div class="single-recent">
                                <div class="what-img">
                                    <img src="../assets/img/gallery/tranding2.png" alt=""/>
                                </div>
                                <div class="what-cap">
                                    <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                                    <p>Jun 19, 2020</p>
                                    <a class="popup-video" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><span class="flaticon-play-button"></span></a>
                                </div>
                            </div>
                            <div class="single-recent">
                                <div class="what-img">
                                    <img src="../assets/img/gallery/tranding1.png" alt=""/>
                                </div>
                                <div class="what-cap">
                                    <h4><a href="latest_news.html"> <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4></a></h4>
                                    <p>Jun 19, 2020</p>
                                    <a class="popup-video" href="https://www.youtube.com/watch?v=1aP-TXUpNoU"><span class="flaticon-play-button"></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>            */}

{/* <div className="weekly3-news-area pt-80 pb-130">
    <div className="container">
        <div className="weekly3-wrapper">
            <div className="row">
                <div className="col-lg-12">
                    <div className="slider-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="weekly3-news-active dot-style d-flex">
                                    {articleList.map((article, index) => (
                                        <div key={index} className="weekly3-single">
                                            <div className="weekly3-img">
                                                <img src={`http://localhost:5000/images/${article.images[0]}`} alt=""/>
                                            </div>
                                            <div className="weekly3-caption">
                                                <h4><a href="#">{article.title}</a></h4>
                                                <p>{article.date}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div> */}
                                    {/* <div class="weekly3-news-active dot-style d-flex">
                                        <div class="weekly3-single">
                                            <div class="weekly3-img">
                                                <img src="../assets/img/gallery/weekly2News1.png" alt=""/>
                                            </div>
                                            <div class="weekly3-caption">
                                                <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                                                <p>19 Jan 2020</p>
                                            </div>
                                        </div> 
                                        <div class="weekly3-single">
                                            <div class="weekly3-img">
                                                <img src="../assets/img/gallery/weekly2News2.png" alt=""/>
                                            </div>
                                            <div class="weekly3-caption">
                                                <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                                                <p>19 Jan 2020</p>
                                            </div>
                                        </div> 
                                        <div class="weekly3-single">
                                            <div class="weekly3-img">
                                                <img src="../assets/img/gallery/weekly2News3.png" alt=""/>
                                            </div>
                                            <div class="weekly3-caption">
                                                <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                                                <p>19 Jan 2020</p>
                                            </div>
                                        </div>
                                        <div class="weekly3-single">
                                            <div class="weekly3-img">
                                                <img src="../assets/img/gallery/weekly2News4.png" alt=""/>
                                            </div>
                                            <div class="weekly3-caption">
                                                <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                                                <p>19 Jan 2020</p>
                                            </div>
                                        </div> 
                                        <div class="weekly3-single">
                                            <div class="weekly3-img">
                                                <img src="../assets/img/gallery/weekly2News2.png" alt=""/>
                                            </div>
                                            <div class="weekly3-caption">
                                                <h4><a href="latest_news.html">What to Expect From the 2020 Oscar Nomin ations</a></h4>
                                                <p>19 Jan 2020</p>
                                            </div>
                                        </div> 
                                    </div> */}
                                {/* </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>       */}
</main>
    <Footer/>
        </div>
    );
};

export default HomePage;
