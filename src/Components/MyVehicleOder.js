import React, { Component } from "react";
import "../Styles/AddVehicle.css";
import Footer from "./Footer";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class OderVehicle extends Component {
	constructor(props) {
		super(props);
		this.onChangeOName = this.onChangeOName.bind(this);
		this.onChangenic = this.onChangenic.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangevehicle = this.onChangevehicle.bind(this);
		//  this.onChangeprice = this.onChangeprice.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);
		// this.onChangestatus = this.onChangestatus.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			OName: "",
			nic: "",
			email: "",
			vehicle: "",
			price: "",
			Qty: "",
			status: "",
		};
		this.state.email = this.props.match.params.id;
	}

	// axios.get('http://localhost:4000/trainFoodAdmin/adminsearchfood/'+this.props.match.params.pathParam1+'/'+this.props.match.params.pathParam2)

	//  componentDidMount() {
	//      // alert('edit id ' +this.props.match.params.id);
	//      axios.get('http://localhost:4000/tourist/edit/'+this.props.match.params.id)
	//          .then(res => {
	//             this.setState({
	//                  // OName: res.data.firstName,
	//                  //  nic: res.data.nic,
	//                //  email: res.data.email

	//                 firstName: res.data.OName,
	//                  nic: res.data.nic,
	//             // //   email: res.data.email
	//             });
	//          })
	//          .catch(function (error){
	//              console.log("Can't Get Data");
	//          })
	// }

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
	onChangevehicle(e) {
		this.setState({
			vehicle: e.target.value,
		});
	}

	onChangeQty(e) {
		this.setState({
			Qty: e.target.value,
		});
	}

	onChangevehicle(e) {
		this.setState({
			vehicle: e.target.value,
		});
	}

	onSubmit(e) {
		if (this.state.vehicle == "Scooter") {
			this.state.price = this.state.Qty * 1000;
		} else if (this.state.vehicle == "Tuktuk") {
			this.state.price = this.state.Qty * 900;
		} else if (this.state.vehicle == "Car") {
			this.state.price = this.state.Qty * 1200;
		}
		this.state.status = "pending";

		e.preventDefault();
		const obj = {
			OName: this.state.OName,
			nic: this.state.nic,
			email: this.state.email,
			vehicle: this.state.vehicle,
			price: this.state.price,
			Qty: this.state.Qty,
			status: this.state.status,
		};

		axios.post("http://localhost:4000/vehicle/oderadd", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				OName: "",
				nic: "",
				email: "",
				vehicle: "",
				price: "",
				Qty: "",
				status: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/VehicleOderView/" + this.props.match.params.id);
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
						
							<label htmlFor=''> Vehicle</label>
							<select
								required
								value={this.state.vehicle}
								onChange={this.onChangevehicle}
								className='form-control'>
								<option>Choose Vehicle</option>
								<option value='Scooter'>Scooter</option>
								<option value='Tuktuk'>Tuktuk</option>
								<option value='Car'>Car</option>
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
							<label htmlFor='Qty'>Quentity</label>
							<input
								type='number'
								id='Qty'
								name='Qty'
								min='1'
								max='20'
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
