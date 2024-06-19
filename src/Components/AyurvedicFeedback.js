import React from "react";
import "../Styles/AyurvedicFeedback.css";
import NavBar_home from "./NavBar_home";
import Footer from "./Footer";

function AyurvedicFeedback() {
	return (
		<div className='AyurvedicFeedback'>
			<NavBar_home />

			<form>
				<h2>Feedback Form</h2>

				<div className='choice'>
					<label htmlFor='' className='rate-label'>
						How do you rate your overall Experience?
					</label>
					<br />
					<br />
					<div className='radio-button'>
						<input type='radio' name='gender' />
						<label for='option1'>Bad</label>
					</div>

					<div className=' radio-button'>
						<input type='radio' name='gender' />
						<label for='option2'>Medium</label>
					</div>

					<div className=' radio-button'>
						<input type='radio' name='gender' />
						<label for='option2'>Good</label>
					</div>
				</div>

				<div className='detail'>
					<label htmlFor=''>Full Name</label>
					<input type='text' id='' name='' required />
				</div>

				<div className='detail'>
					<label htmlFor=''>Age</label>
					<input type='text' id='' name='' required />
				</div>

				<div className='detail'>
					<label htmlFor=''>Message</label>
					<textarea type='text' name='' id='' rows={4} />
				</div>
				<br />
				<br />

				<div className='detail'>
					<label htmlFor=''>Email</label>
					<input type='email' />
				</div>

				<div className='detail'>
					<label htmlFor=''>Mobile Number</label>
					<input type='text' />
				</div>

				<div className='button'>
					<button type='submit'>Submit</button>
				</div>
			</form>
			<Footer />
		</div>
	);
}

export default AyurvedicFeedback;
