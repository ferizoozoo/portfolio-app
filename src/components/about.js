import React from 'react';

export default class About extends React.Component
{
    render() {
      return (
        <section id="about" className="about-area section-paddingt30">
        <div className="container">
        <div className="row">
              <div className="col-lg-6">
                {/* Section Tittle */}
                <div className="section-tittle mb-70">
                  <h2>About</h2>
                </div>
              </div>
            </div>
          <div className="row ">
            <div className="col-lg-5">
              <div className="about-caption mb-50">
                <h3>Designing With Passion While Exploring The World.</h3>
                <p className="pera1">I create programs and develop web apps.</p>
                <p>Most of these apps are written in Python.</p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="about-caption2">
                <h3>Any Type Of Query<br /> &amp; Discussion.</h3>
                <p>Late talk with me</p>
                <div className="send-cv">
                  <a href="mailto:farhadzohoorz@gmail.com">farhadzohoorz@gmail.com</a>
                  <i className="ti-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      );
    }
}    