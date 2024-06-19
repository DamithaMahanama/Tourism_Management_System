import React from 'react'
import MapLocation from './Map'
import '../Styles/AddtoMap.css' 
import NavBarHome from './NavBar_home'
import Footer from './Footer'

function AddtoMap() {
  return (
    <div className='MapPage'>
    <NavBarHome />
        <div className='map'>
            <MapLocation className='MapLocation'/>        
        <div className="addMap">
          <h2>Add Destinations</h2>
            <input type="text"  placeholder='Enter Title*'/><br />
            <input type="text" placeholder='Enter Description*'/><br />
            <textarea name="mapDetails" id="mapDetails" placeholder='Enter Details'></textarea><br />
            <label htmlFor="">Upload an Image</label><br />
            <input type="file" name="image-input" id="image-input" accept='image' /><br />
            <input type="submit" />
        </div>
        
    </div>
    <Footer />
    </div>
    
  )
}

export default AddtoMap