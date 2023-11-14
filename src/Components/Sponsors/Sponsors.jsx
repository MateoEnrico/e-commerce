import React from 'react';
import './Sponsors.css';  
import sponsor1 from '../../images/sponsor1.jpg';
import sponsor2 from '../../images/sponsor2.jpg';
import sponsor3 from '../../images/sponsor3.jpg';

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <h2>Nuestros Patrocinadores</h2>
      <p>Agradecemos a nuestros valiosos patrocinadores por su apoyo continuo.</p>
      <div className="sponsor">
        <img src={sponsor1} alt="Sponsor 1" />
      </div>
      <div className="sponsor">
        <img src={sponsor2} alt="Sponsor 2" />
      </div>
      <div className="sponsor">
        <img src={sponsor3} alt="Sponsor 3" />
      </div>
    </div>
  );
};

export default Sponsors;