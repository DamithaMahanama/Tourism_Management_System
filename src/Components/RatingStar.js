import React from "react";

const RatingStar = ({ selected, onClick }) => {
	return (
		<div className='rating-star'>
			{[...Array(5)].map((_, index) => (
				<span key={index} className={selected >= index + 1 ? "filled" : ""}>
					&#9733;
				</span>
			))}
		</div>
	);
};

export default RatingStar;
