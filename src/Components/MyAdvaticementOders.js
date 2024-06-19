import React, { Component } from "react";
import "../Styles/AddVehicle.css";
import Footer from "./Footer";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class OderAdvaticement extends Component {
	constructor(props) {
		super(props);
		 this.onChangetitle = this.onChangetitle.bind(this);
		 this.onChangecategory = this.onChangecategory.bind(this);
		 this.onChangeemail = this.onChangeemail.bind(this);
		 this.onChangedescription = this.onChangedescription.bind(this);
        // this.onChangedays = this.onChangedays.bind(this);
		 this.onChangedays = this.onChangedays.bind(this);
		 this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			title: "",
			category: "",
			email: "",
			description: "",
			price: "",
			days: "",
			status: "",
		};
		this.state.email = this.props.match.params.id;
	}

	onChangetitle(e) {
		this.setState({
			title: e.target.value,
		});
	}
	onChangecategory(e) {
		this.setState({
			category: e.target.value,
		});
	}
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangedescription(e) {
		this.setState({
			description: e.target.value,
		});
	}

	
    onChangedays(e) {
		this.setState({
			days: e.target.value,
		});
	}

	onSubmit(e) {
		if (this.state.category == "Promotional") {
			this.state.price = this.state.days * 17000;
		} else if (this.state.category == "Testimonial") {
			this.state.price = this.state.days * 9500;
		} else if (this.state.category == "Educational") {
			this.state.price = this.state.days * 17200;
		} else if (this.state.category == "Interactive") {
			this.state.price = this.state.days * 10000;
        }

		this.state.status = "pending";

		e.preventDefault();
		const obj = {
			title: this.state.title,
			category: this.state.category,
			email: this.state.email,
			description: this.state.description,
			price: this.state.price,
			days: this.state.days,
			status: this.state.status,
		};

		axios.post("http://localhost:4000/tourist/aadd", obj).then((res) => {
			alert("add Successfully");
			this.setState({
			title: "",
			category: "",
			email: "",
			description: "",
			price: "",
			days: "",
			status: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/AdvaticementOdersview/" + this.props.match.params.id);
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

                        <div className='detail'>
							<label htmlFor='Qty'>Title</label>
							<input
								type='text'
								id='Qty'
								name='Qty'
								required
								value={this.state.title}
								onChange={this.onChangetitle}
							/>
						</div>

							<label htmlFor=''> add category</label>
							<select
								required
								value={this.state.category}
								onChange={this.onChangecategory}
								className='form-control'>
								<option>Choose category</option>
								<option value='Promotional'>Promotional </option>
								<option value='Testimonial'>Testimonial </option>
								<option value='Educational'>Educational</option>
								<option value='Interactive'>Interactive</option>
								
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
							<label htmlFor='Qty'>Description</label>
							<input
								type='text'
								id='Qty'
								name='Qty'
								required
								value={this.state.description}
								onChange={this.onChangedescription}
							/>
						</div>


						<div className='detail'>
							<label htmlFor='Qty'>hoe many day?</label>
							<input
								type='number'
								id='Qty'
								name='Qty'
								required
								value={this.state.days}
								onChange={this.onChangedays}
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
