import { useEffect } from 'react';
import { initializeBooking, bookPizzaCatering, bookGeneralInquiry, bookMenuConsultation } from '../../utils/booking';

const Booking = () => {
  useEffect(() => {
    // Initialize booking functionality when component mounts
    initializeBooking();
  }, []);

  return null; // This component doesn't render anything, it just initializes booking
};

// Booking button components
export const BookingButton = ({ 
  type = 'catering', 
  children = 'BOOK NOW', 
  className = 'bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-4 px-8 rounded-lg transition-colors',
  onClick
}) => {
  const handleBookingClick = () => {
    switch (type) {
      case 'catering':
        bookPizzaCatering();
        break;
      case 'general':
        bookGeneralInquiry();
        break;
      case 'menu':
        bookMenuConsultation();
        break;
      default:
        bookPizzaCatering();
    }
    
    // Call additional onClick if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleBookingClick}
      className={className}
    >
      {children}
    </button>
  );
};

// Inline booking widget component
export const BookingWidget = ({ 
  eventType = 'pizza-catering-consultation',
  containerId = 'calendly-widget',
  className = 'w-full h-[600px]'
}) => {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize inline widget when script loads
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: `https://calendly.com/your-username/${eventType}`,
          parentElement: document.getElementById(containerId),
          prefill: {
            customAnswers: {
              a1: 'Pizza Master & The Slice - Mobile Catering Inquiry',
              a2: 'Clare, South Australia'
            }
          },
          utm: {
            utmCampaign: 'pizza-master-booking',
            utmSource: 'website',
            utmMedium: 'inline-widget'
          }
        });
      }
    };

    return () => {
      // Cleanup if needed
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [eventType, containerId]);

  return (
    <div 
      id={containerId}
      className={className}
      style={{ overflow: 'auto' }}
    />
  );
};

export default Booking;
