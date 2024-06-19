import React from 'react';

function MapLocation() {
  return (
    <iframe
      title="Google Map"
      width="1000"
      height="740"
      loading="lazy"
      allowFullScreen
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25396.15235959054!2d80.72668280540915!3d7.9547203344333015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0dfa73179d1%3A0x1e04c1150cff0edf!2sSigiriya!5e1!3m2!1sen!2slk!4v1681185800066!5m2!1sen!2slk" referrerpolicy="no-referrer-when-downgrade"
      style={{border:0}}
      referrerPolicy="no-referrer-when-downgrade"
    >
    </iframe>
  );
}

export default MapLocation;
