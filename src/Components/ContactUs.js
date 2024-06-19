import React from 'react'
import '../Styles/ContactUs.css'
import NavbarLogin from './NavBar_login'

function ContactUs() {
  return (
    <div>
        <NavbarLogin />
        <div class="contact-form">
  <h1>Contact Us</h1>
  <form>
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>

<div class="contact-details">
  <h2>Contact Details</h2>
  <ul>
    <li><i class="fa fa-map-marker"></i> 123 Main Street, Colombo, Sri Lanka</li>
    <li><i class="fa fa-phone"></i> +94 123 456 789</li>
    <li><i class="fa fa-envelope"></i> info@openworld.com</li>
  </ul>
</div>

    </div>
  )
}

export default ContactUs