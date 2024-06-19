import React, { Component } from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";
import Footer from "./Footer";
import Slideshow2 from "./SlideShow";
import "../Styles/OrderAndAdventureExperience.css";

// import image from "../images/profile-photo.png";
import img1 from "../images/Travel -01.png";
import img2 from "../images/Travel -02.png";
import img3 from "../images/Travel -03.png";
import img4 from "../images/Travel -04.png";
import img5 from "../images/Travel -05.png";
import img6 from "../images/Travel -06.png";



export default class Experience extends Component {
  render() {
    const adventures = [
      { id: 1, title: "Travel Agency", select: "Description 1", img: img5 },
      { id: 2, title: "Adventure Company", select: "Description 2", img: img2 },
      { id: 3, title: "Travel Agency", select: "Description 3", img: img3 },
      { id: 4, title: "Travel Agency", select: "Description 1", img: img4 },
      {
        id: 5,
        title: "Travel Agency",
        description: "Description 2",
        img: img5,
      },
      { id: 6, title: "Vacancies", description: "Description 2", img: img6 },
      { id: 7, title: "Travel Agency", select: "Description 1", img: img4 },
      { id: 8, title: "Travel Agency", description: "Description 2", img: img5 },
      { id: 9, title: "Travel Agency", description: "Description 2", img: img3 },
    ];
    return (
      <div className="OrderAndAdventureExperience">
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
              <a href={"/ApppointmentHomepage/" + this.props.match.params.id}>
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
            <a href={"/index/" + this.props.match.params.id}>
              {/* Experience */}
              <img src={image} alt="" srcset="" />
            </a>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>{" "}
        </nav>
        <Slideshow2 />

        <div className="adventureCardContainer">
          {adventures.map((adventure) => (
            <div key={adventure.id} className="adventureCard">
              <div className="top">
                <img src={adventure.img} alt="" />
              </div>
              <div className="bottom">
                <p className="title">{adventure.title}</p>
                <button className="orderButton">
                  <a href={"/MyAdvaticementOders/" + this.props.match.params.id}>
                    Buy
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* <AdventureAndExperienceCard /> */}
        {/* </div> */}

        <Footer />
      </div>
    );
  }
}
