import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

const RegularMenuDrawer = ({ isOpen, onClose }) => {
  const [hoveredPizza, setHoveredPizza] = useState(null);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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
      loadingToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-woodbrown-600 text-white px-6 py-3 rounded-lg shadow-lg z-[9999999]';
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
        successToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-[9999999]';
        successToast.textContent = 'PDF download started!';
        document.body.appendChild(successToast);
        setTimeout(() => {
          document.body.removeChild(successToast);
        }, 2000);
      }, 500);
    } catch (error) {
      console.error('Error downloading PDF:', error);
      const errorToast = document.createElement('div');
      errorToast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-[9999999]';
      errorToast.textContent = 'Error downloading PDF. Please try again.';
      document.body.appendChild(errorToast);
      setTimeout(() => {
        document.body.removeChild(errorToast);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999998] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-auto md:max-w-2xl bg-white shadow-2xl z-[999999] transform transition-transform duration-300 ease-in-out overflow-hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-woodbrown-600 to-woodbrown-700 text-white p-6 flex items-center justify-between shadow-lg">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif italic mb-1">
              REGULAR MENU
            </h2>
            <p className="text-beigelight-200 text-sm md:text-base">
              9 Inches - Handcrafted Pizzas Made to Order
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6 md:p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-woodbrown-800 mb-2 font-serif italic">
                PIZZA MASTER & THE SLICE
              </h3>
              <div className="w-32 h-1 bg-woodbrown-600 mx-auto mb-4"></div>
              <h4 className="text-xl font-semibold text-woodbrown-700 mb-2">
                REGULAR MENU (9 INCHES)
              </h4>
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

        {/* Download Button at Bottom */}
        <div className="border-t-2 border-woodbrown-200 bg-woodbrown-50 p-6">
          <button
            onClick={downloadMenuAsPDF}
            className="w-full bg-gradient-to-r from-woodbrown-600 to-woodbrown-700 hover:from-woodbrown-700 hover:to-woodbrown-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Download className="w-5 h-5" />
            <span>Download Menu as PDF</span>
          </button>
        </div>
      </div>

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
    </>
  );
};

export default RegularMenuDrawer;

