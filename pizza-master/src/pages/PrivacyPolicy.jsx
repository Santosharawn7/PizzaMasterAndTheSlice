import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const PrivacyPolicy = () => {
  // GSAP Scroll Animation refs
  const heroRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.1 });
  const contentRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen light-wood-texture">
      <Header 
        pageType="privacy" 
        activeSection="privacy" 
        scrollToSection={scrollToSection} 
      />

      {/* Privacy Policy Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 relative overflow-hidden min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/V55UCGw.jpeg"
            alt="Privacy Policy Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center w-full pb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-beigelight-100 mb-4 font-serif italic drop-shadow-lg">
              🍕 Privacy & Purchase Policy
            </h1>
            <p className="text-lg md:text-xl text-beigelight-200 max-w-3xl mx-auto drop-shadow-md">
              Pizza Master & The Slice
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section ref={contentRef} className="py-16 beige-gradient-vertical">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">1. Introduction</h2>
              <p className="text-lg text-woodbrown-700 mb-4">
                Pizza Master & The Slice ("we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy and Purchase Policy outlines how we collect, use, and protect your data, and establishes our terms for purchases, event bookings, and payments.
              </p>
              <p className="text-lg text-woodbrown-700">
                By accessing our website, placing an order, or booking an event, you agree to this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">2. Information We Collect</h2>
              <p className="text-lg text-woodbrown-700 mb-4">We may collect the following information:</p>
              <ul className="list-disc list-inside text-lg text-woodbrown-700 space-y-2 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and billing details when you place an order or book an event.</li>
                <li><strong>Event Details:</strong> Date, location, and preferences related to your catering or private event.</li>
                <li><strong>Payment Information:</strong> Processed securely via trusted payment gateways. We do not store your full credit card information.</li>
                <li><strong>Website Usage Data:</strong> Non-personal data such as IP address, browser type, and analytics cookies to improve site performance.</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">3. How We Use Your Information</h2>
              <p className="text-lg text-woodbrown-700 mb-4">Your information is used to:</p>
              <ul className="list-disc list-inside text-lg text-woodbrown-700 space-y-2 ml-4">
                <li>Process and confirm orders or bookings.</li>
                <li>Communicate regarding your event or order.</li>
                <li>Improve our website and customer service.</li>
                <li>Comply with legal or financial reporting requirements.</li>
              </ul>
              <p className="text-lg text-woodbrown-700 mt-4">
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">4. Data Security</h2>
              <p className="text-lg text-woodbrown-700 mb-4">
                We implement appropriate technical and organizational measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-lg text-woodbrown-700">
                All online transactions are processed through encrypted payment systems. However, no electronic transmission is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies & Analytics */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">5. Cookies & Analytics</h2>
              <p className="text-lg text-woodbrown-700">
                Our website may use cookies for functionality and analytics purposes. You can disable cookies in your browser settings, but this may affect certain website features.
              </p>
            </div>

            {/* Purchase & Refund Policy */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">6. Purchase & Refund Policy</h2>
              <ul className="list-disc list-inside text-lg text-woodbrown-700 space-y-2 ml-4">
                <li><strong>Pre-orders:</strong> Highly recommended to guarantee your preferred item or event date.</li>
                <li><strong>Advance Payment:</strong> A 50% advance payment is required to confirm your booking. The remaining balance is due on the day of the event, prior to the start of service.</li>
                <li><strong>Refunds & Cancellations:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>All sales are final due to the preparation required for private events.</li>
                    <li>Refunds are available only if cancellation is made at least 7 days prior to the event.</li>
                    <li>Advance payments are non-refundable but may be applied to a rescheduled event if agreed upon in advance.</li>
                  </ul>
                </li>
                <li><strong>Order Modifications:</strong> Allowed up to 48 hours before the event.</li>
                <li><strong>Payment Options:</strong> We accept cash, card, and contactless payments.</li>
                <li><strong>No Show Policy:</strong> Failure to appear for a confirmed event will result in forfeiture of payment.</li>
              </ul>
            </div>

            {/* Liability Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">7. Liability Disclaimer</h2>
              <p className="text-lg text-woodbrown-700">
                Pizza Master & The Slice is not responsible for personal items, property loss, or injuries occurring at events we cater or host. Customers are responsible for ensuring safe conditions at their venue.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">8. Third-Party Links</h2>
              <p className="text-lg text-woodbrown-700">
                Our website may contain links to third-party sites. We are not responsible for their privacy practices or content. We encourage you to review their policies separately.
              </p>
            </div>

            {/* Updates to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">9. Updates to This Policy</h2>
              <p className="text-lg text-woodbrown-700">
                We may update this policy periodically to reflect operational, legal, or regulatory changes. The revised date will always be indicated at the top of this page.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">10. Contact Us</h2>
              <p className="text-lg text-woodbrown-700 mb-4">
                If you have questions or concerns about this policy, please contact us at:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📧</span>
                    <a 
                      href="mailto:pizzamaster2632@gmail.com"
                      className="text-lg text-woodbrown-700 hover:text-woodbrown-900 transition-colors"
                    >
                      pizzamaster2632@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📞</span>
                    <a 
                      href="tel:+61451694448"
                      className="text-lg text-woodbrown-700 hover:text-woodbrown-900 transition-colors"
                    >
                      0451 694 448
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    <a 
                      href="https://maps.google.com/maps?q=11+Temple+Rd,+Clare+SA+5453,+Australia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-woodbrown-700 hover:text-woodbrown-900 transition-colors"
                    >
                      11 Temple Rd, Clare SA 5453, Australia
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer 
        pageType="privacy" 
        scrollToSection={scrollToSection} 
      />
      <ChatWidget />
    </div>
  );
};

export default PrivacyPolicy;
