import React from 'react';

export default class Slider extends React.Component{
    render() {
      return (
  
        <div className="slider-area ">
          <div className="slider-active">
            {/* Single Slider */}
            <div className="single-slider slider-height d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-8">
                    <div className="hero__caption">
                      <span data-animation="fadeInUp" data-delay=".4s">Get Every Single Solutions.</span>
                      <h1 data-animation="fadeInUp" data-delay=".6s">I’m Backend Programmer Farhad Zohoor</h1>
                      <p data-animation="fadeInUp" data-delay=".8s">Professional Python Developer</p>
                      {/* Hero-btn */}
                      <div className="hero__btn">
                        <a href="#about" className="btn hero-btn" data-animation="fadeInLeft" data-delay=".8s">Learn More</a>
                        <a href="#contact" className="btn border-btn ml-15" data-animation="fadeInRight" data-delay="1.0s">Hire Me</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }