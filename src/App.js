import React from 'react';
import Hero from './Components/Hero';
import Services from './Components/Services';
import WhyNethos from './Components/WhyNethos';
import AboutUs from './Components/AboutUs';
import Opinions from './Components/Opinions';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <WhyNethos />
      <AboutUs />
      <Opinions />
      <Footer />
    </div>
  );
}

export default App;
