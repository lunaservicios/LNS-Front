import React from 'react';
import './Header.css';
import logo from '../components/assets/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faHandPointUp, faSuitcase, faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = ({ openModal, closeModal, showModal }) => {
  return (
    <header>
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Luna Servicios" />
        </div>
        <nav>
          <ul>
            <li><a href="#home"><FontAwesomeIcon icon={faHome} /> Inicio</a></li>
            <li><a href="#about"><FontAwesomeIcon icon={faHandPointUp} /> Nosotros</a></li>
            <li><a href="#services"><FontAwesomeIcon icon={faSuitcase} /> Servicios</a></li>
            <li><a href="#" onClick={openModal}><FontAwesomeIcon icon={faPhone} /> Contacto</a></li>
          </ul>
        </nav>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <div className="modal-body">
              <div className="modal-left">
                <h2>Contacta con Nosotros</h2>
                <h3>LunaServicios</h3>
              </div>
              <div className="modal-right">
                <form>
                  <label>Nombre</label>
                  <input type="text" placeholder="Ingrese su nombre..." />
                  <label>Correo</label>
                  <input type="email" placeholder="Ingrese el correo electrónico..." />
                  <label>Mensaje</label>
                  <textarea placeholder="Ingrese un mensaje..." />
                  <button type="submit">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
