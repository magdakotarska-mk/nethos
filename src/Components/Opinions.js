import '../Styles/Opinions.css';
import React, { useState, useEffect } from 'react';

const services = [
    {
        id: 1,
        description: '\"Nethos to firma, która naprawdę zna się na rzeczy! Ich zespół konsultantów pomógł nam przejść przez skomplikowany proces wdrożenia nowych systemów IT, co znacząco usprawniło nasze operacje. Profesjonalizm i zaangażowanie na każdym etapie projektu!\"',
    },
    {
        id: 2,
        description: '\"Z Nethos czuliśmy, że nasz projekt jest w najlepszych rękach. Indywidualne podejście do naszych potrzeb oraz nowoczesne rozwiązania technologiczne, które zaproponowali, przyniosły niesamowite efekty. Gorąco polecam ich usługi!\"',
    },
    {
        id: 3,
        description: '\"Współpraca z Nethos była strzałem w dziesiątkę! Ich doświadczony zespół nie tylko spełnił nasze oczekiwania, ale i znacznie je przewyższył. Dzięki nim, nasza firma zyskała nowoczesne narzędzia, które przyczyniły się do naszego wzrostu.\"',
    },
    {
        id: 4,
        description: '\"Nethos to synonim innowacji i jakości. Od początku do końca mogliśmy liczyć na ich wsparcie, a dostarczone rozwiązania były idealnie dopasowane do naszych potrzeb. To partner, na którym można polegać!\"',
    },
];

const Opinions = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    return (
        <section className="services">
            <div className="container">
                <div className="section-title-green">
                    <h2>Poznaj zadowolonych klientów Nethos!</h2>
                </div>
            </div>
            <div className='container'>
                <p>Mamy za sobą już ponad 9 lat doświadczenia oraz więcej niż 50
                    przeprowadzanych projektów!</p>
            </div>
            <div className="slider-container">
                <div
                    className="slider"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`slide-opinions ${index === currentSlide ? 'active' : ''}`}
                        >
                            <div className="text">
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='container'>
                <button className="contact-button">DOŁĄCZ DO NICH JUŻ DZIŚ</button>
            </div>
        </section>
    );
};

export default Opinions;

