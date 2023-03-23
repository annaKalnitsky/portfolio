import React from 'react';
import { Link } from 'react-router-dom';

const SecondaryBtn = ({ icon, text, link }) => {
  return (
    <div>
      <Link to={link} className="portfolio-btn">
        <i className="btn-icon">{icon}</i>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default SecondaryBtn;
