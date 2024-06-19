import React, { Component, useState } from "react";
import image from "../images/profile-photo.png";
import logo from "../images/logo (2).png";

// import "../Styles/NavBar_home.css";
// import RatingStar from "./RatingStar";
import "../Styles/Festivals.css";
import Footer from "../Components/Footer";
import NavbarLogin from "./NavBar_login";

const Festivals = ({ name, description, image, defaultRating, date }) => {
	const [rating, setRating] = useState(defaultRating || 0);

	const handleRatingSelect = (rating) => {
		setRating(rating);
	};

	return (
		<div className='festivals'>
			<div className='image'>
				<img src={image} alt={name} />
			</div>
			<div className='content'>
				<div className='ht-name'>{name}</div>
				<p>{description}</p>
				{/* <RatingStar selected={rating} onClick={handleRatingSelect} /> */}

				{/* <button className='orderButton'>
						<a href={"/myvehicleoder/" + this.props.match.params.id}>
							Order Now !
						</a>
					</button>  */}
                    <p>{date}</p>
			</div>
		</div>
	);
};

export default class festivalsHomepage extends Component {
	render() {
		return (
			<div className='festivalsHomePage'>
                <NavbarLogin />

				<div className='right'>
					<div className='festivals-details'>
						<Festivals
							name='Duruthu Perahera'
							description='A religious festival in Sri Lanka featuring a grand procession of dancers, musicians, and elephants...'
							image='https://lanka.com/wp-content/gallery/duruthu-perahera/2.jpg'
							// defaultRating={5}
							date='January'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name='Thai Pongal'
							description='A four-day harvest festival celebrated by Tamil people worldwide, featuring rice, milk, and sugarcane offerings...'
							image='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f9b9dcb9-260f-4589-b3a5-50bf02fcb395/dav527n-9b0dd657-3b2e-4ca2-9a87-0765cc273059.jpg/v1/fill/w_1024,h_576,q_75,strp/thai_pongal_wishes_by_senarath-dav527n.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9mOWI5ZGNiOS0yNjBmLTQ1ODktYjNhNS01MGJmMDJmY2IzOTUvZGF2NTI3bi05YjBkZDY1Ny0zYjJlLTRjYTItOWE4Ny0wNzY1Y2MyNzMwNTkuanBnIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTU3NiJ9XV19.jjpRMTQNZvdkXEId98O3NFYzIvcdlg6gqTfnB9vXXf4'
							// defaultRating={5}
							date='January'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>

					<div className='festivals-details'>
						<Festivals
							name='Independence Day'
							description='Sri Lankan national holiday commemorating independence from British colonial rule on February 4, 1948, celebrated annually'
							image='https://wallpapercave.com/wp/wp5436203.jpg'
							// defaultRating={3}
							date='February 04'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name=' Navam Perahera'
							description='An annual Buddhist festival in Colombo, Sri Lanka, featuring a grand procession of elephants, dancers, and musicians'
							image='https://www.globaltimes.cn/Portals/0/attachment/2017/2017-02-10/92abc15d-3efe-43ea-9a1b-2a8230b569f9.jpg'
							// defaultRating={5}
							date='February'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name=' Mahashivratri'
							description='A Hindu festival dedicated to Lord Shiva celebrated annually on March 1, 2022, with fasting, prayers, and offerings of fruits and flowers.'
							image='https://i.ndtvimg.com/i/2017-02/maha-shivratri-shivaratri_650x400_41487915776.jpg'
							// defaultRating={4}
							date='February'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name='Love Sri Lanka Festival'
							description='A week-long cultural festival celebrating Sri Lankan music, dance, cuisine, and art'
							image='http://3.bp.blogspot.com/-VDBqYEhDdr8/URX8Li8HlZI/AAAAAAAALVg/_Dbri7kX1Lg/s1600/valentine-day-cards.jpg'
							// defaultRating={5}
							date='February 14'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name='Sinhala & Tamil New Year'
							description='A national holiday marking the Sinhalese and Tamil New Year with traditional customs, games, and food...'
							image='https://www.srilankafoundation.org/wp-content/uploads/2017/04/IMG_4883.jpg'
							// defaultRating={5}
							date='April 14'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name='Vesak Poya'
							description='A significant day for Buddhists worldwide, commemorating Buddha birth and enlightenment, celebrated through various religious rituals and practices.'
							image='https://www.tourslanka.com/wp-content/uploads/2018/06/Vesak-Poya-Banner.jpg'
							// defaultRating={5}
							date='May'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>

					<div className='festivals-details'>
						<Festivals
							name='Poson Festival'
							description='A Buddhist festival commemorating the introduction of Buddhism to Sri Lanka with pilgrimages, offerings, and religious rituals'
							image='http://s3.amazonaws.com/themorning-aruna/wp-content/uploads/2019/06/17115921/MG_9275.jpg'
							// defaultRating={3}
							date='June'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name='Kandy Esala Poya Perahera'
							description=' A grand religious procession in Kandy, Sri Lanka, featuring elaborately decorated elephants, dancers, and musicians'
							image='https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/kandy-perahera-in-sri-lanka_orig.jpg'
							// defaultRating={5}
							date='August'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name=' Kataragama Esala Festival'
							description='An annual Hindu-Buddhist festival in Kataragama, Sri Lanka, featuring traditional dances, firewalking, and religious rituals'
							image='http://kataragama.org/images/blog/esala-festival-kataragama.jpg'
							// defaultRating={4}
							date='July'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name='Nallur Festival'
							description='A Hindu festival in Jaffna, Sri Lanka, featuring processions, music, and rituals in honor of the god Murugan'
							image='https://1.bp.blogspot.com/-NQ-TlkkgjAc/TwY-40IRV2I/AAAAAAAAAHg/c6XrFv4jGEA/s1600/4944347759_c35f0b833a_b.jpg'
							// defaultRating={5}
							date='August'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
					<div className='festivals-details'>
						<Festivals
							name=' Christmas'
							description='A Christian holiday celebrating the birth of Jesus Christ, observed on December 25th with festive decorations, gift-giving, and religious traditions worldwide.'
							image='https://www.yahire.com/blogs/wp-content/uploads/2016/09/christmas-parties.jpg'
							// defaultRating={4}
							date='December'
						/>
						{/* <button type='submit'> */}
						{/* <a href={"/festival/" + this.props.match.params.id}>Book NOW</a> */}
						{/* </button> */}
					</div>
				</div>
				{/* <Footer /> */}
			</div>
		);
	}
}
