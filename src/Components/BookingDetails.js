import React from "react";
import '../Styles/BookingDetails.css'
import NavbarHome from "./NavBar_home";
import Footer from "./Footer";


function BookingDetails() {
	return (
		<div className="booking-details">
            <NavbarHome />
			<form>
				<div className='title'>
					<p>Booking Details</p>
				</div>
				<div className='basic-info'>
					<label>Your Name</label>
					<input type='text' />
				</div>

				<div className='basic-info'>
					<label>Your Contact Number</label>
					<input type='text' />
				</div>

				<div className='basic-info'>
					<label>Your Email Address</label>
					<input type='text' />
				</div>

				<div className='basic-info'>
					<label>Number of Visitors</label>
					<input type="number" />
				</div>
				<div className='basic-info'>
					<label>Booking Date</label>
					<input type="date" />
				</div>

				<button className='button-submit'>Submit</button>
				<button className='button-reset'>Reset</button>
			</form>
            <Footer />
		</div>
	);
}

export default BookingDetails;
