import React from "react";

const Footer = () => {
  return (
    <footer>
      {" "}
      <div className="footer-box">
        <div className="customer-box">
          <div className="heading-customer">CUSTOMER POLICIES</div>
          <div className="online-content">
            <a href="#">Contact us</a>
            <a href="#">FAQ</a>
            <a href="#">T&C</a>
            <a href="#">Terms Of Use</a>
            <a href="#">Track Order</a>
            <a href="#">Shipping</a>
            <a href="#">Cancellation</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Grievance Officer</a>
          </div>
        </div>

        <div className="online-box">
          <div className="heading-online">ONLINE SHOPPING</div>
          <div className="online-content">
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">Kids</a>
            <a href="#">Home & Living</a>
            <a href="#">Beauty</a>
            <a href="#">Gift Cards</a>
            <a href="#">Myntra Insider</a>
          </div>
        </div>
        <div className="online-box">
          <div className="heading-online">USEFUL LINKS</div>
          <div className="online-content">
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Site Map</a>
            <a href="#">Corporate Information</a>
            <a href="#">WhiteHat</a>
            <a href="#">Cleartrip</a>
          </div>
          <div className="icons">
            <div>
              <img
                src="https://cdn3.iconfinder.com/data/icons/picons-social/57/46-facebook-512.png"
                alt=""
              />
            </div>

            <div>
              <img
                src="https://cdn.mos.cms.futurecdn.net/z3bn6deaxmrjmQHNEkpcZE-1200-80.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        © 2024 www.myntra.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
