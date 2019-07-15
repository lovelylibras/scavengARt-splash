import React from 'react';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Home from './Home';
import Nav from './NavBar';
import Screencast from './Screencast';
import TechStack from './TechStack';

function App() {
  return (
    <div className="App">
      <Nav />
      <div id="body">
        <Home />
        <TechStack />
        <Screencast />
        <AboutUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
