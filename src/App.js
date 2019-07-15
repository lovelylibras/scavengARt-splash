import React from 'react';
import AboutScavengArt from './AboutScavengart';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Home from './Home';
import NavBar from './NavBar';
import Screencast from './Screencast';
import TechStack from './TechStack';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="body">
        <Home />
        <AboutScavengArt />
        <TechStack />
        <Screencast />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
