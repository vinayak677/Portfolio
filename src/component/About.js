import React from "react";
import Tech from "./Tech";
import "./About.css";

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about-wrapper container">
        <div className="row align-items-center">

          {/* IMAGE SECTION */}
          <div className="col-md-6 d-flex justify-content-center mb-4">
            <div className="image-stack">
              <div className="image-bg"></div>
              <img
                src="../assets/images/laptop2.jpg"
                alt="Workspace"
                className="about-image"
              />
            </div>
          </div>

          {/* CONTENT SECTION */}
          <div className="col-md-6">
            <div className="about-card">
              <span className="intro-text">Hello, my name is</span>
              <h1 className="name">Vinayak Koli</h1>
              <h4 className="role">Frontend Developer (React.js)</h4>

              <p className="description">
                I have <strong>4.9+ years</strong> of overall experience with
                <strong> 3 years</strong> of hands-on expertise in React.js.
                I specialize in building scalable, performant, and
                user-friendly web applications.
              </p>

              {/* STATS */}
              <div className="stats">
                <div>
                  <h3>4.9+</h3>
                  <span>Years Experience</span>
                </div>
                <div>
                  <h3>15+</h3>
                  <span>Projects</span>
                </div>
                <div>
                  <h3>React</h3>
                  <span>Expert</span>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="about-actions">
                <a
                  href="../assets/PDF/VINAYAK_KOLI_2024.pdf"
                  download
                  className="btn-primary"
                >
                  Download Resume
                </a>

                <a href="/project" className="btn-outline">
                  View Projects
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TECHNOLOGIES */}
      <Tech />
    </>
  );
};

export default About;
