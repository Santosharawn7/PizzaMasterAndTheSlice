// Calendly Booking Integration
// This utility provides functions to integrate with Calendly for appointment booking

/**
 * Initialize Calendly widget
 * @param {string} calendlyUsername - Your Calendly username
 * @param {string} eventType - The event type URL from Calendly
 */
export const initializeCalendly = (calendlyUsername, eventType) => {
  // Load Calendly widget script if not already loaded
  if (!window.Calendly) {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
  }
};

/**
 * Open Calendly popup widget for booking
 * @param {string} eventType - The event type URL from Calendly
 * @param {Object} prefill - Pre-fill data for the booking form
 */
export const openCalendlyPopup = (eventType, prefill = {}) => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: eventType,
      prefill: prefill,
      utm: {
        utmCampaign: 'pizza-master-booking',
        utmSource: 'website',
        utmMedium: 'booking-button'
      }
    });
  } else {
    // Fallback: open in new tab if widget not loaded
    window.open(eventType, '_blank');
  }
};

/**
 * Open Calendly inline widget
 * @param {string} containerId - ID of the container element
 * @param {string} eventType - The event type URL from Calendly
 * @param {Object} prefill - Pre-fill data for the booking form
 */
export const openCalendlyInline = (containerId, eventType, prefill = {}) => {
  if (window.Calendly) {
    window.Calendly.initInlineWidget({
      url: eventType,
      parentElement: document.getElementById(containerId),
      prefill: prefill,
      utm: {
        utmCampaign: 'pizza-master-booking',
        utmSource: 'website',
        utmMedium: 'inline-widget'
      }
    });
  }
};

/**
 * Create a booking function for Pizza Master & The Slice
 * This function will open the Calendly booking popup
 */
export const bookPizzaCatering = () => {
  // Replace 'your-username' with your actual Calendly username
  // Replace 'pizza-catering-consultation' with your actual event type
  const eventType = 'https://calendly.com/your-username/pizza-catering-consultation';
  
  const prefill = {
    name: '',
    email: '',
    customAnswers: {
      a1: 'Pizza Master & The Slice - Mobile Catering Inquiry',
      a2: 'Adelaide, Australia'
    }
  };

  openCalendlyPopup(eventType, prefill);
};

/**
 * Create a booking function for general inquiries
 */
export const bookGeneralInquiry = () => {
  const eventType = 'https://calendly.com/your-username/general-inquiry';
  
  const prefill = {
    name: '',
    email: '',
    customAnswers: {
      a1: 'General Inquiry - Pizza Master & The Slice'
    }
  };

  openCalendlyPopup(eventType, prefill);
};

/**
 * Create a booking function for menu consultation
 */
export const bookMenuConsultation = () => {
  const eventType = 'https://calendly.com/your-username/menu-consultation';
  
  const prefill = {
    name: '',
    email: '',
    customAnswers: {
      a1: 'Menu Consultation - Pizza Master & The Slice',
      a2: 'Interested in our pizza packages'
    }
  };

  openCalendlyPopup(eventType, prefill);
};

/**
 * Initialize all booking functionality
 * Call this function when the app loads
 */
export const initializeBooking = () => {
  // Initialize Calendly
  initializeCalendly('your-username', 'pizza-catering-consultation');
  
  // Add global booking functions to window for easy access
  window.bookPizzaCatering = bookPizzaCatering;
  window.bookGeneralInquiry = bookGeneralInquiry;
  window.bookMenuConsultation = bookMenuConsultation;
};

/**
 * Setup instructions for Calendly integration:
 * 
 * 1. Create a Calendly account at https://calendly.com
 * 2. Create event types for:
 *    - Pizza Catering Consultation (30-60 minutes)
 *    - General Inquiry (15-30 minutes)
 *    - Menu Consultation (20-30 minutes)
 * 3. Replace 'your-username' in the eventType URLs with your actual Calendly username
 * 4. Replace the event type names with your actual event type URLs
 * 5. Set up email notifications in Calendly settings
 * 6. Customize the booking form with relevant questions for pizza catering
 * 
 * Example event types you might want to create:
 * - pizza-catering-consultation
 * - general-inquiry
 * - menu-consultation
 * - wedding-catering-consultation
 * - corporate-event-consultation
 * 
 * The owner will automatically receive email notifications when appointments are booked.
 */
