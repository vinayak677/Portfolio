import React from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <section className="map-section">
      
      {/* Google Map */}
      <div className="map-container">
        <iframe
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.5821798326649!2d74.49036742917016!3d16.2549144992979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc093c81428439b%3A0x93c74f4b043bc074!2sHanuman%20Temple%2C%20Hanuman%20Nagar!5e0!3m2!1sen!2sin!4v1670756580328!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919590821007"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>

    </section>
  );
};

export default GoogleMap;
