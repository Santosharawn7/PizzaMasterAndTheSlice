import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";
import AppointmentDrawer from "../components/AppointmentForm";
import { useState } from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Enquiry = () => {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  
  // GSAP Scroll Animation refs
  const heroRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.1 });
  const contentRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    setIsAppointmentOpen(true);
  };

  const handleCloseAppointment = () => {
    setIsAppointmentOpen(false);
  };

  return (
    <div className="min-h-screen light-wood-texture">
      <Header 
        pageType="enquiry" 
        activeSection="enquiry" 
        scrollToSection={scrollToSection} 
      />

      {/* Enquiry Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 relative overflow-hidden min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/V55UCGw.jpeg"
            alt="Enquiry Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center w-full pb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-beigelight-100 mb-4 font-serif italic drop-shadow-lg">
              🍕 Get Your Quote
            </h1>
            <p className="text-lg md:text-xl text-beigelight-200 max-w-3xl mx-auto drop-shadow-md">
              Ready to bring authentic Italian pizza to your event?
            </p>
            <p className="text-md md:text-lg text-beigelight-300 max-w-3xl mx-auto drop-shadow-md">
              Fill out our enquiry form and we'll get back to you with a personalized quote
            </p>
          </div>
        </div>
      </section>

      {/* Enquiry Content */}
      <section ref={contentRef} className="py-16 beige-gradient-vertical">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-woodbrown-800 mb-4 font-serif italic">
                Let's Plan Your Perfect Event
              </h2>
              <p className="text-lg text-woodbrown-700 max-w-3xl mx-auto">
                Whether it's a wedding, corporate event, birthday party, or any special occasion, 
                we'll bring the authentic Italian pizza experience directly to your venue. 
                Fill out the form below and we'll provide you with a detailed quote.
              </p>
            </div>

            {/* Package Overview */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-woodbrown-800 mb-2">THE CLASSIC</h3>
                <p className="text-2xl font-bold text-woodbrown-600 mb-2">$29.99 AUD</p>
                <p className="text-sm text-woodbrown-700">per person</p>
                <ul className="text-sm text-woodbrown-700 mt-3 space-y-1">
                  <li>• Unlimited pizzas</li>
                  <li>• Dessert included</li>
                  <li>• 2-hour duration</li>
                  <li>• Min 30 guests</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-woodbrown-800 mb-2">THE SUPREME</h3>
                <p className="text-2xl font-bold text-woodbrown-600 mb-2">$34.99 AUD</p>
                <p className="text-sm text-woodbrown-700">per person</p>
                <ul className="text-sm text-woodbrown-700 mt-3 space-y-1">
                  <li>• Unlimited pizzas</li>
                  <li>• Unlimited drinks</li>
                  <li>• Dessert included</li>
                  <li>• Min 30 guests</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-woodbrown-800 mb-2">THE DELUXE</h3>
                <p className="text-2xl font-bold text-woodbrown-600 mb-2">$39.99 AUD</p>
                <p className="text-sm text-woodbrown-700">per person</p>
                <ul className="text-sm text-woodbrown-700 mt-3 space-y-1">
                  <li>• Unlimited pizzas</li>
                  <li>• Antipasto platter</li>
                  <li>• Unlimited drinks</li>
                  <li>• Min 40 guests</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-lg text-woodbrown-700 mb-6">
                Click the button below to open our detailed enquiry form
              </p>
              <button
                onClick={handleBookNow}
                className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 shadow-lg text-lg"
              >
                Fill Out Enquiry Form
              </button>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-woodbrown-800 mb-4 text-center">
                Need Help? Contact Us Directly
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-3">📧</span>
                    <a 
                      href="mailto:pizzamaster2632@gmail.com"
                      className="text-lg text-woodbrown-700 hover:text-woodbrown-900 transition-colors"
                    >
                      pizzamaster2632@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-3">📞</span>
                    <a 
                      href="tel:+61451694448"
                      className="text-lg text-woodbrown-700 hover:text-woodbrown-900 transition-colors"
                    >
                      0451 694 448
                    </a>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl mr-3">📍</span>
                    <a 
                      href="https://maps.google.com/maps?q=11+Temple+Rd,+Clare+SA+5453,+Australia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-woodbrown-700 hover:text-woodbrown-900 transition-colors"
                    >
                      Duffield Avenue Munnopara, Adelaide SA 5115, Australia
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <a 
                      href="https://m.me/774891612364601"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/512px-Facebook_Messenger_logo_2020.svg.png?20220118041828"
                        alt="Messenger"
                        className="w-6 h-6"
                      />
                      <span>Chat with us on Messenger</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer 
        pageType="enquiry" 
        scrollToSection={scrollToSection} 
      />
      <ChatWidget />
      
      {/* Appointment Drawer */}
      <AppointmentDrawer
        isOpen={isAppointmentOpen}
        onClose={handleCloseAppointment}
      />
    </div>
  );
};

export default Enquiry;
