import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PAGE_ID = "61578603166709"; // Updated to your Facebook Page ID
const LOCALES = ["en_US", "en_GB"];

// FAQ data for the chat widget
const faqData = [
  {
    id: 1,
    question: "What types of pizza do you offer?",
    answer: "We offer a wide variety of pizzas including Margherita, Pepperoni, Quattro Stagioni, Capricciosa, Quattro Formaggi, Vegetarian, Meat Lovers, Hawaiian, BBQ Chicken, and Supreme pizzas.",
    keywords: ["pizza", "types", "menu", "varieties", "offerings"],
    type: "menu"
  },
  {
    id: 2,
    question: "Do you provide catering services?",
    answer: "Yes! We offer mobile pizza catering services for events, weddings, corporate events, and parties. Our wood-fired pizza truck brings authentic pizza directly to your location.",
    keywords: ["catering", "events", "mobile", "truck", "wedding", "corporate"],
    type: "service"
  },
  {
    id: 3,
    question: "Where are you located?",
    answer: "We are based in Adelaide, Australia, and serve the entire Adelaide community with our mobile pizza services.",
    keywords: ["location", "adelaide", "australia", "serve", "community"],
    type: "location"
  },
  {
    id: 4,
    question: "Who is Chef Ashish Silwal?",
    answer: "Chef Ashish Silwal is our master pizza chef from Adelaide, Australia. He brings authentic pizza-making expertise and passion to every pizza we create.",
    keywords: ["chef", "ashish", "silwal", "master", "authentic", "expertise"],
    type: "chef"
  },
  {
    id: 5,
    question: "What is your specialty pizza?",
    answer: "Our Quattro Stagioni (Four Seasons) is a specialty featuring artichokes, mushrooms, ham, and olives. We also pride ourselves on our authentic Margherita and Quattro Formaggi pizzas.",
    keywords: ["specialty", "quattro stagioni", "margherita", "quattro formaggi", "authentic"],
    type: "menu"
  },
  {
    id: 6,
    question: "Do you have vegetarian options?",
    answer: "Absolutely! We offer Vegetarian Pizza with fresh vegetables, mozzarella, and herbs. We also have Quattro Formaggi (four cheese) and can customize pizzas for vegetarian preferences.",
    keywords: ["vegetarian", "veggie", "options", "fresh", "vegetables", "cheese"],
    type: "menu"
  },
  {
    id: 7,
    question: "How do I book your catering services?",
    answer: "You can contact us through our Facebook page or call us directly. We'll discuss your event needs, menu preferences, and provide a customized quote for your special occasion.",
    keywords: ["book", "catering", "contact", "facebook", "event", "quote", "booking"],
    type: "service"
  },
  {
    id: 8,
    question: "What makes your pizza special?",
    answer: "Our pizzas are made with authentic techniques, fresh ingredients, and cooked in a wood-fired oven. Chef Ashish brings traditional Italian methods combined with local Australian flavors.",
    keywords: ["special", "authentic", "wood-fired", "fresh", "traditional", "italian"],
    type: "quality"
  },
  {
    id: 9,
    question: "Do you offer delivery?",
    answer: "We specialize in mobile catering services where we bring our pizza truck to your location. This ensures the freshest, hottest pizzas served directly from our wood-fired oven.",
    keywords: ["delivery", "mobile", "truck", "fresh", "hot", "oven"],
    type: "service"
  },
  {
    id: 10,
    question: "What are your business hours?",
    answer: "Our mobile pizza truck operates for events and catering services. Please contact us to discuss your specific event timing and we'll work with your schedule.",
    keywords: ["hours", "business", "operate", "events", "schedule", "timing"],
    type: "hours"
  },
  {
    id: 11,
    question: "Do you have Margherita pizza?",
    answer: "Yes! Our Margherita pizza ($18) is our classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil. It's one of our most popular items!",
    keywords: ["margherita", "classic", "neapolitan", "tomatoes", "mozzarella", "basil"],
    type: "menu"
  },
  {
    id: 12,
    question: "What's your most expensive pizza?",
    answer: "Our Meat Lovers pizza is $30, featuring pepperoni, sausage, bacon, ham, and mozzarella cheese. It's packed with premium meats and perfect for meat lovers!",
    keywords: ["expensive", "price", "meat lovers", "premium", "cost"],
    type: "menu"
  },
  {
    id: 13,
    question: "Do you have vegetarian options?",
    answer: "Absolutely! We have Vegetarian Pizza ($24), Mediterranean ($26), and Four Cheese ($24). We also offer Quattro Stagioni which can be made vegetarian by removing the ham.",
    keywords: ["vegetarian", "veggie", "options", "mediterranean", "four cheese", "quattro stagioni"],
    type: "menu"
  },
  {
    id: 14,
    question: "What's your cheapest pizza?",
    answer: "All our individual pizzas are priced at $25. For catering packages, our Classic package is $29.99 per person, which includes unlimited pizzas and dessert.",
    keywords: ["cheapest", "affordable", "price", "budget", "classic"],
    type: "menu"
  },
  {
    id: 15,
    question: "What packages do you offer?",
    answer: "We offer three packages: THE DELUXE ($45.99/person) with antipasto platter, THE SUPREME ($35.99/person) with premium pizzas, and THE CLASSIC ($29.99/person) with unlimited pizzas. All include dessert and have 2-hour duration.",
    keywords: ["packages", "deluxe", "supreme", "classic", "catering", "options"],
    type: "menu"
  },
  {
    id: 16,
    question: "Do you have vegan options?",
    answer: "Yes! We have a Vegan pizza with San Marzano tomato, olives, vegan cheese, mushroom, onion, and extra virgin olive oil. We also offer dairy-free cheese for an additional $2.",
    keywords: ["vegan", "dairy-free", "options", "dietary", "restrictions"],
    type: "menu"
  },
  {
    id: 17,
    question: "What's your most expensive package?",
    answer: "Our THE DELUXE package is $45.99 per person and includes 11 pizza varieties, antipasto platter, unlimited drinks, and dessert. It requires a minimum of 40 guests.",
    keywords: ["expensive", "deluxe", "premium", "highest", "cost"],
    type: "menu"
  }
];

export default function ChatWidget() {
  const [isMessengerWebview, setIsMessengerWebview] = useState(false);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if we're in Messenger webview
    const checkMessengerWebview = () => {
      return window.name === "messenger_ref" || window.name === "facebook_ref";
    };

    setIsMessengerWebview(checkMessengerWebview());

    // Load Facebook Customer Chat SDK
    const loadCustomerChatSDK = () => {
      // Ensure the required containers exist on <body> (once)
      if (!document.getElementById("fb-root")) {
        const root = document.createElement("div");
        root.id = "fb-root";
        document.body.appendChild(root);
      }
      
      if (!document.getElementById("fb-customer-chat")) {
        const chat = document.createElement("div");
        chat.id = "fb-customer-chat";
        chat.className = "fb-customerchat";
        chat.setAttribute("page_id", PAGE_ID);
        chat.setAttribute("attribution", "biz_inbox");
        chat.setAttribute("greeting_dialog_display", "show");
        chat.setAttribute("greeting_dialog_delay", "2");
        chat.setAttribute("theme_color", "#4A342A"); // Match your wooden theme

        document.body.appendChild(chat);
      }

      // Initialize once the SDK is ready
      window.fbAsyncInit = function () {
        try {
          if (window.FB && typeof window.FB.init === "function") {
            window.FB.init({ 
              xfbml: true, 
              version: "v21.0",
              appId: PAGE_ID // Use your page ID as app ID
            });
            setIsSDKLoaded(true);
          }
        } catch (error) {
          console.error("Facebook SDK initialization error:", error);
        }
      };

      // Load the SDK with retry logic
      const loadSdk = (i = 0, attempt = 1) => {
        const existing = document.getElementById("facebook-jssdk");
        if (existing) existing.remove();

        const locale = LOCALES[Math.min(i, LOCALES.length - 1)];
        const js = document.createElement("script");
        js.id = "facebook-jssdk";
        js.async = true;
        js.defer = true;
        js.src = `https://connect.facebook.net/${locale}/sdk/xfbml.customerchat.js`;
        js.onerror = () => {
          if (attempt < 2) setTimeout(() => loadSdk(i, attempt + 1), 1200);
          else if (i + 1 < LOCALES.length) setTimeout(() => loadSdk(i + 1, 1), 1200);
        };
        document.body.appendChild(js);
      };

      loadSdk();
    };

    // Load Messenger Extensions SDK if in Messenger webview
    const loadMessengerExtensionsSDK = () => {
      // Check if already loaded
      if (document.getElementById("Messenger")) {
        return;
      }

      const script = document.createElement("script");
      script.id = "Messenger";
      script.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
      script.onload = () => {
        console.log("Messenger Extensions SDK loaded");
      };
      script.onerror = (error) => {
        console.error("Failed to load Messenger Extensions SDK:", error);
      };
      document.body.appendChild(script);
    };

    // Initialize Messenger Extensions when SDK is ready
    window.extAsyncInit = function() {
      console.log("Messenger Extensions SDK is done loading");
      
      // Example: Get conversation context
      if (window.MessengerExtensions) {
        window.MessengerExtensions.getContext(
          PAGE_ID,
          function success(result) {
            console.log("Messenger context:", result);
          },
          function error(errorCode, errorMessage) {
            console.error("Messenger context error:", errorCode, errorMessage);
          }
        );
      }
    };

    // Load appropriate SDK based on context
    if (isMessengerWebview) {
      loadMessengerExtensionsSDK();
    } else {
      loadCustomerChatSDK();
    }

    // Cleanup function
    return () => {
      const existingScripts = [
        document.getElementById("facebook-jssdk"),
        document.getElementById("Messenger")
      ];
      existingScripts.forEach(script => {
        if (script) script.remove();
      });
    };
  }, [isMessengerWebview]);

  // Custom chat widget state
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: "Hi! Welcome to Pizza Master & The Slice! I'm here to help you with our menu, catering services, and any questions you might have. What would you like to know?", 
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFAQs, setShowFAQs] = useState(false);
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);

  // Search FAQ functionality
  const searchFAQs = (query) => {
    if (!query.trim()) {
      setFilteredFAQs(faqData);
      return;
    }
    
    const filtered = faqData.filter(faq => 
      faq.question.toLowerCase().includes(query.toLowerCase()) ||
      faq.answer.toLowerCase().includes(query.toLowerCase()) ||
      faq.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredFAQs(filtered);
  };

  // Handle FAQ selection
  const handleFAQSelect = (faq) => {
    const faqMessage = {
      id: Date.now(),
      text: `**${faq.question}**\n\n${faq.answer}`,
      isBot: true,
      timestamp: new Date(),
      isFAQ: true
    };
    setMessages(prev => [...prev, faqMessage]);
    setShowFAQs(false);
    setSearchQuery("");
  };

  // Pizza menu items from Menu.jsx
  const pizzaMenuItems = [
    { name: "Garlic Pizza", price: "$25", category: "Classic", description: "Fresh garlic sauce, fior di latte, and oregano" },
    { name: "Margherita", price: "$25", category: "Classic", description: "San Marzano tomato sauce, Pecorino Romano, fior di latte mozzarella, fresh basil, and a drizzle of extra virgin olive oil" },
    { name: "The Meat feast", price: "$25", category: "Classic", description: "Rich BBQ sauce (or traditional tomato base), layered with creamy fior di latte mozzarella, spicy pepperoni, succulent ham, and tender roasted chicken" },
    { name: "Pepperoni with spicy honey", price: "$25", category: "Classic", description: "Napoli sauce, fior di latte mozzarella, spicy pepperoni, finished with a drizzle of hot honey" },
    { name: "Pizzamaster Special", price: "$25", category: "Specialty", description: "Creamy fior di latte, slices of mortadella, topped with fresh buffalo mozzarella and finished with pistachio pesto and basil" },
    { name: "Hawaiian pizza", price: "$25", category: "Classic", description: "San Marzano tomato sauce, fior di latte mozzarella, ham and pineapple" },
    { name: "Vegetarian", price: "$25", category: "Vegetarian", description: "San Marzano tomato, olives, mushroom, onion, fior di latte, basil" },
    { name: "Truffle mushroom", price: "$25", category: "Specialty", description: "White base, fior di latte, mushroom, oregano, truffle oil, pecorino cheese" },
    { name: "Vegan pizza", price: "$25", category: "Vegan", description: "San Marzano tomato, olives, vegan cheese, mushroom, onion, extra virgin olive oil" },
    { name: "Capricciosa", price: "$25", category: "Classic", description: "San Marzano tomato, fior di latte, mushroom, ham and olives" },
    { name: "Nutella pizza", price: "$25", category: "Dessert", description: "With strawberry and chocolate sauce" }
  ];

  // Pizza packages
  const pizzaPackages = [
    { name: "THE DELUXE", price: "$45.99", description: "Premium experience with antipasto platter, unlimited drinks, and dessert", minGuests: 40 },
    { name: "THE SUPREME", price: "$35.99", description: "Perfect balance of premium pizzas, drinks, and dessert", minGuests: 30 },
    { name: "THE CLASSIC", price: "$29.99", description: "Great value with unlimited pizzas and dessert", minGuests: 30 }
  ];

  // Check if user is asking for a specific pizza
  const findPizzaInQuery = (query) => {
    const lowerQuery = query.toLowerCase();
    return pizzaMenuItems.find(pizza => 
      lowerQuery.includes(pizza.name.toLowerCase()) ||
      lowerQuery.includes(pizza.name.toLowerCase().replace(/\s+/g, '')) ||
      // Handle common variations
      (pizza.name === "The Meat feast" && (lowerQuery.includes("meat feast") || lowerQuery.includes("meatfeast"))) ||
      (pizza.name === "Pepperoni with spicy honey" && (lowerQuery.includes("pepperoni") && lowerQuery.includes("honey"))) ||
      (pizza.name === "Pizzamaster Special" && (lowerQuery.includes("pizzamaster") || lowerQuery.includes("special"))) ||
      (pizza.name === "Hawaiian pizza" && lowerQuery.includes("hawaiian")) ||
      (pizza.name === "Truffle mushroom" && (lowerQuery.includes("truffle") || lowerQuery.includes("mushroom"))) ||
      (pizza.name === "Vegan pizza" && lowerQuery.includes("vegan")) ||
      (pizza.name === "Nutella pizza" && (lowerQuery.includes("nutella") || lowerQuery.includes("dessert")))
    );
  };

  // Check if user is asking for a pizza package
  const findPackageInQuery = (query) => {
    const lowerQuery = query.toLowerCase();
    return pizzaPackages.find(pkg => 
      lowerQuery.includes(pkg.name.toLowerCase()) ||
      lowerQuery.includes(pkg.name.toLowerCase().replace(/\s+/g, '')) ||
      (pkg.name === "THE DELUXE" && (lowerQuery.includes("deluxe") || lowerQuery.includes("premium"))) ||
      (pkg.name === "THE SUPREME" && (lowerQuery.includes("supreme") || lowerQuery.includes("middle"))) ||
      (pkg.name === "THE CLASSIC" && (lowerQuery.includes("classic") || lowerQuery.includes("basic")))
    );
  };

  // Handle menu navigation
  const handleMenuNavigation = (menuItem) => {
    const menuMessage = {
      id: Date.now(),
      text: `I'll take you to our ${menuItem} page!`,
      isBot: true,
      timestamp: new Date(),
      isNavigation: true,
      navigationLink: `/menu#${menuItem.toLowerCase().replace(/\s+/g, '-')}`
    };
    setMessages(prev => [...prev, menuMessage]);
    
    // Navigate to menu page
    setTimeout(() => {
      navigate('/menu');
    }, 1000);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { 
      id: Date.now(), 
      text: inputMessage, 
      isBot: false, 
      timestamp: new Date() 
    };
    setMessages(prev => [...prev, userMessage]);
    const userQuery = inputMessage.toLowerCase();
    setInputMessage("");

    // Smart response based on user input
    setTimeout(() => {
      let botResponse = "";
      let isFAQ = false;
      let isNavigation = false;
      let navigationLink = "";

      // Check for specific pizza queries first
      const foundPizza = findPizzaInQuery(userQuery);
      if (foundPizza) {
        botResponse = `Yes! We have ${foundPizza.name} on our menu! 🍕\n\n**${foundPizza.name}** (${foundPizza.price})\n${foundPizza.description}\n\nCategory: ${foundPizza.category}\n\nWould you like to see it on our full menu?`;
        isNavigation = true;
        navigationLink = "/menu";
      }
      // Check for pizza package queries
      else if (findPackageInQuery(userQuery)) {
        const foundPackage = findPackageInQuery(userQuery);
        botResponse = `Great choice! We offer ${foundPackage.name} package! 🍕\n\n**${foundPackage.name}** (${foundPackage.price} per person)\n${foundPackage.description}\n\nMinimum guests: ${foundPackage.minGuests}\n\nWould you like to see all our packages on our menu?`;
        isNavigation = true;
        navigationLink = "/menu";
      }
      // Check for menu-related queries
      else if (userQuery.includes('menu') || userQuery.includes('pizza') || userQuery.includes('order')) {
        botResponse = "I'd be happy to help you with our menu! We offer a variety of authentic pizzas including Margherita, Pepperoni, Quattro Stagioni, and many more. Would you like me to show you our full menu?";
        isNavigation = true;
        navigationLink = "/menu";
      }
      // Check for catering queries
      else if (userQuery.includes('catering') || userQuery.includes('event') || userQuery.includes('party')) {
        botResponse = "Great! We offer mobile pizza catering services for events, weddings, and parties. Our wood-fired pizza truck brings authentic pizza directly to your location. Would you like to learn more about our catering services?";
        isNavigation = true;
        navigationLink = "/#catering";
      }
      // Check for chef queries
      else if (userQuery.includes('chef') || userQuery.includes('ashish')) {
        botResponse = "Chef Ashish Silwal is our master pizza chef from Adelaide, Australia. He brings authentic pizza-making expertise and passion to every pizza we create. You can learn more about him on our About page!";
        isNavigation = true;
        navigationLink = "/about";
      }
      // Check for location queries
      else if (userQuery.includes('location') || userQuery.includes('adelaide') || userQuery.includes('where')) {
        botResponse = "We are based in Adelaide, Australia, and serve the entire Adelaide community with our mobile pizza services. We bring our pizza truck directly to your location!";
      }
      // Check for contact queries
      else if (userQuery.includes('contact') || userQuery.includes('phone') || userQuery.includes('call')) {
        botResponse = "You can contact us through our Facebook page or reach out directly. For immediate assistance, I recommend using our Facebook Messenger chat for faster response!";
      }
      // Check for price queries
      else if (userQuery.includes('price') || userQuery.includes('cost') || userQuery.includes('how much')) {
        botResponse = "Our pizza prices range from $18 to $30 depending on the type and ingredients. For example, Margherita is $18, Pepperoni is $22, and our Supreme pizza is $28. Would you like to see our full menu with all prices?";
        isNavigation = true;
        navigationLink = "/menu";
      }
      // Check for vegetarian queries
      else if (userQuery.includes('vegetarian') || userQuery.includes('veggie') || userQuery.includes('vegan')) {
        botResponse = "Yes! We have several vegetarian options including our Vegetarian Pizza ($24), Mediterranean ($26), and Four Cheese ($24). We also have Quattro Stagioni which can be made vegetarian. Would you like to see our full vegetarian selection?";
        isNavigation = true;
        navigationLink = "/menu";
      }
      // Default response
      else {
        botResponse = "I understand you're looking for information. Let me show you some frequently asked questions that might help, or you can ask me about our menu, catering services, or contact information.";
        setShowFAQs(true);
      }

      const botMessage = { 
        id: Date.now() + 1, 
        text: botResponse, 
        isBot: true, 
        timestamp: new Date(),
        isFAQ,
        isNavigation,
        navigationLink
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  // Don't render custom chat if in Messenger webview or if Facebook chat is loaded
  if (isMessengerWebview || isSDKLoaded) {
    return null;
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50 transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {/* Generic Chat Icon */}
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl z-50 border border-gray-200 flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-woodbrown-600 to-woodbrown-700 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg">Pizza Master & The Slice</h3>
                <p className="text-sm opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* FAQ Search */}
          {showFAQs && (
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-2 mb-3">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-woodbrown-500"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    searchFAQs(e.target.value);
                  }}
                />
              </div>
              <div className="max-h-32 overflow-y-auto">
                {filteredFAQs.map((faq) => (
                  <button
                    key={faq.id}
                    onClick={() => handleFAQSelect(faq)}
                    className="block w-full text-left p-2 hover:bg-woodbrown-100 rounded-md text-sm transition-colors"
                  >
                    <div className="font-medium text-woodbrown-800">{faq.question}</div>
                    <div className="text-xs text-gray-600 mt-1">{faq.type}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{message.text}</div>
                  {message.isNavigation && message.navigationLink && (
                    <button
                      onClick={() => navigate(message.navigationLink)}
                      className="mt-2 px-3 py-1 bg-woodbrown-600 text-white text-xs rounded-md hover:bg-woodbrown-700 transition-colors"
                    >
                      Go to {message.navigationLink.includes('menu') ? 'Menu' : 'Page'}
                    </button>
                  )}
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Messenger Link */}
          <div className="p-4 border-t border-woodbrown-300 bg-woodbrown-50">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-sm text-woodbrown-700">For immediate assistance,</p>
                <p className="text-sm text-woodbrown-700">Contact us on</p>
              </div>
              <a
                href="https://m.me/61578603166709"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/512px-Facebook_Messenger_logo_2020.svg.png?20220118041828" 
                  alt="Messenger" 
                  className="w-5 h-5"
                />
                <span className="text-sm">Messenger</span>
              </a>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about our menu, catering, or services..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-woodbrown-500 text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-woodbrown-600 text-white rounded-lg hover:bg-woodbrown-700 transition-colors text-sm font-medium"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}