import React, {Component} from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";
import '../Styles/SpecialPackages.css' 

export default class AppointmentHomepage extends Component {
	render() {
	return (
		<div>
			<nav>
				<div className='logo'>
					<a href='/'>
						<img src={logo} alt='' srcset='' />
					</a>
				</div>
				<ul className='nav-links'>
					<li>
						<a href={"/HotelHomepage/" + this.props.match.params.id}>hotel</a>
					</li>
					<li>
							<a href={"/AdvaticementHomePage/" + this.props.match.params.id}>
								Advatice
							</a>
						</li>
					<li>
						<a href={"/appointmentHomepage/" + this.props.match.params.id}>
							Appointment
						</a>
					</li>
					<li>
						<a href={"/TourguideHomepage/" + this.props.match.params.id}>
							Guide
						</a>
					</li>
				
					<li>
						<a href={"/RoomHomePage/" + this.props.match.params.id}>Room</a>
					</li>
					<li>
						<a href={"/VehicleHomePage/" + this.props.match.params.id}>
							Vehicle
						</a>
					</li>
					<li>
						<a
							href={
								"/AyurvedicTreatmentHomePage/" + this.props.match.params.id
							}>
							Treatement
						</a>
					</li>
					<li>
						<a href={"/destinations/" + this.props.match.params.id}>
							Destination
						</a>
					</li>
					<li>
						<a href={"/ExperienceHomepage/" + this.props.match.params.id}>
							Experience
						</a>
					</li>
				</ul>
				<div className='profile'>
						<a href={"/index/" + this.props.match.params.id}>
							{/* Experience */}
							<img src={image} alt='' srcset='' />
						</a>
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
			</nav>
			<div className="specialPackages">
			<h1>Tour Packages</h1>
			<div className='packages'>
				<div className='package'>
					<h3>Budget Explorer</h3>
					<h4>$1000</h4>
					<ul>
						<li>Basic hotel accommodations</li>
						<li>Public transportation</li>
						<li>Self-guided tours</li>
						<li>Local food experiences</li>
					</ul>
					<button type="submit">Buy</button>
				</div>
				<div className='package'>
					<h3>Cultural Immersion</h3>
					<h4>$2500</h4>
					<ul>
						<li>Mid-range hotel accommodations</li>
						<li>Guided tours to cultural and historical sites</li>
						<li>Local cuisine and cooking classes</li>
						<li>Authentic cultural experiences</li>
					</ul>
					<button type="submit">Buy</button>
				</div>
				<div className='package'>
					<h3>Luxury Explorer</h3>
					<h4>$5000</h4>
					<ul>
						<li>Luxury hotel accommodations</li>
						<li>Private transportation</li>
						<li>Private guided tours</li>
						<li>Fine dining and wine experiences</li>
					</ul>
					{/* <button type="submit">Buy</button> */}
					<button className='orderButton'>
									<a href={"/MySpecialOders/" + this.props.match.params.id}>
									Buy
									</a>
								</button>
				</div>
			</div>
		</div>
		</div>
	);
}
}
