import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ProfileTableRow extends Component {
	constructor(props) {
		super(props);

		this.delete = this.delete.bind(this);
	}

	delete() {
		axios
			.delete('http://localhost:4000/tourist/delete/' + this.props.obj._id)
			.then(this.setState({ redirect: true }))
			.catch((err) => console.log(err));
		alert('Your Account Successfully Deleted....');
		window.location.replace('/login');
	}

	render() {
		return (
			<div className='pro-details'>
				<table className='table table-striped'>
					<tr>
						<td style={{ fontWeight: 'bold' }}>First name</td>
						<td>{this.props.obj.firstName}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>Last Name</td>
						<td>{this.props.obj.lastName}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>Email</td>
						<td>{this.props.obj.email}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>Country Code</td>
						<td>{this.props.obj.countryCode}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>Phone Number</td>
						<td>{this.props.obj.phoneNu}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>Nic</td>
						<td>{this.props.obj.nic}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>address</td>
						<td>{this.props.obj.address}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>nationality</td>
						<td>{this.props.obj.nationality}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>country</td>
						<td>{this.props.obj.country}</td>
					</tr>
					<tr>
						<td style={{ fontWeight: 'bold' }}>password</td>
						<td>{this.props.obj.password}</td>
					</tr>
					<tr className='profile-actions'>
						<td>
							<button className='btn'>
								<Link to={'/Editregister/' + this.props.obj._id}>Edit</Link>
							</button>
						</td>
						<td>
							<button className='btn' onClick={this.delete}>
								Delete Account
							</button>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default ProfileTableRow;
