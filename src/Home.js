import React from 'react';

function Home() {
  return (
    <div className="section" id="home">
      <h1>About ScavengARt</h1>
      <p>
        Our app is an AR-based scavenger hunt that guides users through New York
        art museums, prompting them to follow a series of clues to discover
        selected artworks. Using ARKit image recognition and the user’s camera
        view, scavengARt™ allows users to scan paintings around the museum. When
        the correct artwork is identified, a pop-up modal displays information
        and the app displays a 3D trophy on the artwork to indicate a successful
        guess.
      </p>
    </div>
  );
}

export default Home;
