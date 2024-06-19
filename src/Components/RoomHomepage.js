import React, { Component, useState } from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

// import "../Styles/NavBar_home.css";
import "../Styles/RoomHomepage.css";
import Footer from "./Footer";

const Rooms = ({
	name,
	description,
	image1,
	image2,
	image3,
	defaultRating,
}) => {
	const [rating, setRating] = useState(defaultRating || 0);

	const handleRatingSelect = (rating) => {
		setRating(rating);
	};

	return (
		<div className='room'>
			<div className='image'>
				<img src={image1} alt={name} />
				<img src={image2} alt='' srcset='' />
				<img src={image3} alt='' srcset='' />
			</div>
			<div className='content'>
				<div className='room-name'>{name}</div>
				<p>{description}</p>
				{/* <RatingStar selected={rating} onClick={handleRatingSelect} /> */}

				{/* <button className='orderButton'>
						<a href={"/myvehicleoder/" + this.props.match.params.id}>
							Order Now !
						</a>
					</button>  */}
			</div>
		</div>
	);
};

class RoomHomepage extends Component {
	render() {
		return (
			<div className='RoomHomePage'>
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
				<div className='right'>
					<div className='room-details'>
						<Rooms
							name='Standard Rooms'
							description='Description: Our cozy standard rooms are perfect for travelers who value comfort and affordability. These rooms are equipped with all the basic amenities you need for a comfortable stay, including a comfortable bed, a private bathroom, and a work desk.'
							image1='https://www.holidayinnpottspoint.com.au/wp-content/uploads/2018/10/Standard-Queen-Room.jpg'
							image2='https://easternpremierhotel.com/wp-content/uploads/2017/01/Standard-Room_c.jpg'
							image3='https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/the-georgian-terrace-hotel/media/Georgian-Terrace-Standard-Room-5980ce6762355.jpg'
							// defaultRating={5}
						/>
						<button type='submit'>
							<a href={"/MyOderRoom/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='room-details'>
						<Rooms
							name='Executive Rooms'
							description='Description: Our spacious executive rooms are designed for business travelers or anyone looking for a little extra space and luxury. These rooms feature a king-size bed, a separate sitting area, and a well-appointed bathroom with a spa bath.'
							image1='https://www.corinthia.com/media/2154/corinthia-kartoum-executive-room.jpg'
							image2='http://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/21/2016/06/21042553/Executive-Room_23.jpg'
							image3='https://www.thegoldenhotel.com/wp-content/uploads/2018/10/executive-room-1.jpg'
							// defaultRating={5}
						/>
						<button type='submit'>
							<a href={"/MyOderRoom/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>

					<div className='room-details'>
						<Rooms
							name='Deluxe Suites'
							description='Description: Our spacious executive rooms are designed for business travelers or anyone looking for a little extra space and luxury. These rooms feature a king-size bed, a separate sitting area, and a well-appointed bathroom with a spa bath.'
							image1='https://www.lesanteblu.gr/wp-content/uploads/2019/09/deluxe-suite-pool_2.jpg'
							image2='https://photos.mandarinoriental.com/is/image/MandarinOriental/dmo-Seven-suites-04-Dubai'
							image3='https://www.peppermillreno.com/library/images/backgrounds/resort_rooms_pepp_luxury.jpg'
							// defaultRating={3}
						/>
						<button type='submit'>
							<a href={"/MyOderRoom/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default RoomHomepage;
