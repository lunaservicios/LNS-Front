import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TextCarousel.css'; // Puedes agregar estilos específicos para el carrusel de texto si lo deseas
import logo1 from '../components/assets/logos-icons/logosantander.webp'; 
import logo2 from '../components/assets/logos-icons/logotravel.webp'; 


const TextCarousel = () => {
  return (
    <div id="text-carousel" className="carousel-container">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div className="carousel-slide">
          <p className="carousel-text">
            <h2><img src={logo1} alt="Logo 1" className="logo" />Jimena Carrera</h2>
            <h3>Scrum Master</h3>
            <h4>Luna servicios nos ha proporcionado desde hace 3 años un equipo de profesionales especializado 
              y muy comprometido, los cuales han participado activamente en varios proyectos importantes que 
              se han desarrollado para el negocio del Cash del Banco Santander, cumpliendo así los objetivos planteados 
              para nuestra área en tiempo y forma.</h4>
          </p>
        </div>
        <div className="carousel-slide">
          <p className="carousel-text">
            <h2><img src={logo1} alt="Logo 1" className="logo" />Edgar Escudero Frías</h2>
            <h3>Technical Lead</h3>
            <h4>Luna Servicios nos ha brindado apoyo estratégico de recursos, lo que nos ha significado 
              gran avance en los proyectos en curso y cumplimiento de metas.</h4>
          </p>
        </div>
        <div className="carousel-slide">
          <p className="carousel-text">
          <h2><img src={logo2} alt="Logo 1" className="logo" />Claudio Sepúlveda</h2>
          <h3>Jefe de Proyectos</h3>
            <h4>El trabajo con el equipo de Luna Servicios ha sido como si pertenecieran al equipo Travel 
              involucrándose en el problema y origen de la solución solicitada.
              El nivel de los profesionales de Luna se nota las ganas de generar resultados acompañando 
              al cliente , además de asumir con optimismo los ajustes que vamos solicitando al desarrollo.
              En resumen, la dinámica de trabajo con ustedes facilita la generación de la solución.</h4>
          </p>
        </div>
        <div className="carousel-slide">
          <p className="carousel-text">
            <h2>Jimena Carrera</h2>
            <h3>Scrum Master</h3>
            <h4>Luna servicios nos ha proporcionado desde hace 3 años un equipo de profesionales especializado 
              y muy comprometido, los cuales han participado activamente en varios proyectos importantes que 
              se han desarrollado para el negocio del Cash del Banco Santander, cumpliendo así los objetivos planteados 
              para nuestra área en tiempo y forma.</h4>
          </p>
        </div>
        <div className="carousel-slide">
          <p className="carousel-text">
            <h2>Jimena Carrera</h2>
            <h3>Scrum Master</h3>
            <h4>Luna servicios nos ha proporcionado desde hace 3 años un equipo de profesionales especializado 
              y muy comprometido, los cuales han participado activamente en varios proyectos importantes que 
              se han desarrollado para el negocio del Cash del Banco Santander, cumpliendo así los objetivos planteados 
              para nuestra área en tiempo y forma.</h4>
          </p>
        </div>
        <div className="carousel-slide">
          <p className="carousel-text">
            <h2>Jimena Carrera</h2>
            <h3>Scrum Master</h3>
            <h4>Luna servicios nos ha proporcionado desde hace 3 años un equipo de profesionales especializado 
              y muy comprometido, los cuales han participado activamente en varios proyectos importantes que 
              se han desarrollado para el negocio del Cash del Banco Santander, cumpliendo así los objetivos planteados 
              para nuestra área en tiempo y forma.</h4>
          </p>
        </div>
        <div className="carousel-slide">
          <p className="carousel-text">
            <h2>Jimena Carrera</h2>
            <h3>Scrum Master</h3>
            <h4>Luna servicios nos ha proporcionado desde hace 3 años un equipo de profesionales especializado 
              y muy comprometido, los cuales han participado activamente en varios proyectos importantes que 
              se han desarrollado para el negocio del Cash del Banco Santander, cumpliendo así los objetivos planteados 
              para nuestra área en tiempo y forma.</h4>
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default TextCarousel;
