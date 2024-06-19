import React, { Component } from "react";
import axios from "axios";
import "../Styles/AyurvedicRegister.css";
import NavBarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default class AyurvedicRegister extends Component {

	constructor(props) {
		super(props);
		this.onChangefirstName = this.onChangefirstName.bind(this);
		this.onChangeage = this.onChangeage.bind(this);
		this.onChangecountry = this.onChangecountry.bind(this);
		this.onChangestate = this.onChangestate.bind(this);
		this.onChangegender = this.onChangegender.bind(this);
		
		this.onSubmit = this.onSubmit.bind(this);
	
		this.state = {
			firstName: "",
			age: "",
			country: "",
			state: "",
			gender: "",
		 
		};
	  }
	  onChangefirstName(e) {
		this.setState({
			firstName: e.target.value,
		});
	  }
	  onChangeage(e) {
		this.setState({
			age: e.target.value,
		});
	  }
	  // eslint-disable-next-line no-dupe-class-members
	  onChangecountry(e) {
		this.setState({
			country: e.target.value,
		});
	  }
	  onChangestate(e) {
		this.setState({
			state: e.target.value,
		});
	  }
	  onChangegender(e) {
		this.setState({
			gender: e.target.value,
		});
	  }
	 
	
	  onSubmit(e) {
		e.preventDefault();
		const obj = {
			firstName: this.state.firstName,
			age: this.state.age,
			country: this.state.country,
			state: this.state.state,
			gender: this.state.gender,
		
		};
	
		
		if (parseInt(this.state.age) >= 18) {
			if (isNaN(parseInt(this.state.age))) {
			  alert("Please enter a valid age.");
			} else {
			  axios
				.post("http://localhost:4000/ayurvedic/add", obj)
				.then((res) => {
				  alert("Added successfully");
				  this.setState({
					firstName: "",
					age: "",
					country: "",
					state: "",
					gender: "",
				  });
				  console.log(res.data);
				})
				.catch((err) => {
				  console.log(err);
				  alert("An error occurred while adding data");
				});
			  this.props.history.push("/AdminAyurwedicTableView");
			}
		  } else {
			alert("You must be at least 18 years old to register.");
		  }
		  
			  
			
	  }
	
	  render() {

	return (
		<div className='AyurvedicRegisterPage'>
			<NavBarHome />
			<div className='AyurvedicRegister'>
				<form onSubmit={this.onSubmit}>
					<h2>Therapist Register</h2>
					<div className='detail'>
						<label htmlFor=''>Full Name</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.firstName} onChange={this.onChangefirstName}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>Age</label>
						<input type='text' id='vehicleName' name='vehicleName' required value={this.state.age} onChange={this.onChangeage}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>Country</label>
						<input type='text' name='' id='' value={this.state.country} onChange={this.onChangecountry}/>
					</div>

					<div className='detail'>
						<label htmlFor=''>State</label>
						<input type='text' value={this.state.state} onChange={this.onChangestate}/>
					</div>

					<div className='choice'>
						<div className='radio-button'>
							<input type='radio' name='radio' onChange={this.onChangegender}/>
							<label for='option1'>Male</label>
						</div>

						<div className=' radio-button'>
							<input type='radio' name='radio' onChange={this.onChangegender}/>
							<label for='option2'>Female</label>
						</div>
					</div>

					
					<button type='submit'>Register</button>
				</form>
			</div>{" "}
			<Footer />
		</div>
	);
}

}
