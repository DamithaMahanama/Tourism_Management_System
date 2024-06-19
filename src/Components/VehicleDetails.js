import React, { Component } from "react";
import "../Styles/VehicleDetails.css";
import img from "../images/vehicle1.jpg";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";

export default class VehicleDetails extends Component {

	render() {

	return (
		<div className='VehicleDetailsPage'>
			<div className='VehicleDetails'>
				<NavBarHome />
				<div className='left-side'>
					<div className='image-container'>
						<img src={img} alt='' className='main-image' />
						<div className='slider'>
							<img src={img} alt='' />
							<img src={img} alt='' />
							<img src={img} alt='' />
							<img src={img} alt='' />
							<img src={img} alt='' />
						</div>
					</div>
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
							<label>Pickup Location</label>
							<select />
						</div>
						<div className='basic-info'>
							<label>Drop off Location</label>
							<select />
						</div>
						<div className='basic-info'>
							<label>Passengers</label>
							<select />
						</div>

						<div>
							<div className='basic-ino radio-button'>
								<input
									type='radio'
									id='option1'
									name='options'
									value='option1'
								/>
								<label for='option1'>With Driver</label>
							</div>

							<div className='basic-ino radio-button'>
								<input
									type='radio'
									id='option2'
									name='options'
									value='option2'
								/>
								<label for='option2'>Without Driver</label>
							</div>
						</div>
						<div className='basic-info'>
							<label htmlFor=''>Pickup Date</label>
							<input type='date' />
						</div>
						<div className='basic-info'>
							<label htmlFor=''>Return Date</label>
							<input type='date' />
						</div>
						<button className='button-accept'>Accept</button>
						<button className='button-delete'>Delete</button>
					</form>
				</div>
				<div className='right-side'>
					<div className='vehicle-summary'>
						<h2>Vehicle Details</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
							reprehenderit dolore molestiae mollitia eos. Consequuntur repellat
							eveniet asperiores assumenda sapiente odio! Rerum magni aperiam,
							esse sint a deserunt accusamus similique? Lorem ipsum dolor sit
							amet consectetur, adipisicing elit. Et ipsum, esse corporis, minus
							eum laborum perferendis corrupti quos, aliquid ipsam velit
							temporibus rem cupiditate ad? Facilis optio tenetur corporis ea?
						</p>
						<div className='price-per-day'>
							<p>Price Per Day</p>
							<p className='price'>Price</p>
						</div>
						<div className='contact-number'>
							<i class='fa-brands fa-whatsapp'></i>
							<p>0710000000</p>
						</div>
						<div className='chat'>
							<i class='fa-regular fa-comments'></i>
							<p>chat</p>
						</div>
					</div>
					<div className='advertisement'>
						<div className='add'>
							<p>Advertisement</p>
						</div>
						<div className='add'>
							<p>Advertisement</p>
						</div>
						<div className='add'>
							<p>Advertisement</p>
						</div>
						<div className='add'>
							<p>Advertisement</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

}
