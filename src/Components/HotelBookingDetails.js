import React from 'react'
import NavbarHome from './NavBar_home'
import '../Styles/HotelBookingDetails.css'
import Footer from './Footer'

function HotelBookingDetails() {
  return (
    <div>
        <div className='HotelBookingDetails'>
        <NavbarHome />
        <form>
          <div className="title">
            <p>Hotel Booking Details</p>
          </div>
        <div className="basic-info">
          <label>Full Name</label>
            <input type="text" />
        </div>  
        
        <div className="basic-info">
          <label>Contact Number</label>
            <input type="text" />
        </div>  
        
        <div className="basic-info">
          <label>Email</label>
            <input type="text" />
        </div> 
        <div className="basic-info">
            <label htmlFor="" className='roomCounter'>Room Counter</label>
        <div className="rooms">
              {/* <label htmlFor="currency">Currency</label> */}
              <select id="room" name="room">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
    </div>
    </div>
     <div className="basic-info">
            <label htmlFor="" className='roomCounter'>Bed Counter</label>
        <div className="beds">
              <select id="bed" name="bed">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
    </div>
    </div>
    <div className="basic-info">
    <div className='checkin'>
              <label htmlFor="datepicker">Check In</label>
              <input
                type="date"
                id="datepicker"
              />
            </div>            
            </div> 
            <div className="basic-info"> 
            <div className='checkout'>
              <label htmlFor="datepicker">Check Out</label>
              <input
                type="date"
                id="datepicker"
              />
            </div>
            </div>
    
        <button className='submit' type="submit">Add to Cart</button>
      </form>
      <Footer />
    </div>
    </div>
  )
}

export default HotelBookingDetails