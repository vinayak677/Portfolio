import React from 'react'

const Footer = () => {
  return (
    <div className='bg_blue'>
         <div className="row pt-5  container-fluid  d-flex justify-content-center align-items-start align-content-between w-80">
        <div className="col-5  mx-1">
          <h1 className="mb-3 h1small footertext">Venue Location</h1>
          <p className=' h1small fw_400'>10 - 12 December, 2022</p>
          <p className=' h1small fw_400'>Hanuman Nagar,colony Road Sankeshwar, dist-Belgavi, state-Karnatak</p>
        </div>
        <div className="col-5  ">
          <h1 className="mb-3 h1small fw_400 footertext">Social Connection</h1>
          <p className="fw_400 h1small ">Don't miss a thing! Receive daily news You should connect social area for Any Proper Updates Anytime</p>

        </div>

          <div className="col-8 d-flex justify-content-center wow animate__animated animate__slideInDown" >
          <a href="https://www.linkedin.com/in/vinayak-koli-6b1a54227/">
          <img style={{width:"40px", height:"40px",margin:"20px"}} src=".././assets/images/linkedin.png" alt="" /></a>
          <a href="https://github.com/vinayak677">
          <img style={{width:"40px", height:"40px",margin:"20px"}}  src=".././assets/images/github.png" alt="" /></a>
          <a href="https://www.instagram.com/vinnie__46_/">
          <img style={{width:"40px", height:"40px",margin:"20px"}}  src=".././assets/images/instagram.png" alt="" /></a>
          {/* <a href="https://web.whatsapp.com/">
          <img style={{width:"40px", height:"40px",margin:"20px"}}  src=".././assets/images/whatsapp.png" alt="" /></a> */}
          </div>
      </div>
    </div>
  )
}

export default Footer