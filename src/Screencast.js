import React from 'react';

function Screencast() {
  return (
    <div className="section" id="screencast">
      <h1>Screencast</h1>
      <iframe
        width="710.4"
        height="400"
        src="https://www.youtube.com/embed/c7Y94yohNec"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        id="video"
      />
    </div>
  );
}

export default Screencast;
