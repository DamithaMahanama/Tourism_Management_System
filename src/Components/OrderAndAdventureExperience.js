import React from "react";
// import AdventureAndExperienceCard from "./AdventureAndExperienceCard";
import Slideshow from "./SlideShow";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";
import "../Styles/OrderAndAdventureExperience.css";
import { withRouter, NavLink } from "react-router-dom";
import logo from "../images/logo (2).png";

import image from "../images/profile-photo.png";
import img1 from '../images/adventure1.jpg';
import img2 from '../images/adventure2.jpg';
import img3 from '../images/adventure3.jpg';
import img4 from '../images/adventure4.jpg';
import img5 from '../images/adventure5.jpg';
import img6 from '../images/adventure6.jpg';
import img7 from '../images/adventure7.jpg';
import img8 from '../images/adventure8.jpg';
import img9 from '../images/adventure9.jpg';

function OrderAndAdventureExperience() {
	const adventures = [
		{ id: 1, title: "Hiking", select: "Description 1", img: img1 },
		{ id: 2, title: "Hiking", select: "Description 2", img: img2 },
		{ id: 3, title: "Image title", select: "Description 3", img: img3 },
		{ id: 4, title: "Image title", select: "Description 1", img: img4 },
		{ id: 5, title: "Image title", description: "Description 2", img: img5 },
		{ id: 6, title: "Image title", description: "Description 2", img: img6 },
		{ id: 7, title: "Image title", select: "Description 1", img: img7 },
		{ id: 8, title: "Image title", description: "Description 2", img: img8 },
		{ id: 9, title: "Image title", description: "Description 2", img: img9 },
	];
	return (
		<div className='OrderAndAdventureExperience'>
			{/* <NavBarHome /> */}
			<nav>
				<div className='logo'>
					<NavLink to='/'>
						<img src={logo} alt='' srcset='' />
					</NavLink>
				</div>
				<ul className='nav-links'>
					<li>
						{/* <a href= {"/VehicleOderView/"+this.props.match.params.id}>Home</a> */}
					</li>
					<li>
						{/* <a href= {"/AyurvedicTreatmentHomePage/"+this.props.match.params.id}>Treatement</a> */}
					</li>
					<li>
						<NavLink exact to='/' activeClassName='active'>
							Tour
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/Payment' activeClassName='active'>
							Payment
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/our-services' activeClassName='active'>
							Destination
						</NavLink>
					</li>
					<li>
						<NavLink
							exact
							to='/VehicleHomePage/"+this.props.match.params.id'
							activeClassName='active'>
							Vehicle
						</NavLink>
					</li>

					<li>
						<NavLink exact to='/special-packages' activeClassName='active'>
							Advertising
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/features' activeClassName='active'>
							Experience
						</NavLink>
					</li>
				</ul>
				<div className='profile'>
					<NavLink to={`/index/${this.props.match.params.id}`}>
						<img src={image} alt='' srcset='' onClick={this.handleNavigation} />
					</NavLink>
					<i className='fa-solid fa-ellipsis-vertical'></i>
				</div>
			</nav>
			{/* <div className="adventure"> */}
			<Slideshow />

			<div className='adventureCardContainer'>
				{adventures.map((adventure) => (
					<div key={adventure.id} className='adventureCard'>
						<div className='top'>
							<img src={adventure.img} alt='' />
						</div>
						<div className='bottom'>
							<p className='title'>{adventure.title}</p>
						</div>
					</div>
				))}
			</div>

			{/* <AdventureAndExperienceCard /> */}
			{/* </div> */}

			<Footer />
		</div>
	);
}

export default OrderAndAdventureExperience;
