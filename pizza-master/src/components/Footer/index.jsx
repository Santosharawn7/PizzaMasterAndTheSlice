import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = ({ navItems, scrollToSection }) => {
  return (
    <footer id="contact" className="footer-gradient text-beigelight-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <img
                src="/PizzaMasterLogo.png"
                alt="Pizza Master & The Slice Logo"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-beigelight-100">Pizza Master</h3>
                <p className="text-beigelight-300">& The Slice</p>
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
                <span>Adelaide, Australia - Serving within 200km radius</span>
              </div>
            </div>

            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.instagram.com/pizzamaster_and_the_slice/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578603166709&mibextid=wwXIfr&rdid=HDf9JdeXFApCFRAm#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
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
            Copyright © 2025 Pizza Master & The Slice | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;