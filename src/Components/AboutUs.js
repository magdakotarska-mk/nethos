import React from 'react';
import '../Styles/AboutUs.css';
import cobain from '../Images/cobain.jpg';
import nowak from '../Images/nowak.jpg';
import kowalski from '../Images/kowalski.jpg';

const teamMembers = [
    { name: 'Jan Kowalski', role: 'CEO', image: kowalski },
    { name: 'Anna Nowak', role: 'CTO', image: nowak },
    { name: 'Kurt Cobain', role: 'Janitor', image: cobain },
];

const AboutUs = () => (
    <section className="about-us background">
        <div className="container">
            <div className="section-title">
                <h2>O nas</h2>
            </div>
        </div>
        <div >
            <div className='container'>
                <div className='about-us-text'>
                    <p>Nethos, założona w 2007 roku w Gdańsku, jest firmą specjalizującą się w tworzeniu i wdrażaniu zaawansowanych rozwiązań informatycznych, które wspierają transformację cyfrową przedsiębiorstw. Naszą misją jest dostarczanie innowacyjnych technologii, które optymalizują procesy biznesowe i przyczyniają się do wzrostu konkurencyjności naszych klientów. Dążymy do bycia liderem w branży IT, oferując usługi, które odpowiadają na zmieniające się potrzeby rynkowe i wspierają rozwój naszych partnerów biznesowych.</p>
                </div>
            </div>
        </div>
        <div className="team">
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member">
                    <img src={member.image} alt={member.name} />
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    </section >
);

export default AboutUs;
