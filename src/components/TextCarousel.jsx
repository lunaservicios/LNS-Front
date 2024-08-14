import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TextCarousel.css';
import logo1 from '../components/assets/logos-icons/logosantander.webp'; 
import logo2 from '../components/assets/logos-icons/logotravel.webp'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TextCarousel = () => {
  // Estado que manejará la expansión de cada testimonio de forma independiente
  const [expandedItems, setExpandedItems] = useState({});

  // Función para manejar la expansión o colapso de un testimonio
  const handleToggle = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Cambia el estado solo del testimonio con el índice específico
    }));
  };

  return (
    <div id="text-carousel" className="textcarousel-container">
      <h1 className="carousel-title">Testimonios que avalan nuestro desempeño</h1>
      <h4 className="carousel-subtitle">La opinión de nuestros clientes es fundamental para el mejoramiento en el desempeño de nuestros servicios.</h4>
      <hr className="divider-textcarousel-text" />
      <Carousel>
        <Carousel.Item>
          <div className="textcarousel-slide">
            <h2 className="carousel-heading"><img src={logo1} alt="Logo 1" className="logo" />Jimena Carrera</h2>
            <h3 className="carousel-subheading">Scrum Master</h3>
            <p className="carousel-paragraph"><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              Luna servicios nos ha proporcionado desde hace 3 años un equipo de profesionales especializados 
              y muy comprometidos, los cuales han participado activamente en varios proyectos importantes que 
              se han desarrollado para el negocio del Cash del Banco Santander, cumpliendo así los objetivos 
              planteados para nuestra área en tiempo y forma.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="textcarousel-slide">
            <h2 className="carousel-heading"><img src={logo1} alt="Logo 1" className="logo" />Edgar Escudero Frías</h2>
            <h3 className="carousel-subheading">Technical Lead</h3>
            <p className="carousel-paragraph"><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              Luna Servicios nos ha brindado apoyo estratégico de recursos, lo que nos ha significado 
              gran avance en los proyectos en curso y cumplimiento de metas.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="textcarousel-slide">
            <h2 className="carousel-heading"><img src={logo2} alt="Logo 2" className="logo" />Claudio Sepúlveda</h2>
            <h3 className="carousel-subheading">Jefe de Proyectos</h3>
            <div className={`textcarousel-paragraph ${expandedItems[0] ? 'expanded' : 'collapsed'}`}>
             <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
                El trabajo con el equipo de Luna Servicios ha sido como si pertenecieran al equipo Travel 
                involucrándose en el problema y origen de la solución solicitada.<br /><br /><br />
                El nivel de los profesionales de Luna se nota las ganas de generar resultados acompañando 
                al cliente, además de asumir con optimismo los ajustes que vamos solicitando al desarrollo.<br /><br />
                En resumen, la dinámica de trabajo con ustedes facilita la generación de la solución.
                </div>
            <p className="toggle-text" onClick={() => handleToggle(0)}>
              {expandedItems[0] ? 'Leer menos' : 'Leer más'}
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="textcarousel-slide">
            <h2 className="carousel-heading"><img src={logo2} alt="Logo 2" className="logo" />Mauricio González</h2>
            <h3 className="carousel-subheading">Analista Programador TI</h3>
            <div className={`textcarousel-paragraph ${expandedItems[1] ? 'expanded' : 'collapsed'}`}>
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
            <p className="toggle-text" onClick={() => handleToggle(1)}>
              {expandedItems[1] ? 'Leer menos' : 'Leer más'}
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="textcarousel-slide">
            <h2 className="carousel-heading"><img src={logo1} alt="Logo 1" className="logo" />Víctor Rannou</h2>
            <h3 className="carousel-subheading">Engineer Lead</h3>
            <p className="carousel-paragraph"><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              En un trabajo de más de 15 años con Luna Servicios hemos llegado a establecer una relación 
              de confianza que permite mejorar las asignaciones de profesionales, hacer los ajustes a tiempo 
              y asegurar la continuidad cuando los resultados y percepciones de nuestros clientes son 
              satisfactorios. Se nota un esfuerzo por presentarnos buenas alternativas, o en su defecto si no 
              es lo que esperamos existe transparencia para señalarlo oportunamente.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="textcarousel-slide">
            <h2 className="carousel-heading"><img src={logo1} alt="Logo 1" className="logo" />Rubén Barría Martínez</h2>
            <h3 className="carousel-subheading">Scrum Master</h3>
            <p className="carousel-paragraph"><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              Con LunaServicios hemos trabajado por más de 15 años, en diversos proyecto internos, en todos estos 
              años LunaServicios ha puesto a disposición en los proyectos profesionales comprometidos, orientado al 
              cliente, con capacidad de adaptación a cambios, enfocados en los objetivos que nos planteados, 
              además de proporcionar siempre su apoyo después de los términos de los proyectos.
            </p>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="textcarousel-slide">
            <h2 className="carousel-heading"><img src={logo1} alt="Logo 1" className="logo" />Paola Vergara</h2>
            <h3 className="carousel-subheading">Scrum Master</h3>
            <p className="carousel-paragraph"><FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              Luna Servicios me ha proporcionado profesionales de excelente nivel, muy comprometidos y 
              con el conocimiento que nos ha ayudado dar respuestas efectivas frente a los requerimientos del 
              negocio de Seguros y a formar equipo de excelentes profesionales. Muchas gracias.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default TextCarousel;
