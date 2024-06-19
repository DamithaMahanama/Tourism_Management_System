import React, { Component } from "react";
import Footer from "./Footer";
import axios from "axios";
import "../Styles/IndexProfile.css";
import { Link } from "react-router-dom";
import ProfileTableRow from "./profileTableThrow";
// import NavbarHome from "./NavBar_homeAdmin";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = { customer: [] };
    this.state.Email = this.props.match.params.id;

    //const Email = this.props.match.params.id;
  }

  componentDidMount() {
    // alert('email is ' +this.props.match.params.id);
    axios
      .get("http://localhost:4000/tourist/" + this.props.match.params.id)
      .then((response) => {
        //  alert('Data Tika :'+response.data)
        this.setState({ customer: response.data });
      })
      .catch(function (error) {
        console.log(error);
        alert("Pass una");
      });
  }
  tabRow() {
    return <ProfileTableRow obj={this.state.customer} />;
  }

  render() {
    return (
      <div className="indexProfile">
        <nav>
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" srcset="" />
            </a>
          </div>
          <ul className="nav-links">
            <li>
              <a href={"/HotelHomepage/" + this.props.match.params.id}>hotel</a>
            </li>
            <li>
							<a href={"/AdvaticementHomePage/" + this.props.match.params.id}>
								Advatice
							</a>
						</li>
            <li>
              <a href={"/appointmentHomepage/" + this.props.match.params.id}>
                Appointment
              </a>
            </li>
            <li>
              <a href={"/TourguideHomepage/" + this.props.match.params.id}>
                Guide
              </a>
            </li>
           
            <li>
              <a href={"/RoomHomePage/" + this.props.match.params.id}>Room</a>
            </li>
            <li>
              <a href={"/VehicleHomePage/" + this.props.match.params.id}>
                Vehicle
              </a>
            </li>
            <li>
              <a
                href={
                  "/AyurvedicTreatmentHomePage/" + this.props.match.params.id
                }
              >
                Treatement
              </a>
            </li>
            <li>
              <a href={"/destinations/" + this.props.match.params.id}>
                Destination
              </a>
            </li>
            <li>
              <a href={"/ExperienceHomepage/" + this.props.match.params.id}>
                Experience
              </a>
            </li>
          </ul>
          <div className="profile">
            <img src={image} alt="" srcset="" />
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </nav>

        <div className="profile-top">
          <div className="left-details">
            <h2>Profile Details</h2>
            <div className="profile-image-container">
              <img
                src="https://thereadtoday.com/wp-content/uploads/2020/12/solo-male-travel-800x445.jpg"
                alt="Profile"
                className="profile-image"
              />
            </div>
          </div>
        </div>
        {this.tabRow()}
        <div className="buttons">
          <button type="submit">
            <a href={"/TreatmentOderView/" + this.props.match.params.id}>
              My Treatment Orders{" "}
            </a>
          </button>
          <button type="submit">
            <a href={"/VehicleOderView/" + this.props.match.params.id}>
              My Vehicle Orders{" "}
            </a>
          </button>
          <button type="submit">
            <a href={"/RoomOderView/" + this.props.match.params.id}>
              My Room Book{" "}
            </a>
          </button>
          <button type="submit">
            <a href={"/HotelOderView/" + this.props.match.params.id}>
              My Hotel Book{" "}
            </a>
          </button>
          <button type="submit">
            <a href={"/GuideOderView/" + this.props.match.params.id}>
              My Guide Book{" "}
            </a>
          </button>
          <br />
          <div className="button-level2">
            <button type="submit">
              <a href={"/SpecialOderView/" + this.props.match.params.id}>
                Special Package{" "}
              </a>
            </button>
            <button type="submit">
              <a href={"/ActivityViewTable/" + this.props.match.params.id}>
                Activitys Oders{" "}
              </a>
            </button>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
