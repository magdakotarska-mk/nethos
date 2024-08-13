import React from 'react';
import '../Styles/Hero.css';
import '../Styles/Header.css';
import logo from '../Images/logo.png';

const Hero = () => (
    <section className="hero">
        <div className="logo">
            <img src={logo} alt="Nethos Logo" />
        </div>
        <div className="hero-text">
            <h2>Masz wiele obaw związanych z nadchodzącym wdrożeniem systemów IT w Twojej firmie?</h2>
            <p>Z naszym doświadczonym zespołem konsultantów możesz mieć pewność, że Twój projekt będzie realizowany sprawnie i efektywnie!</p>
        </div>
    </section>
);

export default Hero;
