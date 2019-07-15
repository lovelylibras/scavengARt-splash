import React from 'react';
import AboutScavengArt from './AboutScavengart';
import AboutUs from './AboutUs';
import Home from './Home';
import Footer from './Footer';
import Nav from './NavBar';
import Screencast from './Screencast';
import TechStack from './TechStack';

function App() {
  return (
    <div className="App">
      <Nav />
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
