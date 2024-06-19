import React, { Component } from "react";
import "../Styles/specialoder.css";
import Footer from "./Footer";
import axios from "axios";

import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class OderTreatement extends Component {
	constructor(props) {
		super(props);
		this.onChangeHotel = this.onChangeHotel.bind(this);
		this.onChangevehicle = this.onChangevehicle.bind(this);
		this.onChangeroom = this.onChangeroom.bind(this);
		this.onChangetreatement = this.onChangetreatement.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
      
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			Hotel: "",
			vehicle: "",
			room: "",
			treatement: "",
			Qty: "",
			status: "",
			price: "",
            email: "",
		};
		this.state.email = this.props.match.params.id;
	}

	onChangeHotel(e) {
		this.setState({
			Hotel: e.target.value,
		});
	}
	onChangevehicle(e) {
		this.setState({
			vehicle: e.target.value,
		});
	}
	onChangeroom(e) {
		this.setState({
			room: e.target.value,
		});
	}
	onChangetreatement(e) {
		this.setState({
			treatement: e.target.value,
		});
	}

	onChangeQty(e) {
		this.setState({
			Qty: e.target.value,
		});
	}
    onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}

	
    

	onSubmit(e) {
	

         let hotelPrice = 0;
         let vehiclePrice = 0;
         let roomPrice = 0;
         let treatementPrice = 0;
     
         if (this.state.Hotel === "hbp") {
             hotelPrice = 5000;
         } else if (this.state.Hotel === "hdp") {
             hotelPrice = 8000;
         } else if (this.state.Hotel === "hep") {
             hotelPrice = 10000;
         } else if (this.state.Hotel === "hfp") {
             hotelPrice = 15000;
         }
     
         if (this.state.vehicle === "vnt") {
             vehiclePrice = 2000;
         } else if (this.state.vehicle === "vlls") {
             vehiclePrice = 4000;
         } else if (this.state.vehicle === "vbm") {
             vehiclePrice = 6000;
         } else if (this.state.vehicle === "vmb") {
             vehiclePrice = 8000;
         }
     
         if (this.state.room === "rsr") {
             roomPrice = 5000;
         } else if (this.state.room === "rdm") {
             roomPrice = 8000;
         } else if (this.state.room === "res") {
             roomPrice = 10000;
         } else if (this.state.room === "rfs") {
             roomPrice = 15000;
         } else if (this.state.room === "rhs") {
             roomPrice = 20000;
         }
     
         if (this.state.treatement === "Body") {
             treatementPrice = 2000;
         } else if (this.state.treatement === "Face") {
             treatementPrice = 1000;
         } else if (this.state.treatement === "Foot") {
             treatementPrice = 1500;
         } else if (this.state.treatement === "Neck") {
             treatementPrice = 2500;
         } else if (this.state.treatement === "Full") {
             treatementPrice = 5000;
         }
     
         this.state.price = hotelPrice + vehiclePrice + roomPrice + treatementPrice * this.state.Qty;
       
        
           
        
         

		this.state.status = "pending";

		e.preventDefault();
		const obj = {
			Hotel: this.state.Hotel,
			vehicle: this.state.vehicle,
			room: this.state.room,
			treatement: this.state.treatement,
			Qty: this.state.Qty,
			status: this.state.status,
			price: this.state.price,
            email: this.state.email,
		};

		axios.post("http://localhost:4000/appointment/sadd", obj).then((res) => {
			alert("add Successfully");
			this.setState({
				Hotel: "",
				vehicle: "",
				room: "",
				treatement: "",
				Qty: "",
				status: "",
                price: "",
                email: "",
			});
			console.log(res.data);
		});
		this.props.history.push("/SpecialOderView/" + this.props.match.params.id);
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
				<br />

                                

				<div className='content'>
					<form onSubmit={this.onSubmit}>
						<div className='detail'>
							<label htmlFor=''> Hotel</label>
							<select
								required
								value={this.state.Hotel}
								onChange={this.onChangeHotel}
								className='form-control'>
								<option>Choose Hotel Package</option>
								<option value='hbp'>Basic Package</option>
								<option value='hdp'>Deluxe Package</option>
								<option value='hep'>Executive Package</option>
								<option value='hfp'>Family Package</option>
								
							</select>
						</div>

                        <div className='detail'>
							<label htmlFor=''> Vehicle</label>
							<select
								required
								value={this.state.vehicle}
								onChange={this.onChangevehicle}
								className='form-control'>
								<option>Choose Vehicle</option>
								<option value='vnt'>Normal Taxi</option>
								<option value='vlls'>Lexus LS</option>
								<option value='vbm'>BMW 7 Series</option>
								<option value='vmb'>Mercedes-Benz Sprinter</option>
							
							</select>
						</div>

                        <div className='detail'>
							<label htmlFor=''> Room</label>
							<select
								required
								value={this.state.room}
								onChange={this.onChangeroom}
								className='form-control'>
								<option>Choose Suite</option>
								<option value='rsr'>Standard Room</option>
								<option value='rdm'>Deluxe Room</option>
								<option value='res'>Executive Suite</option>
								<option value='rfs'>Family Suite</option>
								<option value='rhs'>Honeymoon Suite</option>
							</select>
						</div>

                        <div className='detail'>
							<label htmlFor=''> Treatement</label>
							<select
								required
								value={this.state.treatement}
								onChange={this.onChangetreatement}
								className='form-control'>
								<option>Choose Tretement</option>
								<option value='Body'>Swedish Massage</option>
								<option value='Face'>Deep Tissue Massage</option>
								<option value='Foot'>Deep Tissue Massage</option>
								<option value='Neck'>Thai Massage</option>
								<option value='Full'>Sports Massage</option>
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
							<label htmlFor='Qty'>People?</label>
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
