import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-dark bg_blue static-top">
    <div class="container">
      <h3 class="navbar-brand" href="#">
        {/* <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." /> */}
        Vinayak
      </h3>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/about">About</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"  to="/map">Map</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="project">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
   
  

  )
}

export default Navbar