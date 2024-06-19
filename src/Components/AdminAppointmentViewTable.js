/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import NavBar_home from "./NavBar_homeAdmin";
import Footer from "./Footer";
import "../Styles/AdminAppointmentViewTable.css"
import { Link } from "react-router-dom";
import AppTrowTable from "./AppointmentTrowTable";

export default class Appointment extends Component {
	constructor(props) {
		super(props);
		this.state = { appointment: [], search: "" };
		this.state.station = this.props.match.params.id;

		this.onChangeSearch = this.onChangeSearch.bind(this);
	}

	onChangeSearch(e) {
		this.setState({
			search: e.target.value,
		});
	}

	componentDidMount() {
		axios
			.get("http://localhost:4000/appointment/getall")
			.then((response) => {
				this.setState({ appointment: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.appointment.map(function (object, i) {
			return <AppTrowTable obj={object} key={i} />;
		});
	}

	render() {
		return (
			<div className="adminAppointmentProfile">
				<NavBar_home />
				
				<br />
				<h3 align="center">Appointment Management</h3>
				
				<div className="row-frm">
				<button><Link to={"/AddAppointment"} className="btn btn-success">Add Appointment</Link></button>
					<table className="table table-striped" style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Appointment ID</th>
								<th>Full Name</th>
								<th>Treatment</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
				</div>
				<br />
				<br />
				<div>
					<hr className="shadow-lg card-footer" />
				</div>
				<Footer />
			</div>
		);
	}
}
