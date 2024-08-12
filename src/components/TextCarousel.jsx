import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './TextCarousel.css';
import logo1 from '../components/assets/logos-icons/logosantander.webp'; 
import logo2 from '../components/assets/logos-icons/logotravel.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


const TextCarousel = () => {
  const [expanded, setExpanded] = useState(false);

   const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div id="text-carousel" className={`textcarousel-container ${expanded ? 'expanded' : 'collapsed'}`}>
      <h1>Testimonios que avalan nuestro desempeño</h1>
      <h4>La opinion de nuestros clientes es fundamental para el mejoramiento en el desempeño de nuestro servicios.</h4>
      <hr className="divider-textcarousel-text" />
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        <div className="textcarousel-slide">
          <p className="textcarousel-text">
            <h2><img src={logo1} alt="Logo 1" className="logo" />Jimena Carrera</h2>
            <h3>Scrum Master</h3>
            <p><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
            Luna servicios nos ha proporcionado desde hace 3 años un equipo de profesionales especializado 
              y muy comprometido, los cuales han participado activamente en varios proyectos importantes que 
              se han desarrollado para el negocio del Cash del Banco Santander, cumpliendo así los objetivos planteados 
              para nuestra área en tiempo y forma.</p>
          </p>
        </div>
        <div className="textcarousel-slide">
          <p className="textcarousel-text">
            <h2><img src={logo1} alt="Logo 1" className="logo" />Edgar Escudero Frías</h2>
            <h3>Technical Lead</h3>
            <p><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
            Luna Servicios nos ha brindado apoyo estratégico de recursos, lo que nos ha significado 
              gran avance en los proyectos en curso y cumplimiento de metas.</p>
          </p>
        </div>
        <div className="textcarousel-slide">
          <p className="textcarousel-text">
          <h2><img src={logo2} alt="Logo 1" className="logo" />Claudio Sepúlveda</h2>
          <h3>Jefe de Proyectos</h3>
          <p><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
          El trabajo con el equipo de Luna Servicios ha sido como si pertenecieran al equipo Travel 
              involucrándose en el problema y origen de la solución solicitada.<br /><br />
              El nivel de los profesionales de Luna se nota las ganas de generar resultados acompañando 
              al cliente , además de asumir con optimismo los ajustes que vamos solicitando al desarrollo.<br /><br />
              En resumen, la dinámica de trabajo con ustedes facilita la generación de la solución.</p>
          </p>
        </div>
        <div className="textcarousel-slide">
          <p className="textcarousel-text">
            <h2><img src={logo2} alt="Logo 2" className="logo" />Mauricio González</h2>
            <h3>Analista Programador TI</h3>
            <div className={`textcarousel-paragraph ${expanded ? 'expanded' : 'collapsed'}`}>
            <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              Luna Servicios ha demostrado ser una empresa excepcional, siempre dispuesta a abordar 
              nuestros desafíos con creatividad y profesionalismo. Lo que más nos ha impresionado es su 
              capacidad para adaptarse a las últimas tendencias tecnológicas y su enfoque en la implementación 
              de soluciones que son relevantes y efectivas en el mercado actual.<br /><br />
              Cada vez que trabajamos con Luna Servicios, podemos contar con un equipo dedicado que no solo 
              resuelve nuestros problemas actuales, sino que también contribuye significativamente a mejorar 
              y optimizar nuestros sistemas existentes. Su experiencia y conocimientos en tecnologías 
              actualizadas son una valiosa ventaja para nuestra empresa.<br /><br />
              Estamos agradecidos por la dedicación y el compromiso de Luna Servicios en cada proyecto que
              hemos emprendido juntos. Su capacidad para ofrecer resultados de calidad y soluciones de fácil 
              implementación ha tenido un impacto significativo en nuestro éxito. No podríamos estar más 
              contentos con los servicios que brindan y esperamos con ansias continuar nuestra colaboración 
              en el futuro.
            </div>
            <p className="toggle-text" onClick={handleToggle}>
              {expanded ? 'Leer menos' : 'Leer más'}
            </p>
          </p>
        </div>
        <div className="textcarousel-slide">
          <p className="textcarousel-text">
          <h2><img src={logo1} alt="Logo 1" className="logo" />Víctor Rannou</h2>
          <h3>Engineer Lead</h3>
          <p><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
          En un trabajo de más de 15 años con Luna Servicios hemos llegado a establecer una relación 
              de confianza que permite mejorar las asignaciones de profesionales, hacer los ajustes a tiempo 
              y asegurar la continuidad cuando los resultados y percepciones de nuestros clientes son 
              satisfactorios. Se nota un esfuerzo por presentarnos buenas alternativas, o en su defecto si no 
              es lo que esperamos existe transparencia para señalarlo oportunamente.</p>
          </p>
        </div>
        <div className="textcarousel-slide">
          <p className="textcarousel-text">
          <h2><img src={logo1} alt="Logo 1" className="logo" />Rubén Barría Martínez</h2>
            <h3>Scrum Master</h3>
            <p><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
            Con LunaServicios hemos trabajado por más de 15 años, en diversos proyecto internos, en todos estos 
              años LunaServicios ha puesto a disposición en los proyectos profesionales comprometidos, orientado al 
              cliente, con capacidad de adaptación a cambios , enfocados en los objetivos que nos planteados, 
              además de proporcionar siempre su apoyo después de los términos de los proyectos.</p>
          </p>
        </div>
        <div className="textcarousel-slide">
          <p className="textcarousel-text">
          <h2><img src={logo1} alt="Logo 1" className="logo" />Paola Vergara</h2>
            <h3>Scrum Master</h3>
            <p><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
            Luna Servicios me ha proporcionado profesionales de excelente nivel, muy comprometidos y 
              con el conocimiento que nos ha ayudado dar respuestas efectivas frente a los requerimientos del 
              negocio de Seguros y a formar equipo de excelentes profesionales. Muchas gracias</p>
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default TextCarousel;
