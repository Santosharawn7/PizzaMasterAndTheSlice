import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { getNavigationItems } from "../Navigation";
import PizzaMasterAndTheSliceLogo from "../../assets/PizzaMasterAndTheSliceLogo.png";
import AppointmentDrawer from "../AppointmentForm";

const Footer = ({ pageType = "full", scrollToSection }) => {
  // Get navigation items from centralized component
  const navItems = getNavigationItems(pageType);
  const navigate = useNavigate();
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);

  const handleBookNow = () => {
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
  };
  return (
    <footer id="contact" className="footer-gradient text-beigelight-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-8">
              <img
                src={PizzaMasterAndTheSliceLogo}
                alt="Pizza Master & The Slice Logo"
                className="w-20 h-20 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-beigelight-100">
                  Pizza Master{" "}
                </h3>
                <h3 className="text-xl font-bold text-beigelight-100">
                  & The Slice
                </h3>
              </div>
            </div>

            <h4 className="text-xl font-bold mb-4">LINKS</h4>
            <div className="space-y-2 mb-8">
              {navItems.slice(1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    // Navigate to page if it's a page route
                    if (item.id === "about") navigate("/about");
                    else if (item.id === "menu") navigate("/menu");
                    else if (item.id === "gallery") navigate("/gallery");
                    else if (item.id === "terms") navigate("/terms");
                    else if (scrollToSection) scrollToSection(item.id);
                  }}
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
                <a 
                  href="mailto:pizzamaster2632@gmail.com"
                  className="hover:text-beigelight-100 transition-colors"
                >
                  pizzamaster2632@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-beigelight-300" />
                <a 
                  href="tel:+61451694448"
                  className="hover:text-beigelight-100 transition-colors"
                >
                  0451 694 448
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-beigelight-300" />
                <a 
                  href="https://maps.google.com/maps?q=11+Temple+Rd,+Clare+SA+5453,+Australia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-beigelight-100 transition-colors"
                >
                  11 Temple Rd, Clare SA 5453, Australia
                </a>
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
              <a
                href="https://www.tiktok.com/@pizzamaster.and.t"
                target="_blank"
                rel="noopener noreferrer"
                className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
                aria-label="TikTok"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>

            <div className="space-y-2">
              <Link
                to="/gallery#our-work"
                className="block w-full bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-3 px-6 rounded-lg transition-colors mb-2 text-center"
              >
                VIEW OUR SETUP
              </Link>
              <button
                onClick={handleBookNow}
                className="block w-full bg-woodbrown-500 hover:bg-woodbrown-600 text-beigelight-50 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                BOOK NOW
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-woodbrown-700 mt-12 pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-beigelight-400">
              Copyright © 2025 Pizza Master & The Slice | All rights reserved
            </p>
            <div className="flex space-x-2 items-center">
              <Link
                to="/privacy-policy"
                className="text-beigelight-400 hover:text-beigelight-200 transition-colors underline"
              >
                Privacy Policy
              </Link>
              <span className="text-beigelight-400">&</span>
              <Link
                to="/terms"
                className="text-beigelight-400 hover:text-beigelight-200 transition-colors underline"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Drawer */}
      <AppointmentDrawer
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
      />
    </footer>
  );
};

export default Footer;
