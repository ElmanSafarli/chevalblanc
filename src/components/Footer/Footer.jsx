import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faHorseHead } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-first">
          <div className="footer-logo">
            <span>C</span>
            <FontAwesomeIcon className="footer-icon" icon={faHorseHead} />
            <span>B</span>
          </div>
          <div className="follow-us-on">
            <p>Follow us on</p>
            <div className="footer-follow-icon">
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
              <FontAwesomeIcon className="icon" icon={faInstagram} />
              <FontAwesomeIcon className="icon" icon={faPinterest} />
            </div>
          </div>
          <div className="footer-first-block-text">
            <h5>Stay in touch</h5>
            <p>Sign up to receive newsletters from Cheval Blanc</p>
          </div>
          <div className="subsribe-footer"></div>
        </div>
        <div className="footer-second">
          <ul>
            <li>Paris</li>
            <li>St-Tropez</li>
            <li>St-Barth</li>
            <li>Randheli</li>
            <li>Courchevel</li>
          </ul>
        </div>
        <div className="footer-third">
          <ul>
            <li>All About Cheval Blanc</li>
            <li>Development</li>
            <li>Careers</li>
            <li>Legal Notices</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-fifth">
          <ul>
            <li>Contact</li>
            <li>Press</li>
            <li>Partners</li>
            <div className="set-language-future">FR / EN</div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
