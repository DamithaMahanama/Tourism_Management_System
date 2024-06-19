import React, { useState } from 'react';
import RatingStar from './RatingStar';

const Guide = ({ name, image, description }) => {
  const [rating, setRating] = useState(0);

  const handleRatingSelect = (rating) => {
    setRating(rating);
  };

  return (
    <div className="guide">
      <div className="image">
        <img src={image} alt="Guide" />
      </div>
      <div className="content">
        <div className="gd-name">{name}</div>
        <p>{description}</p>
        <RatingStar selected={rating} onClick={handleRatingSelect} />
      </div>
    </div>
  );
};

export default Guide;
