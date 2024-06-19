import React from "react";
import { Link } from "react-router-dom";
import "../Styles/DestinationCard.css";
import img1 from "../images/destination1.jpg";
import img2 from "../images/destination2.jpg";
import img3 from "../images/destination3.jpg";
import img4 from "../images/destination4.jpg";
import img5 from "../images/destination5.jpg";
import img6 from "../images/destination6.jpg";

function DestinationCard() {
	const destinations = [
		{
			id: 1,
			title: "Sigiriya",
			description:
				"Ancient rock fortress in Sri Lanka with frescoes and lion paw entrance...",
			img: img1,
		},
		{
			id: 2,
			title: "Pinnawala",
			description:
				"Pinnawala is an elephant orphanage in Sri Lanka, rescuing elephants.",
			img: img2,
		},
		{
			id: 3,
			title: "Upper country",
			description:
				"Bagawantalawa is a town in the central highlands of Sri Lanka, known for its tea plantations...",
			img: img3,
		},
		{
			id: 4,
			title: "Galle",
			description:
				"Galle is a charming coastal city in Sri Lanka, famous for its historic fort, beautiful beaches, and ...",
			img: img4,
		},
		{
			id: 5,
			title: "Water Falls",
			description:
				"Sri Lanka has many beautiful waterfalls, including Dunhinda Falls, Diyaluma Falls, and ...",
			img: img5,
		},
		{
			id: 6,
			title: "Horton Plains",
			description:
				"Horton Plains is a breathtaking national park in Sri Lanka, known for its grassy plains, misty peaks...",
			img: img6,
		},
	];

	return (
		<div className='destinationCardContainer'>
			{destinations.map((destination) => (
				<Link
					key={destination.id}
					to={`/destinationdetails/${destination.id}`}
					className='destinationCard'
				>
					<div className='top'>
						<img src={destination.img} alt='' />
					</div>
					<div className='bottom'>
						<p className='title'>{destination.title}</p>
						<p className='description'>{destination.description}</p>
						<button type='submit'>Details</button>
					</div>
				</Link>
			))}
		</div>
	);
}

export default DestinationCard;
