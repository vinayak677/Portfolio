import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <h3>Location</h3>
          <p>Hanuman Nagar, Colony Road</p>
          <p>Sankeshwar, Belagavi</p>
          <p>Karnataka, India</p>
        </div>

        <div className="footer-col">
          <h3>Stay Connected</h3>
          <p>
            Follow me on social platforms for updates, projects, and
            collaborations.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/vinayak-koli-6b1a54227/" target="_blank" rel="noreferrer">
              <img src="../assets/images/linkedin.png" alt="LinkedIn" />
            </a>
            <a href="https://github.com/vinayak677" target="_blank" rel="noreferrer">
              <img src="../assets/images/github.png" alt="GitHub" />
            </a>
            <a href="https://www.instagram.com/vinnie__46_/" target="_blank" rel="noreferrer">
              <img src="../assets/images/instagram.png" alt="Instagram" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;