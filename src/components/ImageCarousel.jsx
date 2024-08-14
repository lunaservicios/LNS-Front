import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import './ImageCarousel.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from '../components/assets/carrousel/carousel1.jpg';
import image2 from '../components/assets/carrousel/carousel2.jpg';
import image3 from '../components/assets/carrousel/carousel3.jpg';

const ImageCarousel = ({ openModal }) => {
  return (
    <div id="home" className="carousel-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={image1} className="carousel-image" alt="Slide 1" />
          <div className="carousel-content">
            <p>Desarrollamos plataformas de negocio, outsourcing y consultoría en gestión informática.</p>
            <button onClick={() => window.location.href = '#home'}>¿Quiénes somos?</button>
          </div>
        </div>
        <div>
          <img src={image2} className="carousel-image" alt="Slide 2" />
          <div className="carousel-content">
            <p>Prestamos servicios de consultoría en Gerencia, Administración, Informática, tecnología y outsourcing.</p>
            <button onClick={() => window.location.href = '#about'}>Nuestros servicios</button>
          </div>
        </div>
        <div>
          <img src={image3} className="carousel-image" alt="Slide 3" />
          <div className="carousel-content align-right">
            <p>Comienza tu proyecto hoy con Luna Servicios.</p>
            <button onClick={openModal}>Contáctanos</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
