import React from 'react';

export default class About extends React.Component{
    render() {
      return (
  
        <div className="header-area">
          <div className="main-header  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2 col-md-1">
                  <div className="logo">
                    <a href="#"><img src="assets/img/logo/logo.png" alt="" /></a>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu f-right d-none d-lg-block">
                      <nav> 
                        <ul id="navigation">
                          
                          <li><a href="#about">About</a></li>
                          <li><a href="#contact">Contact</a></li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>   
                {/* Mobile Menu */}
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  