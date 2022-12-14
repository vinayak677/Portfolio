import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

export default function Swipers() {
  return (
    <>
      <div className="black_back py-5">
        <h3 className="d-flex justify-content-center text-white">Click on image to open the website </h3>
        <h3 className="d-flex justify-content-center text-white">&</h3>
        <h3 className="d-flex justify-content-center pb-5 text-white">slide for next image</h3>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
        
          <SwiperSlide>  <a href="https://vencerpaints.com/">
            <img
              className="w-100"
              src=".././assets/images/vencer.png"
              alt=""
            ></img></a>
          </SwiperSlide>
          <SwiperSlide><a href="https://snisindia.in/">
            <img
              className="w-100"
              src=".././assets/images/snis.png"
              alt=""
            ></img></a>
          </SwiperSlide>
          <SwiperSlide><a href="http://triventsoftservices.com/index.html">
            <img
              className="w-100"
              src=".././assets/images/trivent.png"
              alt=""
            ></img></a>
          </SwiperSlide>
          <SwiperSlide><a href="http://hebuni.com/about/">
            <img
              className="w-100"
              src=".././assets/images/hebuni.png"
              alt=""
            ></img></a>
          </SwiperSlide>
          <SwiperSlide><a href="https://varsharoadcarriers.com/">
            <img
              className="w-100"
              src=".././assets/images/varsha.png"
              alt=""
            ></img></a>
          </SwiperSlide>
          <SwiperSlide><a href="https://sudarshanenterprises.in/">
            <img
              className="w-100"
              src=".././assets/images/sudarshan.png"
              alt=""
            ></img></a>
          </SwiperSlide>
          <SwiperSlide><a href="https://airlinebooking.netlify.app/">
            <img
              className="w-100"
              src=".././assets/images/airoplane.png"
              alt=""
            ></img></a>
          </SwiperSlide>
        </Swiper>
        <a
        href="https://wa.me/91+9590821007/?text=Welcome to Hi, Vinayak"
        class="whatsapp_float"
        target="_blank"
        body="hello world"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      </div>
    </>
  );
}
