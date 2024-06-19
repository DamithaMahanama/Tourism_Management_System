import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ApptableRow extends Component {
	constructor(props) {
		super(props);
		this.delete = this.delete.bind(this);
	}
	delete() {
		axios
			.get("http://localhost:4000/appointment/delete/" + this.props.obj._id)
			.then((res) => {
				alert("Successfully Deleted....");
				window.location.replace("/AdminAppointmentViewTable");
			})
			.catch((err) => console.log(err));
	}
	render() {
		return (
			<tr>
				<td>{this.props.obj.aID}</td>
				<td>{this.props.obj.Name}</td>
				<td>{this.props.obj.Treatement}</td>
				<td className="profile-actions">
					<button>
						<Link
							to={"/EditAppointment/" + this.props.obj._id}
							className="btn btn-success"
						>
							Edit
						</Link>
					</button>
					&nbsp;
					<button onClick={this.delete} className="btn btn-danger">
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default ApptableRow;
