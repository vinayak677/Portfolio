import React from "react";

const Loader = () => {
  
  return (
    <div className="bg_black d-flex justify-content-center align-items-center load">
      <div className="cssloader">
        <div className="sh1"></div>
        <div className="sh2"></div>
        <h4 className="lt">loading</h4>
      </div>
    </div>
  );
};

export default Loader;
