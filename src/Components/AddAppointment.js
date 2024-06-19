import React, { Component } from "react";
import axios from "axios";
import "../Styles/Appointment.css";
import NavBarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";

export default class Appointment extends Component {
	constructor(props) {
		super(props);
		this.onChangeaID = this.onChangeaID.bind(this);
		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeTreatement = this.onChangeTreatement.bind(this);

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			aID: "",
			Name: "",
			Treatement: "",
		};
	}
	onChangeaID(e) {
		this.setState({
			aID: e.target.value,
		});
	}
	onChangeName(e) {
		this.setState({
			Name: e.target.value,
		});
	}
	// eslint-disable-next-line no-dupe-class-members
	onChangeTreatement(e) {
		this.setState({
			Treatement: e.target.value,
		});
	}

	onSubmit(e) {
		e.preventDefault();
		const obj = {
			aID: this.state.aID,
			Name: this.state.Name,
			Treatement: this.state.Treatement,
		};

		if (/\d/.test(this.state.aID)) {
			// if(this.state.aID.length > 3){
			axios.post("http://localhost:4000/appointment/add", obj).then((res) => {
				alert(" add Successfully");

				this.setState({
					aID: "",
					Name: "",
					Treatement: "",
				});
				console.log(res.data);
			});
			this.props.history.push("/AdminAppointmentViewTable");
			window.location.replace("/AdminAppointmentViewTable");
			alert(" add Successfully");
		} else {
			alert("you can't use characters");
		}
	}

	render() {
		return (
			<div className='AppointmentPage'>
				<NavBarHome />
				<form onSubmit={this.onSubmit}>
					<h2>Appointment</h2>
					<div className='detail'>
						<label htmlFor=''>Appointment ID</label>
						<input
							type='text'
							id=''
							name=''
							required
							value={this.state.aID}
							onChange={this.onChangeaID}
						/>
					</div>

					<div className='detail'>
						<label htmlFor=''>Full Name</label>
						<input
							type='text'
							id=''
							name=''
							required
							value={this.state.Name}
							onChange={this.onChangeName}
						/>
					</div>

					<div className='detail'>
						<label htmlFor=''> Tretment</label>
						<select
							required
							value={this.state.Treatement}
							onChange={this.onChangeTreatement}
							className='form-control'>
							<option value='Foot'>Foot</option>
							<option value='Head'>Head</option>
							<option value='Facial'>Facial</option>
						</select>
					</div>

					<div className='button'>
						<button type='submit'>save</button>
					</div>
				</form>
				<Footer />
			</div>
		);
	}
}
