import React, { Component } from "react";
// import Treatment from "./TreatmentCard";
import "../Styles/AyurvedicTreatmentHomePage.css";
import NavBarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";
import img1 from "../images/treatmentBody.jpg";
import img2 from "../images/treatmentFace.jpg";
import img3 from "../images/treatmentFoot.jpg";
import img4 from "../images/treatmentNeck.jpg";
import img5 from "../images/treatmentMassage.jpg";
import "../Styles/TreatmentCard.css";

export default class AyurvedicTreatmentHomePage extends Component {
	constructor(props) {
		super(props);
		// this.state = { vehicleOder: [],
		//   search: "" ,
		//   email : this.props.match.params.id
		//  };
	}
	render() {
		const treatments = [
			{
				id: 1,
				title: "Body",
				select: "Description 1",
				img: img1,
				price: "89.99",
			},
			{
				id: 2,
				title: "Face",
				select: "Description 2",
				img: img2,
				price: "21.99",
			},
			{
				id: 3,
				title: "Foot",
				select: "Description 3",
				img: img3,
				price: "12.99",
			},
			{
				id: 4,
				title: "Neck",
				select: "Description 1",
				img: img4,
				price: "99.99",
			},
			{
				id: 5,
				title: "Full",
				description: "Description 2",
				img: img5,
				price: "12.99",
			},
			// { id: 6, title: 'Massage', description: 'Description 2', img: img5 },
		];

		return (
			<div className='AyurvedicTreatmentHomePage'>
				{/* <NavBarHome /> */}

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
					</div>				</nav>

				<div className='top'>
					<p className='sentence'>
						What type of treatment are you looking for?
					</p>
					<div className='button-set'>
						<button>Book and Appointment</button>
						<br />
						<button>My Appointment</button>
						<br />
						<button>SignOut</button>
						<br />
					</div>
				</div>
				<div className='bottom'>
					<div className='treatmentCards'>
						<div className='treatmentCard'>
							{/* <Treatment /> */}
							<div className='treatmentCardContainer'>
								{treatments.map((treatment) => (
									<div key={treatment.id} className='treatmentCard'>
										<div className='top'>
											<img src={treatment.img} alt='' />
										</div>
										<div className='bottom'>
											<p className='title'>
												{/* <a href='#'> {treatment.title}</a> */}
												<a
													href={
														"/mytreatemetoder/" + this.props.match.params.id
													}>
													{treatment.title}
												</a>
											</p>
											<p className='price'>Price: ${treatment.price}</p>
											{/* <button className='orderButton'>
									<a href={"/mytreatemetoder/" + this.props.match.params.id}>
										Order Now !
									</a>
								</button> */}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
