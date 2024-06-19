import React, { Component, useState } from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

// import "../Styles/NavBar_home.css";
import RatingStar from "./RatingStar";
import "../Styles/GuideSearch.css";
import Footer from "./Footer";

const Guide = ({ name, description, image, defaultRating }) => {
	const [rating, setRating] = useState(defaultRating || 0);

	const handleRatingSelect = (rating) => {
		setRating(rating);
	};

	return (
		<div className='guide'>
			<div className='image'>
				<img src={image} alt={name} />
			</div>
			<div className='content'>
				<div className='ht-name'>{name}</div>
				<p>{description}</p>
				<RatingStar selected={rating} onClick={handleRatingSelect} />
			</div>
		</div>
	);
};

export default class TourguideHomepage extends Component {
	render() {
		return (
			<div className='GuideHomepage'>
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
				<div className='GuideSearchPage'>
					<div className='left'>
						<h2>Search a Tour Guide</h2>
						<div className='name'>
							<label htmlFor='name'>Name</label>
							<input type='text' name='' id='' />
						</div>

						<div className='language'>
							<label htmlFor='language'>Language</label>
							<select id='language' name='language'>
								<option value='Guide1'>Guide1</option>
								<option value='Guide2'>Guide2</option>
								<option value='Guide3'>Guide3</option>
							</select>
						</div>
						<div className='feedback'>
							<label htmlFor='feedback'>Feedback Rate</label>
							<input type='range' name='' id='' />
						</div>

						<div className='guide-type'>
							<label htmlFor='name'>Guide Type</label>
							<select id='language' name='language'>
								<option value='Guide1'>Guide1</option>
								<option value='Guide2'>Guide2</option>
								<option value='Guide3'>Guide3</option>
							</select>
						</div>
						<div className='available'>
							<input type='checkbox' name='' id='' />
							<label htmlFor=''>Available</label>
						</div>
						<div className='search-button'>
							<button>
								Search<i class='fa-solid fa-magnifying-glass'></i>
							</button>
						</div>

						<div className='advertisement'>
							<div className='add'>
								<img
									src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
									alt=''
									srcset=''
								/>
							</div>
							<hr />
							<div className='add'>
								<img
									src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
									alt=''
									srcset=''
								/>
							</div>
							<hr />
							<div className='add'>
								<img
									src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
									alt=''
									srcset=''
								/>
							</div>
							<hr />
							<div className='add'>
								<img
									src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
									alt=''
									srcset=''
								/>
							</div>
							<hr />
							<div className='add'>
								<img
									src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
									alt=''
									srcset=''
								/>
							</div>
							<hr />
							<div className='add'>
								<img
									src='https://officefitoutblog.com.au/wp-content/uploads/2017/09/sample_placeholder-1200x581.png'
									alt=''
									srcset=''
								/>
							</div>
						</div>
					</div>

					<div className='right'>
						<div className='guide-details'>
							<Guide
								name='Guide 1'
								description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!'
								image='https://www.workingabroadmagazine.com/wp-content/uploads/2009/10/tourguide275183.jpg'
								defaultRating={5}
							/>
							<button type='submit'>
								<a href={"/MyOderGuide/" + this.props.match.params.id}>
									Book Now
								</a>
							</button>
						</div>
						<div className='guide-details'>
							<Guide
								name='Guide 2'
								description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!'
								image='https://www.workingabroadmagazine.com/wp-content/uploads/2009/10/tourguide275183.jpg'
								defaultRating={5}
							/>
							<button type='submit'>
								<a href={"/MyOderGuide/" + this.props.match.params.id}>
									Book Now
								</a>
							</button>
						</div>

						<div className='guide-details'>
							<Guide
								name='Guide 1'
								description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!'
								image='https://media.blogto.com/articles/7a24-2016619-tour-guide-toronto.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'
								defaultRating={4}
							/>
							<button type='submit'>
								<a href={"/MyOderGuide/" + this.props.match.params.id}>
									Book Now
								</a>
							</button>
						</div>
						<div className='guide-details'>
							<Guide
								name='Guide 2'
								description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, voluptate. Consequatur vero laudantium obcaecati rem at, ab iusto quae est porro ad, sed consequuntur et cupiditate dolor molestiae. Nesciunt, rem!'
								image='https://baja-beachclub.com/wp-content/uploads/2019/08/London-Tour-Guides.jpg'
								defaultRating={4}
							/>
							<button type='submit'>
								<a href={"/MyOderGuide/" + this.props.match.params.id}>
									Book Now
								</a>
							</button>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
