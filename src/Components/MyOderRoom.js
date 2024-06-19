import React, { Component } from "react";
import "../Styles/AddVehicle.css";
import '../Styles/MyOrderRooms.css'
import Footer from "./Footer";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class OderRoom extends Component {
	constructor(props) {
		super(props);
		this.onChangeOName = this.onChangeOName.bind(this);
		this.onChangenic = this.onChangenic.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangeroom = this.onChangeroom.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			OName: "",
			nic: "",
			email: "",
			room: "",
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
	onChangeroom(e) {
		this.setState({
			room: e.target.value,
		});
	}

	onChangeQty(e) {
		this.setState({
			Qty: e.target.value,
		});
	}



	onSubmit(e) {
		if (this.state.room == "acdb") {
			this.state.price = this.state.Qty * 5000;
		} else if (this.state.room == "nacdb") {
			this.state.price = this.state.Qty * 2500;
		} else if (this.state.room == "obac") {
			this.state.price = this.state.Qty * 1500;
		}
        else if (this.state.room == "obnac") {
			this.state.price = this.state.Qty * 1000;
		} else if (this.state.room == "eacdb") {
			this.state.price = this.state.Qty * 10000;
		}
		this.state.status = "pending";

		e.preventDefault();
		const obj = {
			OName: this.state.OName,
			nic: this.state.nic,
			email: this.state.email,
			room: this.state.room,
			price: this.state.price,
			Qty: this.state.Qty,
			status: this.state.status,
		};

		axios.post("http://localhost:4000/room/rAdd", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				OName: "",
				nic: "",
				email: "",
				room: "",
				price: "",
				Qty: "",
				status: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/RoomOderView/" + this.props.match.params.id);
		//   window.location.replace('/myorder/'+this.props.match.params.id);
	}

	render() {
		return (
			<div className='MyOrderRooms'>
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
							<label htmlFor=''> Room Type</label>
							<select
								required
								value={this.state.room}
								onChange={this.onChangeroom}
								className='form-control'>
								<option>Choose Room</option>
								<option value='acdb'>Ac with Double Bed</option>
								<option value='nacdb'>Non Ac with Double Bed</option>
								<option value='obac'>One Bed with Ac</option>
                                <option value='obnac'>One Bed with Non Ac</option>
                                <option value='eacdb'>Eco Friendly Ac with Double Bed</option>
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
							<label htmlFor='Qty'>How Many Room</label>
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
