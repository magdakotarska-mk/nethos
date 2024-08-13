import React from 'react';
import '../Styles/WhyNethos.css';

const features = [
    {
        id: 1,
        title: 'Doświadczony zespół specjalistów',
        icon: '✅',
    },
    {
        id: 2,
        title: 'Indywidualne podejście',
        icon: '✅',
    },
    {
        id: 3,
        title: 'Nowoczesne technologie',
        icon: '✅',
    },
    {
        id: 4,
        title: 'Bezpieczeństwo danych',
        icon: '✅',
    },
];

const WhyNethos = () => (
    <section className="why-nethos">
        <div className="container">
            <div className="section-title-green">
                <h2>Dlaczego wybrać Nethos?</h2>
            </div>
        </div>
        <div className="team">
            {features.map(feature => (
                <div className="team-member" key={feature.id}>
                    <span className="feature-icon">{feature.icon}</span>
                    <h3>{feature.title}</h3>
                </div>
            ))}
        </div>
        <button className="contact-button">NAPISZ DO NAS</button>
    </section>
);

export default WhyNethos;
