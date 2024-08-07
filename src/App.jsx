// src/App.jsx

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageCarousel />
      <HeroSection />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
