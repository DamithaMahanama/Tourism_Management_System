import React from "react";
import "../Styles/AppointmentDelete.css";
import NavBarHome from "./NavBar_home";
import Footer from "./Footer";

function AppointmentDelete() {
	return (
		<div className='AppointmentDeletePage'>
			<NavBarHome />
			<div className='AppointmentDelete'>
				<div className='left-side'>
					<div className='appointment-count'>
						<label htmlFor=''>Appointment1</label>
						<label htmlFor=''>Appointment2</label>
						<label htmlFor=''>Appointment3</label>
					</div>
				</div>
				<form>
					<h2>My Appointment</h2>
					<div className='detail'>
						<label htmlFor=''>Appointment ID</label>
						<input type='text' id='vehicleName' name='vehicleName' required />
					</div>

					<div className='detail'>
						<label htmlFor=''>Full Name</label>
						<input type='text' id='vehicleName' name='vehicleName' required />
					</div>

					<div className='detail'>
						<label htmlFor=''>Age</label>
						<input type='text' name='' id='' />
					</div>

					<div className='detail'>
						<label htmlFor=''>BirthDay</label>
						<input type='text' />
					</div>

					<div className='detail'>
						<label htmlFor=''>Address</label>
						<textarea type='text' name='' id='' rows={4} />
					</div>
					<br />
					<br />

					<div className='detail'>
						<label htmlFor=''>Mobile Number</label>
						<input type='text' />
					</div>

					<div className='choice'>
						<label htmlFor='' className='gender-label'>
							Gender
						</label>
						<div className='radio-button'>
							<input type='radio' name='gender' />
							<label for='option1'>Male</label>
						</div>

						<div className=' radio-button'>
							<input type='radio' name='gender' />
							<label for='option2'>Female</label>
						</div>
					</div>
					<div className='button'>
						<div className="orange-button">
							<button type='submit'>Delete</button>
						<button type='submit'>Update</button>
						</div>
						
						<br />
						<div className='blur-button'>
							<button type='submit'>
								<i class='fa-solid fa-print'></i>Print
							</button>
							<button type='submit'>
								<i class='fa-solid fa-comment'></i>Feedback
							</button>
						</div>
					</div>
				</form>
			</div>

			<Footer />
		</div>
	);
}

export default AppointmentDelete;
