import React from "react";
import "../Styles/NavBar_home.css";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

function NavbarHome() {
	return (
		<nav>
			<div className='logo'>
				<a href='/'>
					<img src={logo} alt='' srcset='' />
				</a>
			</div>
			<ul className='nav-links'>
				<li>
					<a href='/AdminHotelTableView'>Hotel</a>
				</li>
				<li>
					<a href='/AdminDestinationView'>Destination</a>
				</li>
				<li>
					<a href='/AdminActivityViewTable'>Activity</a>
				</li>
				<li>
					<a href='/AdminAppointmentViewTable'>Appointment</a>
				</li>
				<li>
					<a href='/AdminGuideTableView'>Tour Guide</a>
				</li>
				<li>
					<a href='/Payment'>Payment</a>
				</li>
				<li>
					<a href='/AdminRoomTableView'>Room</a>
				</li>
				<li>
					<a href='/vehicleadminView'>Vehicle</a>
				</li>
				<li>
					<a href='/AdminAyurwedicTableView'>Treatment</a>
				</li>
				{/* <li>
					<a href="/AdminRegisterViewTable">Tourist</a>
				</li> */}
				{/* <li>
					<a href='/features'>Experience</a>
				</li> */}
			</ul>
			<div className='profile'>
				<img src={image} alt='' srcset='' />
				<i class='fa-solid fa-ellipsis-vertical'></i>
			</div>
		</nav>
	);
}

export default NavbarHome;
