


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
// import '../../assets/img'

const HomePage = () => {
    // const [articleList, setArticleList] = useState([]);
    

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:5000/articles/getArticles');
    //         setArticleList(response.data);
    //     } catch (error) {
    //         console.error('Error fetching articles:', error);
    //     }
    // };

    return (
        
        <div>
            <Header/>
            <main>
    <div class="trending-area fix pt-25 gray-bg">
        <div class="container">
            <div class="trending-main">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="slider-active">
                            <div class="single-slider">
                                <div class="trending-top mb-30">
                                    <div class="trend-top-img">
                                        <img src={require("../assets/img/trending/business_img.jpg")} alt=""/>
                                        <div class="trend-top-cap">
                                            <span class="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">Business</span>
                                            <h2><a href="latest_news.html" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">How to find jobs for first year students</a></h2>
                                            <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">by Linh Vu   -   March 10, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="single-slider">
                                <div class="trending-top mb-30">
                                    <div class="trend-top-img">
                                        <img src={require("../assets/img/trending/trending_top2.jpg")} alt=""/>
                                        <div class="trend-top-cap">
                                            <span class="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">Business</span>
                                            <h2><a href="latest_news.html" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">Anna Lora Stuns In White At Her Australian Premiere</a></h2>
                                            <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">by Alice cloe   -   Jun 19, 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="single-slider">
                                <div class="trending-top mb-30">
                                    <div class="trend-top-img">
                                        <img src={require("../assets/img/trending/trending_top2.jpg")} alt=""/>
                                        <div class="trend-top-cap">
                                            <span class="bgr" data-animation="fadeInUp" data-delay=".2s" data-duration="1000ms">Business</span>
                                            <h2><a href="latest_news.html" data-animation="fadeInUp" data-delay=".4s" data-duration="1000ms">Anna Lora Stuns In White At Her Australian Premiere</a></h2>
                                            <p data-animation="fadeInUp" data-delay=".6s" data-duration="1000ms">by Alice cloe   -   Jun 19, 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="row">
                            <div class="col-lg-12 col-md-6 col-sm-6">
                                <div class="trending-top mb-30">
                                    <div class="trend-top-img">
                                    <img src={require("../assets/img/trending/trending_top2.jpg")} alt=""/>                                    <div class="trend-top-cap trend-top-cap2">
                                            <span class="bgb">IT</span>
                                            <h2><a href="latest_news.html">New way to learn for IT students</a></h2>
                                            <p>by Tam Tran   -   April 14, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-6 col-sm-6">
                                <div class="trending-top mb-30">
                                    <div class="trend-top-img">
                                    <img src={require("../assets/img/trending/design.jpg")} alt=""/>
                                        <div class="trend-top-cap trend-top-cap2">
                                            <span class="bgg">Design </span>
                                            <h2><a href="latest_news.html">How to complete design assignments successfully</a></h2>
                                            <p>by Le Duy   -   April 13, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                <h3>New Articles</h3>
                            </div>
                        </div>
                        <div class="col-xl-8 col-md-9">
                            <div class="properties__button">                                    
                                <nav>                                                 
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Business</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">IT</a>
                                        <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Design</a>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">       
                                    <div class="row">
                                        <div class="col-xl-6 col-lg-12">
                                            <div class="whats-news-single mb-40 mb-40">
                                                <div class="whates-img">
                                                    <img src={require("../assets/img/trending/trending_top2.jpg")} alt=""/>
                                                </div>
                                                <div class="whates-caption">
                                                    <h4><a href="latest_news.html">Secretart for Economic Air plane that looks like</a></h4>
                                                    <span>by Alice cloe   -   Jun 19, 2020</span>
                                                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-12">
                                            <div class="row">
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src={require("../assets/img/gallery/whats_right_img1.png")} alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img2.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img3.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorg">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img4.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorr">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div class="whats-news-single mb-40">
                                                <div class="whates-img">
                                                    <img src="../assets/img/gallery/whats_right_img2.png" alt=""/>
                                                </div>
                                                <div class="whates-caption">
                                                    <h4><a href="#">Secretart for Economic Air
                                                        plane that looks like</a></h4>
                                                    <span>by Alice cloe   -   Jun 19, 2020</span>
                                                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-12">
                                            <div class="row">
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img1.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img2.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img3.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorg">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img4.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorr">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div class="whats-news-single mb-40">
                                                <div class="whates-img">
                                                    <img src="../assets/img/gallery/whats_right_img4.png" alt=""/>
                                                </div>
                                                <div class="whates-caption">
                                                    <h4><a href="#">Secretart for Economic Air
                                                        plane that looks like</a></h4>
                                                    <span>by Alice cloe   -   Jun 19, 2020</span>
                                                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-12">
                                            <div class="row">
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img1.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img2.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img3.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorg">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img4.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorr">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div class="whats-news-single mb-40">
                                                <div class="whates-img">
                                                    <img src="../assets/img/gallery/whats_right_img2.png" alt=""/>
                                                </div>
                                                <div class="whates-caption">
                                                    <h4><a href="#">Secretart for Economic Air
                                                        plane that looks like</a></h4>
                                                    <span>by Alice cloe   -   Jun 19, 2020</span>
                                                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-12">
                                            <div class="row">
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img1.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img2.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img3.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorg">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img4.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorr">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                                    <div class="row">
                                        <div class="col-xl-6">
                                            <div class="whats-news-single mb-40">
                                                <div class="whates-img">
                                                    <img src="../assets/img/gallery/whats_news_details1.png" alt=""/>
                                                </div>
                                                <div class="whates-caption">
                                                    <h4><a href="#">Secretart for Economic Air
                                                        plane that looks like</a></h4>
                                                    <span>by Alice cloe   -   Jun 19, 2020</span>
                                                    <p>Struggling to sell one multi-million dollar home currently on the market won’t stop actress and singer Jennifer Lopez.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6 col-lg-12">
                                            <div class="row">
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img1.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img2.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorb">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img3.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorg">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12 col-lg-6 col-md-6 col-sm-10">
                                                    <div class="whats-right-single mb-20">
                                                        <div class="whats-right-img">
                                                            <img src="../assets/img/gallery/whats_right_img4.png" alt=""/>
                                                        </div>
                                                        <div class="whats-right-cap">
                                                            <span class="colorr">FASHION</span>
                                                            <h4><a href="latest_news.html">Portrait of group of friends ting eat. market in.</a></h4>
                                                            <p>Jun 19, 2020</p> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banner-one mt-20 mb-30">
                    <img src="../assets/img/gallery/body_card1.png" alt=""/>
                </div>
                </div>
                <div class="col-lg-4">
                    {/* <div class="single-follow mb-45">
                        <div class="single-box">
                            <div class="follow-us d-flex align-items-center">
                                <div class="follow-social">
                                    <a href="#"><img src="../assets/img/news/icon-fb.png" alt=""/></a>
                                </div>
                                <div class="follow-count">  
                                    <span>8,045</span>
                                    <p>Fans</p>
                                </div>
                            </div> 
                            <div class="follow-us d-flex align-items-center">
                                <div class="follow-social">
                                    <a href="#"><img src="../assets/img/news/icon-tw.png" alt=""/></a>
                                </div>
                                <div class="follow-count">
                                    <span>8,045</span>
                                    <p>Fans</p>
                                </div>
                            </div>
                                <div class="follow-us d-flex align-items-center">
                                <div class="follow-social">
                                    <a href="#"><img src="../assets/img/news/icon-ins.png" alt=""/></a>
                                </div>
                                <div class="follow-count">
                                    <span>8,045</span>
                                    <p>Fans</p>
                                </div>
                            </div>
                            <div class="follow-us d-flex align-items-center">
                                <div class="follow-social">
                                    <a href="#"><img src="../assets/img/news/icon-yo.png" alt=""/></a>
                                </div>
                                <div class="follow-count">
                                    <span>8,045</span>
                                    <p>Fans</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="most-recent-area">
                        <div class="small-tittle mb-20">
                            <h4>Most Recent</h4>
                        </div>
                        <div class="most-recent mb-40">
                            <div class="most-recent-img">
                                <img src="../assets/img/gallery/most_recent.png" alt=""/>
                                <div class="most-recent-cap">
                                    <span class="bgbeg">Vogue</span>
                                    <h4><a href="latest_news.html">What to Wear: 9+ Cute Work <br/>
                                        Outfits to Wear This.</a></h4>
                                    <p>Jhon  |  2 hours ago</p>
                                </div>
                            </div>
                        </div>
                        <div class="most-recent-single">
                            <div class="most-recent-images">
                                <img src="../assets/img/gallery/most_recent1.png" alt=""/>
                            </div>
                            <div class="most-recent-capt">
                                <h4><a href="latest_news.html">Scarlett’s disappointment at latest accolade</a></h4>
                                <p>Jhon  |  2 hours ago</p>
                            </div>
                        </div>
                        <div class="most-recent-single">
                            <div class="most-recent-images">
                                <img src="../assets/img/gallery/most_recent2.png" alt=""/>
                            </div>
                            <div class="most-recent-capt">
                                <h4><a href="latest_news.html">Most Beautiful Things to Do in Sidney with Your BF</a></h4>
                                <p>Jhon  |  3 hours ago</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="weekly2-news-area pt-50 pb-30 gray-bg">
        <div class="container">
            <div class="weekly2-wrapper">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="home-banner2 d-none d-lg-block">
                            <img src="../assets/img/gallery/body_card2.png" alt=""/>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="slider-wrapper">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="small-tittle mb-30">
                                        <h4>Most Popular</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="weekly2-news-active d-flex">
                                        <div class="weekly2-single">
                                            <div class="weekly2-img">
                                                <img src="../assets/img/gallery/weeklyNews1.png" alt=""/>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>           
    <div class="recent-articles pt-80 pb-80">
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
    </div>           

    <div class="weekly3-news-area pt-80 pb-130">
        <div class="container">
            <div class="weekly3-wrapper">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="slider-wrapper">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="weekly3-news-active dot-style d-flex">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>           
    <div class="banner-area gray-bg pt-90 pb-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10 col-md-10">
                    <div class="banner-one">
                        <img src="../assets/img/gallery/body_card3.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
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

export default HomePage;
