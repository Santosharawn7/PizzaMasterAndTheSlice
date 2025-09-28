import { useState } from 'react';
import { Menu, X, Instagram, Facebook, Search } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

// Searchable content for Pizza Master & The Slice
const searchData = [
  // Navigation pages
  ...[
    { type: "Page", label: 'Home', link: '/', description: 'Welcome to Pizza Master & The Slice' },
    { type: "Page", label: 'About', link: '/about', description: 'Learn about Chef Ashish and our story' },
    { type: "Page", label: 'Menu', link: '/menu', description: 'View our complete pizza menu' },
    { type: "Page", label: 'Catering', link: '/#catering', description: 'Mobile pizza catering services' },
    { type: "Page", label: 'Services', link: '/#services', description: 'Our pizza services and offerings' },
    { type: "Page", label: 'Reviews', link: '/#reviews', description: 'Customer reviews and testimonials' },
    { type: "Page", label: 'Our Story', link: '/#story', description: 'Chef Ashish Silwal\'s journey' },
    { type: "Page", label: 'Contact', link: '/#contact', description: 'Get in touch with us' },
  ],

  // Pizza types and menu items
  {
    type: "Pizza",
    label: "Margherita Pizza",
    description: "Classic tomato, mozzarella, and fresh basil",
    link: "/menu#margherita"
  },
  {
    type: "Pizza", 
    label: "Pepperoni Pizza",
    description: "Spicy pepperoni with mozzarella cheese",
    link: "/menu#pepperoni"
  },
  {
    type: "Pizza",
    label: "Quattro Stagioni",
    description: "Four seasons with artichokes, mushrooms, ham, and olives",
    link: "/menu#quattro-stagioni"
  },
  {
    type: "Pizza",
    label: "Capricciosa Pizza",
    description: "Artichokes, mushrooms, prosciutto, and olives",
    link: "/menu#capricciosa"
  },
  {
    type: "Pizza",
    label: "Quattro Formaggi",
    description: "Four cheese blend with mozzarella, gorgonzola, parmesan, and ricotta",
    link: "/menu#quattro-formaggi"
  },
  {
    type: "Pizza",
    label: "Vegetarian Pizza",
    description: "Fresh vegetables with mozzarella and herbs",
    link: "/menu#vegetarian"
  },
  {
    type: "Pizza",
    label: "Meat Lovers Pizza",
    description: "Pepperoni, sausage, bacon, and ham",
    link: "/menu#meat-lovers"
  },
  {
    type: "Pizza",
    label: "Hawaiian Pizza",
    description: "Ham, pineapple, and mozzarella cheese",
    link: "/menu#hawaiian"
  },
  {
    type: "Pizza",
    label: "BBQ Chicken Pizza",
    description: "Grilled chicken with BBQ sauce and red onions",
    link: "/menu#bbq-chicken"
  },
  {
    type: "Pizza",
    label: "Supreme Pizza",
    description: "Pepperoni, sausage, peppers, onions, and mushrooms",
    link: "/menu#supreme"
  },

  // Services
  {
    type: "Service",
    label: "Mobile Pizza Catering",
    description: "Wood-fired pizza truck for events and parties",
    link: "/#catering"
  },
  {
    type: "Service",
    label: "Event Catering",
    description: "Professional pizza catering for special occasions",
    link: "/#catering"
  },
  {
    type: "Service",
    label: "Wedding Catering",
    description: "Elegant pizza catering for weddings",
    link: "/#catering"
  },
  {
    type: "Service",
    label: "Corporate Events",
    description: "Pizza catering for business events and meetings",
    link: "/#catering"
  },

  // Chef and business info
  {
    type: "Chef",
    label: "Chef Ashish Silwal",
    description: "Master pizza chef from Adelaide, Australia",
    link: "/about"
  },
  {
    type: "Location",
    label: "Adelaide, Australia",
    description: "Serving the Adelaide community with authentic pizza",
    link: "/#contact"
  }
];

const Header = ({ navItems, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Search functionality
  const filtered = search.trim().length > 0
    ? searchData.filter(
        (item) =>
          item.label.toLowerCase().includes(search.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(search.toLowerCase()))
      )
    : [];

  // Close mobile menus
  const closeMobile = () => {
    setIsMenuOpen(false);
    setMobileSearchOpen(false);
    setSearchFocus(false);
  };

  // Toggle mobile search
  const toggleMobileSearch = () => {
    setIsMenuOpen(false); // Close nav if open
    setMobileSearchOpen(prev => !prev);
    if (!mobileSearchOpen) {
      // Focus on input when opening
      setTimeout(() => {
        const input = document.querySelector('#mobile-search-input');
        if (input) input.focus();
      }, 100);
    }
  };

  // Handle search result click
  const handleSearchResultClick = (item) => {
    setSearch('');
    setSearchFocus(false);
    setMobileSearchOpen(false);
    
    // Handle navigation based on link type
    if (item.link.startsWith('/#')) {
      // Scroll to section on home page
      navigate('/');
      setTimeout(() => {
        const sectionId = item.link.split('#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Navigate to page
      navigate(item.link);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-gradient text-beigelight-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="block">
              <img
                src="/PizzaMasterLogo.png"
                alt="Pizza Master & The Slice Logo"
                className="h-16 w-16 rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id ||
                (item.id === 'about' && location.pathname === '/about') ||
                (item.id === 'home' && location.pathname === '/');

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'about') navigate('/about');
                    else if (item.id === 'home') navigate('/');
                    else scrollToSection(item.id);
                  }}
                  className={`text-sm font-medium transition-colors border-b-2 ${
                    isActive
                      ? 'text-beigelight-100 border-beigelight-300'
                      : 'text-beigelight-300 border-transparent hover:text-beigelight-200'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Search and Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Desktop Search bar */}
            <div className="relative">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-md px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-beigelight-300 focus-within:bg-white/20">
                <Search className="w-4 h-4 text-beigelight-300 mr-2" />
                <input
                  type="text"
                  placeholder="Search pizzas, services..."
                  className="bg-transparent outline-none border-none w-full text-beigelight-100 placeholder-beigelight-400 text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setTimeout(() => setSearchFocus(false), 120)}
                />
              </div>
              
              {/* Desktop Dropdown results */}
              {searchFocus && search.trim().length > 0 && (
                <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-md z-50 border border-gray-200 max-h-80 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="p-4 text-gray-400 text-center">No results found.</div>
                  ) : (
                    filtered.map((item, i) => (
                      <button
                        key={item.link + i}
                        className="block w-full text-left px-4 py-3 hover:bg-woodbrown-100 transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => handleSearchResultClick(item)}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-woodbrown-800 text-sm">{item.label}</span>
                          {item.description && (
                            <span className="text-gray-600 text-xs mt-1">{item.description}</span>
                          )}
                          <span className="text-xs mt-1 text-woodbrown-600 font-medium">{item.type}</span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Social Icons */}
            <a
              href="https://www.instagram.com/pizzamaster_and_the_slice/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578603166709&mibextid=wwXIfr&rdid=HDf9JdeXFApCFRAm#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Search Icon */}
            <button
              onClick={toggleMobileSearch}
              className="p-2 text-beigelight-300 hover:text-beigelight-100 transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            {/* Hamburger */}
            <button
              onClick={() => {
                setMobileSearchOpen(false); // Close search if open
                setIsMenuOpen(prev => !prev);
              }}
              className="p-2 text-beigelight-300 hover:text-beigelight-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden rounded-b-lg shadow-lg border-t border-white/10"
               style={{
                 background:
                   'linear-gradient(180deg, rgba(74,52,42,0.95) 0%, rgba(93,64,55,0.9) 100%)',
                 backdropFilter: 'blur(6px)',
                 WebkitBackdropFilter: 'blur(6px)'
               }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'about') navigate('/about');
                    else if (item.id === 'home') navigate('/');
                    else scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-beigelight-300 hover:text-beigelight-100 hover:bg-white/5 rounded-md"
                >
                  {item.label}
                </button>
              ))}

              {/* Socials in mobile menu */}
              <div className="flex items-center gap-4 px-3 pt-2">
                <a
                  href="https://www.instagram.com/pizzamaster_and_the_slice/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61578603166709&mibextid=wwXIfr&rdid=HDf9JdeXFApCFRAm#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Search Dropdown */}
        {mobileSearchOpen && (
          <div className="md:hidden rounded-b-lg shadow-lg border-t border-white/10"
               style={{
                 background:
                   'linear-gradient(180deg, rgba(74,52,42,0.95) 0%, rgba(93,64,55,0.9) 100%)',
                 backdropFilter: 'blur(6px)',
                 WebkitBackdropFilter: 'blur(6px)'
               }}>
            <div className="px-4 py-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-md px-3 py-2 w-full focus-within:ring-2 focus-within:ring-beigelight-300 focus-within:bg-white/20">
                <Search className="w-4 h-4 text-beigelight-300 mr-2" />
                <input
                  id="mobile-search-input"
                  type="text"
                  placeholder="Search pizzas, services..."
                  className="bg-transparent outline-none border-none w-full text-beigelight-100 placeholder-beigelight-400 text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
                />
              </div>
              
              {/* Mobile Search Results */}
              {search.trim().length > 0 && (
                <div className="mt-3 bg-white rounded-md border border-gray-200 max-h-80 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="p-4 text-gray-400 text-center">No results found.</div>
                  ) : (
                    filtered.map((item, i) => (
                      <button
                        key={item.link + i}
                        className="block w-full text-left px-4 py-3 hover:bg-woodbrown-100 transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => handleSearchResultClick(item)}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-woodbrown-800 text-sm">{item.label}</span>
                          {item.description && (
                            <span className="text-gray-600 text-xs mt-1">{item.description}</span>
                          )}
                          <span className="text-xs mt-1 text-woodbrown-600 font-medium">{item.type}</span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;