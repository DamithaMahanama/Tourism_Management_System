/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import '../Styles/VehicleCard.css';
import img1 from '../images/vehicle1.jpg';
import img2 from '../images/vehicle2.jpg';
import img3 from '../images/vehicle3.jpg';
import img4 from '../images/vehicle4.jpg';

export default class VehicleCard extends Component {
  constructor(props) {
    super(props);
    // this.state = {customers : []};
    // this.state.Email = this.props.match.params.id;
  }
  
  render() {
   
    
    const vehicles = [
      { id: 1, type: 'Scooter', title: 'Scooter', description: 'Description 1', img: img1 },
      { id: 2, type: 'Tuktuk', title: 'Tuktuk', description: 'Description 2', img: img2 },
      { id: 3, type: 'Car', title: 'Car', description: 'Description 3', img: img3 },
      { id: 4, type: 'Van', title: 'Van', description: 'Description 1', img: img4 },
    ];
    return (
      <div className='vehicleCardContainer'>
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className='vehicleCard'>
            <div className='top'>
              <img src={vehicle.img} alt='' />
            </div>
            <div className='bottom'>
              <p className='title'>{vehicle.title}</p>
              <a href={"/myvehicleoder/"+this.props.match.params.id}>Order Now!</a>
              {/* <a href={`/myvehicleoder/${match?.params?.id}`}>Order Now!</a> */}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
