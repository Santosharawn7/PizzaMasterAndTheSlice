import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Terms = () => {
  // GSAP Scroll Animation refs
  const heroRef = useScrollAnimation({ animation: "fadeInUp", delay: 0.1 });
  const contentRef = useScrollAnimation({ animation: "fadeInUp", delay: 0.2 });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen light-wood-texture">
      <Header
        pageType="terms"
        activeSection="terms"
        scrollToSection={scrollToSection}
      />

      {/* Terms Hero Section */}
      <section
        ref={heroRef}
        className="pt-24 pb-16 relative overflow-hidden min-h-[400px] flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/V55UCGw.jpeg"
            alt="Terms and Conditions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center w-full pb-2">
            <h1 className="text-4xl md:text-5xl font-bold text-beigelight-100 mb-4 font-serif italic drop-shadow-lg">
              🍕 Terms and Conditions
            </h1>
            <p className="text-lg md:text-xl text-beigelight-200 max-w-3xl mx-auto drop-shadow-md">
              Pizza Master & The Slice
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section ref={contentRef} className="py-16 beige-gradient-vertical">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Purchase & Cancellation Policy */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">
              Purchase & Cancellation Policy
            </h2>

            {/* 1. Pre-Orders */}
            <div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-3">
                1. Pre-Orders
              </h3>
              <p className="text-lg text-woodbrown-700">
                To ensure you get your favourite pizza or menu item, pre-orders
                are highly recommended. Orders are fulfilled on a first-come,
                first-served basis and are subject to availability.
              </p>
            </div>

            {/* 2. Payment Policy */}
            <div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-3">
                2. Payment Policy
              </h3>
              <ul className="list-disc list-inside text-lg text-woodbrown-700 space-y-2 ml-4">
                <li>
                  A 50% advance payment is required to confirm all bookings for
                  private events or large orders.
                </li>
                <li>
                  The remaining balance must be paid on the day of the event,
                  before service begins.
                </li>
                <li>
                  Accepted payment methods: cash, card, and contactless
                  payments.
                </li>
                <li>
                  The advance payment is non-refundable, but may be applied
                  toward a rescheduled event if agreed upon at least 7 days
                  before the original event date.
                </li>
              </ul>
            </div>

            {/* 3. Cancellation and Refund Policy */}
            <div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-3">
                3. Cancellation and Refund Policy
              </h3>
              <ul className="list-disc list-inside text-lg text-woodbrown-700 space-y-2 ml-4">
                <li>
                  Due to the upfront preparation required for private events and
                  catering, all sales are final.
                </li>
                <li>
                  Refunds are only available if the cancellation is made at
                  least 7 days before the scheduled event date.
                </li>
                <li>
                  Cancellations made within 7 days of the event are
                  non-refundable.
                </li>
                <li>
                  Order modifications can be made up to 48 hours before the
                  event, subject to approval and availability.
                </li>
              </ul>
            </div>

            {/* 4. No-Show and Late Payment Policy */}
            <div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-3">
                4. No-Show and Late Payment Policy
              </h3>
              <ul className="list-disc list-inside text-lg text-woodbrown-700 space-y-2 ml-4">
                <li>
                  If full payment is not received prior to the event start time,
                  the booking may be cancelled without refund.
                </li>
                <li>
                  No-shows are treated as final sales and are not eligible for
                  refund or rescheduling.
                </li>
              </ul>
            </div>

            {/* 5. Liability Disclaimer */}
            <div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-3">
                5. Liability Disclaimer
              </h3>
              <ul className="list-disc list-inside text-lg text-woodbrown-700 space-y-2 ml-4">
                <li>
                  Pizza Master & The Slice and its staff are not responsible for
                  any personal belongings lost or damaged during an event or on
                  the premises.
                </li>
                <li>
                  We are also not liable for injuries, accidents, or incidents
                  occurring at the event venue or during service.
                </li>
              </ul>
            </div>

            {/* 6. Agreement */}
            <div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-3">
                6. Agreement
              </h3>
              <p className="text-lg text-woodbrown-700">
                By placing an order or booking an event with Pizza Master & The
                Slice, you confirm that you have read, understood, and agreed to
                these Terms and Conditions.
              </p>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <h2 className="text-2xl font-bold text-woodbrown-800 mb-4 font-serif italic">
              Contact Us
            </h2>
            <p className="text-lg text-woodbrown-700 mb-4">
              If you have questions or concerns about these terms, please contact us at:
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
                    Duffield Avenue Munnopara, Adelaide SA 5115, Australia
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer pageType="terms" scrollToSection={scrollToSection} />
      <ChatWidget />
    </div>
  );
};

export default Terms;
