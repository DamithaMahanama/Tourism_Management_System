import React from "react";
import "../Styles/ActivityDashboard.css";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";

function ActivityDashboard() {
	return (
		<div className=''>
			<div className='ActivityDashboard'>
				<NavBarHome />
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
					<div className='count activities'>
						<p>Activities</p>
						<div className='number'>32</div>
					</div>
					<div className='count pending'>
						<p>Pending</p>
						<div className='number'>5</div>
					</div>
					<div className='count users'>
						<p>Users</p>
						<div className='number'>54</div>
					</div>
					<div className='count page-views'>
						<p>Page Views</p>
						<div className='number'>545</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default ActivityDashboard;
