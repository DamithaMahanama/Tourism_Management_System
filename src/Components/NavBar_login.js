import React from 'react';
import '../Styles/NavBar_login.css'
import logo from '../images/logo.png'

function NavbarLogin() { 
  return (
    <nav>
      <div className="logo">
        <a href="/"><img src={logo} alt="" srcset="" /></a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/specialpackages">SpecialPackages</a>
        </li>
        <li>
          <a href="/features">Features</a>
        </li>
        <li>
          <a href="/ContactUs">Contact Us</a>
        </li>
        <li>
          <a href="/aboutUs">About Us</a>
        </li>
        <li>
          <a href="/festivals">Festivals</a>
        </li>
      </ul>
      <div className="auth-buttons">
        <button><a href="/Register"> Sign Up</a></button>
        <button><a href="/login"> Sign In</a></button>
      </div>
    </nav>
  );
}

export default NavbarLogin;
