import React, { Component } from "react";
import "../Styles/AddVehicle.css";
import Footer from "./Footer";
import axios from "axios";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class OderActivity extends Component {
	constructor(props) {
		super(props);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangeactivity = this.onChangeactivity.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);
	

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			email: "",
			activity: "",
			price: "",
			Qty: "",
			status: "",
			
		};
		this.state.email = this.props.match.params.id;
	}

    
    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/appointment/aedit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    email: res.data.email,
                    activity: res.data.activity,
                    price: res.data.price,
                    Qty: res.data.Qty,
                    status: res.data.status
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangeactivity(e) {
		this.setState({
			activity: e.target.value,
		});
	}
	onChangeQty(e) {
		this.setState({
			Qty: e.target.value,
		});
	}
	

	onSubmit(e) {
		if (this.state.activity == "Hiking") {
			this.state.price = this.state.Qty * 10000;
		} else if (this.state.activity == "Surfing") {
			this.state.price = this.state.Qty * 9500;
		} else if (this.state.activity == "FlyingR") {
			this.state.price = this.state.Qty * 16000;
		} else if (this.state.activity == "AirBallooning") {
			this.state.price = this.state.Qty * 10000;
		} else if (this.state.activity == "Diving") {
			this.state.price = this.state.Qty * 18000;
		}

		this.state.status = "pending";

		e.preventDefault();
		const obj = {
			email: this.state.email,
			activity: this.state.activity,
			price: this.state.price,
			Qty: this.state.Qty,
			status: this.state.status,
			
		};

        axios.post('http://localhost:4000/appointment/aupdate/'+this.props.match.params.id,obj)
        .then((res) => {
			alert("Update Successfully");
			this.setState({
                email: "",
                activity: "",
                price: "",
                Qty: "",
                status: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/ActivityViewTable/" + this.props.match.params.id);
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

							<label htmlFor=''> Activity Name</label>
							<select
								required
								value={this.state.activity}
								onChange={this.onChangeactivity}
								className='form-control'>
								<option>Choose Activity</option>
								<option value='Hiking'>Hiking </option>
								<option value='Surfing'>Surfing </option>
								<option value='FlyingR'>Flying Ravana</option>
								<option value='AirBallooning'>Hot Air Ballooning</option>
								<option value='Diving'>Scuba Diving</option>
							
							</select>
						</div>

					

						<div className='detail'>
							<label htmlFor='Qty'>How Many People?</label>
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
