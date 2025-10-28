import re
import json
from textblob import TextBlob
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

# Download required NLTK data (only needed once)
try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')

try:
    nltk.data.find('corpora/stopwords')
except LookupError:
    nltk.download('stopwords')

try:
    nltk.data.find('corpora/wordnet')
except LookupError:
    nltk.download('wordnet')

try:
    nltk.data.find('taggers/averaged_perceptron_tagger')
except LookupError:
    nltk.download('averaged_perceptron_tagger')

class PizzaMasterNLP:
    def __init__(self):
        self.lemmatizer = WordNetLemmatizer()
        self.stop_words = set(stopwords.words('english'))
        
        # Pizza-related keywords and their categories
        self.pizza_keywords = {
            'margherita': {'type': 'pizza', 'description': 'San Marzano tomato sauce, Pecorino Romano, fior di latte mozzarella, fresh basil, and a drizzle of extra virgin olive oil'},
            'margarita': {'type': 'pizza', 'description': 'San Marzano tomato sauce, Pecorino Romano, fior di latte mozzarella, fresh basil, and a drizzle of extra virgin olive oil'},
            'pepperoni': {'type': 'pizza', 'description': 'Napoli sauce, fior di latte mozzarella, spicy pepperoni, finished with a drizzle of hot honey'},
            'vegetarian': {'type': 'pizza', 'description': 'San Marzano tomato, olives, mushroom, onion, fior di latte, and basil'},
            'nutella': {'type': 'pizza', 'description': 'Sweet dessert pizza with Nutella and fresh strawberries'},
            'garlic': {'type': 'pizza', 'description': 'Fresh garlic sauce, fior di latte, and oregano'},
            'meat feast': {'type': 'pizza', 'description': 'Rich BBQ sauce, layered with creamy fior di latte mozzarella, spicy pepperoni, succulent ham, and tender roasted chicken'},
            'hawaiian': {'type': 'pizza', 'description': 'San Marzano tomato sauce, fior di latte mozzarella, ham and pineapple'},
            'truffle': {'type': 'pizza', 'description': 'White base, fior di latte, mushroom, oregano, truffle oil, and pecorino cheese'},
            'vegan': {'type': 'pizza', 'description': 'San Marzano tomato, olives, vegan cheese, mushroom, onion, and extra virgin olive oil'},
            'capricciosa': {'type': 'pizza', 'description': 'San Marzano tomato, fior di latte, mushroom, ham and olives'}
        }
        
        # Intent patterns
        self.intent_patterns = {
            'greeting': ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
            'farewell': ['bye', 'goodbye', 'see you', 'thanks', 'thank you'],
            'menu_inquiry': ['menu', 'pizza', 'food', 'order', 'what do you have', 'what can i get'],
            'pizza_specific': list(self.pizza_keywords.keys()),
            'contact': ['contact', 'email', 'phone', 'call', 'reach', 'get in touch'],
            'enquiry': ['enquiry', 'inquiry', 'ask', 'question', 'form', 'enquiry form', 'how to enquire', 'make enquiry', 'how to make enquiry', 'how can i enquire'],
            'booking': ['book', 'booking', 'reserve', 'schedule', 'appointment', 'how to book', 'make booking', 'reservation'],
            'owner': ['owner', 'who owns', 'who is the owner', 'founder', 'who runs'],
            'location': ['location', 'where', 'address', 'adelaide', 'australia'],
            'catering': ['catering', 'event', 'party', 'wedding', 'cater', 'mobile'],
            'pricing': ['price', 'cost', 'how much', 'expensive', 'cheap', 'budget'],
            'ingredients': ['ingredients', 'what is in', 'contains', 'made with', 'recipe'],
            'process': ['how is', 'how do you make', 'process', 'cooking', 'preparation'],
            'gallery': ['gallery', 'photos', 'pictures', 'images', 'see', 'show me'],
            'video': ['video', 'watch', 'see in action', 'making process'],
            'faq': ['faq', 'help', 'questions', 'frequently asked', 'support']
        }
        
        # Response templates
        self.response_templates = {
            'greeting': "Hello! Welcome to Pizza Master & The Slice! I'm here to help you with our authentic Italian pizzas, catering services, and any questions you might have. What would you like to know?",
            'farewell': "Thank you for chatting with us! Feel free to reach out anytime. Have a great day! 🍕",
            'contact': "You can contact us at pizzamaster2632@gmail.com or through our Facebook page. For immediate assistance, I recommend using our Facebook Messenger chat for faster response!",
            'enquiry': "You can make an enquiry through multiple ways: 1) Visit our enquiry page at /enquiry for a comprehensive form, 2) Email us at pizzamaster2632@gmail.com, 3) Call us at 0451 694 448, or 4) Chat with us on Facebook Messenger. We'll respond promptly to discuss your event needs!",
            'booking': "To book our mobile pizza catering services, you can: 1) Fill out our enquiry form on the enquiry page, 2) Email us at pizzamaster2632@gmail.com, 3) Call us at 0451 694 448, or 4) Message us on Facebook Messenger. We'll discuss your event details and provide a customized quote!",
            'owner': "The owners of Pizza Master & The Slice are passionate about bringing authentic Italian pizza to Clare, South Australia. You can see them in our gallery! Meet the passionate owners behind Pizza Master & The Slice.",
            'location': "We are based in Clare, South Australia (11 Temple Rd, Clare SA 5453), and serve the entire Clare and surrounding areas with our mobile pizza services. We bring our pizza truck directly to your location!",
            'catering': "Great! We offer mobile pizza catering services for events, weddings, and parties. Our wood-fired pizza truck brings authentic pizza directly to your location. Would you like to learn more about our catering services?",
            'pricing': "Our pizza prices range from $18 to $30 depending on the type and ingredients. For example, Margherita is $18, Pepperoni is $22, and our Supreme pizza is $28. Our catering packages are: Classic ($24.99 AUD/person), Supreme ($29.99 AUD/person), and Deluxe ($39.99 AUD/person). Would you like to see our full menu with all prices?",
            'process': "Our pizzas are made using traditional Italian methods with our wood-fired oven! We use authentic ingredients like San Marzano tomatoes, fior di latte mozzarella, fresh basil, and premium toppings. You can watch our chef in action in our videos!",
            'gallery': "Great! We have a beautiful gallery showcasing our pizzas, behind-the-scenes work, and videos. You can see our authentic Italian pizzas, our mobile kitchen setup, and watch our chef in action. Would you like to explore our gallery?",
            'video': "We have videos showing our pizza-making process! You can watch Chef Ashish in action creating authentic wood-fired pizzas. Check out our 'Our Videos' section in the gallery!",
            'faq': "Here are some frequently asked questions that might help you:"
        }

    def preprocess_text(self, text):
        """Clean and preprocess the input text"""
        # Convert to lowercase
        text = text.lower()
        
        # Remove special characters but keep spaces
        text = re.sub(r'[^a-zA-Z\s]', '', text)
        
        # Tokenize
        tokens = word_tokenize(text)
        
        # Remove stopwords and lemmatize
        processed_tokens = []
        for token in tokens:
            if token not in self.stop_words and len(token) > 2:
                lemmatized = self.lemmatizer.lemmatize(token)
                processed_tokens.append(lemmatized)
        
        return ' '.join(processed_tokens)

    def detect_intent(self, text):
        """Detect the user's intent from the text"""
        processed_text = self.preprocess_text(text)
        text_blob = TextBlob(processed_text)
        
        # Check for specific intents
        for intent, keywords in self.intent_patterns.items():
            for keyword in keywords:
                if keyword in processed_text:
                    return intent, keyword
        
        # If no specific intent found, analyze sentiment and context
        sentiment = text_blob.sentiment.polarity
        
        if sentiment > 0.1:
            return 'positive', 'positive_sentiment'
        elif sentiment < -0.1:
            return 'negative', 'negative_sentiment'
        else:
            return 'neutral', 'general_inquiry'

    def find_pizza_mention(self, text):
        """Find specific pizza mentions in the text"""
        processed_text = self.preprocess_text(text)
        
        for pizza_name, pizza_info in self.pizza_keywords.items():
            if pizza_name in processed_text:
                return pizza_name, pizza_info
        
        return None, None

    def generate_response(self, user_input):
        """Generate an intelligent response based on NLP analysis"""
        intent, keyword = self.detect_intent(user_input)
        pizza_name, pizza_info = self.find_pizza_mention(user_input)
        
        # Debug output
        print(f"DEBUG: Input: '{user_input}'")
        print(f"DEBUG: Intent: '{intent}', Keyword: '{keyword}'")
        print(f"DEBUG: Pizza: '{pizza_name}', Info: {pizza_info}")
        
        response_data = {
            'response': '',
            'navigation_link': '',
            'show_faq': False,
            'intent': intent,
            'confidence': 0.8
        }
        
        # Handle specific pizza mentions
        if pizza_name and pizza_info:
            response_data['response'] = f"Our {pizza_name.title()} pizza features {pizza_info['description']}. It's a delicious choice!"
            response_data['navigation_link'] = "/menu"
            return response_data
        
        # Handle intents
        if intent in self.response_templates:
            response_data['response'] = self.response_templates[intent]
            
            # Set navigation links based on intent
            if intent == 'gallery':
                response_data['navigation_link'] = "/gallery"
            elif intent == 'video':
                response_data['navigation_link'] = "/gallery#our-videos"
            elif intent == 'owner':
                response_data['navigation_link'] = "/gallery#our-work"
            elif intent in ['menu_inquiry', 'pricing', 'pizza_specific']:
                response_data['navigation_link'] = "/menu"
            elif intent == 'catering':
                response_data['navigation_link'] = "/#catering"
            elif intent == 'faq':
                response_data['show_faq'] = True
        
        # Handle sentiment-based responses
        elif intent == 'positive':
            response_data['response'] = "Thank you for the positive feedback! We're glad you're enjoying our service. Is there anything specific you'd like to know about our pizzas or services?"
        elif intent == 'negative':
            response_data['response'] = "I'm sorry to hear that. Please let us know how we can help improve your experience. You can contact us directly for immediate assistance."
        else:
            # Default response for neutral/general inquiries
            response_data['response'] = "I'm here to help! You can ask me about our menu, pizza packages, catering services, gallery, chef, or contact information. If you need help with something specific, just let me know!"
        
        return response_data

    def analyze_query(self, user_input):
        """Main function to analyze user query and return structured response"""
        try:
            # Basic input validation
            if not user_input or len(user_input.strip()) < 2:
                return {
                    'response': "Please ask me something about our pizzas or services!",
                    'navigation_link': '',
                    'show_faq': False,
                    'intent': 'invalid_input',
                    'confidence': 0.0
                }
            
            # Generate response using NLP
            result = self.generate_response(user_input)
            
            # Add some randomness to make responses feel more natural
            if result['intent'] == 'greeting':
                greetings = [
                    "Hello! Welcome to Pizza Master & The Slice!",
                    "Hi there! Great to see you here!",
                    "Hey! Welcome to our pizza family!"
                ]
                import random
                result['response'] = random.choice(greetings) + " I'm here to help you with our authentic Italian pizzas, catering services, and any questions you might have. What would you like to know?"
            
            return result
            
        except Exception as e:
            # Debug the actual error
            print(f"ERROR: {str(e)}")
            import traceback
            traceback.print_exc()
            
            # Fallback response in case of any errors
            return {
                'response': "I'm here to help! You can ask me about our menu, pizza packages, catering services, gallery, chef, or contact information. If you need help with something specific, just let me know!",
                'navigation_link': '',
                'show_faq': False,
                'intent': 'error_fallback',
                'confidence': 0.0
            }

# Create a global instance for easy importing
nlp_processor = PizzaMasterNLP()

def process_chat_query(user_input):
    """Main function to be called from the chat widget"""
    return nlp_processor.analyze_query(user_input)

# Example usage and testing
if __name__ == "__main__":
    # Test the NLP processor
    test_queries = [
        "Hello!",
        "What pizzas do you have?",
        "Tell me about margherita",
        "Who is the owner?",
        "What is your email?",
        "How do you make pizzas?",
        "I want to see your gallery",
        "Do you do catering?",
        "Thank you!",
        "What's the price of pepperoni?"
    ]
    
    print("Testing Pizza Master NLP Processor:")
    print("=" * 50)
    
    for query in test_queries:
        result = process_chat_query(query)
        print(f"Query: {query}")
        print(f"Intent: {result['intent']}")
        print(f"Response: {result['response']}")
        print(f"Navigation: {result['navigation_link']}")
        print("-" * 30)
