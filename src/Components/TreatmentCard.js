import React from "react";
import "../Styles/TreatmentCard.css";
import img1 from "../images/treatmentBody.jpg";
import img2 from "../images/treatmentFace.jpg";
import img3 from "../images/treatmentFoot.jpg";
import img4 from "../images/treatmentNeck.jpg";
import img5 from "../images/treatmentMassage.jpg";
// import img6 from '../images/treatmentMassage.jpg';

function TreatmentCard() {
	const treatments = [
		{
			id: 1,
			title: "Body",
			select: "Description 1",
			img: img1,
			price: "89.99",
		},
		{
			id: 2,
			title: "Face",
			select: "Description 2",
			img: img2,
			price: "21.99",
		},
		{
			id: 3,
			title: "Foot",
			select: "Description 3",
			img: img3,
			price: "12.99",
		},
		{
			id: 4,
			title: "Neck",
			select: "Description 1",
			img: img4,
			price: "99.99",
		},
		{
			id: 5,
			title: "Massage",
			description: "Description 2",
			img: img5,
			price: "12.99",
		},
		// { id: 6, title: 'Massage', description: 'Description 2', img: img5 },
	];

	return (
		<div className='treatmentCardContainer'>
			{treatments.map((treatment) => (
				<div key={treatment.id} className='treatmentCard'>
					<div className='top'>
						<img src={treatment.img} alt='' />
					</div>
					<div className='bottom'>
						<p className='title'>
							<a href='#'> {treatment.title}</a>
						</p>
						<p className='price'>Price: ${treatment.price}</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default TreatmentCard;
