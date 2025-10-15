import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { BookingWidget } from '../components/Booking';

const BookingPage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen light-wood-texture">
      <Header
        pageType="booking"
        activeSection="booking"
        scrollToSection={scrollToSection}
      />

      {/* Booking Hero Section */}
      <section className="pt-24 pb-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-beigelight-100 mb-6 font-serif italic">
            Book Your Event
          </h1>
          <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
            Schedule a consultation with Chef Ashish to plan your perfect mobile pizza catering experience.
          </p>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-2">Free Consultation</h3>
              <p className="text-woodbrown-700">
                30-minute consultation to discuss your event needs and requirements
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-2">Custom Menu Planning</h3>
              <p className="text-woodbrown-700">
                Personalized menu selection based on your preferences and dietary requirements
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-2">Direct Communication</h3>
              <p className="text-woodbrown-700">
                Speak directly with Chef Ashish about your event vision and expectations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Booking Widget */}
      <section className="py-16 footer-gradient darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-beigelight-100 mb-4">
              Schedule Your Consultation
            </h2>
            <p className="text-lg text-beigelight-200">
              Choose a time that works for you and let's plan your perfect pizza event!
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
            <BookingWidget 
              eventType="pizza-catering-consultation"
              containerId="booking-widget"
              className="w-full h-[800px] min-h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-woodbrown-800 mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-woodbrown-700 mb-8 max-w-2xl mx-auto">
            If you need to speak with us right away or have urgent questions, feel free to reach out directly.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-woodbrown-800 mb-4">Phone</h3>
              <p className="text-woodbrown-700 mb-2">Call us directly for immediate assistance</p>
              <a 
                href="tel:+61412345678" 
                className="text-woodbrown-600 hover:text-woodbrown-800 font-semibold"
              >
                +61 412 345 678
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-woodbrown-800 mb-4">Email</h3>
              <p className="text-woodbrown-700 mb-2">Send us your questions and we'll respond quickly</p>
              <a 
                href="mailto:info@pizzamasterandtheslice.com.au" 
                className="text-woodbrown-600 hover:text-woodbrown-800 font-semibold"
              >
                info@pizzamasterandtheslice.com.au
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer
        pageType="booking"
        scrollToSection={scrollToSection}
      />
      <ChatWidget />
    </div>
  );
};

export default BookingPage;
