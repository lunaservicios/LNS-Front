import React from 'react';
import Header from './components/Header';
import QuienesSomos from './components/QuienesSomos';
import Services from './components/Services';
import TextCarousel from './components/TextCarousel';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import Companies from './components/Companies';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ImageCarousel />
      <QuienesSomos />
      <Services />
      <TextCarousel />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
