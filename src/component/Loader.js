import React, { useEffect } from "react";

const Loader = () => {
  
  return (
    <div className="bg_black d-flex justify-content-center align-items-center load">
      <div class="cssloader">
        <div class="sh1"></div>
        <div class="sh2"></div>
        <h4 class="lt">loading</h4>
      </div>
    </div>
  );
};

export default Loader;
