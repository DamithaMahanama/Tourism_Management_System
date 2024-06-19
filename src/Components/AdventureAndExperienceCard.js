import React from 'react';
import '../Styles/AdventureAndExperienceCard.css';
import img1 from '../images/adventure1.jpg';
import img2 from '../images/adventure2.jpg';
import img3 from '../images/adventure3.jpg';
import img4 from '../images/adventure4.jpg';
import img5 from '../images/adventure5.jpg';
import img6 from '../images/adventure6.jpg';
import img7 from '../images/adventure7.jpg';
import img8 from '../images/adventure8.jpg';
import img9 from '../images/adventure9.jpg';

function AdventureCard() {
  const adventures = [
    { id: 1, title: 'Image title', select: 'Description 1', img: img1 },
    { id: 2, title: 'Image title', select: 'Description 2', img: img2 },
    { id: 3, title: 'Image title', select: 'Description 3', img: img3 },
    { id: 4, title: 'Image title', select: 'Description 1', img: img4 },
    { id: 5, title: 'Image title', description: 'Description 2', img: img5 },
    { id: 6, title: 'Image title', description: 'Description 2', img: img6 },
    { id: 7, title: 'Image title', select: 'Description 1', img: img7 },
    { id: 8, title: 'Image title', description: 'Description 2', img: img8 },
    { id: 9, title: 'Image title', description: 'Description 2', img: img9 },
  ];
  
  return (
    <div className='adventureCardContainer'>
      {adventures.map((adventure) => (
        <div key={adventure.id} className='adventureCard'>
          <div className='top'>
            <img src={adventure.img} alt='' />
          </div>
          <div className='bottom'>
            <p className='title'>{adventure.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 
 
export default AdventureCard;
