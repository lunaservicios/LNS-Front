import React from 'react';
import './Services.css'; // Asegúrate de tener este archivo de estilos
import image1 from '../components/assets/servicios/service1.jpg';
import image2 from '../components/assets/servicios/service2.jpg';
import image3 from '../components/assets/servicios/service3.jpg';
import image4 from '../components/assets/servicios/service4.jpg';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <h1>Principales Servicios Prestados</h1>
      <hr className="divider-services" />
      <div className="content-row-services">
        <div className="text-image-services">
          <div className="text-services">
            <h4>Sevicios y asesoria integral de proyecto</h4>
            <h5>Entregamos asesoria dedicada a cada uno de nuestros proyectos para brindar mejor resultado.</h5>
          </div>
          <div className="image-services">
            <img src={image1} alt='Descripción de la imagen' />
          </div>
        </div>
        <div className="text-image-services reversed">
          <div className="text-services">
            <h4>OutSourcing TI/ Body Shopping</h4>
            <h5>Poseemos al un equpo especializado y capacitado para trabajar 
              con las ultimas tecnologias para tu proyecto actual.</h5>
          </div>
          <div className="image-reverse-services">
            <img src={image2} alt='Descripción de la imagen' />
          </div>
        </div>
        <div className="text-image-services">
          <div className="text-services">
            <h4>Soporte y mantencion</h4>
            <h5>Brindamos un soporte a todos los servicios y proyectos desarrollados por nuestros equipos. 
              Además, realizamos mejoras continuas para adaptarnos a cualquier contexto.</h5>
          </div>
          <div className="image-services">
            <img src={image3} alt='Descripción de la imagen' />
          </div>
        </div>
        <div className="text-image-services reversed">
          <div className="text-services">
            <h4>Chat-Bot</h4>
            <h5>Chatbots resuelven preguntas frecuentes y problemas de manera rápida y eficaz, 
              mejorando la eficiencia de tu negocio. Además, se integran con diversas plataformas 
              para facilitar la interacción con tus clientes.</h5>
          </div>
          <div className="image-reverse-services">
            <img src={image4} alt='Descripción de la imagen' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
