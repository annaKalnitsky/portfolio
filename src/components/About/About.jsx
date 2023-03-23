import React from 'react';
import './index.scss';
import aboutPic from '../../utils/aboutPic.png';
import { FiDownload } from 'react-icons/fi';
import CV from '../../utils/AnnaKalnitskyCV_23.pdf';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>
          About<span> Me</span>
        </h1>
        <p>I develop a beautiful things, and i love what i do.</p>
      </div>
      <div className="about-info">
        <img src={aboutPic} alt="about-info__img"></img>
        <div className="about-info__frame"></div>
        <div className="about-info__data">
          <div className="data-wrapper">
            <div className="about-info__data-wrapper">
              <div className="about-info__data-item">
                <span className="info-bold">First Name</span>
                <span>Anna</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Last Name</span>
                <span>Kalnitsky</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Birth Date</span>
                <span>23 April 1986</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Address</span>
                <span>Tel-Aviv, IL</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Languages</span>
                <span>English, Hebrew, Russian</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">LinkedIn</span>
                <a target="_blank" href="https://www.linkedin.com/in/anna-kalnitsky/">
                  www.linkedin.com/in/anna-kalnitsky
                </a>
              </div>
            </div>
            <div className="about-info__data-wrapper">
              <div className="about-info__data-item">
                <span className="info-bold">Experience</span>
                <span>4 years</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Freelance</span>
                <span>Available</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Hobby</span>
                <span>Photography</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Nationality</span>
                <span>Israeli</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Email</span>
                <span>annkalnitsky@gmail.com</span>
              </div>
              <div className="about-info__data-item">
                <span className="info-bold">Phone</span>
                <span>(+972)543039403</span>
              </div>
            </div>
          </div>
          <div className="about-info__CV-btn">
            <a href={CV} download className="about-btn">
              <i className="btn-icon">
                <FiDownload />
              </i>
              <span>Download My CV</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
