/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import NavBar_home from "./NavBar_homeAdmin";
import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import ActivityRow from "./ActivitiRow";

export default class Destination extends Component {
	constructor(props) {
		super(props);
		this.state = { activity: [], search: "" };
		this.state.Station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		// alert('email is ' +this.props.match.params.id);
		axios
			.get("http://localhost:4000/activity/getall")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ activity: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.activity.map(function (object, i) {
			return <ActivityRow obj={object} key={i} />;
		});
		
	}

	render() {
		return (
			<div className='adminVehicleProfile'>
				<NavBar_home />
				<br /> <h3 align='center'>Activity Management</h3>
				<div className='row-frm'>
				<button><Link to={"/addActivity"} className="btn btn-success">Add Activity</Link></button>

				<input type="text" placeholder="Search..." className="search"/>
				<button type="submit" className="search">Search</button>

					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Name</th>
								<th>Company</th>
							
                                <th>Contact No</th>
                                <th>Email</th>
                                <th>Category</th>
                                <th>Information</th>
								{/* <th>Image</th> */}
						
								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
				</div>
				<br />
				<br />
				<div>
					<hr className='shadow-lg card-footer' />
				</div>
				<Footer />
			</div>
		);
	}
}
