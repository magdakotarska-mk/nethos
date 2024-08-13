import React, { useState } from 'react';
import '../Styles/Services.css';
import '../Styles/Box.css';
import analiza from '../Images/analising.jpeg';
import option from '../Images/option.jpeg';
import planning from '../Images/planning.jpg';
import support from '../Images/support.jpg';

const services = [
    {
        id: 1,
        title: 'Analiza potrzeb biznesowych',
        description: 'Pomagamy zdefiniować cele i wymagania Twojego projektu.',
        icon: '🔍',
        image: analiza,
    },
    {
        id: 2,
        title: 'Wybór optymalnych rozwiązań',
        description: 'Doradzamy w wyborze najlepszych rozwiązań IT dla Twojej organizacji.',
        icon: '💡',
        image: option,
    },
    {
        id: 3,
        title: 'Planowanie projektu',
        description: 'Opracowujemy szczegółowy plan wdrażania, uwzględniając harmonogram.',
        icon: '🗓️',
        image: planning,
    },
    {
        id: 4,
        title: 'Wsparcie implementacyjne',
        description: 'Pomagamy w skutecznej implementacji nowych rozwiązań.',
        icon: '🔧',
        image: support,
    },
];
const Services = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    return (
        <section className="services">
            <div className="container">
                <div className="section-title">
                    <h2>Usługi konsultacyjne Nethos</h2>
                </div>
            </div>
            <div className="slider-container">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`slide ${index === currentSlide ? 'active' : ''}`}
                        >
                            <div className="image-container"><img src={service.image} alt='Analiza' /></div>
                            <div className="text">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="prev" onClick={prevSlide}>❮</button>
                <button className="next" onClick={nextSlide}>❯</button>
                <div className="navigation">
                    {services.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
