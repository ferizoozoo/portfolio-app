import React from 'react';

export default class Contact extends React.Component
{
    render() {
      return (
  
        <section id="contact" className="contact-info-area w-padding2" data-background="assets/img/gallery/section_bg04.jpg">
          <div className="container">
          <div className="row">
              <div className="col-lg-6">
                {/* Section Tittle */}
                <div className="section-tittle mb-70">
                  <h2>Contact:</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-between">
              <div className="col-xl-5 col-lg-7">
                <div className="contact-caption mb-50">
                  <h3>My Github Page:</h3>
                  <a href="https://github.com/ferizoozoo"><img src="assets/img/logo/GitHub-Mark-120px-plus.png" alt="" /></a>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="contact-caption mb-50">
                  <h3>My Linkedin:</h3>
                  <a href="https://linkedin.com/in/farhad-zohooralishahi-1035ab1aa"><img src="assets/img/logo/LI-In-Bug.png" alt="" width="120px" height="100px"/></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }