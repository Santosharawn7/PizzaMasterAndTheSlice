// Centralized navigation configuration for Pizza Master & The Slice
export const navigationItems = [
  { id: 'home', label: 'HOME', link: '/' },
  { id: 'about', label: 'ABOUT', link: '/about' },
  { id: 'menu', label: 'MENU', link: '/menu' },
  { id: 'gallery', label: 'GALLERY', link: '/gallery' },
  { id: 'catering', label: 'CATERING', link: '/#catering' },
  { id: 'contact', label: 'CONTACT', link: '/#contact' },
  { id: 'privacy', label: 'PRIVACY POLICY', link: '/privacy-policy' }
];

// Helper function to get navigation items for different page contexts
export const getNavigationItems = (pageType = 'full') => {
  switch (pageType) {
    case 'home':
      // Home page has all navigation items
      return navigationItems;
    case 'about':
      // About page has main navigation items
      return navigationItems.filter(item => 
        ['home', 'about', 'menu', 'gallery', 'contact', 'privacy'].includes(item.id)
      );
    case 'menu':
      // Menu page has main navigation items
      return navigationItems.filter(item => 
        ['home', 'about', 'menu', 'gallery', 'contact', 'privacy'].includes(item.id)
      );
    case 'gallery':
      // Gallery page has main navigation items
      return navigationItems.filter(item => 
        ['home', 'about', 'menu', 'gallery', 'contact', 'privacy'].includes(item.id)
      );
    case 'booking':
      // Booking page has main navigation items
      return navigationItems.filter(item => 
        ['home', 'about', 'menu', 'gallery', 'contact', 'privacy'].includes(item.id)
      );
    case 'privacy':
      // Privacy page has main navigation items
      return navigationItems.filter(item => 
        ['home', 'about', 'menu', 'gallery', 'contact', 'privacy'].includes(item.id)
      );
    default:
      // Full navigation for all pages
      return navigationItems;
  }
};

export default navigationItems;
