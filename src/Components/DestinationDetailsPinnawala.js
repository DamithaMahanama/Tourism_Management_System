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
							<li>Pinnawala</li>
							<li>
								Pinnawala is a small town in Sri Lanka known for its famous
								elephant orphanage. The Pinnawala Elephant Orphanage was
								established in 1975 as a refuge for orphaned elephants and has
								since become a popular tourist destination. The orphanage cares
								for dozens of elephants, providing them with shelter, food, and
								medical care. Visitors can watch the elephants being fed and
								bathed in the nearby river, and there are opportunities to ride
								on the elephants as well.
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
