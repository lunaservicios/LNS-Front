import React from 'react';
import './Companies.css';
import image1 from '../components/assets/companies/Edenred.webp';
import image2 from '../components/assets/companies/Santander.webp';
import image3 from '../components/assets/companies/TravelSecurity.webp';

const Companies = () => {
  return (
    <section id="companies" className="companies-section">
      <h1>Compañias que confían en nosotros</h1>
      <hr className="divider-companies" />
      <div className="content-row-companies">
        <div className="text-image-companies">
          <div className="image-companies">
            <img src={image2} alt='Descripción de la imagen' />
            <img src={image3} alt='Descripción de la imagen' />
            <img src={image1} alt='Descripción de la imagen' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
