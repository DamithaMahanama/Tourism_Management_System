import React from 'react'
import '../Styles/ActivityRegister.css'
import NavBarHome from './NavBar_home'
import Footer from './Footer'

function ActivityRegister() {
  return (
    <div className='ActivityRegister'>
        <NavBarHome />
        <form>
				{/* <div className='title'>
					<p>Booking Details</p>
				</div> */}
				<div className='basic-info'>
					<label>Name</label>
					<input type='text' />
				</div>

				<div className='basic-info'>
					<label>Company Name</label>
					<input type='text' />
				</div>

				<div className='basic-info'>
					<label>Contact Number</label>
					<input type='text' />
				</div>

				<div className='basic-info'>
					<label>Email</label>
					<input type="number" />
				</div>
				<div className='basic-info'>
					<label>Select Activity Category</label>
					<select></select>
				</div>
                <div className="basic-info">
                    <label htmlFor="">Activity Information</label>
                    <textarea name="" id=""></textarea><br />
                    <input type="file" />
                </div>

				<button className='button-submit'>Submit</button>
				<button className='button-cancel'>Cancel</button>
			</form>
            <Footer />
    </div>
  )
}

export default ActivityRegister