import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <nav className="navigation">
        <div className="nav-links">
          <a href="#about">About me</a>
          <a href="#work">My work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
        </div>
      </nav>

      <main className="hero-content">
        <p className="greeting">Greetings!, My name is</p>
        <h1 className="name">Fernando Núñez.</h1>
        <h2 className="title">I develop software and games.</h2>
        <p className="description">
          I'm a Software development engineer graduate based in Monterrey N.L.
          Specializing in developing websites, Android apps, videogames and
          much more.
        </p>
        <button className="cta-button">Get In Touch</button>
      </main>
    </div>
  );
};

export default Hero;