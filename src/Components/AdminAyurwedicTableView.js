/* eslint-disable react/jsx-no-undef */
import React, { Component } from "react";
import axios from "axios";
import NavBar_home from "./NavBar_homeAdmin";
import Footer from "./Footer";
import "../Styles/AdminAyurwedicTableView.css";
import { BrowserRouter as Router, Link } from "react-router-dom";

import AyurvedicTrowTable from "./AyurvedicTrowTable";

export default class Ayurvedic extends Component {
	constructor(props) {
		super(props);
		this.state = { ayurvedic: [], search: "" };
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
			.get("http://localhost:4000/ayurvedic/getall")
			.then((response) => {
				// alert('Pass una')
				// alert('Data Tika :'+response.data)
				this.setState({ ayurvedic: response.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	tabRow() {
		return this.state.ayurvedic.map(function (object, i) {
			return <AyurvedicTrowTable obj={object} key={i} />;
		});
		
	}

	render() {
		return (
			<div className='adminAyurvedicProfile'>
				<NavBar_home />
				<br /> <h3 align='center'>Ayurvedic Management</h3>
				<div className='row-frm'>
				<button><Link to={"/AyurvedicRegister"} className="btn btn-success">Add Therapist</Link></button>
					<table className='table table-striped' style={{ marginTop: 20 }}>
						<thead>
							<tr>
								<th>Full Name</th>
								<th>Age</th>
								<th>Country</th>
								<th>State</th>
								<th>Gender</th>
                              

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
