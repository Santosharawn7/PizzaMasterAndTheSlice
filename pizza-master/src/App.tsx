import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Users, Calendar, MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'catering', label: 'CATERING' },
    { id: 'services', label: 'SERVICES' },
    { id: 'reviews', label: 'REVIEWS' },
    { id: 'story', label: 'OUR STORY' },
    { id: 'masterclass', label: 'MASTERCLASS' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
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
    <div className="min-h-screen bg-beigelight-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-woodbrown-800/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-beigelight-100">Pizza Master</h1>
              <p className="text-xs text-beigelight-300">The Slice</p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium hover:text-beigelight-200 transition-colors ${
                    activeSection === item.id ? 'text-beigelight-100 border-b-2 border-beigelight-300' : 'text-beigelight-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <Instagram className="w-5 h-5 text-beigelight-300 hover:text-beigelight-100 cursor-pointer" />
              <Facebook className="w-5 h-5 text-beigelight-300 hover:text-beigelight-100 cursor-pointer" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-beigelight-300 hover:text-beigelight-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-woodbrown-900 border-t border-woodbrown-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-beigelight-300 hover:text-beigelight-100 hover:bg-woodbrown-700 rounded-md"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.7), rgba(139, 69, 19, 0.7)), url('http://fornopiombo.com/cdn/shop/articles/The-Best-Pizza-Dough-Recipe-for-A-Wood-Fired-Pizza-Oven.jpg?v=1650287947')`
          }}
        />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-beigelight-50 mb-4 font-serif italic">
            Buon Appetito!
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-beigelight-100 mb-6">
            MOBILE PIZZA CATERING
          </h3>
          <h4 className="text-2xl md:text-3xl font-bold text-beigelight-100 mb-8">
            NATIONWIDE • WOOD-FIRED • THE SLICE
          </h4>
          <p className="text-lg md:text-xl text-beigelight-200 mb-8 max-w-2xl mx-auto">
            We'll bring the wood-fired pizza truck to you! Book our mobile pizza catering service for unforgettable events
          </p>
          <button
            onClick={() => scrollToSection('catering')}
            className="bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            CATERING PACKAGES
          </button>
        </div>
      </section>

      {/* Catering Occasions Section */}
      <section id="catering" className="py-16 bg-beigelight-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-woodbrown-800 mb-8">
            CATERING FOR ALL OCCASIONS
          </h2>
          <p className="text-lg text-woodbrown-700 mb-12 max-w-4xl mx-auto">
            WEDDING | ENGAGEMENT | BIRTHDAY | CORPORATE | HENS / BRIDAL SHOWER | REUNION | CHRISTENING | CHRISTMAS | YEAR-END | ANNIVERSARY | GENDER REVEAL | SALE EVENTS & MORE
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://static-content.owner.com/funnel/images/df06b120-0c9e-42e8-923a-089673f22073?v=6421924657"
                alt="Mobile Pizza Catering"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="text-left">
              <h3 className="text-3xl font-bold text-woodbrown-800 mb-6">
                MOBILE PIZZA CATERING
              </h3>
              <p className="text-woodbrown-700 mb-4">
                BIRTHDAY | WEDDING | ENGAGEMENT | KIDS' PARTY | ANNIVERSARY | HENS PARTY | CASUAL GATHERING | CORPORATE | BAPTISM | POP UPS AND MORE
              </p>
              <p className="text-woodbrown-600 mb-6 font-medium italic">
                We cater within a 200km radius nationwide with our state-of-the-art wood-fired ovens
              </p>
              <div className="space-y-3">
                <button className="block w-full bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-3 px-6 rounded-lg transition-colors">
                  BOOK FOR EVENTS
                </button>
                <button className="block w-full bg-woodbrown-500 hover:bg-woodbrown-600 text-beigelight-50 font-bold py-3 px-6 rounded-lg transition-colors">
                  GET QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-woodbrown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-woodbrown-800 mb-6">
                A VERSATILE PIZZA CATERING SET UP FOR ANY EVENT SPACE THAT YOU HAVE
              </h2>
              <p className="text-woodbrown-700 mb-6">
                Our mobile wood-fired pizza ovens can adapt to any venue, from intimate backyard gatherings to large corporate events. We bring the authentic Italian experience directly to your location.
              </p>
              <button className="bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-3 px-6 rounded-lg transition-colors">
                KNOW MORE
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Pizza Truck Setup"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mobile Pizza Oven"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Event Catering"
                className="rounded-lg shadow-lg col-span-2"
              />
            </div>
          </div>

          <div className="bg-beigelight-200 rounded-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-woodbrown-800 mb-6">
              What people love about us
            </h3>
            <p className="text-woodbrown-700 mb-8 max-w-4xl mx-auto">
              We offer 12 flavors of wood-fired pizzas to choose from in our Unlimited Pizza Packages, and the option to upgrade to enjoy 3 more premium flavors. We can also cater to people with dietary restrictions such as vegan, vegetarian, and even gluten-free. We also offer appetizers and Italian cuisine staples!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <img
                src="https://www.theperfectloaf.com/wp-content/uploads/2022/04/theperfectloaf_wood_fired_sourdough_pizza_dough_recipe-21.jpg"
                alt="Pizza 1"
                className="rounded-lg shadow-md w-full h-32 object-cover"
              />
              <img
                src="http://cdn2.hubspot.net/hubfs/701707/Blog_Images/Wood-Fired-Pizza.jpg"
                alt="Pizza 2"
                className="rounded-lg shadow-md w-full h-32 object-cover"
              />
              <img
                src="https://www.akcrust.com/hubfs/Blog_Images/Wood-Fired-Oven.jpg"
                alt="Pizza 3"
                className="rounded-lg shadow-md w-full h-32 object-cover"
              />
              <img
                src="http://www.love-logs.com/cdn/shop/articles/montelini-pizza-oven.jpg?v=1723470777"
                alt="Pizza 4"
                className="rounded-lg shadow-md w-full h-32 object-cover"
              />
              <img
                src="https://www.fornobravo.com/wp-content/uploads/2017/03/vesuvio110-customer-white-tile_fire_front_2020-Photo-Contest.jpeg"
                alt="Pizza 5"
                className="rounded-lg shadow-md w-full h-32 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-beigelight-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
            Reviews
          </h2>
          <h3 className="text-2xl font-bold text-woodbrown-700 mb-12">
            WHAT OUR CUSTOMERS SAY ABOUT US
          </h3>

          <div className="flex items-center justify-center mb-8">
            <span className="text-2xl font-bold text-woodbrown-800 mr-2">5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={`rating-${i}`} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-woodbrown-600 ml-2">(238)</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium text-woodbrown-800">Marco Stevens</p>
                  <p className="text-sm text-woodbrown-600">2 hours ago</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={`review-stars-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-woodbrown-700 text-left">
                Outstanding wood-fired pizzas! The mobile oven brought authentic Italian flavors right to our backyard. Highly recommended!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium text-woodbrown-800">Sarah Johnson</p>
                  <p className="text-sm text-woodbrown-600">1 day ago</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={`review-stars-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-woodbrown-700 text-left">
                Best mobile pizza catering service! The team was professional and the pizza was incredible. Perfect for our wedding!
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold">
                  D
                </div>
                <div className="ml-3 text-left">
                  <p className="font-medium text-woodbrown-800">David Chen</p>
                  <p className="text-sm text-woodbrown-600">3 days ago</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={`review-stars-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-woodbrown-700 text-left">
                Amazing experience! Fresh ingredients, authentic taste, and the wood-fired oven adds that special smoky flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up Event Section */}
      <section className="py-16 bg-woodbrown-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-beigelight-50 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-medium text-woodbrown-700 mb-2">POP UP EVENT</h3>
            <h2 className="text-3xl font-bold text-woodbrown-800 mb-4">
              SATURDAY, DECEMBER 30TH<br />
              SUNDAY, DECEMBER 31ST
            </h2>
            <p className="text-xl text-woodbrown-700 mb-4">10 AM - 8 PM</p>
            <h4 className="text-2xl font-bold text-woodbrown-800 mb-6 font-serif italic">
              Central Park Pavilion
            </h4>
            <p className="text-woodbrown-600 mb-6">
              Join us for a special weekend of wood-fired pizza making! Try our pizzas before booking for your next event.
            </p>
            <button className="bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-3 px-6 rounded-lg transition-colors">
              Book a Spot
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-16 bg-beigelight-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-woodbrown-800 mb-12 font-serif italic">
            Our Story
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Pizza Master Chef"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <p className="text-lg text-woodbrown-700 mb-6">
                <strong className="text-woodbrown-800">Giuseppe</strong>, a skilled pizza chef from <strong className="text-woodbrown-800">Naples, Italy</strong>, brought his family's traditional wood-fired pizza recipes to create <strong className="text-woodbrown-800">Pizza Master</strong>.
              </p>
              <p className="text-lg text-woodbrown-700 mb-6">
                He gained recognition by winning awards like first place at the <strong className="text-woodbrown-800">International Pizza Championship</strong> and earned the title of <strong className="text-woodbrown-800">Master Pizza Artisan</strong>.
              </p>
              <p className="text-lg text-woodbrown-700 mb-6">
                Driven by his <em className="text-woodbrown-800">love for authentic pizza</em>, Giuseppe started Pizza Master's mobile wood-fired pizza catering business.
              </p>
              <p className="text-lg text-woodbrown-700">
                Pizza Master's catering service quickly became known as <strong className="text-woodbrown-800">the best</strong> mobile pizza experience nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Masterclass Section */}
      <section id="masterclass" className="py-16 bg-woodbrown-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
            Become a Pizza Pro:
          </h2>
          <h3 className="text-2xl font-bold text-woodbrown-700 mb-12">
            Join our Pizza Masterclass, Online or In-Person
          </h3>

          <p className="text-lg text-woodbrown-700 mb-8 max-w-4xl mx-auto">
            Ready to become a pizza pro yourself? Join our <strong>Pizza Masterclass</strong> and become a true pizza chef. With incredible wood-fired ovens, you'll learn the art of cooking Neapolitan-style pizzas in record time. Our masterclass will guide you step by step to achieving the ideal balance of textures and flavors that make authentic pizza so special.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <button className="bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-4 px-6 rounded-lg transition-colors">
              IN-PERSON CLASSES
            </button>
            <button className="bg-woodbrown-500 hover:bg-woodbrown-600 text-beigelight-50 font-bold py-4 px-6 rounded-lg transition-colors">
              ONLINE COURSE
            </button>
            <button className="bg-woodbrown-400 hover:bg-woodbrown-500 text-beigelight-50 font-bold py-4 px-6 rounded-lg transition-colors">
              PRIVATE LESSONS
            </button>
          </div>

          <div className="mt-12">
            <img
              src="https://www.fontanaforniusa.com/cdn/shop/articles/wood-fired-pizza-oven-from-fontana-forni.jpg?v=1713944481"
              alt="Pizza Masterclass"
              className="rounded-lg shadow-xl w-full max-w-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Footer/Contact Section */}
      <footer id="contact" className="bg-woodbrown-800 text-beigelight-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cg fill='%23F5F5DC'%3E%3Cpath d='M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 70c-16.5 0-30-13.5-30-30s13.5-30 30-30 30 13.5 30 30-13.5 30-30 30z'/%3E%3Cpath d='M35 35h30v30H35z'/%3E%3C/g%3E%3C/svg%3E"
                  alt="Pizza Master Logo"
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-2xl font-bold">Pizza Master</h3>
                  <p className="text-beigelight-300">The Slice</p>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4">LINKS</h4>
              <div className="space-y-2 mb-8">
                {navItems.slice(1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block text-beigelight-300 hover:text-beigelight-100 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">CONTACT US</h4>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-beigelight-300" />
                  <span>hello@pizzamaster.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-beigelight-300" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-beigelight-300" />
                  <span>Serving nationwide with 200km radius</span>
                </div>
              </div>

              <div className="flex space-x-4 mb-8">
                <Instagram className="w-6 h-6 text-beigelight-300 hover:text-beigelight-100 cursor-pointer" />
                <Facebook className="w-6 h-6 text-beigelight-300 hover:text-beigelight-100 cursor-pointer" />
              </div>

              <div className="space-y-2">
                <button className="block w-full bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-3 px-6 rounded-lg transition-colors mb-2">
                  VIEW OUR SETUP
                </button>
                <button className="block w-full bg-woodbrown-500 hover:bg-woodbrown-600 text-beigelight-50 font-bold py-3 px-6 rounded-lg transition-colors">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-woodbrown-700 mt-12 pt-8 text-center">
            <p className="text-beigelight-400">
              Copyright © 2025 Pizza Master | All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
