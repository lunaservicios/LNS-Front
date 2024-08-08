import React, { useState } from 'react';
import Header from './components/Header';
import QuienesSomos from './components/QuienesSomos';
import Services from './components/Services';
import TextCarousel from './components/TextCarousel';
import Footer from './components/Footer';
import ImageCarousel from './components/ImageCarousel';
import Companies from './components/Companies';

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <Header openModal={openModal} closeModal={closeModal} showModal={showModal} />
      <ImageCarousel openModal={openModal} />
      <QuienesSomos />
      <Services />
      <TextCarousel />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
