import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div>
          <h1>Yokan</h1>
          <p>Your favorite choice</p>
        </div>
        <div>
          <a href='/'>
            <i className='fa-brands fa-facebook'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-instagram'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-behance'></i>
          </a>
          <a href='/'>
            <i className='fa-brands fa-twitter'></i>
          </a>
        </div>
      </div>
      <div className='bottom'>
        <div>
          <h4>Projects</h4>
          <a href='/'>Changelog</a>
          <a href='/'>Status</a>
          <a href='/'>License</a>
          <a href='/'>All Version</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href='/'>Github</a>
          <a href='/'>Issues</a>
          <a href='/'>Project</a>
          <a href='/'>Other</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href='/'>Support</a>
          <a href='/'>Troubleshooting</a>
          <a href='/'>Changelog</a>
          <a href='/'>Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href='/'>Terms of Service</a>
          <a href='/'>Privacy Policy</a>
          <a href='/'>License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
