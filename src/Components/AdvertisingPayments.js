import React from 'react'
import NavbarHome from './NavBar_home'
import '../Styles/AdvertisingPayment.css'
import Footer from './Footer'

function AdvertisingPayment() {
  return (
    <div>
        <div className='AdvertisingPayment'>
        <NavbarHome />
        <form>
          <div className="title">
            <p>Advertising Payment</p>
          </div>
        <div className="basic-info">
          <label>Name of card</label>
            <input type="text" />
        </div>  
        
        <div className="basic-info">
          <label>Bank Name</label>
            <input type="text" />
        </div>  
        
        <div className="basic-info">
          <label>Credit card number</label>
            <input type="text" />
        </div> 

        <div className="basic-info">
          <label>Exp month</label>
            <input type="number" />
        </div>
<div className="basic-info"> 
  <div className='checkout'>
    <label htmlFor="checkout-day">Exp year</label>
    <input type="number" id="checkout-day" min="2020" max="2028" />
  </div>
</div>

<div className="basic-info">
          <label>CVV</label>
            <input type="text" />
        </div> 

        <div className="basic-info">
          <label>Amount</label>
            <input type="text" />
        </div> 


        <button className='submit' type="submit">Check Out</button>
      </form>
      <Footer />
    </div>
    </div>
  )
}

export default AdvertisingPayment