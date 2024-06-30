import React, { useState, useEffect } from 'react';
import './Navbar.css';

const scrollToSection = (id, event, setActiveSection) => {
  event.preventDefault();
  setActiveSection(id);
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.offsetTop;
    window.scrollTo({
      top: elementPosition - 75,
      behavior: 'smooth',
    });
  }
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'services', 'contact'];
    const scrollPosition = window.scrollY + 75;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const[collapse, setCollapse] = useState(true)
  const handleNavCollapse = () => setCollapse(!collapse);

  return (
    <>
      <nav className="d-flex navbar navbar-expand-lg fixed-top bg-body-tertiary card shadow-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand ml" href="/#" onClick={(e) => scrollToSection('home', e, setActiveSection)}>Logo</a>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!collapse} aria-label="Toggle navigation" onClick={handleNavCollapse}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse nav-flex mr" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} aria-current="page" href="#" onClick={(e) => scrollToSection('home', e, setActiveSection)}>Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} href="#" onClick={(e) => scrollToSection('about', e, setActiveSection)}>About Us</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'services' ? 'active' : ''}`} href="#" onClick={(e) => scrollToSection('services', e, setActiveSection)}>Services</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} href="#" onClick={(e) => scrollToSection('contact', e, setActiveSection)}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
