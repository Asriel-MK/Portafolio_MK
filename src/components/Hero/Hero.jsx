import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // This is the mouse position

  useEffect(() => { 
    const handleMouseMove = (e) => { // This is the function that updates the mouse position
      setMousePosition({ x: e.clientX, y: e.clientY }); // This updates the mouse position
    };

    window.addEventListener('mousemove', handleMouseMove); // This adds the event listener to the window

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="hero-container">
      <div 
        className="spotlight"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                      rgba(29, 78, 216, 0.15),
                      transparent 80%)`
        }}
      />
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