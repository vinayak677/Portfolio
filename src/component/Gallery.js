import React, { useMemo, useState } from "react";
import "./Gallery.css";

export default function Gallery() {
  const images = useMemo(
    () => [
      // { src: "../assets/images/code5.jpg", title: "Focused coding" },
      // { src: "../assets/images/code4.jpg", title: "Modern development setup" },
      // { src: "../assets/images/code3.jpg", title: "Frontend work in progress" },
      // { src: "../assets/images/code2.jpg", title: "Clean UI code" },
      // { src: "../assets/images/code1.png", title: "Tech and creativity" },
      // { src: "../assets/images/hero_1.jpg", title: "Work environment" },
      // { src: "../assets/images/laptop.jpeg", title: "Minimal workspace" },
      // { src: "../assets/images/laptop2.jpg", title: "Desk & laptop setup" },
      // { src: "../assets/images/airoplane.png", title: "Concept illustration" },
      // { src: "../assets/images/technologies.svg", title: "Tech stack visual" },
      { src: "../assets/images/vencer.png", title: "Project: Vencer Paints" },
      { src: "../assets/images/astria.png", title: "Project: Astria" },
      { src: "../assets/images/snis.png", title: "Project: SNIS" },
      { src: "../assets/images/trivent.png", title: "Project: Trivent" },
      { src: "../assets/images/hebuni.png", title: "Project: Hebuni" },
      { src: "../assets/images/varsha.png", title: "Project: Varsha" },
      { src: "../assets/images/sudarshan.png", title: "Project: Sudarshan" },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex === null ? null : images[activeIndex];

  const close = () => setActiveIndex(null);
  const prev = () =>
    setActiveIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  const next = () =>
    setActiveIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  return (
    <section className="gal-page">
      <div className="container">
        <div className="gal-header">
          <span className="gal-pill">Visual Proof</span>
          <h1 className="gal-title">Gallery</h1>
          <p className="gal-subtitle">
            A quick visual tour of projects and work vibes. Click any image to zoom.
          </p>
        </div>

        <div className="gal-grid">
          {images.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              className="gal-card"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Open image: ${img.title}`}
            >
              <img src={img.src} alt={img.title} loading="lazy" />
              <div className="gal-card-overlay">
                <div className="gal-card-title">{img.title}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="gal-modal" role="dialog" aria-modal="true">
          <button type="button" className="gal-backdrop" onClick={close} aria-label="Close" />

          <div className="gal-modal-content">
            <div className="gal-modal-top">
              <div className="gal-modal-title">{active.title}</div>
              <button type="button" className="gal-close" onClick={close} aria-label="Close">
                ✕
              </button>
            </div>

            <div className="gal-modal-body">
              <button type="button" className="gal-nav gal-prev" onClick={prev} aria-label="Previous">
                ‹
              </button>
              <img className="gal-modal-img" src={active.src} alt={active.title} />
              <button type="button" className="gal-nav gal-next" onClick={next} aria-label="Next">
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

