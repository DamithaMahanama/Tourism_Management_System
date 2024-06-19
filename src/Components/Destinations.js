import React, { Component } from "react";
import "../Styles/Destinations.css";
// import NavbarHome from "./NavBar_home";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import Footer from "./Footer";
import Slideshow2 from "./SlideShow2";

import img1 from "../images/destination1.jpg";
import img2 from "../images/destination2.jpg";
import img3 from "../images/destination3.jpg";
import img4 from "../images/destination4.jpg";
import img5 from "../images/destination5.jpg";
import img6 from "../images/destination6.jpg";
import "../Styles/DestinationCard.css";
import { Link } from "react-router-dom";
export default class Destinations extends Component {
	render() {
		const destinations = [
			{
				id: 1,
				title: "Sigiriya",
				description:
					"Ancient rock fortress in Sri Lanka with frescoes and lion paw entrance...",
				img: img1,
			},
			{
				id: 2,
				title: "Pinnawala",
				description:
					"Pinnawala is an elephant orphanage in Sri Lanka, rescuing elephants.",
				img: img2,
			},
			{
				id: 3,
				title: "Upper country",
				description:
					"Bagawantalawa is a town in the central highlands of Sri Lanka, known for its tea plantations...",
				img: img3,
			},
			{
				id: 4,
				title: "Galle",
				description:
					"Galle is a charming coastal city in Sri Lanka, famous for its historic fort, beautiful beaches, and ...",
				img: img4,
			},
			{
				id: 5,
				title: "Water Falls",
				description:
					"Sri Lanka has many beautiful waterfalls, including Dunhinda Falls, Diyaluma Falls, and ...",
				img: img5,
			},
			{
				id: 6,
				title: "Horton Plains",
				description:
					"Horton Plains is a breathtaking national park in Sri Lanka, known for its grassy plains, misty peaks...",
				img: img6,
			},
		];

		return (
			<div className='destinationPage'>
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
				{/* <NavbarHome /> */}
				{/* <img src={img} alt="" srcset="" className="destination-banner"/> */}
				<Slideshow2 />
				<div className='destinations'>
					<div className='left-sidebar'>
						<div className='province'>
							<h2>Province</h2>
							<label>
								<input type='checkbox' />
								Province 1
							</label>
							<label>
								<input type='checkbox' />
								Province 2
							</label>
							<label>
								<input type='checkbox' />
								Province 3
							</label>
							<label>
								<input type='checkbox' />
								Province 4
							</label>
						</div>
						<div className='district'>
							<h2>District</h2>
							<div className='checkbox-group'>
								<label>
									<input type='checkbox' />
									District 1
								</label>
								<label>
									<input type='checkbox' />
									District 2
								</label>
								<label>
									<input type='checkbox' />
									District 3
								</label>
							</div>
						</div>
						<div className='category'>
							<h2>Category</h2>
							<div className='checkbox-group'>
								<label>
									<input type='checkbox' />
									Category 1
								</label>
								<label>
									<input type='checkbox' />
									Category 2
								</label>
								<label>
									<input type='checkbox' />
									Category 3
								</label>
							</div>
						</div>
					</div>
				
				<div className='Right-Panel'>
					<h2>Destinations</h2>

					<div className='destinationCardContainer'>
						{destinations.map((destination) => (
							<Link
								key={destination.id}
								to={'/destinationdetailssigiriya/'+ this.props.match.params.id}
								className='destinationCard'>
								<div className='top'>
									<img src={destination.img} alt='' />
								</div>
								<div className='bottom'>
									<p className='title'>{destination.title}</p>
									<p className='description'>{destination.description}</p>
									<button type='submit'>Details</button>
								</div>
							</Link>
						))}
					</div>
				</div>
				</div>
				<Footer />
			</div>
		);
	}
}
