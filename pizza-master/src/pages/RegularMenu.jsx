import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Download } from 'lucide-react';

const RegularMenu = () => {
  const location = useLocation();
  const [hoveredPizza, setHoveredPizza] = useState(null);
  const menuRef = useRef(null);

  // GSAP Scroll Animation refs
  const heroRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.1 });
  const menuItemsRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Regular Menu Items (9 inches)
  const regularMenuItems = [
    {
      id: 'garlic',
      name: 'Garlic Pizza',
      price: '$17.99',
      description: 'Fresh garlic sauce, fior di latte, and oregano.',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'margherita',
      name: 'Margherita',
      price: '$19.99',
      description: 'San Marzano tomato sauce, Pecorino Romano, fior di latte mozzarella, fresh basil, and a drizzle of extra virgin olive oil.',
      image: 'https://i.imgur.com/0SHQFSh.jpeg'
    },
    {
      id: 'meat-lover',
      name: 'Pizza alla carne (Meat lover)',
      price: '$24.99',
      description: 'Rich BBQ sauce (or traditional tomato base), layered with creamy fior di latte mozzarella, spicy pepperoni, succulent ham, and tender roasted chicken.',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'pepperoni-honey',
      name: 'Pepperoni with spicy honey',
      price: '$24.99',
      description: 'Napoli sauce, fior di latte mozzarella, spicy pepperoni, finished with a drizzle of hot honey.',
      image: 'https://i.imgur.com/sb0ilwL.jpeg'
    },
    {
      id: 'hawaiian',
      name: 'Hawaiian pizza',
      price: '$23.99',
      description: 'San Marzano tomato sauce, fior di latte mozzarella, ham and pineapple.',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'funghi',
      name: 'Funghi Pizza',
      price: '$23.99',
      description: 'Napoli Sauce, fior di latte, button mushroom, Swiss mushroom, oregano, truffle oil, pecorino cheese.',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'vegan',
      name: 'Vegan pizza',
      price: '$24.99',
      description: 'San Marzano tomato, olives, vegan cheese, mushroom, onion, extra virgin olive oil.',
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'nutella',
      name: 'Nutella pizza',
      price: '$17.99',
      description: 'With strawberry and chocolate sauce.',
      image: 'https://i.imgur.com/T6MW7d9.jpeg'
    }
  ];

  // Special Options
  const specialOptions = [
    { name: 'Gluten free pizza available', price: '$5' },
    { name: 'Dairy free cheese available', price: '$2' },
    { name: 'All extra add on', price: '$3' }
  ];

  // Function to download menu as PDF from Google Drive
  const downloadMenuAsPDF = async () => {
    try {
      // Show loading state
      const loadingToast = document.createElement('div');
      loadingToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-woodbrown-600 text-white px-6 py-3 rounded-lg shadow-lg z-[999999]';
      loadingToast.textContent = 'Downloading PDF...';
      document.body.appendChild(loadingToast);

      // Google Drive PDF link
      const pdfUrl = 'https://drive.google.com/uc?export=download&id=11LPB2vtZSaEUqvb5JlCPuF6RvJDYc3U8';

      // Create a temporary anchor element to trigger download
      const link = document.createElement('a');
      link.href = pdfUrl;
      link.download = 'Pizza-Master-Regular-Menu.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Remove loading toast and show success
      setTimeout(() => {
        document.body.removeChild(loadingToast);
        const successToast = document.createElement('div');
        successToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-[999999]';
        successToast.textContent = 'PDF download started!';
        document.body.appendChild(successToast);
        setTimeout(() => {
          document.body.removeChild(successToast);
        }, 2000);
      }, 500);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      const errorToast = document.createElement('div');
      errorToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-[999999]';
      errorToast.textContent = 'Error downloading PDF. Please try again.';
      document.body.appendChild(errorToast);
      setTimeout(() => {
        document.body.removeChild(errorToast);
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen light-wood-texture">
      <Header 
        pageType="full" 
        activeSection="regular-menu" 
        scrollToSection={scrollToSection} 
      />
      
      {/* Menu Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 relative overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/JR7WOsM.jpeg"
            alt="Regular Menu"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-beigelight-100 mb-6 font-serif italic drop-shadow-lg">
              REGULAR MENU
            </h1>
            <p className="text-xl md:text-2xl text-beigelight-200 max-w-3xl mx-auto drop-shadow-md mb-6">
              9 Inches - Handcrafted Pizzas Made to Order
            </p>
            <button
              onClick={downloadMenuAsPDF}
              className="bg-gradient-to-r from-woodbrown-600 to-woodbrown-700 hover:from-woodbrown-700 hover:to-woodbrown-800 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
            >
              <Download className="w-5 h-5" />
              <span>Download Menu as PDF</span>
            </button>
          </div>
        </div>
      </section>

      {/* Regular Menu Items */}
      <section ref={menuItemsRef} className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={menuRef} className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-woodbrown-800 mb-2 font-serif italic">
                PIZZA MASTER & THE SLICE
              </h2>
              <div className="w-32 h-1 bg-woodbrown-600 mx-auto mb-4"></div>
              <h3 className="text-2xl font-semibold text-woodbrown-700 mb-2">
                REGULAR MENU (9 INCHES)
              </h3>
            </div>

            {/* Menu Items Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {regularMenuItems.map((pizza) => (
                <div
                  key={pizza.id}
                  className="group relative border-2 border-woodbrown-200 rounded-xl p-4 hover:border-woodbrown-400 hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
                  onMouseEnter={() => {
                    if (window.innerWidth >= 768) {
                      setHoveredPizza(pizza);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 768) {
                      setHoveredPizza(null);
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-woodbrown-800 flex-1 group-hover:text-woodbrown-600 transition-colors">
                      {pizza.name}
                    </h4>
                    <span className="text-xl font-bold text-woodbrown-600 ml-4 whitespace-nowrap">
                      {pizza.price}
                    </span>
                  </div>
                  <p className="text-woodbrown-600 text-sm leading-relaxed">
                    {pizza.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Special Options */}
            <div className="border-t-2 border-woodbrown-200 pt-6 mt-8">
              <h3 className="text-xl font-bold text-woodbrown-800 mb-4 text-center">
                Special Options
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {specialOptions.map((option, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-woodbrown-50 rounded-lg border border-woodbrown-200"
                  >
                    <p className="text-sm font-medium text-woodbrown-700 mb-1">
                      {option.name}
                    </p>
                    <p className="text-lg font-bold text-woodbrown-600">
                      {option.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="text-center mt-8 pt-6 border-t-2 border-woodbrown-200">
              <p className="text-sm text-woodbrown-600">
                © 2025 Pizza Master & The Slice. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-beigelight-100 mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-beigelight-200 mb-8 max-w-2xl mx-auto">
            Contact us to place your order or book our mobile pizza catering service for your next event!
          </p>
        </div>
      </section>

      <Footer 
        pageType="full" 
        scrollToSection={scrollToSection} 
      />
      <ChatWidget />

      {/* Hover Image - Desktop Only */}
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
                <p className="text-white text-sm mb-2 font-semibold">{hoveredPizza.price}</p>
                <p className="text-white/90 text-sm leading-relaxed">
                  {hoveredPizza.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegularMenu;

