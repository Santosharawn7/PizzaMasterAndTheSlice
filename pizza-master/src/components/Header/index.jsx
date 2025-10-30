import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Facebook,
  Search,
  ChevronDown,
} from "lucide-react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { getNavigationItems } from "../Navigation";
import PizzaMasterAndTheSliceLogo from "../../assets/PizzaMasterAndTheSliceLogo.png";

// Searchable content for Pizza Master & The Slice
const searchData = [
  // Navigation pages
  ...[
    {
      type: "Page",
      label: "Home",
      link: "/",
      description: "Welcome to Pizza Master & The Slice",
    },
    {
      type: "Page",
      label: "About",
      link: "/about",
      description: "Learn about Chef Ashish and our story",
    },
    {
      type: "Page",
      label: "Menu",
      link: "/menu",
      description: "View our complete pizza menu",
    },
    {
      type: "Page",
      label: "Gallery",
      link: "/gallery",
      description:
        "Visual journey through our authentic Italian pizza experience",
    },
    {
      type: "Page",
      label: "Terms and Conditions",
      link: "/terms",
      description: "Purchase and cancellation policy",
    },
    {
      type: "Page",
      label: "Catering",
      link: "/#catering",
      description: "Mobile pizza catering services",
    },
    {
      type: "Page",
      label: "Services",
      link: "/#services",
      description: "Our pizza services and offerings",
    },
    {
      type: "Page",
      label: "Reviews",
      link: "/#reviews",
      description: "Customer reviews and testimonials",
    },
    {
      type: "Page",
      label: "Our Story",
      link: "/#story",
      description: "Chef Ashish Silwal's journey",
    },
    {
      type: "Page",
      label: "Contact",
      link: "/#contact",
      description: "Get in touch with us",
    },
  ],

  // Pizza types and menu items
  {
    type: "Pizza",
    label: "Garlic Pizza",
    description: "Fresh garlic sauce, fior di latte, and oregano",
    link: "/menu#garlic-pizza",
  },
  {
    type: "Pizza",
    label: "Margherita Pizza",
    description:
      "San Marzano tomato sauce, Pecorino Romano, fior di latte mozzarella, fresh basil",
    link: "/menu#margherita",
  },
  {
    type: "Pizza",
    label: "The Meat Feast",
    description:
      "Rich BBQ sauce, layered with creamy fior di latte mozzarella, spicy pepperoni, succulent ham, and tender roasted chicken",
    link: "/menu#meat-feast",
  },
  {
    type: "Pizza",
    label: "Pepperoni with Spicy Honey",
    description:
      "Napoli sauce, fior di latte mozzarella, spicy pepperoni, finished with a drizzle of hot honey",
    link: "/menu#pepperoni-spicy-honey",
  },
  {
    type: "Pizza",
    label: "Pizzamaster Special",
    description:
      "Creamy fior di latte, slices of mortadella, topped with fresh buffalo mozzarella and finished with pistachio pesto and basil",
    link: "/menu#pizzamaster-special",
  },
  {
    type: "Pizza",
    label: "Hawaiian Pizza",
    description:
      "San Marzano tomato sauce, fior di latte mozzarella, ham and pineapple",
    link: "/menu#hawaiian",
  },
  {
    type: "Pizza",
    label: "Vegetarian Pizza",
    description:
      "San Marzano tomato, olives, mushroom, onion, fior di latte, basil",
    link: "/menu#vegetarian",
  },
  {
    type: "Pizza",
    label: "Truffle Mushroom Pizza",
    description:
      "White base, fior di latte, mushroom, oregano, truffle oil, pecorino cheese",
    link: "/menu#truffle-mushroom",
  },
  {
    type: "Pizza",
    label: "Vegan Pizza",
    description:
      "San Marzano tomato, olives, vegan cheese, mushroom, onion, extra virgin olive oil",
    link: "/menu#vegan",
  },
  {
    type: "Pizza",
    label: "Capricciosa Pizza",
    description: "San Marzano tomato, fior di latte, mushroom, ham and olives",
    link: "/menu#capricciosa",
  },
  {
    type: "Pizza",
    label: "Nutella Pizza",
    description: "With strawberry and chocolate sauce",
    link: "/menu#nutella",
  },

  // Pizza Packages
  {
    type: "Package",
    label: "THE DELUXE Package",
    description:
      "Premium experience with antipasto platter, unlimited drinks, and dessert - $45.99 per person",
    link: "/menu#deluxe",
  },
  {
    type: "Package",
    label: "THE SUPREME Package",
    description:
      "Perfect balance of premium pizzas, drinks, and dessert - $35.99 per person",
    link: "/menu#supreme",
  },
  {
    type: "Package",
    label: "THE CLASSIC Package",
    description:
      "Great value with unlimited pizzas and dessert - $29.99 AUD per person",
    link: "/menu#classic",
  },

  // Services
  {
    type: "Service",
    label: "Mobile Pizza Catering",
    description: "Wood-fired pizza truck for events and parties",
    link: "/#catering",
  },
  {
    type: "Service",
    label: "Event Catering",
    description: "Professional pizza catering for special occasions",
    link: "/#catering",
  },
  {
    type: "Service",
    label: "Wedding Catering",
    description: "Elegant pizza catering for weddings",
    link: "/#catering",
  },
  {
    type: "Service",
    label: "Corporate Events",
    description: "Pizza catering for business events and meetings",
    link: "/#catering",
  },

  // Chef and business info
  {
    type: "Chef",
    label: "Chef Ashish Silwal",
    description: "Master pizza chef from Clare, South Australia",
    link: "/about",
  },
  {
    type: "Team",
    label: "Owner",
    description: "Meet the passionate owners behind Pizza Master & The Slice",
    link: "/gallery#our-work",
  },
  {
    type: "Team",
    label: "Owners",
    description: "Meet the passionate owners behind Pizza Master & The Slice",
    link: "/gallery#our-work",
  },
  {
    type: "Location",
    label: "Clare, South Australia",
    description: "Serving Clare and surrounding areas with authentic pizza",
    link: "/#contact",
  },

  // Gallery Content - Our Pizzas
  {
    type: "Gallery",
    label: "Our Pizzas Gallery",
    description: "Beautiful display of our authentic Italian pizzas",
    link: "/gallery#our-pizzas",
  },
  {
    type: "Gallery",
    label: "Margherita Pizza Photo",
    description: "Classic Margherita with San Marzano tomatoes and fresh basil",
    link: "/gallery#our-pizzas",
  },
  {
    type: "Gallery",
    label: "Pepperoni with Spicy Honey Photo",
    description: "Spicy pepperoni finished with a drizzle of hot honey",
    link: "/gallery#our-pizzas",
  },
  {
    type: "Gallery",
    label: "Vegetarian Pizza Photo",
    description: "Fresh vegetables and herbs on our signature crust",
    link: "/gallery#our-pizzas",
  },
  {
    type: "Gallery",
    label: "Nutella Pizza Photo",
    description: "Sweet dessert pizza with Nutella and fresh strawberries",
    link: "/gallery#our-pizzas",
  },

  // Pizza Types and Ingredients
  {
    type: "Menu",
    label: "Margherita",
    description: "Classic Margherita with San Marzano tomatoes and fresh basil",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Pepperoni",
    description: "Spicy pepperoni with hot honey drizzle",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Vegetarian",
    description: "Fresh vegetables and herbs on our signature crust",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Nutella",
    description: "Sweet dessert pizza with Nutella and fresh strawberries",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Garlic Pizza",
    description: "Fresh garlic sauce, fior di latte, and oregano",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Meat Feast",
    description: "Rich BBQ sauce with pepperoni, ham, and roasted chicken",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Hawaiian",
    description:
      "San Marzano tomato sauce, fior di latte mozzarella, ham and pineapple",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Truffle Mushroom",
    description:
      "White base, fior di latte, mushroom, oregano, truffle oil, pecorino cheese",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Vegan Pizza",
    description:
      "San Marzano tomato, olives, vegan cheese, mushroom, onion, extra virgin olive oil",
    link: "/menu",
  },
  {
    type: "Menu",
    label: "Capricciosa",
    description: "San Marzano tomato, fior di latte, mushroom, ham and olives",
    link: "/menu",
  },

  // Gallery Content - Our Work
  {
    type: "Gallery",
    label: "Our Work Gallery",
    description: "Behind the scenes of our authentic pizza-making process",
    link: "/gallery#our-work",
  },
  {
    type: "Gallery",
    label: "Pizza Station Setup",
    description: "Our authentic wood-fired pizza oven where the magic happens",
    link: "/gallery#our-work",
  },
  {
    type: "Gallery",
    label: "Wood-Fired Oven Setup",
    description: "Our mobile wood-fired oven ready for action at your event",
    link: "/gallery#our-work",
  },
  {
    type: "Gallery",
    label: "Pizza Preparation Station",
    description:
      "Fresh ingredients and tools ready for authentic pizza creation",
    link: "/gallery#our-work",
  },
  {
    type: "Gallery",
    label: "Chef in Action",
    description:
      "Master chef demonstrating traditional pizza-making techniques",
    link: "/gallery#our-work",
  },
  {
    type: "Gallery",
    label: "Mobile Kitchen Setup",
    description: "Our fully equipped mobile pizza kitchen ready for any event",
    link: "/gallery#our-work",
  },
  {
    type: "Gallery",
    label: "Event Service",
    description: "Serving fresh, hot pizzas directly to your guests",
    link: "/gallery#our-work",
  },
  {
    type: "Gallery",
    label: "Team at Work",
    description: "Our dedicated team ensuring every pizza is perfect",
    link: "/gallery#our-work",
  },
  {
    type: "Gallery",
    label: "Catering Setup",
    description: "Professional catering setup for your special occasion",
    link: "/gallery#our-work",
  },

  // Gallery Content - Our Videos
  {
    type: "Gallery",
    label: "Our Videos Gallery",
    description:
      "Watch our master chef in action creating authentic Italian pizzas",
    link: "/gallery#our-videos",
  },
  {
    type: "Gallery",
    label: "Pizza Making Process Video",
    description:
      "Watch Chef Ashish in action creating authentic wood-fired pizzas",
    link: "/gallery#our-videos",
  },

  // Equipment and Setup Keywords
  {
    type: "Equipment",
    label: "Wood-Fired Oven",
    description: "Our authentic wood-fired pizza oven for traditional cooking",
    link: "/gallery#our-work",
  },
  {
    type: "Equipment",
    label: "Mobile Oven",
    description: "Our mobile wood-fired oven ready for any event",
    link: "/gallery#our-work",
  },
  {
    type: "Equipment",
    label: "Pizza Oven",
    description: "Professional wood-fired pizza oven setup",
    link: "/gallery#our-work",
  },
  {
    type: "Equipment",
    label: "Preparation Station",
    description:
      "Fresh ingredients and tools ready for authentic pizza creation",
    link: "/gallery#our-work",
  },
  {
    type: "Equipment",
    label: "Mobile Kitchen",
    description: "Our fully equipped mobile pizza kitchen ready for any event",
    link: "/gallery#our-work",
  },

  // Ingredients Keywords
  {
    type: "Ingredients",
    label: "San Marzano",
    description: "Authentic San Marzano tomatoes used in our pizzas",
    link: "/menu",
  },
  {
    type: "Ingredients",
    label: "Fior di Latte",
    description: "Fresh fior di latte mozzarella cheese",
    link: "/menu",
  },
  {
    type: "Ingredients",
    label: "Fresh Basil",
    description: "Fresh basil leaves on our authentic pizzas",
    link: "/menu",
  },
  {
    type: "Ingredients",
    label: "Truffle Oil",
    description: "Premium truffle oil used in our specialty pizzas",
    link: "/menu",
  },
  {
    type: "Ingredients",
    label: "Pecorino",
    description: "Authentic Pecorino Romano cheese",
    link: "/menu",
  },

  // Service Keywords
  {
    type: "Service",
    label: "Event Service",
    description: "Serving fresh, hot pizzas directly to your guests",
    link: "/gallery#our-work",
  },
  {
    type: "Service",
    label: "Catering Service",
    description: "Professional catering setup for your special occasion",
    link: "/gallery#our-work",
  },
  {
    type: "Service",
    label: "Mobile Service",
    description: "We bring our pizza truck directly to your location",
    link: "/#catering",
  },

  // Team Keywords
  {
    type: "Team",
    label: "Team",
    description: "Our dedicated team ensuring every pizza is perfect",
    link: "/gallery#our-work",
  },
  {
    type: "Team",
    label: "Staff",
    description: "Our passionate team behind Pizza Master & The Slice",
    link: "/gallery#our-work",
  },
  {
    type: "Team",
    label: "Chef Team",
    description: "Our skilled chefs creating authentic Italian pizzas",
    link: "/gallery#our-work",
  },
];

const Header = ({ pageType = "full", activeSection, scrollToSection }) => {
  // Get navigation items from centralized component
  const navItems = getNavigationItems(pageType);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Search functionality
  const filtered =
    search.trim().length > 0
      ? searchData.filter(
          (item) =>
            item.label.toLowerCase().includes(search.toLowerCase()) ||
            (item.description &&
              item.description.toLowerCase().includes(search.toLowerCase()))
        )
      : [];

  // Close mobile menus
  const closeMobile = () => {
    setIsMenuOpen(false);
    setMobileSearchOpen(false);
    setSearchFocus(false);
  };

  // Toggle mobile search
  const toggleMobileSearch = () => {
    setIsMenuOpen(false); // Close nav if open
    setMobileSearchOpen((prev) => !prev);
    if (!mobileSearchOpen) {
      // Focus on input when opening
      setTimeout(() => {
        const input = document.querySelector("#mobile-search-input");
        if (input) input.focus();
      }, 100);
    }
  };

  // Handle search result click
  const handleSearchResultClick = (item) => {
    setSearch("");
    setSearchFocus(false);
    setMobileSearchOpen(false);

    // Handle navigation based on link type
    if (item.link.startsWith("/#")) {
      // Scroll to section on home page
      navigate("/");
      setTimeout(() => {
        const sectionId = item.link.split("#")[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Navigate to page
      navigate(item.link);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-gradient text-beigelight-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 py-2">
            <Link to="/" className="block">
              <img
                src={PizzaMasterAndTheSliceLogo}
                alt="Pizza Master & The Slice Logo"
                className="h-20 w-20 rounded-full object-cover hover:opacity-80 transition-opacity cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive =
                activeSection === item.id ||
                (item.id === "about" && location.pathname === "/about") ||
                (item.id === "home" && location.pathname === "/") ||
                (item.id === "menu" && location.pathname === "/menu") ||
                (item.id === "gallery" && location.pathname === "/gallery") ||
                (item.id === "terms" && location.pathname === "/terms");

              // Special handling for Home dropdown
              if (item.id === "home") {
                return (
                  <div key={item.id} className="relative">
                    <button
                      onClick={() => {
                        navigate("/");
                        setHomeDropdownOpen(!homeDropdownOpen);
                      }}
                      onMouseEnter={() => setHomeDropdownOpen(true)}
                      className={`text-sm font-medium transition-colors border-b-2 flex items-center space-x-1 ${
                        isActive
                          ? "text-beigelight-100 border-beigelight-300"
                          : "text-beigelight-300 border-transparent hover:text-beigelight-200"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-3 h-3" />
                    </button>

                    {/* Home Dropdown Menu */}
                    {homeDropdownOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-woodbrown-200 py-2 z-50"
                        onMouseEnter={() => setHomeDropdownOpen(true)}
                        onMouseLeave={() => setHomeDropdownOpen(false)}
                      >
                        <button
                          onClick={() => {
                            navigate("/");
                            scrollToSection("catering");
                            setHomeDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-woodbrown-700 hover:bg-woodbrown-50 transition-colors"
                        >
                          Catering
                        </button>
                        <button
                          onClick={() => {
                            navigate("/");
                            scrollToSection("services");
                            setHomeDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-woodbrown-700 hover:bg-woodbrown-50 transition-colors"
                        >
                          Services
                        </button>
                        <button
                          onClick={() => {
                            navigate("/");
                            scrollToSection("menu");
                            setHomeDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-woodbrown-700 hover:bg-woodbrown-50 transition-colors"
                        >
                          Packages
                        </button>
                        <button
                          onClick={() => {
                            navigate("/");
                            scrollToSection("story");
                            setHomeDropdownOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-woodbrown-700 hover:bg-woodbrown-50 transition-colors"
                        >
                          Our Story
                        </button>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === "about") navigate("/about");
                    else if (item.id === "home") navigate("/");
                    else if (item.id === "menu") navigate("/menu");
                    else if (item.id === "gallery") navigate("/gallery");
                    else if (item.id === "terms") navigate("/terms");
                    else scrollToSection(item.id);
                  }}
                  className={`text-sm font-medium transition-colors border-b-2 ${
                    isActive
                      ? "text-beigelight-100 border-beigelight-300"
                      : "text-beigelight-300 border-transparent hover:text-beigelight-200"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Search and Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Desktop Search bar */}
            <div className="relative">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-md px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-beigelight-300 focus-within:bg-white/20">
                <Search className="w-4 h-4 text-beigelight-300 mr-2" />
                <input
                  type="text"
                  placeholder="Search pizzas, services..."
                  className="bg-transparent outline-none border-none w-full text-beigelight-100 placeholder-beigelight-400 text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setTimeout(() => setSearchFocus(false), 120)}
                />
              </div>

              {/* Desktop Dropdown results */}
              {searchFocus && search.trim().length > 0 && (
                <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-md z-50 border border-gray-200 max-h-80 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="p-4 text-gray-400 text-center">
                      No results found.
                    </div>
                  ) : (
                    filtered.map((item, i) => (
                      <button
                        key={item.link + i}
                        className="block w-full text-left px-4 py-3 hover:bg-woodbrown-100 transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => handleSearchResultClick(item)}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-woodbrown-800 text-sm">
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="text-gray-600 text-xs mt-1">
                              {item.description}
                            </span>
                          )}
                          <span className="text-xs mt-1 text-woodbrown-600 font-medium">
                            {item.type}
                          </span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>

            {/* Social Icons */}
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
            <a
              href="https://www.tiktok.com/@pizzamaster.and.t"
              target="_blank"
              rel="noopener noreferrer"
              className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
          </div>

          {/* Mobile Icons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Search Icon */}
            <button
              onClick={toggleMobileSearch}
              className="p-2 text-beigelight-300 hover:text-beigelight-100 transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            {/* Hamburger */}
            <button
              onClick={() => {
                setMobileSearchOpen(false); // Close search if open
                setIsMenuOpen((prev) => !prev);
              }}
              className="p-2 text-beigelight-300 hover:text-beigelight-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className="md:hidden rounded-b-lg shadow-lg border-t border-white/10"
            style={{
              background:
                "linear-gradient(180deg, rgba(74,52,42,0.95) 0%, rgba(93,64,55,0.9) 100%)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                // Special handling for Home dropdown in mobile
                if (item.id === "home") {
                  return (
                    <div key={item.id}>
                      <button
                        onClick={() => {
                          navigate("/");
                          setHomeDropdownOpen(!homeDropdownOpen);
                        }}
                        className="block w-full text-left px-3 py-2 text-base font-medium text-beigelight-300 hover:text-beigelight-100 hover:bg-white/5 rounded-md flex items-center justify-between"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${homeDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Mobile Home Dropdown */}
                      {homeDropdownOpen && (
                        <div className="ml-4 mt-1 space-y-1">
                          <button
                            onClick={() => {
                              navigate("/");
                              scrollToSection("catering");
                              setHomeDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm font-medium text-beigelight-400 hover:text-beigelight-200 hover:bg-white/5 rounded-md"
                          >
                            Catering
                          </button>
                          <button
                            onClick={() => {
                              navigate("/");
                              scrollToSection("services");
                              setHomeDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm font-medium text-beigelight-400 hover:text-beigelight-200 hover:bg-white/5 rounded-md"
                          >
                            Services
                          </button>
                          <button
                            onClick={() => {
                              navigate("/");
                              scrollToSection("menu");
                              setHomeDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm font-medium text-beigelight-400 hover:text-beigelight-200 hover:bg-white/5 rounded-md"
                          >
                            Packages
                          </button>
                          <button
                            onClick={() => {
                              navigate("/");
                              scrollToSection("story");
                              setHomeDropdownOpen(false);
                              setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-sm font-medium text-beigelight-400 hover:text-beigelight-200 hover:bg-white/5 rounded-md"
                          >
                            Our Story
                          </button>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === "about") navigate("/about");
                      else if (item.id === "home") navigate("/");
                      else if (item.id === "menu") navigate("/menu");
                      else if (item.id === "gallery") navigate("/gallery");
                      else if (item.id === "terms") navigate("/terms");
                      else scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-beigelight-300 hover:text-beigelight-100 hover:bg-white/5 rounded-md"
                  >
                    {item.label}
                  </button>
                );
              })}

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
                <a
                  href="https://www.tiktok.com/@pizzamaster.and.t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-beigelight-300 hover:text-beigelight-100 transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Search Dropdown */}
        {mobileSearchOpen && (
          <div
            className="md:hidden rounded-b-lg shadow-lg border-t border-white/10"
            style={{
              background:
                "linear-gradient(180deg, rgba(74,52,42,0.95) 0%, rgba(93,64,55,0.9) 100%)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
          >
            <div className="px-4 py-4">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-md px-3 py-2 w-full focus-within:ring-2 focus-within:ring-beigelight-300 focus-within:bg-white/20">
                <Search className="w-4 h-4 text-beigelight-300 mr-2" />
                <input
                  id="mobile-search-input"
                  type="text"
                  placeholder="Search pizzas, services..."
                  className="bg-transparent outline-none border-none w-full text-beigelight-100 placeholder-beigelight-400 text-sm"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
                />
              </div>

              {/* Mobile Search Results */}
              {search.trim().length > 0 && (
                <div className="mt-3 bg-white rounded-md border border-gray-200 max-h-80 overflow-y-auto">
                  {filtered.length === 0 ? (
                    <div className="p-4 text-gray-400 text-center">
                      No results found.
                    </div>
                  ) : (
                    filtered.map((item, i) => (
                      <button
                        key={item.link + i}
                        className="block w-full text-left px-4 py-3 hover:bg-woodbrown-100 transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => handleSearchResultClick(item)}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-woodbrown-800 text-sm">
                            {item.label}
                          </span>
                          {item.description && (
                            <span className="text-gray-600 text-xs mt-1">
                              {item.description}
                            </span>
                          )}
                          <span className="text-xs mt-1 text-woodbrown-600 font-medium">
                            {item.type}
                          </span>
                        </div>
                      </button>
                    ))
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
