import React from 'react';
import './Footer.css';
import logo from '../components/assets/logo.webp';
import ig from '../components/assets/social-icons/instagram.webp';
import tw from '../components/assets/social-icons/twitter.webp';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="Logo Luna Servicios" className="footer-logo" />
        </div>
        <div className="footer-center">
          <img src={ig} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social" />
          <img src={tw} href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social"/>
        </div>
        <div className="footer-right">
          <h3 className="contact-title">Contacto</h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Luis Thayer Ojeda 0180, oficina 1101 - Providencia, Chile</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>contacto@lunaservicios.cl</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span> — (56 2) 294 619 88</span>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2024 Luna Servicios. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
