import React from 'react';
import './index.css';
import { FaUser, FaSuitcase } from 'react-icons/fa';
import mainPic from '../../utils/mainPic.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="container">
        <div>
          <img className="main-picture" src={mainPic} alt="main-pic"></img>
        </div>
        <div className="main-info">
          <p className="main-hello">Hi there!</p>
          <h1 className="main-title">
            <span>I'm</span> Anna Kalnitsky
          </h1>
          <p>
            As a frontend developer with 3 years of experience, I have had the opportunity to work
            with startups and companies, independently and collaboratively with teams.
          </p>
          <p>
            I enjoy the challenge of working on complex projects and solving problems creatively
            with passion to best user UX/UI.
          </p>
          <p></p>
          <p>
            With a can-do attitude, I am always willing to go the extra mile to ensure that projects
            are completed on time and to the highest standards.
          </p>
          <div className="main-btn">
            <Link to="/about" className="about-btn">
              <i className="btn-icon">
                <FaUser />
              </i>
              <span>More about me</span>
            </Link>
            <Link to="/portfolio" className="portfolio-btn">
              <i className="btn-icon">
                <FaSuitcase />
              </i>
              <span>Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
