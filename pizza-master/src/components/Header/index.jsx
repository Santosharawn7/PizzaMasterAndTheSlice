import { useState } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Header = ({ navItems, activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-beigelight-300 hover:text-beigelight-100"
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
      </div>
    </header>
  );
};

export default Header;