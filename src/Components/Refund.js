import React, {Component} from "react";
import "../Styles/Refund.css";

import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";
import "../Styles/NavBar_home.css";
import Footer from "./Footer";

export default class Refund extends Component {
    render() {
	return (
		<div className='RefundPage'>
            <nav>
					<div className='logo'>
						<a href='/'>
							<img src={logo} alt='' srcset='' />
						</a>
					</div>
					<ul className='nav-links'>
						<li>
							<a href={"/HotelHomepage/" + this.props.match.params.id}>hotel</a>
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
							<a href='/Payment'>Payment</a>
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
								}>
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
					<div className='profile'>
						<a href={"/index/" + this.props.match.params.id}>
							{/* Experience */}
							<img src={image} alt='' srcset='' />
						</a>
						<i class='fa-solid fa-ellipsis-vertical'></i>
					</div>
				</nav>
            <div className="policies">

            
			<h2>Refund</h2>

			<p className='title'>Payment confirmation</p>
			<p className='details'>
				When you book a reservation for a product through the website, travel
				pro collects your payment information and processes your payment as
				described below under "payment processing". travel pro accepts the
				following credit cards: mastercard and visa. There is no charge or
				service fee for processing credit or debit card payments. Full payment
				by credit or debit card is required to make a reservation. Payment will
				be listed as travel pro on the credit or debit card statement.
			</p>
			<p className='title'>
				And you will get confirmation within 48 hours by email.
			</p>
			<p className='title'>Refund policy</p>
			<p className='details'>
				No refunds are available once a tour or service has commenced, or any
				other services utilized. Refunds will be done only through the original
				mode of payment
			</p>
			<p className='title'>Cancellation Policy</p>
			<p className='details'>
				Canceling a booking with travel pro can result in cancellation fees
				being applied by travel pro, as outlined below. Additional fees may be
				levied by the individual supplier or tour operator. When canceling any
				booking you will be notified via email for total cancellation fees. In
				some cases hotel or accommodation is also non-refundable but depends on
				bookings policy which can be mention on voucher
			</p>
			<p className='title'>Other services</p>
			<p className='details'>
				If you cancel at least 48 hours in advance of the scheduled departure,
				there is no cancellation fee. If you cancel at least 24 hours in advance
				of the scheduled departure, there is a 50 percent cancellation fee. If
				you cancel before 24 hours of the scheduled departure, there is a 100
				percent cancellation fee. The refund will be complete by maximum 30 days
				from transaction date
			</p>
            </div>
			<div className='actions'>
				<div className='reason'>
					<textarea name='' id=''>
						Reason
					</textarea>
				</div>
				<div className='buttons'>
					<button>Send</button>
					<br />
					<button>Cancel</button>
					<br />
					<button>Payment</button>
				</div>
			</div>
            <Footer />
		</div>
	);
}
}
