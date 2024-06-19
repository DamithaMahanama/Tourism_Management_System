/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import NavBar_home from "./NavBar_homeAdmin";
import Footer from "./Footer";
import "../Styles/VehicleTable.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import TabRow from "./destinationRow";

export default class Destination extends Component {
	constructor(props) {
		super(props);
		this.state = { destination: [], search: "" };
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
			.get("http://localhost:4000/destination/getall")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ destination: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.destination.map(function (object, i) {
			return <TabRow obj={object} key={i} />;
		});
		
	}

	render() {
		return (
			<div className='adminVehicleProfile'>
				<NavBar_home />
				<br /> <h3 align='center'>Destination Management</h3>
				<div className='row-frm'>
				<button><Link to={"/AddDestination"} className="btn btn-success">Add Destination</Link></button>
				<input type="text" placeholder="Search..." className="search"/>
				<button type="submit" className="search">Search</button>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Title</th>
								<th>Description</th>
								<th>Details</th>
								{/* <th>Image</th> */}
						
								<th colSpan='3'>Action</th>
							</tr>
						</thead>
						<tbody>{this.tabRow()}</tbody>
					</table>
					<center>
                        <button onClick={() => this.exportPDF()}style={{background:'blue',padding:10, color:'white', border:'none',borderRadius:'20'}}>- Export All -</button>
                    </center>
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
