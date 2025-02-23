import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import SocialIcons from './SocialIcons.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark-gradient space-ptb">
      <div className="container">
        <div className="row align-items-center mb-4 mb-lg-5">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <SocialIcons />
          </div>
        </div>
        <div className="row bg-white m-0 p-4 p-lg-5 position-relative z-index-9">
          <div className="col-lg-5 col-md-6 mb-4 mb-lg-2">
            <div className="pr-xl-6">
              <Link className="mb-4 d-inline-block" to="/">
                <img className="img-fluid" src={logo} alt="skylineindiams.com" width="150" />
              </Link>
              <p className="lead text-dark mb-0">
                Skyline India Management Services is a Registered Outsourcing Company providing Clients with a single business solution with delivering end to end HR Services for Contract Staffing, Permanent Staffing and Mass Recruitment.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4 mb-lg-2">
            <div className="contact-info">
              <h5 className="mb-4">Contact Us</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt text-primary"></i>
                  <span>No.125, 1st Floor, Basavachari Building, Hosur Main Road, Electronic City, Konappana Agrahara, Bengaluru, 560100</span>
                </li>
                <li>
                  <i className="far fa-envelope text-primary"></i>
                  <span><a href="mailto:skylineindiamanagementservices@gmail.com">skylineindiamanagementservices@gmail.com</a></span>
                </li>
                <li>
                  <i className="fas fa-phone-alt text-primary"></i>
                  <span><a href="tel:8884775151">8884775151</a></span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-0">
            <div className="footer-link">
              <h5 className="mb-4">Company</h5>
              <ul className="list-unstyled mb-0">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/recruitment">Recruitment Process</Link></li>
                <li><a href="#client">Our Client</a></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 mt-5">
            <p className="mb-0 text-dark">
              © Copyright <span>{currentYear}</span> <Link to="/">Skyline India Management Services</Link> All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="position-absolute left-0 bottom-0 ml-n6 d-none d-md-block">
        <svg xmlns="http://www.w3.org/2000/svg" width="400px" height="400px" viewBox="0 0 574 574">
          <path
            id="Shape_615_copy"
            data-name="Shape 615 copy"
            className="fill-primary opacity-10"
            d="M319,5050.99c-158.511,0-287.011,128.5-287.011,287.01S160.491,5625.01,319,5625.01,606.014,5496.51,606.014,5338,477.515,5050.99,319,5050.99Zm0,483.39c-108.455,0-196.376-87.92-196.376-196.38S210.547,5141.63,319,5141.63,515.379,5229.55,515.379,5338,427.459,5534.38,319,5534.38Z"
            transform="translate(-32 -5051)"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;