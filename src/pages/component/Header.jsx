// import React from 'react';
// import { useEffect } from 'react';
// import '../../assets/css/dashboard.css';
// import '../../assets/css/bootstrap.min.css';
// import '../../assets/css/owl.carousel.min.css';
// import '../../assets/css/ticker-style.css';
// import '../../assets/css/flaticon.css';
// import '../../assets/css/slicknav.css';
// import '../../assets/css/animate.min.css';
// import '../../assets/css/magnific-popup.css';
// import '../../assets/css/fontawesome-all.min.css';
// import '../../assets/css/themify-icons.css';
// import '../../assets/css/slick.css';
// import '../../assets/css/nice-select.css';
// import '../../assets/css/style.css';


// const Header = () => {
//   const name = window.localStorage.getItem('name');
//   const isLoggedIn = window.localStorage.getItem("loggedIn");

//   useEffect(() => {
//     // Function to include JavaScript files dynamically
//     function includeJS(src) {
//       const script = document.createElement('script');
//       script.src = src;
//       script.async = true;
//       document.body.appendChild(script);
//     }

//     // Include all the JavaScript files
//     includeJS('../../assets/js/vendor/jquery-1.12.4.min.js'); // Load jQuery first

// includeJS('../../assets/js/popper.min.js');
// includeJS('../../assets/js/bootstrap.min.js');
// includeJS('../../assets/js/jquery.slicknav.min.js');
// includeJS('../../assets/js/owl.carousel.min.js');
// includeJS('../../assets/js/slick.min.js');
// includeJS('../../assets/js/gijgo.min.js');
// includeJS('../../assets/js/wow.min.js');
// includeJS('../../assets/js/animated.headline.js');
// includeJS('../../assets/js/jquery.magnific-popup.js');
// includeJS('../../assets/js/jquery.scrollUp.min.js');
// includeJS('../../assets/js/jquery.nice-select.min.js');
// includeJS('../../assets/js/jquery.sticky.js');
// includeJS('../../assets/js/contact.js');
// includeJS('../../assets/js/jquery.form.js');
// includeJS('../../assets/js/jquery.validate.min.js');
// includeJS('../../assets/js/mail-script.js');
// includeJS('../../assets/js/jquery.ajaxchimp.min.js');
// includeJS('../../assets/js/plugins.js');
// includeJS('../../assets/js/main.js');
// includeJS('../../assets/js/vendor/modernizr-3.5.0.min.js');
    
//     // Clean up function
//     return () => {
//       // Remove the included scripts when the component unmounts
//       const scripts = document.querySelectorAll('script[src^="../assets/js"]');
//       scripts.forEach(script => {
//         document.body.removeChild(script);
//       });
//     };
//   }, []);

//   return (
    
//     <header>
//       <link rel="manifest" href="site.webmanifest" />
//       {/* Header Start */}
//       <div className="header-area">
//         <div className="main-header ">
//           <div className="header-top black-bg d-none d-sm-block">
//             <div className="container">
//               <div className="col-xl-12">
//                 <div className="row d-flex justify-content-between align-items-center">             
//                   <div className="header-info-right">
//                     <ul className="header-date">
//                       <li><span className="flaticon-calendar"></span> +880166 253 232</li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="header-mid gray-bg">
//             <div className="container">
//               <div className="row d-flex align-items-center">
//                 <div className="col-xl-3 col-lg-3 col-md-3 d-none d-md-block">
//                   <div className="logo">
//                     <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
//                   </div>
//                 </div>
//                 <div className="col-xl-9 col-lg-9 col-md-9">
//                   <div className="header-banner f-right ">
//                     <p>Welcome, {name}</p>
//                     {/* <img src="assets/img/gallery/header_card.png" alt="" /> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="header-bottom header-sticky">
//             <div className="container">
//               <div className="row align-items-center">
//                 <div className="col-xl-8 col-lg-8 col-md-12 header-flex">
//                   {/* Sticky */}
//                   <div className="sticky-logo">
//                     <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
//                   </div>
//                   {/* Main-menu */}
//                   <div className="main-menu d-none d-md-block">
//                     <nav>
//                       <ul id="navigation">
//                         <li><a href="/home">Home</a></li>
//                         <li><a href="/events">Events</a></li>
//                         <li><a href="#">Interaction</a>
//                           <ul className="submenu">
//                             <li><a href="/myArticle">My Articles</a></li>
//                             <li><a href="/chatroom">Chat Room</a></li>
//                           </ul>
//                         </li>
//                         <li><a href="/allArticles">All Articles</a></li>
//                         <li><a href="/statistics">Admin</a></li>
                        
//                         <li><a href="/menu">Coordinator</a></li>
                        
//                       </ul>
//                     </nav>
//                   </div>
//                 </div>
//                 <div className="col-xl-4 col-lg-4 col-md-4">
//                   <div className="header-right f-right d-none d-lg-block">               
//                     <ul className="header-social">
//                                         {
//                       isLoggedIn ? (
//                         <li><a href="/profile">My Profile</a></li>
//                       ) : (
//                         <li><a href="/login">Login</a></li>
//                       )
//                     }
//                       {/* <li><a href="/profile">My Profile</a></li> */}
//                       {/* <li><a href="https://www.fb.com/sai4ull"><i className="fab fa-facebook-f"></i></a></li>
//                       <li><a href="#"><i className="fab fa-twitter"></i></a></li>
//                       <li><a href="#"><i className="fab fa-instagram"></i></a></li>
//                       <li><a href="#"><i className="fab fa-youtube"></i></a></li> */}
//                     </ul>
//                     {/* Search Nav */}
                    
//                   </div>
//                 </div>
//                 {/* Mobile Menu */}
//                 <div className="col-12">
//                   <div className="mobile_menu d-block d-md-none"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Header End */}
//     </header>
//   );
// };

// export default Header;


import React, { useEffect } from 'react';
import '../../assets/css/dashboard.css';
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
  const name = window.localStorage.getItem('name');
  const isLoggedIn = window.localStorage.getItem('loggedIn');

  useEffect(() => {
    // Function to include JavaScript files dynamically
    function includeJS(src) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    }

    // Include all the JavaScript files
    const jsFiles = [
      '../../assets/js/vendor/jquery-1.12.4.min.js',
      '../../assets/js/popper.min.js',
      '../../assets/js/bootstrap.min.js',
      '../../assets/js/jquery.slicknav.min.js',
      '../../assets/js/owl.carousel.min.js',
      '../../assets/js/slick.min.js',
      '../../assets/js/gijgo.min.js',
      '../../assets/js/wow.min.js',
      '../../assets/js/animated.headline.js',
      '../../assets/js/jquery.magnific-popup.js',
      '../../assets/js/jquery.scrollUp.min.js',
      '../../assets/js/jquery.nice-select.min.js',
      '../../assets/js/jquery.sticky.js',
      '../../assets/js/contact.js',
      '../../assets/js/jquery.form.js',
      '../../assets/js/jquery.validate.min.js',
      '../../assets/js/mail-script.js',
      '../../assets/js/jquery.ajaxchimp.min.js',
      '../../assets/js/plugins.js',
      '../../assets/js/main.js',
      '../../assets/js/vendor/modernizr-3.5.0.min.js',
    ];

    jsFiles.forEach((src) => includeJS(src));

    // Clean up function
    return () => {
      // Remove the included scripts when the component unmounts
      const scripts = document.querySelectorAll('script[src^="../assets/js"]');
      scripts.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);

  return (
    <header>
      <link rel="manifest" href="site.webmanifest" />
      {/* Header Start */}
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top black-bg d-none d-sm-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-right">
                    <ul className="header-date">
                      <li>
                        <span className="flaticon-calendar"></span> +880166 253 232
                      </li>
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
                    <a href="/"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right ">
                    <p>Welcome, {name}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-12 header-flex">
                  {/* Sticky */}
                  <div className="sticky-logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                  {/* Main-menu */}
                  <div className="main-menu d-none d-md-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="/home">Home</a>
                        </li>
                        <li>
                          <a href="/events">Events</a>
                        </li>
                        <li>
                          <a href="#">Interaction</a>
                          <ul className="submenu">
                            <li>
                              <a href="/myArticle">My Articles</a>
                            </li>
                            <li>
                              <a href="/chatroom">Chat Room</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">Management</a>
                          <ul className="submenu">
                          <li><a href="/statistics">Admin</a></li>
                        
                          <li><a href="/menu">Coordinator</a></li>
                          </ul>
                        </li>
                        <li><a href="/allArticles">All Articles</a></li>
                        {/* <li><a href="/statistics">Admin</a></li>
                        
                        <li><a href="/menu">Coordinator</a></li> */}
                        
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="header-right f-right d-none d-lg-block">
                    <ul className="header-social">
                      {isLoggedIn ? (
                        <li>
                          <a href="/profile">My Profile</a>
                        </li>
                      ) : (
                        <li>
                          <a href="/login">Login</a>
                        </li>
                      )}                 
                    </ul>
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
