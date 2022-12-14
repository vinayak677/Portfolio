import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div >
      {/* <Navbar/> */}
      <div className=" container d-flex flex-column justify-content-center">
        <div className="row mt-5">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center ">
            <div className="black">
              <div className=" grey ">
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 ">
            <div className=" d-flex justify-content-center align-items-center ">
                  <div className="col-md-10 col-lg-10 myself p-4 border_blck box_shwd">
                    <img src="../../assets/images/laptop2.jpg" alt="" />
                    <h4 className="light_white mt-3 text-dark">Hello, My name is</h4>
                    <h1 className="light_white text-dark">Vinayak koli</h1>
                    <p className="col_green fw_500">Front end developer</p>
                    <p className="light_white fw_500 text-dark">
                      I'm having total 4 years of work experiance. And one year of relevant
                      experiance in Reacts.js . My previous company
                      was Trivent soft services.{" "}
                    </p>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/91+9590821007/?text=Welcome to Techblog369 Team"
        class="whatsapp_float"
        target="_blank"
        body="hello world"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <div className="conatiner download mt-4 mb-2">
        <div className="container">
        <div className=" row ">
          <div className="col-12 col-sm-6 col-md-5 col-lg-6 d-flex justift-content-center align-items-center">
          <img className="down_img" src=".././assets/images/resume3.jpg" alt="" />
          </div>
          <div className="col-12 col-sm-5 col-md-6 col-lg-6 mt-4">
           <h1 className="text_white mt-3 nam">Download My Resume</h1>
           <p className="mt-3 pdf">PDF:81.KB</p>
           <h4><a className="text_white mt-3 dowm_btn" href=".././assets/PDF/VINAYAK KOLI.pdf">Download</a></h4>
          </div>
        </div>
        </div>
      </div>
      {/* <Footer/> */}

    </div>
  );
};

export default About;
