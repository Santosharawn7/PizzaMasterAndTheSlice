import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const Menu = () => {
  const location = useLocation();
  const [expandedPackage, setExpandedPackage] = useState('classic'); // Classic opens by default
  const [selectedPizza, setSelectedPizza] = useState(null); // For modal
  const [hoveredPizza, setHoveredPizza] = useState(null); // For hover image

  // GSAP Scroll Animation refs
  const heroRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.1 });
  const packagesRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });
  const pizzaDetailsRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });
  const readyToOrderRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });

  // Navigation items are now handled by the centralized Navigation component

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const togglePackage = (packageId) => {
    setExpandedPackage(expandedPackage === packageId ? null : packageId);
  };

  // Handle URL hash navigation
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['deluxe', 'supreme', 'classic'].includes(hash)) {
      setExpandedPackage(hash);
    }
  }, [location.hash]);

  // Pizza packages
  const pizzaPackages = [
    {
      id: "classic",
      name: "THE CLASSIC",
      price: "$29.99",
      perPerson: true,
      description: "The Classic includes unlimited selection of pizzas, and dessert. The package is available for a duration of 2 hours and requires a minimum of 30 guests.",
      deliveryInfo: "We also accept delivery and takeaway orders with a minimum of 25 pizzas. Each pizza is priced at $25.",
      minGuests: 30,
      duration: "2 hours",
      includes: ["Unlimited pizzas", "Dessert"],
      pizzas: [
        "Garlic Pizza", "Margherita", "The Meat feast", "Pepperoni with spicy honey", 
        "Hawaiian pizza", "Vegetarian", "Nutella pizza"
      ]
    },
    {
      id: "supreme",
      name: "THE SUPREME",
      price: "$35.99",
      perPerson: true,
      description: "The Supreme includes unlimited soft drinks, a selection of premium pizzas, and dessert. The package is available for a duration of 2 hours and requires a minimum of 30 guests.",
      deliveryInfo: "We also accept delivery and takeaway orders with a minimum of 25 pizzas. Each pizza is priced at $25.",
      minGuests: 30,
      duration: "2 hours",
      includes: ["Unlimited soft drinks", "Premium pizzas", "Dessert"],
      pizzas: [
        "Garlic Pizza", "Margherita", "The Meat feast", "Pepperoni with spicy honey", 
        "Hawaiian pizza", "Vegetarian", "Truffle mushroom", "Vegan pizza", 
        "Capricciosa", "Nutella pizza"
      ]
    },
    {
      id: "deluxe",
      name: "THE DELUXE",
      price: "$45.99",
      perPerson: true,
      description: "The Deluxe includes unlimited soft drinks, a selection of premium pizzas, an antipasto platter, and dessert. The package is available for a duration of 2 hours and requires a minimum of 40 guests.",
      deliveryInfo: "We also accept delivery and takeaway orders with a minimum of 25 pizzas. Each pizza is priced at $25.",
      minGuests: 40,
      duration: "2 hours",
      includes: ["Unlimited soft drinks", "Premium pizzas", "Antipasto platter", "Dessert"],
      pizzas: [
        "Garlic Pizza", "Margherita", "The Meat feast", "Pepperoni with spicy honey", 
        "Pizzamaster Special", "Hawaiian pizza", "Vegetarian", "Truffle mushroom", 
        "Vegan pizza", "Capricciosa", "Nutella pizza"
      ],
      extras: ["Antipasto platters: A selection of locally cured meats, pickled cucumbers, artisan crackers, handmade pita bread with assorted dips, dried fruits, and a variety of cheeses."]
    }
  ];

  // Individual pizza details with images
  const pizzaDetails = {
    "Garlic Pizza": {
      description: "Fresh garlic sauce, fior di latte, and oregano.",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    "Margherita": {
      description: "San Marzano tomato sauce, Pecorino Romano, fior di latte mozzarella, fresh basil, and a drizzle of extra virgin olive oil.",
      image: "https://i.imgur.com/0SHQFSh.jpeg"
    },
    "The Meat feast": {
      description: "Rich BBQ sauce (or traditional tomato base), layered with creamy fior di latte mozzarella, spicy pepperoni, succulent ham, and tender roasted chicken.",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    "Pepperoni with spicy honey": {
      description: "Napoli sauce, fior di latte mozzarella, spicy pepperoni, finished with a drizzle of hot honey",
      image: "https://i.imgur.com/sb0ilwL.jpeg"
    },
    "Pizzamaster Special": {
      description: "Creamy fior di latte, slices of mortadella, topped with fresh buffalo mozzarella and finished with pistachio pesto and basil.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    "Hawaiian pizza": {
      description: "San Marzano tomato sauce, fior di latte mozzarella, ham and pineapple.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    "Vegetarian": {
      description: "San Marzano tomato, olives, mushroom, onion, fior di latte, basil",
      image: "https://i.imgur.com/tte0yOz.jpeg"
    },
    "Truffle mushroom": {
      description: "White base, fior di latte, mushroom, oregano, truffle oil, pecorino cheese",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    "Vegan pizza": {
      description: "San Marzano tomato, olives, vegan cheese, mushroom, onion, extra virgin olive oil.",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    "Capricciosa": {
      description: "San Marzano tomato, fior di latte, mushroom, ham and olives.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    "Nutella pizza": {
      description: "With strawberry and chocolate sauce.",
      image: "https://i.imgur.com/T6MW7d9.jpeg"
    }
  };

  // Special options
  const specialOptions = [
    { name: "Gluten free pizza", price: "+$5" },
    { name: "Dairy free cheese", price: "+$2" }
  ];

  const categories = ["All", "Classic", "Specialty", "Vegetarian"];

  return (
    <div className="min-h-screen light-wood-texture">
      <Header 
        pageType="menu" 
        activeSection="menu" 
        scrollToSection={scrollToSection} 
      />
      
      {/* Menu Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 relative overflow-hidden min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/JR7WOsM.jpeg"
            alt="Our Pizzas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-beigelight-100 mb-6 font-serif italic drop-shadow-lg">
              Our Complete Menu
            </h1>
            <p className="text-xl md:text-2xl text-beigelight-200 max-w-3xl mx-auto drop-shadow-md">
              Explore our full selection of handcrafted pizzas, each made with premium ingredients and traditional wood-fired techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Pizza Packages */}
      <section ref={packagesRef} className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 relative" style={{ zIndex: 1 }}>
            {pizzaPackages.map((pkg) => {
              const isExpanded = expandedPackage === pkg.id;
              return (
                <div key={pkg.id} className={`bg-transparent rounded-xl transition-all duration-500 transform ${
                  isExpanded ? 'shadow-2xl scale-105' : 'hover:shadow-xl hover:-translate-y-1'
                } relative`}>
                  {/* Clickable Header */}
                  <div 
                    className="bg-gradient-to-br from-woodbrown-600 via-woodbrown-700 to-woodbrown-800 text-white p-6 relative overflow-hidden cursor-pointer"
                    onClick={() => togglePackage(pkg.id)}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 right-4 w-20 h-20 border-2 border-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold">{pkg.name}</h3>
                        <div className="flex items-center space-x-3">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                            <span className="text-xs font-medium">Min {pkg.minGuests}</span>
                          </div>
                          {/* Expand/Collapse Icon */}
                          <div className={`w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}>
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-beigelight-100 mb-3">
                        {pkg.price} {pkg.perPerson && <span className="text-lg font-normal">per person</span>}
                      </div>
                      <p className="text-beigelight-200 text-sm leading-relaxed">{pkg.description}</p>
                    </div>
                  </div>
                
                  {/* Collapsible Content */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-6 pt-0">
                      {/* Package Details */}
                      <div className="mb-6">
                        <h4 className="font-bold text-woodbrown-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-woodbrown-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                          </svg>
                          Package Includes
                        </h4>
                        <ul className="space-y-3">
                          {pkg.includes.map((item, index) => (
                            <li key={index} className="flex items-center text-white backdrop-blur-sm bg-woodbrown-800/40 hover:bg-woodbrown-800/50 border border-woodbrown-600/40 hover:border-woodbrown-600/60 rounded-lg p-3 transition-all duration-300">
                              <div className="w-6 h-6 bg-woodbrown-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                </svg>
                              </div>
                              <span className="font-medium text-white">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Requirements */}
                      <div className="mb-6 p-4 backdrop-blur-sm bg-woodbrown-800/40 border border-woodbrown-600/40 rounded-xl">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-beigelight-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            <div>
                              <span className="font-semibold text-white">Min Guests:</span>
                              <span className="text-beigelight-200 ml-1">{pkg.minGuests}</span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-beigelight-200 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                            </svg>
                            <div>
                              <span className="font-semibold text-white">Duration:</span>
                              <span className="text-beigelight-200 ml-1">{pkg.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pizza List */}
                      <div className="mb-6">
                        <h4 className="font-bold text-woodbrown-800 mb-4 flex items-center">
                          <svg className="w-5 h-5 text-woodbrown-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                          </svg>
                          Available Pizzas
                          <span className="ml-2 bg-woodbrown-600/50 text-white text-xs px-2 py-1 rounded-full">
                            {pkg.pizzas.length} varieties
                          </span>
                          <span className="md:hidden ml-2 text-xs text-woodbrown-600 font-normal">(Tap to view details)</span>
                        </h4>
                        <div className="grid grid-cols-1 gap-3">
                          {pkg.pizzas.map((pizza, index) => (
                            <div 
                              key={index} 
                              className="group relative text-sm text-white border-l-2 border-woodbrown-300 pl-3 py-2 rounded-r-lg transition-all duration-300 cursor-pointer backdrop-blur-sm bg-woodbrown-800/40 md:hover:bg-woodbrown-800/50 border border-woodbrown-600/40 md:hover:border-woodbrown-600/60 active:bg-woodbrown-800/60 active:border-woodbrown-600/80 active:shadow-lg active:shadow-woodbrown-600/30 active:scale-[0.98] md:active:scale-100 md:shadow-none shadow-lg shadow-woodbrown-600/20"
                              style={{ zIndex: 1 }}
                              onClick={() => setSelectedPizza({ name: pizza, ...pizzaDetails[pizza] })}
                              onMouseEnter={(e) => {
                                // Only trigger hover on desktop (md and up)
                                if (window.innerWidth >= 768) {
                                  setHoveredPizza({ name: pizza, ...pizzaDetails[pizza] });
                                }
                              }}
                              onMouseLeave={(e) => {
                                // Only trigger hover on desktop (md and up)
                                if (window.innerWidth >= 768) {
                                  setHoveredPizza(null);
                                }
                              }}
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-white md:group-hover:text-beigelight-100 transition-colors flex-1">{pizza}</span>
                                {/* Click indicator for mobile */}
                                <div className="md:hidden flex items-center ml-3">
                                  <svg className="w-4 h-4 text-beigelight-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                  </svg>
                                </div>
                              </div>
                              {pizzaDetails[pizza] && (
                                <div className="text-xs text-beigelight-200 mt-1 md:group-hover:text-beigelight-100 transition-colors">
                                  {pizzaDetails[pizza].description}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Extras for Deluxe */}
                      {pkg.extras && (
                        <div className="mb-6">
                          <h4 className="font-bold text-woodbrown-800 mb-3">Extras:</h4>
                          {pkg.extras.map((extra, index) => (
                            <p key={index} className="text-sm text-woodbrown-600 italic">{extra}</p>
                          ))}
                        </div>
                      )}

                      {/* Delivery Info */}
                      <div className="mb-6 p-4 backdrop-blur-sm bg-blue-500/10 border border-blue-200/30 rounded-xl">
                        <div className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                          </svg>
                          <p className="text-sm text-blue-800 leading-relaxed">{pkg.deliveryInfo}</p>
                        </div>
                      </div>

                      {/* Book Button - Commented out until booking functionality is implemented */}
                      {/* <button className="w-full bg-gradient-to-r from-woodbrown-600 to-woodbrown-700 hover:from-woodbrown-700 hover:to-woodbrown-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                        <span>BOOK {pkg.name}</span>
                      </button> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Special Options */}
      <section className="py-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-beigelight-100 mb-4">
              Special Dietary Options
            </h2>
            <p className="text-xl text-beigelight-200">
              We accommodate all dietary requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {specialOptions.map((option, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-beigelight-100 mb-2">{option.name}</h3>
                <p className="text-2xl font-bold text-beigelight-200">{option.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section ref={readyToOrderRef} className="py-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-beigelight-100 mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-beigelight-200 mb-8 max-w-2xl mx-auto">
            Contact us to book our mobile pizza catering service for your next event!
          </p>
          {/* <button className="bg-beigelight-100 hover:bg-beigelight-200 text-woodbrown-800 font-bold py-3 px-8 rounded-lg transition-colors">
            BOOK NOW
          </button> */}
        </div>
      </section>

      <Footer 
        pageType="menu" 
        scrollToSection={scrollToSection} 
      />
      <ChatWidget />

      {/* Hover Image - Rendered Outside Normal Flow - Desktop Only */}
      {hoveredPizza && (
        <div className="hidden md:flex fixed inset-0 pointer-events-none z-[9999999] items-center justify-center">
          <div className="w-128 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 transition-all duration-300">
            <div className="relative w-full h-full rounded-lg overflow-hidden">
              <img
                src={hoveredPizza.image}
                alt={hoveredPizza.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h5 className="text-white font-bold text-lg mb-2">{hoveredPizza.name}</h5>
                <p className="text-white/90 text-sm leading-relaxed">
                  {hoveredPizza.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pizza Modal */}
      {selectedPizza && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelectedPizza(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPizza(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Pizza Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={selectedPizza.image}
                alt={selectedPizza.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Pizza Name Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {selectedPizza.name}
                </h2>
                <div className="flex items-center space-x-4">
                  <span className="bg-woodbrown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedPizza.price}
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {selectedPizza.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Pizza Details */}
            <div className="p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-woodbrown-800 mb-3">Description</h3>
                <p className="text-woodbrown-600 leading-relaxed">
                  {selectedPizza.description}
                </p>
              </div>

              {/* Ingredients */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-woodbrown-800 mb-3">Key Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPizza.description.split(',').map((ingredient, index) => (
                    <span 
                      key={index}
                      className="bg-woodbrown-100 text-woodbrown-800 px-3 py-1 rounded-full text-sm"
                    >
                      {ingredient.trim()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-woodbrown-600 hover:bg-woodbrown-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Add to Order
                </button>
                <button 
                  onClick={() => setSelectedPizza(null)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-woodbrown-800 font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
