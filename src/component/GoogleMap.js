import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <p className="d-flex justify-content-center align-items-center mt-3">
        <iframe className="iframemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d957.5821798326649!2d74.49036742917016!3d16.2549144992979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc093c81428439b%3A0x93c74f4b043bc074!2sHanuman%20Temple%2C%20Hanuman%20Nagar!5e0!3m2!1sen!2sin!4v1670756580328!5m2!1sen!2sin" ></iframe>
      </p>
      <a
        href="https://wa.me/91+9590821007/?text=Welcome to Techblog369 Team"
        class="whatsapp_float"
        target="_blank"
        body="hello world"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default GoogleMap;
