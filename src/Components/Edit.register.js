import  React, {Component} from 'react';
import "../Styles/AddVehicle.css";
import NavbarHome from "./NavBar_homeAdmin";
import Footer from "./Footer";
import axios from 'axios';
import { Link } from "react-router-dom";


	export default  class editRegister extends  Component{



    constructor(props) {
        super(props);
        this.onChangefirstName = this.onChangefirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangecountryCode = this.onChangecountryCode.bind(this);
        this.onChangephoneNu = this.onChangephoneNu.bind(this);
        this.onChangenic = this.onChangenic.bind(this);
        this.onChangeaddress = this.onChangeaddress.bind(this);
        this.onChangenationality = this.onChangenationality.bind(this);
        this.onChangecountry = this.onChangecountry.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onChangecpassword = this.onChangecpassword.bind(this);
        this.onChangevaccine = this.onChangevaccine.bind(this);
      
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            countryCode: "",
            phoneNu: "",
            nic: "",
            address: "",
            nationality: "",
            country: "",
            password: "",
            cpassword: "",
            vaccine: ""
            
        
        }
    }

    componentDidMount() {
        // alert('edit id ' +this.props.match.params.id);
        axios.get('http://localhost:4000/tourist/edit/'+this.props.match.params.id)
            .then(res => {
                this.setState({
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                    countryCode: res.data.countryCode,
                    phoneNu: res.data.phoneNu,
                    nic: res.data.nic,
                    address: res.data.address,
                    nationality: res.data.nationality,
                    country: res.data.country,
                    password: res.data.password,
                    cpassword: res.data.cpassword,
                    vaccine: res.data.vaccine
                   
                });
            })
            .catch(function (error){
                console.log("Can't Get Data");
            })
    }

    onChangefirstName(e) {
        this.setState({
          firstName: e.target.value,
        });
      }
      onChangelastName(e) {
        this.setState({
          lastName: e.target.value,
        });
      }
      // eslint-disable-next-line no-dupe-class-members
      onChangeemail(e) {
        this.setState({
          email: e.target.value,
        });
      }
      onChangecountryCode(e) {
        this.setState({
          countryCode: e.target.value,
        });
      }
      onChangephoneNu(e) {
        this.setState({
          phoneNu: e.target.value,
        });
      }
      onChangenic(e) {
        this.setState({
          nic: e.target.value,
        });
      }
      onChangeaddress(e) {
        this.setState({
          address: e.target.value,
        });
      }
      onChangenationality(e) {
        this.setState({
          nationality: e.target.value,
        });
      }
      onChangecountry(e) {
        this.setState({
          country: e.target.value,
        });
      }
      onChangepassword(e) {
        this.setState({
          password: e.target.value,
        });
      }
      onChangecpassword(e) {
        this.setState({
          cpassword: e.target.value,
        });
      }
      onChangevaccine(e) {
        this.setState({
          vaccine: e.target.value,
        });
      }
    
   
      onSubmit(e) {
        e.preventDefault();
        const obj = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          countryCode: this.state.countryCode,
          phoneNu: this.state.phoneNu,
          nic: this.state.nic,
          address: this.state.address,
          nationality: this.state.nationality,
          country: this.state.country,
          password: this.state.password,
          cpassword: this.state.cpassword,
          vaccine: this.state.vaccine,
        };


        const lastelement = this.state.nic.charAt(this.state.nic.length - 1);
        if (lastelement === "V" || lastelement === "v") {
          if (
            this.state.countryCode.length >= 2 ||
            this.state.countryCode.length <= 3
          ) {
            if (this.state.phoneNu.length === 9) {
              if (this.state.nic.length === 10) {
                if (this.state.password.length <= 5) {
                    axios.post('http://localhost:4000/tourist/update/'+this.props.match.params.id,obj)
                    .then((res) => {
                      alert(" update Successfully");
                      this.setState({
                        firstName: "",
                        lastName: "",
                        email: "",
                        countryCode: "",
                        phoneNu: "",
                        nic: "",
                        address: "",
                        nationality: "",
                        country: "",
                        password: "",
                        cpassword: "",
                        vaccine: "",
                      });
                      console.log(res.data);
                    });
                  this.props.history.push("/AdminRegisterViewTable");
                  window.location.replace('/AdminHotelTableView');
                } else {
                  alert("pleace enter valid password.");
                }
              } else {
                alert("Invalid NIC Number.. Pleace enter 10 digits for nic.");
              }
            } else {
              alert(
                "Invalid phone number.. Pleace enter last 9 numbers of contact number."
              );
            }
          } else {
            alert("Pleace enter valid contry code");
          }
        } else {
          alert('Invalid NIC Number.. Pleace enter "V" for nic.');
        }

        
    }



    render() {
	return (
        <div className="Register-page">
        <NavbarHome />
        <div className="content">
          <form onSubmit={this.onSubmit}>
            <h2>Update Account</h2>
            <div className="form-row name">
              <div className="form-group">
                {/* <label htmlFor="firstName">First Name</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                  required
                  value={this.state.firstName}
                  onChange={this.onChangefirstName}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="lastName">Last Name</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Enter your last name"
                  required
                  value={this.state.lastName}
                  onChange={this.onChangelastName}
                />

              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                  value={this.state.email}
                  onChange={this.onChangeemail}
                />
              </div>
            </div>
            <div className="form-row phone">
              <div className="form-group">
                <p className="country-code">+</p>
                <input
                  type="text"
                  className="form-control country-code"
                  placeholder="Country Code"
                  required
                  value={this.state.countryCode}
                  onChange={this.onChangecountryCode}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control phone-number"
                  placeholder="Phone Number"
                  required
                  value={this.state.phoneNu}
                  onChange={this.onChangephoneNu}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                {/* <label htmlFor="idNumber">ID Number or Passport Number</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="idNumber"
                  placeholder="Enter your ID."
                  required
                  value={this.state.nic}
                  onChange={this.onChangenic}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="address">Address</label> */}
                <textarea
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                  rows="3"
                  required
                  value={this.state.address}
                  onChange={this.onChangeaddress}
                />
              </div>
            </div>
            <div className="form-row country-row">
              <div className="form-group">
                {/* <label htmlFor="nationality">Nationality</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="nationality"
                  placeholder="Enter your nationality"
                  required
                  value={this.state.nationality}
                  onChange={this.onChangenationality}
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="country">Country</label> */}
                <input
                  type="text"
                  className="form-control"
                  id="country"
                  placeholder="Enter your country"
                  required
                  value={this.state.country}
                  onChange={this.onChangecountry}
                />
              </div>
            </div>
            <div className="form-row vaccinate">
              <div className="form-group">
                <label htmlFor="vaccinated" className="vaccinated">
                  Are you vaccinated?
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="vaccinated"
                    id="yes"
                    value="yes"
                    onChange={this.onChangevaccine}
                  />
                  <label className="form-check-label" htmlFor="yes">
                    Yes
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="vaccinated"
                    id="no"
                    value="no"
                    onChange={this.onChangevaccine}
                  />
                  <label className="form-check-label" htmlFor="no">
                    No
                  </label>
                </div>
              </div>
            </div>
            <div className="form-row password-row">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                  value={this.state.password}
                  onChange={this.onChangepassword}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="confirm-password"
                  placeholder="Confirm Password"
                  required
                  value={this.state.cpassword}
                  onChange={this.onChangecpassword}
                />
              </div>
            </div>
            <div className="form-row conditions">
              <div className="form-group">
                <input type="checkbox" name="agree" id="agree" />
                <p>
                  I agree to all <a href="http://">conditions.</a>
                </p>
              </div>
            </div>
            <button type="submit">
              <Link to="/homepage">Update</Link>
            </button>
          </form>
        </div>

        <Footer />
      </div>
	);
}
	}
