import React from "react";

export default function Sliders() {
  return (
    <section className="tm-banner">
      <div className="flexslider flexslider-banner">
        <ul className="slides">
          <li>
            <div className="tm-banner-inner">
              <h1 className="tm-banner-title">
                Find <span className="tm-yellow-text">The Best</span> Place
              </h1>
              <p className="tm-banner-subtitle">For Your Holidays</p>
              <a href="#more" className="tm-banner-link">
                Learn More
              </a>
            </div>
            <img src="assets/img/banner-1.jpg" alt="Image" />
          </li>
          <li>
            <div className="tm-banner-inner">
              <h1 className="tm-banner-title">
                Lorem <span className="tm-yellow-text">Ipsum</span> Dolor
              </h1>
              <p className="tm-banner-subtitle">Wonderful Destinations</p>
              <a href="#more" className="tm-banner-link">
                Learn More
              </a>
            </div>
            <img src="assets/img/banner-2.jpg" alt="Image" />
          </li>
          <li>
            <div className="tm-banner-inner">
              <h1 className="tm-banner-title">
                Proin <span className="tm-yellow-text">Gravida</span> Nibhvell
              </h1>
              <p className="tm-banner-subtitle">Velit Auctor</p>
              <a href="#more" className="tm-banner-link">
                Learn More
              </a>
            </div>
            <img src="assets/img/banner-3.jpg" alt="Image" />
          </li>
        </ul>
      </div>
    </section>
  );
}
