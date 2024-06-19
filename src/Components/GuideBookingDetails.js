import React from "react";
import NavbarHome from "./NavBar_home";
import "../Styles/GuideBookingDetails.css";
import Footer from "./Footer";

function GuideBookingDetails() {
	return (
		<div>
			<div className='GuideBookingDetails'>
				<NavbarHome />
				<form>
					<div className='title'>
						<p>Guide Booking Details</p>
					</div>
					<div className='basic-info'>
						<label>Full Name</label>
						<select>
							<option value=""></option>
						</select>
					</div>

					<div className='basic-info'>
						<label>Contact Number</label>
						<input type='text' />
					</div>

					<div className='basic-info'>
						<label>Email</label>
						<input type='text' />
					</div>

					<div className='basic-info'>
						<div className='checkin'>
							<label htmlFor='datepicker'>Check In</label>
							<input type='date' id='datepicker' />
						</div>
					</div>
					<div className='basic-info'>
							<div className='checkout'>
								<label htmlFor='date'>Check Out</label>
								<input type='date' id='date' />
							</div>
						</div>

					<button className='submit' type='submit'>
						Add to Cart
					</button>
				</form>
				<Footer />
			</div>
		</div>
	);
}

export default GuideBookingDetails;
