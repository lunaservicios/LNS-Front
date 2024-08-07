import React from 'react';
import './QuienesSomos.css';
import image1 from '../components/assets/nuestra-empresa/image1.jpg';
import image2 from '../components/assets/nuestra-empresa/image2.jpg';
import image3 from '../components/assets/nuestra-empresa/image3.jpg';
const QuienesSomos = () => {
  return (
    <section id="about" className="about-section">
      <h1>Nuestra Empresa</h1>
      <h2>Desarrolla y optimiza tu proyecto tecnologico con Luna Servicios.</h2>
      <hr className="divider-about" />
      <div className="content-row-about">
        <div className="text-image-about">
          <div className="text-about">
            <h4>Somos</h4>
            <h5>Una empresa de servicios informáticos financieros, transaccionales, alta concurrencia, 
                robusto y seguro. Desarrollamos plataformas de negocio, outsourcing y consultoría en 
                gestión informática. Una empresa joven y ágil, con un objetivo claro consistente en brindar 
                una estrecha colaboración a nuestros clientes apoyándolos y hacer de sus proyectos y compañías 
                en negocios de alta rentabilidad.</h5>
          </div>
          <div className="image-about">
            <img src={image1} alt='Descripción de la imagen' />
          </div>
        </div>
        <div className="text-image-about reversed">
          <div className="text-about">
            <h4>Experiencia</h4>
            <h5>Sus fundadores poseen más de 15 años de trayectoria profesional en bancos nacionales y 
                un alto nivel de especialización en el área informática.Los profesionales que conforman 
                nuestro equipo tienen una vasta experiencia y un enfoque innovador en los sectores que presta 
                servicios LunaServicios Ltda.</h5>
          </div>
          <div className="image-reverse-about">
            <img src={image2} alt='Descripción de la imagen' />
          </div>
        </div>
        <div className="text-image-about">
          <div className="text-about">
            <h4>Soluciones</h4>
            <h5>Estamos dedicados a brindar soluciones utilizando herramientas informáticas de última generación,
                 permitiendo a nuestros clientes, optimizar sus procesos y mejorar su rendimiento. 
                 Utilizamos herramientas tecnológicas de punta, disponemos de una metodología de trabajo para cumplir 
                    satisfactoriamente con los requerimientos en tiempo y forma.</h5>
          </div>
          <div className="image-about">
            <img src={image3} alt='Descripción de la imagen' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
