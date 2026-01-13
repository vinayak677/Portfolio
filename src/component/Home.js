import React from "react";
import About from "./About";
import GoogleMap from "./GoogleMap";
import Swipers from "./Swipers";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-image mb-5">
        <div className="site-navbar-wrap">
          <div className="site-navbar-top">
            <div className="container py-3">
              <div className="row align-items-center">

                {/* Contact Info */}
                <div className="col-6">
                  <div className="d-flex">
                    <a
                      href="mailto:vinayakkoli067@gmail.com"
                      className="d-flex align-items-center mr-4"
                    >
                      <span className="icon-envelope mr-2"></span>
                      <span className="d-none d-md-inline-block">
                        vinayakkoli067@gmail.com
                      </span>
                    </a>

                    <a
                      href="tel:+919590821007"
                      className="d-flex align-items-center"
                    >
                      <span className="icon-phone mr-2"></span>
                      <span className="d-none d-md-inline-block">
                        (+91) 9590821007
                      </span>
                    </a>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="col-6 text-right">
                  <a
                    href="https://www.linkedin.com/in/vinayak-koli-6b1a54227/"
                    className="p-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-linkedin"></span>
                  </a>

                  <a
                    href="https://www.instagram.com/vinnie__46_/"
                    className="p-2"
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
      </div>

      {/* Page Sections */}
      <About />
      <Swipers />
      <GoogleMap />
    </>
  );
};

export default Home;
