import React from 'react';

export default class Footer extends React.Component
{
    render() {
      return (
  
        <footer>
          {/* Footer Start*/}
          <div className="footer-area">
            <div className="container">
              <div className="footer-top footer-padding">
                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="footer-top-cap text-center">
                      <img src="assets/img/logo/logo2_footer.png" alt="" />
                      <span><a href="mailto:farhadzohoorz@gmail.com">farhadzohoorz@gmail.com</a></span>
                      <p>Seyed Khandan, Khajeh Abdollah Ansari</p>
                      <p>Tehran, Iran</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-xl-9 col-lg-8">
                    <div className="footer-copy-right">
                      <p>{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4">
                    {/* Footer Social */}
                    <div className="footer-social f-right">
                      <a>Stay Connected</a>
                      <a href="#"><i className="fab fa-twitter" /></a>
                      <a href="#"><i className="fab fa-linkedin" /></a>
                      <a href="#"><i className="fab fa-google" /></a>
                      <a href="#"><i className="fab fa-instagram" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End*/}
        </footer>
      );
    }
  }