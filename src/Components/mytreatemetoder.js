import React, { Component } from "react";
import "../Styles/MyTreatmentOrder.css";
import Footer from "./Footer";
import axios from "axios";

import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class OderTreatement extends Component {
	constructor(props) {
		super(props);
		this.onChangeOName = this.onChangeOName.bind(this);
		this.onChangenic = this.onChangenic.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangetretement = this.onChangetretement.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			OName: "",
			nic: "",
			email: "",
			tretement: "",
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
	onChangetretement(e) {
		this.setState({
			tretement: e.target.value,
		});
	}

	onChangeQty(e) {
		this.setState({
			Qty: e.target.value,
		});
	}

	onChangetretement(e) {
		this.setState({
			tretement: e.target.value,
		});
	}

	onSubmit(e) {
		if (this.state.tretement == "Body") {
			this.state.price = this.state.Qty * 2000;
		} else if (this.state.tretement == "Face") {
			this.state.price = this.state.Qty * 1000;
		} else if (this.state.tretement == "Foot") {
			this.state.price = this.state.Qty * 1500;
		} else if (this.state.tretement == "Neck") {
			this.state.price = this.state.Qty * 2500;
		} else if (this.state.tretement == "Full") {
			this.state.price = this.state.Qty * 5000;
		}
		this.state.status = "pending";

		e.preventDefault();
		const obj = {
			OName: this.state.OName,
			nic: this.state.nic,
			email: this.state.email,
			tretement: this.state.tretement,
			price: this.state.price,
			Qty: this.state.Qty,
			status: this.state.status,
		};

		axios.post("http://localhost:4000/ayurvedic/oderadd", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				OName: "",
				nic: "",
				email: "",
				tretement: "",
				price: "",
				Qty: "",
				status: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/TreatmentOderView/" + this.props.match.params.id);
		//   window.location.replace('/myorder/'+this.props.match.params.id);
	}

	render() {
		return (
			<div className='MyTreatmentOrderPage'>
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
							<label htmlFor=''> Treatement</label>
							<select
								required
								value={this.state.tretement}
								onChange={this.onChangetretement}
								className='form-control'>
								<option>Choose Tretement</option>
								<option value='Body'>Body</option>
								<option value='Face'>Face</option>
								<option value='Foot'>Foot</option>
								<option value='Neck'>Neck</option>
								<option value='Full'>Full</option>
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
							<label htmlFor='Qty'>Quntity</label>
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
