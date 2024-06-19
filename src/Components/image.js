import React from 'react';

const mapLinks = [
  { url: 'https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed' },
  { url: 'https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed' },
  { url: 'https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed' },
  { url: 'https://maps.google.com/maps?q=Tokyo&t=&z=13&ie=UTF8&iwloc=&output=embed' },
  { url: 'https://maps.google.com/maps?q=Sydney&t=&z=13&ie=UTF8&iwloc=&output=embed' },
  { url: 'https://maps.google.com/maps?q=Rio%20de%20Janeiro&t=&z=13&ie=UTF8&iwloc=&output=embed' }
];

function MapComponent({ activeMapIndex }) {
  const mapSrc = mapLinks[activeMapIndex].url;
  
  return (
    <div>
      <iframe
        title="Google Map"
        width="1000"
        height="740"
        loading="lazy"
        allowFullScreen
        src={mapSrc}
        style={{border:0}}
        referrerPolicy="no-referrer-when-downgrade"
      >
      </iframe>
    </div>
  );
}

export default MapComponent;
