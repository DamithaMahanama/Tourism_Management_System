import React from 'react';
import '../Styles/testingid.css';

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div className="image-container">
        <img src="https://picsum.photos/id/237/200/300" alt="Image 1" />
      </div>
      <div className="image-container">
        <img src="https://picsum.photos/id/238/300/200" alt="Image 2" />
      </div>
      <div className="image-container">
        <img src="https://picsum.photos/id/239/250/250" alt="Image 3" />
      </div>
      <div className="image-container">
        <img src="https://picsum.photos/id/240/200/200" alt="Image 4" />
      </div>
      <div className="image-container">
        <img src="https://picsum.photos/id/241/300/150" alt="Image 5" />
      </div>
      <div className="image-container">
        <img src="https://picsum.photos/id/242/200/250" alt="Image 6" />
      </div>
    </div>
  );
};

export default ImageGallery;
