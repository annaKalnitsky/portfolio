import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { ImHome } from 'react-icons/im';
import { FaUser, FaSuitcase } from 'react-icons/fa';
import { BsFillChatTextFill } from 'react-icons/bs';

import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [hoveredLink, setHoveredLink] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div>
          <button
            className={`navbar__menu-button ${isMenuOpen ? 'expanded' : ''}`}
            onClick={toggleMenu}>
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
          {isMenuOpen ? (
            <div className={`navbar__items ${isMenuOpen ? 'expanded' : ''}`}>
              <div>
                <ul className="navbar__icons">
                  <Link to="/">
                    <i className="navbar__links-icon">
                      <ImHome />
                    </i>
                  </Link>
                  <Link to="/about">
                    <i className="navbar__links-icon">
                      <FaUser />
                    </i>
                  </Link>
                  <Link to="/portfolio">
                    <i className="navbar__links-icon">
                      <FaSuitcase />
                    </i>
                  </Link>
                  <Link to="/contact">
                    <i className="navbar__links-icon">
                      <BsFillChatTextFill />
                    </i>
                  </Link>
                </ul>
              </div>
              <div>
                <ul className="navbar__text">
                  <Link to="/" className="navbar__links-text">
                    Home
                  </Link>
                  <Link to="/about" className="navbar__links-text">
                    About
                  </Link>
                  <Link to="/portfolio" className="navbar__links-text">
                    Portfolio
                  </Link>
                  <Link to="/contsct" className="navbar__links-text">
                    Contact
                  </Link>
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
