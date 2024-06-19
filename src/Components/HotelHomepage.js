import React, { Component, useState } from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

import "../Styles/NavBar_home.css";
import RatingStar from "./RatingStar";
import "../Styles/HotelSearch.css";
import Footer from "../Components/Footer";

const Hotel = ({ name, description, image, defaultRating }) => {
	const [rating, setRating] = useState(defaultRating || 0);

	const handleRatingSelect = (rating) => {
		setRating(rating);
	};

	return (
		<div className='hotel'>
			<div className='image'>
				<img src={image} alt={name} />
			</div>
			<div className='content'>
				<div className='ht-name'>{name}</div>
				<p>{description}</p>
				<RatingStar selected={rating} onClick={handleRatingSelect} />

				{/* <button className='orderButton'>
						<a href={"/myvehicleoder/" + this.props.match.params.id}>
							Order Now !
						</a>
					</button>  */}
			</div>
		</div>
	);
};

export default class HotelHomepage extends Component {
	render() {
		return (
			<div className='HotelHomePage'>
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

				<div className='left'>
					<h2>Make Reservations</h2>

					<div className='country'>
						<label htmlFor='country'>Country</label>
						<select id='country' name='country'>
							<option value='country1'>Country1</option>
							<option value='country2'>Country2</option>
							<option value='country3'>Country3</option>
						</select>
					</div>
					<div className='city'>
						<label htmlFor='city'>City</label>
						<select id='city' name='country'>
							<option value='country1'>City1</option>
							<option value='country2'>City2</option>
							<option value='country3'>City3</option>
						</select>
					</div>
					<div className='room'>
						<label htmlFor='room'>Room</label>
						<select id='room' name='country'>
							<option value='country1'>1</option>
							<option value='country2'>2</option>
							<option value='country3'>3</option>
						</select>
					</div>
					<div className='checkin'>
						<label htmlFor='datepicker'>Check In</label>
						<input type='date' id='datepicker' />
					</div>
					<div className='checkout'>
						<label htmlFor='datepicker'>Check Out</label>
						<input type='date' id='datepicker' />
					</div>
					<div className='hotel-star-rating'>
						<label htmlFor='hotel-star-rating' className='rate'>
							Hotel Star Rate
						</label>
						<div>
							<label className='rating'>Five Stars</label>
							<div className='rate-check'>
								<input type='radio' name='rating' value='5' />
							</div>
						</div>
						<div>
							<label className='rating'>Four Stars and Above</label>
							<div className='rate-check'>
								<input type='radio' name='rating' value='4' />
							</div>
						</div>
						<div>
							<label className='rating'>Three Stars and Above</label>
							<div className='rate-check'>
								<input type='radio' name='rating' value='3' />
							</div>
						</div>
						<div>
							<label className='rating'>Two Stars and Above</label>
							<div className='rate-check'>
								<input type='radio' name='rating' value='2' />
							</div>
						</div>
						<div>
							<label className='rating'>One Star and Above</label>
							<div className='rate-check'>
								<input type='radio' name='rating' value='1' />
							</div>
						</div>
					</div>

					<div className='hotel-room-type'>
						<label htmlFor='hotel-room-type' className='room-type'>
							Room Type
						</label>
						<div>
							<label className='type-in'>Standard</label>
							<div className='type-check'>
								<input type='radio' name='room-type' />
							</div>
						</div>
						<div>
							<label className='type-in'>Deluxe</label>
							<div className='type-check'>
								<input type='radio' name='room-type' />
							</div>
						</div>
						<div>
							<label className='type-in'>Executive</label>
							<div className='type-check'>
								<input type='radio' name='room-type' />
							</div>
						</div>
					</div>
					<div className='price-range'>
						<div className='currency'>
							{/* <label htmlFor="currency">Currency</label> */}
							<select id='currency' name='currency'>
								<option value='USD'>USD</option>
								<option value='GBP'>GBP</option>
								<option value='LKR'>LKR</option>
							</select>
						</div>
						<input type='text' />
						<br />
						<label htmlFor=''>To</label>
						<br />
						<input type='text' />
					</div>
					<div className='feedback'>
						<label htmlFor='feedback'>Feedback Rate</label>
						<input type='range' name='' id='' />
					</div>

					<div className='search-button'>
						<button>
							Search<i class='fa-solid fa-magnifying-glass'></i>
						</button>
					</div>

					<div className='advertisement'>
						<div className='add'>
							<img
								src='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
								alt=''
								srcset=''
							/>
						</div>
						<hr />
						<div className='add'>
							<img
								src='https://global-uploads.webflow.com/576fd5a8f192527e50a4b95c/5bfe547dc7e7c24e006ed95b_laya%20safari%20resort-min.jpg'
								alt=''
								srcset=''
							/>
						</div>
						<hr />
						<div className='add'>
							<img
								src='https://renaesworld.com.au/wp-content/uploads/2018/02/invite-to-paradise-sri-lanka-galle-face-hotel-old-wing-entrance-1080x718.jpg'
								alt=''
								srcset=''
							/>
						</div>
						<hr />
						<div className='add'>
							<img
								src='https://d1bv4heaa2n05k.cloudfront.net/user-images/1508847676152/frangapani-GARY-04000_main_1508847744534.jpeg'
								alt=''
								srcset=''
							/>
						</div>
						<hr />
						<div className='add'>
							<img
								src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/03/7a/c5/birds-eye-view.jpg?w=900&h=-1&s=1'
								alt=''
								srcset=''
							/>
						</div>
						<hr />
						<div className='add'>
							<img
								src='https://global-uploads.webflow.com/576fd5a8f192527e50a4b95c/5bfe547dc7e7c24e006ed95b_laya%20safari%20resort-min.jpg'
								alt=''
								srcset=''
							/>
						</div>
					</div>
				</div>

				<div className='right'>
					<div className='hotel-details'>
						<Hotel
							name='Mövenpick Hotel Colombo'
							description="I went with my family members for the weekday lunch buffet. Everything was on spot. Food was amazing. They have a huge range of food varieties. And it's all heavenly tasty. "
							image='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
							defaultRating={5}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Hotel
							name='Jetwing Colombo Seven'
							description='Jetwing Colombo Seven'
							image='https://renaesworld.com.au/wp-content/uploads/2018/02/invite-to-paradise-sri-lanka-galle-face-hotel-old-wing-entrance-1080x718.jpg'
							defaultRating={5}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>

					<div className='hotel-details'>
						<Hotel
							name='Cinnamon Red Colombo'
							description='I would rate this place more stars if it were possible. It feels like home.'
							image='http://www.flightsinternationaluk.co.uk/blog/wp-content/uploads/2013/01/Jetwing-Hotels-in-Sri-Lanka.jpg'
							defaultRating={3}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Hotel
							name=' Angam Villa'
							description='Hosted a bachelorette party at the Villa, it was amazing. Such a chilled and a relax place.'
							image='https://d1bv4heaa2n05k.cloudfront.net/user-images/1508847676152/frangapani-GARY-04000_main_1508847744534.jpeg'
							defaultRating={5}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Hotel
							name=' Allspice Villa'
							description='I stayed for 11 days at AllSpice Villa Kotte. It’s modern, clean, comfortable, spacious and the staff are super friendly and very helpful. It was home away from home. I highly recommended'
							image='https://media.timeout.com/images/101853195/image.jpg'
							defaultRating={4}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
								Book NOW
							</a>
						</button>
					</div>
					<div className='hotel-details'>
						<Hotel
							name='Marino Beach Colombo'
							description='Newish mall in Colombo Good security at entry , has large shopping mall Some good food outlets for snacks and ice cream Fully AC Rooms. Wonderful.'
							image='https://www.bookingsrilanka.com/wp-content/uploads/2019/08/hotel-j-ambalangoda-1.jpg'
							defaultRating={5}
						/>
						<button type='submit'>
							<a href={"/MyHotelOder/" + this.props.match.params.id}>
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