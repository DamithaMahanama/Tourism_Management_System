import React, { Component } from 'react';
import '../Styles/HotelRegister.css'
import NavbarHome from './NavBar_homeAdmin';
import Footer from './Footer';
import axios from "axios";



export default class HotelRegister extends Component {
  constructor(props) {
    super(props);
    this.onChangehName = this.onChangehName.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);
    this.onChangepNumber = this.onChangepNumber.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword= this.onChangepassword.bind(this);
    this.onChangecPassword = this.onChangecPassword.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      hName: "",
      address: "",
      pNumber: "",
      email: "",
      password: "",
      cPassword: ""
     
    };
  }
  onChangehName(e) {
    this.setState({
      hName: e.target.value,
    });
  }
  onChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  // eslint-disable-next-line no-dupe-class-members
  onChangepNumber(e) {
    this.setState({
      pNumber: e.target.value,
    });
  }
  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onChangecPassword(e) {
    this.setState({
      cPassword: e.target.value,
    });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      hName: this.state.hName,
      address: this.state.address,
      pNumber: this.state.pNumber,
      email: this.state.email,
      password: this.state.password,
      cPassword: this.state.cPassword,
    };



   
        if (this.state.pNumber.length === 9) {
          if (this.state.password.length >= 5) {
            if (this.state.cPassword.length >= 5) {
              axios.post("http://localhost:4000/hotel/hotelAdd", obj)
                .then((res) => {
                  alert("Hotel add Successfully");
                  this.setState({
                    hName: "",
                    address: "",
                    pNumber: "",
                    email: "",
                    password: "",
                    cPassword: "",
                  });
                  console.log(res.data);
                });
              this.props.history.push("/AdminHotelTableView");
            } else {
              alert("pleace enter valid confirm password.");
            }
          } else {
            alert("pleace enter valid password.");
          }
        } else {
          alert(
            "Invalid phone number.. Please enter last 9 numbers of contact number."
          );
        }
      
    
  }

  render() {
    return (
      
      <div className='HotelRegister'>
        <NavbarHome />
        <form onSubmit={this.onSubmit}>
          <div className="title">
            <p>Hotel Register</p>
          </div>
        <div className="basic-info">
          <label>Hotel Name</label>
            <input type="text" value={this.state.hName} onChange={this.onChangehName}/>
        </div>  
                
        <div className="basic-info">
          <label>Address</label>
          <input type="text" value={this.state.address} onChange={this.onChangeaddress}/>
        </div>
        
        <div className="basic-info">
          <label>Mobile Number</label>
            <input type="text" value={this.state.pNumber} onChange={this.onChangepNumber}/>
        </div>

        <div className="basic-info">
          <label>Email Address</label>
            <input type="email" value={this.state.email} onChange={this.onChangeemail}/>
        </div>

        <div className="basic-info">
          <label>Password</label>
            <input type="password" value={this.state.password} onChange={this.onChangepassword}/>
        </div>

        <div className="basic-info">
          <label>Confirm password</label>
            <input type="password" value={this.state.cPassword} onChange={this.onChangecPassword}/>
        </div>
        
            
        <button className='submit' type="submit">Submit</button>
      </form>
      <Footer />
    </div>
        
  );

};


}