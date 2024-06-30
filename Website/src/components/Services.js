import React, { useEffect } from 'react';
import './Services.css';
import img from './images/service0.jpg';
import img1 from './images/service-1.png';
import img2 from './images/service-2.png';
import img3 from './images/service-3.png';
import img4 from './images/service-4.png';
import img5 from './images/service-5.png';

const Services = () => {

  useEffect(() => {
    function truncateText() {
      const cardTextElements = document.querySelectorAll('.card-text');
      cardTextElements.forEach(element => {
        const fullText = element.getAttribute('data-full-text');
        if (!fullText) {
          element.setAttribute('data-full-text', element.innerText);
        }
        const text = element.getAttribute('data-full-text');
        if (text) {
          const words = text.split(' ');
          if (window.innerWidth <= 600 && words.length > 10) {
            element.innerText = words.slice(0, 10).join(' ') + '...';
          } else if (window.innerWidth > 600) {
            element.innerText = text;
          }
        }
      });
    }

    truncateText();
    window.addEventListener('resize', truncateText);

    return () => {
      window.removeEventListener('resize', truncateText);
    };
  }, []);

  const scrollToContact = (event) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const elementPosition = contactSection.offsetTop;
      window.scrollTo({
        top: elementPosition - 75,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <h1 className='services-head' id='services'>Services</h1>
      <div className='services'>
        <div className="card-services">
          <img src={img1} className="card-img-top" alt="Portfolio Websites" />
          <div className="card-body">
            <h5 className="card-title">Portfolio Websites</h5>
            <p className="card-text">Designed for artists, photographers, designers, and creative professionals to showcase their work.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </div>
        <div className="card-services">
          <img src={img2} className="card-img-top" alt="Business Websites" />
          <div className="card-body">
            <h5 className="card-title">Business Websites</h5>
            <p className="card-text">Professional sites to showcase services and contact info, enhancing online presence.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </div>
        <div className="card-services">
          <img src={img3} className="card-img-top" alt="Business App" />
          <div className="card-body">
            <h5 className="card-title">Business App</h5>
            <p className="card-text">Boost productivity with our app's task tracking, expense monitoring, CRM, and inventory management.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </div>
        <div className="card-services">
          <img src={img4} className="card-img-top" alt="Appointment Websites" />
          <div className="card-body">
            <h5 className="card-title">Appointment Websites</h5>
            <p className="card-text">Easy-to-use systems for scheduling appointments and reservations.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </div>
        <div className="card-services">
          <img src={img5} className="card-img-top" alt="College Projects" />
          <div className="card-body">
            <h5 className="card-title">College Projects</h5>
            <p className="card-text">Discover fun and educational projects that help you learn new things and spark creative ideas.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </div>
        <div className="card-services">
          <img src={img} className="card-img-top" alt="Card title" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" className="btn btn-primary sc-btn" onClick={scrollToContact}>Know More</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
