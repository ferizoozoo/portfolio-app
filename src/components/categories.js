import React from 'react';

export default class Categories extends React.Component
{
    render() {
      return (
  
        <section className="categories-area section-padding3">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {/* Section Tittle */}
                <div className="section-tittle mb-70">
                  <h2>Skills</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-pen" />
                  </div>
                  <div className="cat-cap">
                    <h5><a href="services.html">Python Developer</a></h5>
                    <p>Developing Softwares with the Python language.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="single-cat text-center mb-50">
                  <div className="cat-icon">
                    <span className="flaticon-speaker" />
                  </div>
                  <div className="cat-cap">
                    <h5><a href="services.html">Django Developer</a></h5>
                    <p>Developing Websites with the Django backend Framework.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }