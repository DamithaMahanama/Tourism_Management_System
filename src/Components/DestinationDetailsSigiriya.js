import React, { Component } from "react";
import "../Styles/DestinationDetails.css";
import MapLocation from "./Map";
import NavbarHome from "./NavBar_home";
import Footer from "./Footer";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

export default class DestinationDetails extends Component {
	render() {
		return (
			<div className='destinationDetailsPage'>
				{/* <NavbarHome /> */}
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
							<a href='/Payment'>Payment</a>
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

				<div className='destinationDetails'>
					<div className='left-panel'>
						<h2>Destination Details</h2>
						<ul>
							<li>Sigiriya</li>
							<li>
								Sigiriya, also known as Lion Rock, is a fascinating
								archaeological site located in the heart of Sri Lanka's Cultural
								Triangle. It was built in the 5th century AD by King Kasyapa as
								his capital and fortress, and it is renowned for its
								extraordinary architecture and breathtaking natural
								surroundings. The most striking feature of Sigiriya is the
								massive rock outcrop that rises 200 meters above the surrounding
								landscape, resembling a giant lion. The site's main attraction
								is the Lion Gate, an enormous stone gateway carved into the
								shape of a lion's head. Unfortunately, the lion's head has been
								destroyed over time, but visitors can still climb to the top of
								the rock for stunning panoramic views of the surrounding area.
							</li>
						</ul>
					</div>
					<div className='right-panel'>
						<MapLocation />
					</div>
				</div>

				<Footer />
			</div>
		);
	}
}
