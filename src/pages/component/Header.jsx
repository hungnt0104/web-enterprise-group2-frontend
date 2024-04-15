import React from 'react';
// import '../../../public/assets'
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/owl.carousel.min.css';
import '../../assets/css/ticker-style.css';
import '../../assets/css/flaticon.css';
import '../../assets/css/slicknav.css';
import '../../assets/css/animate.min.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/fontawesome-all.min.css';
import '../../assets/css/themify-icons.css';
import '../../assets/css/slick.css';
import '../../assets/css/nice-select.css';
import '../../assets/css/style.css';

const Header = () => {
  return (
    <header>
      {/* Header Start */}
      <div className="header-area">
        <div className="main-header ">
          {/* <div className="header-top black-bg d-none d-sm-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left">
                    <ul>
                      <li className="title"><span className="flaticon-energy"></span> trending-title</li>
                      <li>Class property employ ancho red multi level mansion</li>
                    </ul>
                  </div>
                  <div className="header-info-right">
                    <ul className="header-date">
                      <li><span className="flaticon-calendar"></span> +880166 253 232</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mid gray-bg">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
                  <div className="logo">
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right ">
                    <img src="assets/img/gallery/header_card.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-12 header-flex">
                  {/* Sticky */}
                  <div className="sticky-logo">
                    <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                  {/* Main-menu */}
                  <div className="main-menu d-none d-md-block">
                    <nav>
                      <ul id="navigation">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="category.html">Contribute</a></li>
                        {/* <li><a href="latest_news.html">Latest News</a></li> */}
                        <li><a href="#">My Articles</a>
                          <ul className="submenu">
                            <li><a href="blog.html">Manage My Contribution</a></li>
                            <li><a href="blog_details.html">Blog Details</a></li>
                            <li><a href="elements.html">Element</a></li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="header-right f-right d-none d-lg-block">
                    {/* Header Social */}
                    <div className="nav-search search-switch">
                      <i className="fa fa-search"></i>
                    </div>
                    <ul className="header-social">
                      <li><a href="#">Login</a></li>
                      {/* <li><a href="https://www.fb.com/sai4ull"><i className="fab fa-facebook-f"></i></a></li>
                      <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                      <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i className="fab fa-youtube"></i></a></li> */}
                    </ul>
                    {/* Search Nav */}
                    
                  </div>
                </div>
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-md-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}
    </header>
  );
};

export default Header;