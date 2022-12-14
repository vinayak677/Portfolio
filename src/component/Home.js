import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import About from "./About";
import Footer from "./Footer";
import Map from "./GoogleMap"
import Loader from "./Loader";
import Navbar from "./Navbar";
import Swipers from "./Swipers";
const Home = () => {
  

  return (
    <>
   {/* <Navbar/> */}

    <div className="bg-image mb-5">
        {/* <div class="site-mobile-menu site-navbar-target">
          <div className=" d-flex ">
            <div class="site-mobile-menu-header d-flex justify-content-between align-items-center align-content-center m-0">
              <h2 className="m-0 ">VINAYAK</h2>
            </div>

            <div class="site-mobile-menu-close mr-3  d-flex justify-content-center align-items-center">
              <span class="icon-close2 js-menu-toggle"></span>
            </div>
          </div>
          <div class="site-mobile-menu-body"></div>
        </div> */}

        <div class="site-navbar-wrap">
          <div class="site-navbar-top">
            <div class="container py-3">
              <div class="row align-items-center">
                <div class="col-6">
                  <div class="d-flex mr-auto">
                    <a
                      href="mailto:vinayakkoli067@gmail.com"
                      class="d-flex align-items-center mr-4"
                    >
                      <span class="icon-envelope mr-2 wow animate__animated animate__slideInLeft"></span>
                      <span class="d-none d-md-inline-block wow animate__animated animate__slideInLeft">
                        vinayakkoli067@gmail.com
                      </span>
                    </a>
                    <a
                      href="tel:+919590821007"
                      class="d-flex align-items-center mr-auto wow animate__animated animate__slideInLeft"
                    >
                      <span class="icon-phone mr-2"></span>
                      <span class="d-none d-md-inline-block wow animate__animated animate__slideInLeft">
                        (+91) 9590821007
                      </span>
                    </a>
                  </div>
                </div>
                <div class="col-6 text-right">
                  <div class="mr-auto">
                    
                    <a
                      href="https://www.linkedin.com/in/vinayak-koli-6b1a54227/"
                      class="p-2 pl-0"
                    >
                      <span class="icon-linkedin"></span>
                    </a>
                    <a
                      href="https://www.instagram.com/vinnie__46_/"
                      class="p-2 pl-0"
                    >
                      <span class="icon-instagram"></span>
                    </a>
                    <a href="#" class="p-2 pl-0">
                      <span class="icon-twitter"></span>
                    </a>
                    <a href="#" class="p-2 pl-0">
                      <span class="icon-facebook"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div class="site-navbar site-navbar-target js-sticky-header">
            <div class="container">
              <div class="row align-items-center"> */}
                {/* <div class="col-2">
                  <h1 class="my-0 site-logo">
                    <a href="#">vinayak</a>
                  </h1>
                </div> */}
                {/* <div class="col-10">
                  <nav class="site-navigation text-right" role="navigation">
                    <div class="container">
                      <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                        <a
                          href="#"
                          class="site-menu-toggle js-menu-toggle text-white"
                        >
                          <span class="icon-menu h3"></span>
                        </a>
                      </div> */}

                      {/* <ul class="site-menu main-menu js-clone-nav d-none d-lg-block">
                        <li class="active">
                          <Link to="/" class="nav-link">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link to="/about" class="nav-link">
                            About
                          </Link>
                        </li> */}
                        {/* <li class="has-children">
                  <a href="#" class="nav-link">Pages</a>
                  <ul class="dropdown arrow-top">
                    <li><a href="#" class="nav-link">Team</a></li>
                    <li><a href="#" class="nav-link">Pricing</a></li>
                    <li><a href="#" class="nav-link">FAQ</a></li>
                    <li class="has-children">
                      <a href="#">More Links</a>
                      <ul class="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                      </ul>
                    </li>
                  </ul>
                </li> */}
                        {/* <li>
                          <Link to="/map" class="nav-link">
                            Map
                          </Link>
                        </li>
                        <li><a href="#events-section" class="nav-link">Events</a></li>
                        <li><a href="#gallery-section" class="nav-link">Gallery</a></li>
                        <li>
                          <Link to="/project" class="nav-link">
                            Projects 
                          </Link>
                        </li>
                      </ul> */}
                    </div>
                  {/* </nav> */}
                </div>
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* // </div> */}
      {/* </div> */}
      <About/>
      <Map/>
      <Swipers/>
      {/* <Footer/> */}
      
    
    </>
  );
};

export default Home;
