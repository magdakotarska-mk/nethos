import React from 'react';
import '../Styles/Footer.css';

const Footer = () => (
    <footer className='footer' id="contact">
        <div className="contact-item">
            <div className="icon">
                <i className="fas fa-map-marker-alt">📍</i>
            </div>
            <div className="contact-details">
                <h4>Adres:</h4>
                <p>Siedlicka 6<br />80-222 Gdańsk</p>
            </div>
        </div>
        <div className="contact-item">
            <div className="icon">
                <i className="fas fa-envelope">📧</i>
            </div>
            <div className="contact-details">
                <h4>Email:</h4>
                <p>biuro@nethos.pl</p>
            </div>
        </div>
        <div className="contact-item">
            <div className="icon">
                <i className="fas fa-phone">📞</i>
            </div>
            <div className="contact-details">
                <h4>Telefon:</h4>
                <p>(+48) 502 20 33 72</p>
            </div>
        </div>
    </footer>
);

export default Footer;
