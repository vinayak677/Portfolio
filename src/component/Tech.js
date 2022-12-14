import React from "react";

const Tech = () => {
  return (
    <div className="bg_grey d-flex justify-content-center align-items-center align-content-md-center">
      <div className="container wow animate__animated animate__fadeIn">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
            <img
              className="tech_image "
              src=".././assets/images/technologies.svg"
            />
          </div>
          <div className="col-sm-12 col-md-4 col-lg-5 d-flex justify-content-center align-items-center ml-3 flex-column">
            <h1 className="text-white fw-bold p_hover">Technologies</h1>
            <p className=" fw-bold p_hover">HTML5,CSS3</p>
            <p className=" fw-bold p_hover">Javascript</p>
            <p className=" fw-bold p_hover">React.js</p>
            <p className=" fw-bold p_hover">Redux</p>
            <p className=" fw-bold p_hover">Boostrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
