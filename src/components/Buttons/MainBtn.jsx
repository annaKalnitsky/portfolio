import React from 'react';
import { Link } from 'react-router-dom';

const MainBtn = ({ icon, text, link, href }) => {
  return (
    <div>
      <Link href={href} to={link} className="about-btn">
        <i className="btn-icon">{icon}</i>
        <span>{text}</span>
      </Link>
    </div>
  );
};

export default MainBtn;
