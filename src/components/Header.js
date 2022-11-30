import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="tm-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-3 tm-site-name-container">
              <a href="#" className="tm-site-name">
                TravelDot.
              </a>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-9">
              <div className="mobile-menu-icon">
                <i className="fa fa-bars"></i>
              </div>
              <nav className="tm-nav">
                <ul>
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <a href="tours.html">Our Tours</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* <section className="tm-banner">
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
      </section> */}
    </>
  );
}
