import { useEffect, useState } from "react";

const PAGE_ID = "61578603166709"; // Updated to your Facebook Page ID
const LOCALES = ["en_US", "en_GB"];

export default function ChatWidget() {
  const [isMessengerWebview, setIsMessengerWebview] = useState(false);
  const [isSDKLoaded, setIsSDKLoaded] = useState(false);

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

  // Custom chat button for non-Messenger contexts
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi! Welcome to Pizza Master & The Slice! How can I help you today?", isBot: true }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = { id: Date.now(), text: inputMessage, isBot: false };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: "Thanks for your message! For direct chat, please visit our Facebook page or use the Messenger chat above.", 
        isBot: true 
      };
      setMessages(prev => [...prev, botResponse]);
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
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg z-50 transition-colors"
        aria-label="Open chat"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
        </svg>
      </button>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white rounded-lg shadow-xl z-50 border border-gray-200">
          {/* Chat Header */}
          <div className="bg-woodbrown-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold">Pizza Master & The Slice</h3>
            <p className="text-sm opacity-90">Customer Support</p>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
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