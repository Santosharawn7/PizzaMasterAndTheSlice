// Natural Language Processing for Pizza Master Chat Widget
// JavaScript implementation of NLP logic for the chat widget

class PizzaMasterNLP {
  constructor() {
    // Pizza-related keywords and their categories
    this.pizzaKeywords = {
      'margherita': {
        type: 'pizza',
        description: 'San Marzano tomato sauce, Pecorino Romano, fior di latte mozzarella, fresh basil, and a drizzle of extra virgin olive oil'
      },
      'margarita': {
        type: 'pizza',
        description: 'San Marzano tomato sauce, Pecorino Romano, fior di latte mozzarella, fresh basil, and a drizzle of extra virgin olive oil'
      },
      'pepperoni': {
        type: 'pizza',
        description: 'Napoli sauce, fior di latte mozzarella, spicy pepperoni, finished with a drizzle of hot honey'
      },
      'vegetarian': {
        type: 'pizza',
        description: 'San Marzano tomato, olives, mushroom, onion, fior di latte, and basil'
      },
      'nutella': {
        type: 'pizza',
        description: 'Sweet dessert pizza with Nutella and fresh strawberries'
      },
      'garlic': {
        type: 'pizza',
        description: 'Fresh garlic sauce, fior di latte, and oregano'
      },
      'meat feast': {
        type: 'pizza',
        description: 'Rich BBQ sauce, layered with creamy fior di latte mozzarella, spicy pepperoni, succulent ham, and tender roasted chicken'
      },
      'meatfeast': {
        type: 'pizza',
        description: 'Rich BBQ sauce, layered with creamy fior di latte mozzarella, spicy pepperoni, succulent ham, and tender roasted chicken'
      },
      'hawaiian': {
        type: 'pizza',
        description: 'San Marzano tomato sauce, fior di latte mozzarella, ham and pineapple'
      },
      'truffle': {
        type: 'pizza',
        description: 'White base, fior di latte, mushroom, oregano, truffle oil, and pecorino cheese'
      },
      'vegan': {
        type: 'pizza',
        description: 'San Marzano tomato, olives, vegan cheese, mushroom, onion, and extra virgin olive oil'
      },
      'capricciosa': {
        type: 'pizza',
        description: 'San Marzano tomato, fior di latte, mushroom, ham and olives'
      }
    };

    // Intent patterns with improved matching
    this.intentPatterns = {
      greeting: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings'],
      farewell: ['bye', 'goodbye', 'see you', 'thanks', 'thank you', 'farewell', 'later'],
      menuInquiry: ['menu', 'pizza', 'food', 'order', 'what do you have', 'what can i get', 'offer', 'serve', 'what pizzas'],
      pizzaSpecific: Object.keys(this.pizzaKeywords),
      contact: ['contact', 'email', 'phone', 'call', 'reach', 'get in touch', 'how to contact', 'social', 'socials', 'social links', 'facebook', 'instagram', 'tiktok', 'messenger'],
      enquiry: ['enquiry', 'inquiry', 'ask', 'question', 'form', 'enquiry form', 'how to enquire', 'make enquiry', 'how to make enquiry', 'how can i enquire'],
      booking: ['book', 'booking', 'reserve', 'schedule', 'appointment', 'how to book', 'make booking', 'reservation'],
      owner: ['owner', 'who owns', 'who is the owner', 'founder', 'who runs', 'proprietor'],
      chef: ['chef', 'ashish', 'who is the chef', 'tell me about chef', 'about chef'],
      location: ['location', 'where', 'address', 'adelaide', 'australia', 'based'],
      catering: ['catering', 'event', 'party', 'wedding', 'cater', 'mobile', 'function'],
      pricing: ['price', 'cost', 'how much', 'expensive', 'cheap', 'budget', 'pricing', 'rates'],
      ingredients: ['ingredients', 'what is in', 'contains', 'made with', 'recipe', 'whats in'],
      process: ['how is', 'how do you make', 'process', 'cooking', 'preparation', 'how are made', 'how do you make pizzas'],
      gallery: ['gallery', 'photos', 'pictures', 'images', 'see', 'show me', 'visual', 'want to see your gallery'],
      video: ['video', 'watch', 'see in action', 'making process', 'footage'],
      faq: ['faq', 'help', 'questions', 'frequently asked', 'support', 'assistance']
    };

    // Response templates
    this.responseTemplates = {
      greeting: [
        "Hello! Welcome to Pizza Master & The Slice! I'm here to help you with our authentic Italian pizzas, catering services, and any questions you might have. What would you like to know?",
        "Hi there! Great to see you here! I'm your pizza assistant, ready to help with our menu, catering, or any questions you have. What can I help you with today?",
        "Hey! Welcome to our pizza family! I'm here to assist you with our authentic Italian pizzas and services. What would you like to know?"
      ],
      farewell: [
        "Thank you for chatting with us! Feel free to reach out anytime. Have a great day! 🍕",
        "Thanks for stopping by! We hope to serve you some delicious pizza soon. Take care!",
        "Goodbye! Don't hesitate to contact us if you need anything. Enjoy your day!"
      ],
      contact: "You can contact us at pizzamaster2632@gmail.com or through our social media:\n\n📧 Email: pizzamaster2632@gmail.com\n📷 Instagram: @pizzamaster_and_the_slice\n👥 Facebook: Pizza Master & The Slice\n🎵 TikTok: @pizzamaster.and.t\n💬 Messenger: Chat with us\n\nAll links are clickable and will take you directly to our social media pages!",
      enquiry: "You can make an enquiry through multiple ways:\n\n📝 **Enquiry Form**: Visit our enquiry page at /enquiry for a comprehensive form\n📧 **Email**: pizzamaster2632@gmail.com\n📞 **Phone**: 0451 694 448\n💬 **Messenger**: Chat with us directly\n\nWe'll respond promptly to discuss your event needs and provide a customized quote!",
      booking: "To book our mobile pizza catering services, you can:\n\n1️⃣ **Enquiry Form**: Fill out our detailed enquiry form on the enquiry page\n2️⃣ **Email**: Send details to pizzamaster2632@gmail.com\n3️⃣ **Phone**: Call us at 0451 694 448\n4️⃣ **Messenger**: Message us on Facebook Messenger\n\nWe'll discuss your event details, menu preferences, and provide a customized quote for your special occasion!",
      chef: "Chef Ashish Silwal is our master pizza chef from Clare, South Australia. He brings authentic pizza-making expertise and passion to every pizza we create. You can learn more about him on our About page!",
      owner: "The owners of Pizza Master & The Slice are passionate about bringing authentic Italian pizza to Clare, South Australia. You can see them in our gallery! Meet the passionate owners behind Pizza Master & The Slice.",
      location: "We are based in Clare, South Australia (11 Temple Rd, Clare SA 5453), and serve the entire Clare and surrounding areas with our mobile pizza services. We bring our pizza truck directly to your location!",
      catering: "Great! We offer mobile pizza catering services for events, weddings, and parties. Our wood-fired pizza truck brings authentic pizza directly to your location. Would you like to learn more about our catering services?",
      pricing: "Our pizza prices range from $18 to $30 depending on the type and ingredients. For example, Margherita is $18, Pepperoni is $22, and our Supreme pizza is $28. Our catering packages are: Classic ($29.99 AUD/person) with unlimited pizzas, Supreme ($34.99 AUD/person) with unlimited pizzas and drinks, and Deluxe ($39.99 AUD/person) with unlimited pizzas, antipasto platter, and drinks. Would you like to see our full menu with all prices?",
      process: "Our pizzas are made using traditional Italian methods with our wood-fired oven! We use authentic ingredients like San Marzano tomatoes, fior di latte mozzarella, fresh basil, and premium toppings. You can watch our chef in action in our videos!",
      menuInquiry: "I'd be happy to help you with our menu! We offer a variety of authentic pizzas including Margherita, Pepperoni, Vegetarian, Hawaiian, and many more. Would you like me to show you our full menu?",
      gallery: "Great! We have a beautiful gallery showcasing our pizzas, behind-the-scenes work, and videos. You can see our authentic Italian pizzas, our mobile kitchen setup, and watch our chef in action. Would you like to explore our gallery?",
      video: "We have videos showing our pizza-making process! You can watch Chef Ashish in action creating authentic wood-fired pizzas. Check out our 'Our Videos' section in the gallery!",
      faq: "Here are some frequently asked questions that might help you:"
    };

    // Common stop words for text processing
    this.stopWords = new Set([
      'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'he', 'in', 'is', 'it', 'its',
      'of', 'on', 'that', 'the', 'to', 'was', 'will', 'with', 'i', 'you', 'we', 'they', 'this', 'these',
      'those', 'am', 'are', 'is', 'was', 'were', 'been', 'being', 'have', 'has', 'had', 'having', 'do',
      'does', 'did', 'doing', 'can', 'could', 'should', 'would', 'may', 'might', 'must', 'shall'
    ]);
  }

  preprocessText(text) {
    // Convert to lowercase and clean
    let processed = text.toLowerCase()
      .replace(/[^\w\s]/g, ' ') // Remove punctuation
      .replace(/\s+/g, ' ') // Normalize whitespace
      .trim();

    // Remove stop words
    const words = processed.split(' ');
    const filteredWords = words.filter(word => 
      word.length > 2 && !this.stopWords.has(word)
    );

    return filteredWords.join(' ');
  }

    detectIntent(text) {
      const processedText = this.preprocessText(text);
      const words = processedText.split(' ');

      // Debug logging
      console.log('NLP Debug - Input text:', text);
      console.log('NLP Debug - Processed text:', processedText);

      // Check for specific intents with improved matching
      // Order matters - check more specific patterns first
      const orderedIntents = [
        'pizzaSpecific', 'process', 'gallery', 'video', 'catering', 'owner', 'chef', 'contact',
        'enquiry', 'booking', 'menuInquiry', 'pricing', 'ingredients', 'location', 'faq', 'greeting', 'farewell'
      ];

      for (const intent of orderedIntents) {
        const keywords = this.intentPatterns[intent];
        for (const keyword of keywords) {
          // Exact match
          if (processedText.includes(keyword)) {
            console.log('NLP Debug - Intent detected:', intent, 'Keyword:', keyword);
            return { intent, keyword, confidence: 0.9 };
          }
          
          // Partial match for multi-word keywords
          if (keyword.includes(' ') && processedText.includes(keyword)) {
            return { intent, keyword, confidence: 0.8 };
          }
          
          // Word boundary match
          const regex = new RegExp(`\\b${keyword}\\b`, 'i');
          if (regex.test(text)) {
            return { intent, keyword, confidence: 0.85 };
          }
        }
      }

    // Sentiment analysis (simplified)
    const positiveWords = ['good', 'great', 'excellent', 'amazing', 'delicious', 'love', 'like', 'wonderful'];
    const negativeWords = ['bad', 'terrible', 'awful', 'hate', 'dislike', 'poor', 'worst'];
    
    const hasPositive = positiveWords.some(word => processedText.includes(word));
    const hasNegative = negativeWords.some(word => processedText.includes(word));

    if (hasPositive) {
      return { intent: 'positive', keyword: 'positive_sentiment', confidence: 0.7 };
    } else if (hasNegative) {
      return { intent: 'negative', keyword: 'negative_sentiment', confidence: 0.7 };
    }

    return { intent: 'neutral', keyword: 'general_inquiry', confidence: 0.5 };
  }

  findPizzaMention(text) {
    const processedText = this.preprocessText(text);
    
    // Check for exact pizza name matches
    for (const [pizzaName, pizzaInfo] of Object.entries(this.pizzaKeywords)) {
      if (processedText.includes(pizzaName)) {
        return { pizzaName, pizzaInfo };
      }
    }

    // Check for partial matches
    for (const [pizzaName, pizzaInfo] of Object.entries(this.pizzaKeywords)) {
      const words = pizzaName.split(' ');
      if (words.length > 1) {
        const allWordsPresent = words.every(word => processedText.includes(word));
        if (allWordsPresent) {
          return { pizzaName, pizzaInfo };
        }
      }
    }

    return { pizzaName: null, pizzaInfo: null };
  }

  generateResponse(userInput) {
    const intentResult = this.detectIntent(userInput);
    const pizzaResult = this.findPizzaMention(userInput);
    
    const responseData = {
      response: '',
      navigationLink: '',
      showFaq: false,
      intent: intentResult.intent,
      confidence: intentResult.confidence
    };

    // Handle specific pizza mentions first (highest priority)
    if (pizzaResult.pizzaName && pizzaResult.pizzaInfo) {
      const pizzaName = pizzaResult.pizzaName.charAt(0).toUpperCase() + pizzaResult.pizzaName.slice(1);
      responseData.response = `Our ${pizzaName} pizza features ${pizzaResult.pizzaInfo.description}. It's a delicious choice!`;
      responseData.navigationLink = "/menu";
      responseData.confidence = 0.95;
      return responseData;
    }

    // Handle intents
    if (intentResult.intent in this.responseTemplates) {
      const template = this.responseTemplates[intentResult.intent];
      
      // Handle array responses (like greetings)
      if (Array.isArray(template)) {
        responseData.response = template[Math.floor(Math.random() * template.length)];
      } else {
        responseData.response = template;
      }

      // Set navigation links based on intent
      const navigationMap = {
        'gallery': "/gallery",
        'video': "/gallery#our-videos",
        'owner': "/gallery#our-work",
        'chef': "/about",
        'menuInquiry': "/menu",
        'pizzaSpecific': "/menu",
        'pricing': "/menu",
        'catering': "/#catering",
        'process': "/gallery#our-videos",
        'enquiry': "/enquiry",
        'booking': "/enquiry",
        'faq': null // Special case
      };

      if (intentResult.intent === 'faq') {
        responseData.showFaq = true;
      } else if (navigationMap[intentResult.intent]) {
        responseData.navigationLink = navigationMap[intentResult.intent];
      }
    }
    // Handle sentiment-based responses
    else if (intentResult.intent === 'positive') {
      responseData.response = "Thank you for the positive feedback! We're glad you're enjoying our service. Is there anything specific you'd like to know about our pizzas or services?";
    } else if (intentResult.intent === 'negative') {
      responseData.response = "I'm sorry to hear that. Please let us know how we can help improve your experience. You can contact us directly for immediate assistance.";
    } else {
      // Default response for neutral/general inquiries
      responseData.response = "I'm here to help! You can ask me about our menu, pizza packages, catering services, gallery, chef, or contact information. If you need help with something specific, just let me know!";
    }

    return responseData;
  }

  analyzeQuery(userInput) {
    try {
      // Basic input validation
      if (!userInput || userInput.trim().length < 2) {
        return {
          response: "Please ask me something about our pizzas or services!",
          navigationLink: '',
          showFaq: false,
          intent: 'invalid_input',
          confidence: 0.0
        };
      }

      // Generate response using NLP
      const result = this.generateResponse(userInput);
      
      // Add contextual improvements
      if (result.intent === 'greeting' && userInput.toLowerCase().includes('good')) {
        const timeOfDay = new Date().getHours();
        if (timeOfDay < 12) {
          result.response = result.response.replace('Hello!', 'Good morning!');
        } else if (timeOfDay < 17) {
          result.response = result.response.replace('Hello!', 'Good afternoon!');
        } else {
          result.response = result.response.replace('Hello!', 'Good evening!');
        }
      }

      return result;

    } catch (error) {
      console.error('NLP Processing Error:', error);
      // Fallback response in case of any errors
      return {
        response: "I'm here to help! You can ask me about our menu, pizza packages, catering services, gallery, chef, or contact information. If you need help with something specific, just let me know!",
        navigationLink: '',
        showFaq: false,
        intent: 'error_fallback',
        confidence: 0.0
      };
    }
  }
}

// Create a global instance
const nlpProcessor = new PizzaMasterNLP();

// Export function for use in chat widget
export function processChatQuery(userInput) {
  return nlpProcessor.analyzeQuery(userInput);
}

// For testing purposes
export function testNLP() {
  const testQueries = [
    "Hello!",
    "What pizzas do you have?",
    "Tell me about margherita",
    "Who is the owner?",
    "What is your email?",
    "How do you make pizzas?",
    "I want to see your gallery",
    "Do you do catering?",
    "Thank you!",
    "What's the price of pepperoni?",
    "Show me your meat feast pizza",
    "I love your garlic pizza",
    "Can I see videos of pizza making?"
  ];

  console.log("Testing Pizza Master NLP Processor:");
  console.log("=".repeat(50));

  testQueries.forEach(query => {
    const result = processChatQuery(query);
    console.log(`Query: ${query}`);
    console.log(`Intent: ${result.intent} (confidence: ${result.confidence})`);
    console.log(`Response: ${result.response}`);
    console.log(`Navigation: ${result.navigationLink}`);
    console.log(`Show FAQ: ${result.showFaq}`);
    console.log("-".repeat(30));
  });
}

// Default export
export default nlpProcessor;
