import React from "react";
const ContactPage = () => {
  return (
    <div>
      <footer id="footer" className="footer-1" style={{ color: "white" }}>
        <div className="main-footer widgets-dark typo-light">
          <div className="container">
            <div className="row" style={{ textAlign: "center" }}>
              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget subscribe no-box">
                  <h5 className="widget-title">
                    COMPANY NAME<span></span>
                  </h5>
                  <p>About the company, a little description will go here.. </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul className="thumbnail-widget">
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Get Started</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Top Leaders</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Success Stories</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Event/Tickets</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">News</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">Lifestyle</a>
                      </div>
                    </li>
                    <li>
                      <div className="thumb-content">
                        <a href="#.">About</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Get Started<span></span>
                  </h5>
                  <p>Get access to your full Training and Marketing Suite.</p>
                  <a
                    className="btn"
                    href="#."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </div>
              </div>

              <div className="col-xs-12 col-sm-6 col-md-3">
                <div className="widget no-box">
                  <h5 className="widget-title">
                    Contact Us<span></span>
                  </h5>
                  <p>
                    <a href="mailto:info@domain.com" title="glorythemes">
                      info@domain.com
                    </a>
                  </p>
                  <ul className="social-footer2">
                    <li className="">
                      <a title="youtube" target="_blank" href="/">
                        <img alt="youtube" width="30" height="30" src="" />
                      </a>
                    </li>
                    <li className="">
                      <a href="/" target="_blank" title="Facebook">
                        <img alt="Facebook" width="30" height="30" src="" />
                      </a>
                    </li>
                    <li className="">
                      <a href="/" target="_blank" title="Twitter">
                        <img alt="Twitter" width="30" height="30" src="" />
                      </a>
                    </li>
                    <li className="">
                      <a title="instagram" target="_blank" href="/">
                        <img alt="instagram" width="30" height="30" src="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <p>Copyright Company Name © 2016. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
