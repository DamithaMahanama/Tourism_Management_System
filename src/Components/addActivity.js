import React, { Component } from "react";
import "../Styles/RoomRegister.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from "axios";

export default class AddActivity extends Component {
	constructor(props) {
		super(props);
		this.onChangename = this.onChangename.bind(this);
		this.onChangecompany = this.onChangecompany.bind(this);
		this.onChangecontactNo = this.onChangecontactNo.bind(this);
		this.onChangeemail = this.onChangeemail.bind(this);
		this.onChangecategory = this.onChangecategory.bind(this);
		this.onChangeinformation = this.onChangeinformation.bind(this);

		

		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: "",
			company: "",
			contactNo: "",
			email: "",
			category: "",
            information: "",
			
		};
	}
	onChangename(e) {
		this.setState({
			name: e.target.value,
		});
	}
	onChangecompany(e) {
		this.setState({
			company: e.target.value,
		});
	}
	// eslint-disable-next-line no-dupe-class-members
	onChangecontactNo(e) {
		this.setState({
			contactNo: e.target.value,
		});
	}
	onChangeemail(e) {
		this.setState({
			email: e.target.value,
		});
	}
	onChangecategory(e) {
		this.setState({
			category: e.target.value,
		});
	}
    onChangeinformation(e) {
		this.setState({
			information: e.target.value,
		});
	}
	

	onSubmit(e) {
		e.preventDefault();
		const obj = {
			name: this.state.name,
			company: this.state.company,
			contactNo: this.state.contactNo,
			email: this.state.email,
			category: this.state.category,
            information: this.state.information
			
		};

	
			if (this.state.contactNo.length >= 0) {
				if (this.state.information.length > 5) {
					axios
						.post("http://localhost:4000/activity/add", obj)
						.then((res) => {
							alert(" add Successfully");
							this.setState({
                                name: "",
                                company: "",
                                contactNo: "",
                                email: "",
                                category: "",
                                information: "",
							});
							console.log(res.data);
						});
					this.props.history.push("/AdminActivityViewTable");
				} else {
					alert("pleace enter valid information.");
				}
			} else {
				alert("pleace enter valid contact number.");
		       }
	}

	render() {
		return (
			<div className='RoomRegister'>
				<NavbarHome />
				<form onSubmit={this.onSubmit}>
					<div className='title'>
						<p>activity add</p>
					</div>
					<div className='basic-info'>
						<label>activity</label>
						<input
							type='text'
							value={this.state.name}
							onChange={this.onChangename}
						/>
					</div>

                    <div className='basic-info'>
						<label>company</label>
						<input
							type='text'
							value={this.state.company}
							onChange={this.onChangecompany}
						/>
					</div>

                    <div className='basic-info'>
						<label>contactNo</label>
						<input
							type='text'
							value={this.state.contactNo}
							onChange={this.onChangecontactNo}
						/>
					</div>



					<div className='basic-info'>
						<label>email</label>
						<input
							type='text'
							value={this.state.email}
							onChange={this.onChangeemail}
						/>
					</div>

					<div className='basic-info'>
						<label>category</label>
						<input
							type='text'
							value={this.state.category}
							onChange={this.onChangecategory}
						/>
					</div>

                    <div className='basic-info'>
						<label>information</label>
						<input
							type='text'
							value={this.state.information}
							onChange={this.onChangeinformation}
						/>
					</div>

					<button className='submit' type='submit'>
						Submit
					</button>
				</form>
				<Footer />
			</div>
		);
	}
}
