import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './ImageCarousel.css';
import image1 from '../components/assets/carrousel/carousel1.jpg';
import image2 from '../components/assets/carrousel/carousel2.jpg';
import image3 from '../components/assets/carrousel/carousel3.jpg';

const ImageCarousel = () => {
  return (
    <div id="home" className="carousel-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div>
          <img src={image1} alt="Slide 1" />
          <p className="legend">Desarrollamos plataformas de negocio, outsourcing y consultoría en gestión informática.</p>
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
          <p className="legend">Prestamos servicios de consultoría en Gerencia, Administración, Informática, tecnología y outsourcing.</p>
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
          <p className="legend">Comienza tu proyecto hoy con Luna Servicios.</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;