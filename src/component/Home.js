import React from "react";
import About from "./About";
import GoogleMap from "./GoogleMap";
import Swipers from "./Swipers";
import WorkStrip from "./WorkStrip";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-image mb-5">
        {/* Top contact & social bar */}
        <div className="site-navbar-wrap">
          <div className="site-navbar-top">
            <div className="container py-3">
              <div className="hero-topbar">
  <div className="hero-topbar-left">
    <a href="mailto:vinayakkoli067@gmail.com">
      <span className="icon-envelope"></span>
      <span className="topbar-text">vinayakkoli067@gmail.com</span>
    </a>

    <a href="tel:+919590821007">
      <span className="icon-phone"></span>
      <span className="topbar-text">(+91) 9590821007</span>
    </a>
  </div>

  <div className="hero-topbar-right">
    <a
      href="https://www.linkedin.com/in/vinayak-koli-6b1a54227/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon-linkedin"></span>
    </a>

    <a
      href="https://www.instagram.com/vinnie__46_/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon-instagram"></span>
    </a>
  </div>
</div>

            </div>
          </div>
        </div>

        {/* Main hero content */}
        <div className="hero-overlay">
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-lg-7 col-md-7 mb-4 mb-md-0">
                <div className="hero-content">
                  <span className="hero-badge">Frontend Developer • React.js</span>
                  <h1 className="hero-title">Hi, I&apos;m Vinayak Koli</h1>
                  <p className="hero-subtitle">
                    I craft fast, responsive and modern web experiences using
                    React, JavaScript and clean UI practices.
                  </p>

                  <div className="hero-actions">
                    <a
                      href="../assets/PDF/vinayak.pdf"
                      download
                      className="btn-primary hero-btn-primary"
                    >
                      View Resume
                    </a>
                    <a href="#projects" className="btn-outline hero-btn-outline">
                      View Projects
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-5 d-none d-md-flex justify-content-center">
                <div className="hero-image-wrap">
                  <div className="hero-image-bg" />
                  <img
                    src="../assets/images/laptop2.jpg"
                    alt="Vinayak portfolio preview"
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work snapshots strip */}
      <WorkStrip />

      {/* Page Sections */}
      <About />
      <div id="projects">
        <Swipers />
      </div>
      <GoogleMap />
    </>
  );
};

export default Home;
