import React from "react";

export default function About() {
  return (
    <div>
      <section className="tm-banner">
        {/* Flexslider */}
        <div className="flexslider flexslider-banner">
          <ul className="slides">
            <li>
              <div className="tm-banner-inner">
                <h1 className="tm-banner-title">
                  <span className="tm-yellow-text">Tour</span> Packages
                </h1>
                <p className="tm-banner-subtitle">For Your Vacations</p>
                <a href="#more" className="tm-banner-link">
                  Learn More
                </a>
              </div>
              <img src="assets/img/banner-1.jpg" />
            </li>
            <li>
              <div className="tm-banner-inner">
                <h1 className="tm-banner-title">
                  Lorem <span className="tm-yellow-text">Ipsum</span> Dolor
                </h1>
                <p class="tm-banner-subtitle">Wonderful Destinations</p>
                <a href="#more" className="tm-banner-link">
                  Learn More
                </a>
              </div>
              <img src="assets/img/banner-2.jpg" />
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
              <img src="assets/img/banner-3.jpg" />
            </li>
          </ul>
        </div>
      </section>

      <section className="container tm-home-section-1" id="more">
        <div className="row">
          {/* slider */}
          <div className="flexslider flexslider-about effect2">
            <ul className="slides">
              <li>
                <img src="assets/img/about-1.jpg" alt="image" />
                <div className="flex-caption">
                  <h2 className="slider-title">Welcome To Holiday</h2>
                  <h3 className="slider-subtitle">
                    Gravida nibh vel velit auctor aliquet enean sollicitudin
                    lorem quis auctor
                  </h3>
                  <p className="slider-description">
                    Holiday is free Bootstrap v3.3.5 responsive template for
                    tour and travel websites. You can download and use this
                    layout for any purpose. You do not need to provide a credit
                    link to us. If you have any question, feel free to{" "}
                    <a
                      href="http://www.facebook.com/templatemo"
                      target="_parent"
                    >
                      contact us
                    </a>
                    . <br />
                    <br />
                    Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                    non mauris vitae erat consequat auctor eu in elit. className
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Mauris in erat justo. Nullam
                    ac urna eu felis dapibus condimentum.
                  </p>
                  <div className="slider-social">
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img src="assets/img/about-1.jpg" alt="image" />
                <div className="flex-caption">
                  <h2 className="slider-title">Thank you for choosing us!</h2>
                  <h3 className="slider-subtitle">
                    Gravida nibh vel velit auctor aliquet enean sollicitudin
                    lorem quis auctor, nisi elit consequat ipsum
                  </h3>
                  <p className="slider-description">
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                    auctor a ornare odio. Sed non mauris vitae erat consequat
                    auctor eu in elit. className aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    <br />
                    <br />
                    Mauris in erat justo. Nullam ac urna eu felis dapibus
                    condimentum sit amet a augue. Sed non neque elit. Sed ut
                    imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                    pharetra, erat sed fermentum feugiat, velit mauris gestas
                    quam, ut aliquam massa nisi.
                  </p>
                  <div className="slider-social">
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img src="assets/img/about-1.jpg" alt="image" />
                <div className="flex-caption">
                  <h2 className="slider-title">More Programs to come</h2>
                  <h3 className="slider-subtitle">
                    Gravida nibh vel velit auctor aliquet enean sollicitudin
                    lorem quis auctor, nisi elit consequat ipsum
                  </h3>
                  <p className="slider-description">
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                    auctor a ornare odio. Sed non mauris vitae erat consequat
                    auctor eu in elit. className aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Mauris in erat justo. Nullam ac urna eu felis dapibus
                    condimentum sit amet a augue. Sed non neque elit. Sed ut
                    imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                    pharetra, erat sed fermentum feugiat, velit mauris gestas
                    quam, ut aliquam massa nisi.
                  </p>
                  <div className="slider-social">
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <img src="assets/img/about-1.jpg" alt="image" />
                <div className="flex-caption">
                  <h2 className="slider-title">Tour and Travel</h2>
                  <h3 className="slider-subtitle">
                    Gravida nibh vel velit auctor aliquet enean sollicitudin
                    lorem quis auctor, nisi elit consequat ipsum
                  </h3>
                  <p className="slider-description">
                    Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt
                    auctor a ornare odio. Sed non mauris vitae erat consequat
                    auctor eu in elit. className aptent taciti sociosqu ad
                    litora torquent per conubia nostra, per inceptos himenaeos.
                    Mauris in erat justo. Nullam ac urna eu felis dapibus
                    condimentum sit amet a augue. Sed non neque elit. Sed ut
                    imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                    pharetra, erat sed fermentum feugiat, velit mauris gestas
                    quam, ut aliquam massa nisi.
                  </p>
                  <div className="slider-social">
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-pinterest"></i>
                    </a>
                    <a href="#" className="tm-social-icon">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-margin-top about-section">
          <div className="row">
            <div className="tm-section-header">
              <div className="col-lg-3 col-md-3 col-sm-3">
                <hr />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <h2 className="tm-section-title">Who We Are</h2>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="tm-about-box-1">
                <a href="#">
                  <img
                    src="assets/img/about-4.jpg"
                    alt="img"
                    className="tm-about-box-1-img"
                  />
                </a>
                <h3 className="tm-about-box-1-title">
                  Thomas <span>( Founder )</span>
                </h3>
                <p className="margin-bottom-15 gray-text">
                  Proin gravida nibhvell aliquet. Aenean sollicitudin bibum
                  auctor nisi elit.
                </p>
                <div className="gray-text">
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="tm-about-box-1">
                <a href="#">
                  <img
                    src="assets/img/about-5.jpg"
                    alt="img"
                    className="tm-about-box-1-img"
                  />
                </a>
                <h3 className="tm-about-box-1-title">
                  Keith <span>( Co-Founder )</span>
                </h3>
                <p className="margin-bottom-15 gray-text">
                  Proin gravida nibhvell aliquet. Aenean sollicitudin bibum
                  auctor nisi elit.
                </p>
                <div className="gray-text">
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="tm-about-box-1">
                <a href="#">
                  <img
                    src="assets/img/about-6.jpg"
                    alt="img"
                    className="tm-about-box-1-img"
                  />
                </a>
                <h3 className="tm-about-box-1-title">
                  John <span>( General Manager )</span>
                </h3>
                <p className="margin-bottom-15 gray-text">
                  Proin gravida nibhvell aliquet. Aenean sollicitudin bibum
                  auctor nisi elit.
                </p>
                <div className="gray-text">
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="tm-about-box-1">
                <a href="#">
                  <img
                    src="assets/img/about-7.jpg"
                    alt="img"
                    className="tm-about-box-1-img"
                  />
                </a>
                <h3 className="tm-about-box-1-title">
                  Smith <span>( Manager )</span>
                </h3>
                <p className="margin-bottom-15 gray-text">
                  Proin gravida nibhvell aliquet. Aenean sollicitudin bibum
                  auctor nisi elit.
                </p>
                <div className="gray-text">
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-pinterest"></i>
                  </a>
                  <a href="#" className="tm-social-icon">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* white bg  */}
      <section className="tm-white-bg section-padding-bottom">
        <div className="container">
          <div className="row">
            <div className="tm-section-header section-margin-top">
              <div className="col-lg-4 col-md-3 col-sm-3">
                <hr />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <h2 className="tm-section-title">What we do</h2>
              </div>
              <div className="col-lg-4 col-md-3 col-sm-3">
                <hr />
              </div>
            </div>
          </div>
          <div className="row">
            {/* Testimonial */}
            <div className="col-lg-12">
              <div className="tm-what-we-do-right">
                <div className="tm-about-box-2 margin-bottom-30">
                  <img
                    src="assets/img/about-2.jpg"
                    alt="image"
                    className="tm-about-box-2-img"
                  />
                  <div className="tm-about-box-2-text">
                    <h3 className="tm-about-box-2-title">
                      Gravida Nibh Vel Velit Auctor Aliquet Etiam
                    </h3>
                    <p className="tm-about-box-2-description gray-text">
                      Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non mauris vitae erat
                      consequat auctor eu in elit. className aptent taciti
                      sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Mauris in erat justo. Nullam ac urna
                      eu felis.
                    </p>
                    <p className="tm-about-box-2-footer">
                      Mauris In Erat Justo
                    </p>
                  </div>
                </div>
                <div className="tm-about-box-2">
                  <img
                    src="assets/img/about-3.jpg"
                    alt="image"
                    className="tm-about-box-2-img"
                  />
                  <div className="tm-about-box-2-text">
                    <h3 className="tm-about-box-2-title">
                      Sed Non Mauris Vitae Erat Con Ruat Nostra
                    </h3>
                    <p className="tm-about-box-2-description gray-text">
                      Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non mauris vitae erat
                      consequat auctor eu in elit. className aptent taciti
                      sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos. Mauris in erat justo. Nullam ac urna
                      eu felis.
                    </p>
                    <p className="tm-about-box-2-footer">Sednon Mauris Vitae</p>
                  </div>
                </div>
              </div>
              <div className="tm-testimonials-box">
                <h3 className="tm-testimonials-title">Testimonials</h3>
                <div className="tm-testimonials-content">
                  <div className="tm-testimonial">
                    <p>
                      "Proin gravida nibh vel velit auctor aliquet. Aenean
                      sollicitudin, lorem quis bibendum."
                    </p>
                    <strong className="text-uppercase">John Smith</strong>
                  </div>
                  <div className="tm-testimonial">
                    <p>
                      "Nisi elit consequat ipsum, nec sagittis sem nibh id elit
                      duis sed odio sit amet nibh."
                    </p>
                    <strong className="text-uppercase">Lorens</strong>
                  </div>
                  <div className="tm-testimonial">
                    <p>
                      "Rulputate cursus a sit amet mauris. Morbi accumsan ipsum
                      velit. Nam nec tellus a odio tincidunt auctor a ornare
                      odio."
                    </p>
                    <strong className="text-uppercase">Robert</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
