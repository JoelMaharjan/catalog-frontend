import React from "react";
import logomark from "../assets/images/Logomark-1.png";
import logotype from "../assets/images/Logotype.png";
import twitter from "../assets/images/Twitter.png";
import linkedin from "../assets/images/LinkedIn.png";
import youtube from "../assets/images/YouTube.png";
import { footerData } from "../utils/footerData";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-background">
        <div className="overlay-1">
          <div className="overlay-2"></div>
        </div>
      </div>

      <div className="footer-wrapper">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logomark} alt="" />
            <img src={logotype} alt="" />
          </div>
          <p>
            We are a collaboration of non-government organisation and
            professionals working to ensure that government spending.
          </p>
          <div className="social-media">
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-container">
            {footerData.map((item, index) => (
              <div className="footer-content">
                <p>{item.title}</p>
                <ul>
                  {item.links.map((link, index) => (
                    <li key={index}>{link}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
