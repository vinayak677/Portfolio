import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import ImageWithSkeleton from "./ImageWithSkeleton";

import "swiper/css";
import "./WorkStrip.css";

SwiperCore.use([Autoplay]);

const workShots = [
  { src: "/assets/images/11.jpg", label: "Focused workspace" },
  { src: "/assets/images/10.jpg", label: "Clean desk setup" },
  { src: "/assets/images/9.jpg", label: "Minimal laptop layout" },
  { src: "/assets/images/8.jpg", label: "Modern office buildings" },
  { src: "/assets/images/7.jpg", label: "Planning & analytics" },
  { src: "/assets/images/6.jpg", label: "Creative brainstorming" },
  { src: "/assets/images/21.jpg", label: "Coding in progress" },
  { src: "/assets/images/22.jpg", label: "Tech stack overview" },
  { src: "/assets/images/23.jpg", label: "Design & development" },
  { src: "/assets/images/24.jpg", label: "Work environment" },
  { src: "/assets/images/25.jpg", label: "Concept illustration" },
  { src: "/assets/images/26.jpg", label: "Concept illustration" },
  { src: "/assets/images/27.jpg", label: "Concept illustration" },
  { src: "/assets/images/28.jpg", label: "Concept illustration" },
];

export default function WorkStrip() {
  return (
    <section className="workstrip">
      <div className="container">
        <div className="workstrip-head">
          <span className="workstrip-pill">Work snapshots</span>
          <p className="workstrip-text">
            A quick look at the kind of modern, code-focused environments I work
            in.
          </p>
        </div>

        <Swiper
          slidesPerView="auto"
          spaceBetween={12}
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={true}
          className="workstrip-swiper"
        >
          {workShots.map((shot, index) => (
            <SwiperSlide key={index} className="workstrip-slide">
              <div className="workstrip-card">
                <ImageWithSkeleton src={shot.src} alt={shot.label} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
