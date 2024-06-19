import React, { Component } from "react";
import "../Styles/AddVehicle.css";
import Footer from "./Footer";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class OderHotel extends Component {
	constructor(props) {
		super(props);
		this.onChangeOName = this.onChangeOName.bind(this);
		this.onChangenic = this.onChangenic.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangehotel = this.onChangehotel.bind(this);
		//  this.onChangeprice = this.onChangeprice.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);
		// this.onChangestatus = this.onChangestatus.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			OName: "",
			nic: "",
			email: "",
			hotel: "",
			price: "",
			Qty: "",
			status: "",
		};
		this.state.email = this.props.match.params.id;
	}

	onChangeOName(e) {
		this.setState({
			OName: e.target.value,
		});
	}
	onChangenic(e) {
		this.setState({
			nic: e.target.value,
		});
	}
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangehotel(e) {
		this.setState({
			hotel: e.target.value,
		});
	}

	onChangeQty(e) {
		this.setState({
			Qty: e.target.value,
		});
	}

	onSubmit(e) {
		if (this.state.hotel == "Movenpick") {
			this.state.price = this.state.Qty * 17000;
		} else if (this.state.hotel == "Jetwing") {
			this.state.price = this.state.Qty * 9500;
		} else if (this.state.hotel == "CinnamonRed") {
			this.state.price = this.state.Qty * 17200;
		} else if (this.state.hotel == "AngamVilla") {
			this.state.price = this.state.Qty * 10000;
		} else if (this.state.hotel == "AllspiceVilla") {
			this.state.price = this.state.Qty * 18000;
		} else if (this.state.hotel == "MarinoBeach") {
			this.state.price = this.state.Qty * 19000;
		}

		this.state.status = "pending";

		e.preventDefault();
		const obj = {
			OName: this.state.OName,
			nic: this.state.nic,
			email: this.state.email,
			hotel: this.state.hotel,
			price: this.state.price,
			Qty: this.state.Qty,
			status: this.state.status,
		};

		axios.post("http://localhost:4000/hotel/add", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				OName: "",
				nic: "",
				email: "",
				hotel: "",
				price: "",
				Qty: "",
				status: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/HotelOderView/" + this.props.match.params.id);
		//   window.location.replace('/myorder/'+this.props.match.params.id);
	}

	render() {
		return (
			<div className='AddVehiclePage'>
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
							<a href='/AdminRegisterViewTable'>Tourist</a>
						</li>
						<li>
							<a href={"/ExperienceHomepage/" + this.props.match.params.id}>
								Experience
							</a>
						</li>
					</ul>
					<div className='profile'>
						<img src={image} alt='' srcset='' />
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
				</nav>
				<br /> <br /> <br />
				<div className='content'>
					<form onSubmit={this.onSubmit}>
						<div className='detail'>
							<label htmlFor=''> Hotel Name</label>
							<select
								required
								value={this.state.hotel}
								onChange={this.onChangehotel}
								className='form-control'>
								<option>Choose Hotel</option>
								<option value='Movenpick'>Mövenpick </option>
								<option value='Jetwing'>Jetwing </option>
								<option value='CinnamonRed'>Cinnamon Red</option>
								<option value='AngamVilla'>Angam Villa</option>
								<option value='AllspiceVilla'>Allspice Villa</option>
								<option value='MarinoBeach'>Marino Beach Colombo</option>
							</select>
						</div>

						<div className='detail'>
							<label htmlFor=''> Email</label>
							<input
								type='text'
								id='vehicleName'
								name='vehicleName'
								required
								readOnly
								value={this.state.email}
								onChange={this.onChangeemail}
							/>
						</div>

						<div className='detail'>
							<label htmlFor='Qty'>Night</label>
							<input
								type='number'
								id='Qty'
								name='Qty'
								required
								value={this.state.Qty}
								onChange={this.onChangeQty}
							/>
						</div>

						<button type='submit'>save</button>
					</form>
				</div>
				<Footer />
			</div>
		);
	}
}
