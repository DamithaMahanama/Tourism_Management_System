import React from "react";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";
import "../Styles/RequestBooking.css";

function RequestBooking() {
	return (
		<div className=''>
			<NavBarHome />
			<div className='RequestBooking'>
				<div className='left-side'>
					<div className='label-button'>
						<label htmlFor=''>
							<i class='fa-solid fa-house'></i>Dashboard
							<span>{">"}</span>
						</label>
					</div>
					<div className='label-button'>
						<label htmlFor=''>
							<i class='fa-solid fa-chart-line'></i>Booking Request
							<span>{">"}</span>
						</label>
					</div>
					<div className='label-button'>
						<label htmlFor=''>
							<i class='fa-solid fa-message'></i>Messages <span>{">"}</span>
						</label>
					</div>
					<div className='label-button'>
						<label htmlFor=''>
							<i class='fa-solid fa-bookmark'></i>Booking Activities
							<span>{">"}</span>
						</label>
					</div>
					<div className='label-button'>
						<label htmlFor=''>
							<i class='fa-brands fa-telegram'></i>Request <span>{">"}</span>
						</label>
					</div>
					<div className='label-button'>
						<label htmlFor=''>
							<i class='fa-solid fa-gear'></i>Setting <span>{">"}</span>
						</label>
					</div>
				</div>
				<div className='right-side'>
					<div className='top-nav'>
						<p>Request</p>
						<ul>
							<li>Request 1</li>
							<li>Request 2</li>
							<li>Request 3</li>
						</ul>
					</div>
					<form>
						{/* <div className='title'>
					<p>Booking Details</p>
				</div> */}
						<div className='basic-info'>
							<label>Name</label>
							<input type='text' />
						</div>

						<div className='basic-info'>
							<label>Company Name</label>
							<input type='text' />
						</div>

						<div className='basic-info'>
							<label>Contact Number</label>
							<input type='text' />
						</div>

						<div className='basic-info'>
							<label>Email</label>
							<input type='number' />
						</div>
						<div className='basic-info'>
							<label>Select Activity Category</label>
							<select></select>
						</div>
						<div className='basic-info'>
							<label htmlFor=''>Activity Information</label>
							<textarea name='' id=''></textarea>
							<br />
							<input type='file' />
						</div>

						<button className='button-place'>Place Activity</button>
						<button className='button-contacting'>Contact Customer</button>
					</form>
				</div>
			</div>{" "}
			<Footer />
		</div>
	);
}

export default RequestBooking;
