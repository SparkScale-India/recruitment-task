import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg">
              <Link className="navbar-brand" to="/">
                <img className="img-fluid" src={logo} alt="skylineindiams.com" />
                <b style={{ color: '#000' }}>SKYLINE INDIA</b>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/recruitment">Recruitment Process</Link>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/#client">Our Client</a>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;