import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div>
            <div className="heading">
              <p>POPULAR LOCATIONS</p>
            </div>
            <div className="list">
              <ul>
                <li>kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>TRENDING LOCATIONS</p>
            </div>
            <div className="list">
              <ul>
                <li>kolkata</li>
                <li>Mumbai</li>
                <li>Chennai</li>
                <li>Pune</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>ABOUT US</p>
            </div>
            <div className="list">
              <ul>
                <li>Contact Us</li>
                <li>Tech@OLX</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="heading">
              <p>OLX</p>
            </div>
            <div className="list">
              <ul>
                <li>Blog</li>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
                <li>Vulnerability Disclosure Program</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-images">
        <div className="footer-image-container">
          <div className="footer-image-items">
            <div className="firstImage">
              <img
                src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1"
                alt=""
              />
            </div>
            <img
              src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
              alt=""
            />
            <img
              src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1"
              alt=""
            />
            <img
              src="https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1"
              alt=""
            />
            <img
              src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1"
              alt=""
            />
          </div>
          <div className="copyrightSec">
            <div>Help - Sitemap</div>
            <div>All rights reserved © 2006-2024 OLX</div>
          </div>
        </div>
      </div>
    </>
  );
};
