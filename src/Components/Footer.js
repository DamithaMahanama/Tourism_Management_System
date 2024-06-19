import React from 'react';
import '../Styles/Footer.css';
import gmail from '../images/gmail-logo.png'
import whatsapp from '../images/whatsapp-logo.png'
import facebook from '../images/facebook-logo.png'
import instagram from '../images/instagram-logo.png'

function Footer() {
  return (
    <footer>
      <div className="left-column">
        <p>Follow Us</p>
        <ul>
        <li>
            <a href="#">
                <img src={ gmail } alt="Gmail Logo" />
            </a>
        </li>

        <li>
            <a href="#">
                <img src={ whatsapp } alt="" />
            </a>
        </li>
        <li>
            <a href="#">
                <img src={ facebook } alt="" />
            </a>
        </li>
        <li>
            <a href="#">
                <img src={ instagram } alt="" />
            </a>
        </li>
        </ul>
      </div>
      <div className="middle-column">
        <p>Open world.com© 2021</p>
      </div>
      <div className="right-column">
        <div className="sub-column">
          <h4>Mobile App</h4>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Live Share</a>
            </li>
            <li>
              <a href="/">Video Record</a>
            </li>
          </ul>
        </div>
        <div className="sub-column">
          <h4>Community</h4>
          <ul>
            <li>
              <a href="/">Featured Artist</a>
            </li>
            <li>
              <a href="/">The Portal</a>
            </li>
            <li>
              <a href="/">Live Events</a>
            </li>
          </ul>
        </div>
        <div className="sub-column">
          <h4>Company</h4>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">History</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
