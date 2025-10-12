import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Catering from '../components/Catering';
import Services from '../components/Services';
import Menu from '../components/Menu';
// import Reviews from '../components/Reviews';
import Story from '../components/Story';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { getNavigationItems } from '../components/Navigation';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation items are now handled by the centralized Navigation component

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const navItems = getNavigationItems('home');
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen light-wood-texture">
      <Header 
        pageType="home" 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <Hero />
      <Catering />
      <Services />
      <Menu />
      {/* <Reviews /> */}
      <Story />
      <Footer 
        pageType="home" 
        scrollToSection={scrollToSection} 
      />
      <ChatWidget />
    </div>
  );
};

export default Home;
