import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const Menu = () => {
  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'menu', label: 'MENU' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const allPizzas = [
    {
      id: 1,
      name: "Margherita",
      description: "The classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, basil, and extra virgin olive oil",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$18",
      category: "Classic"
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Spicy pepperoni slices with mozzarella cheese and tomato sauce",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$22",
      category: "Classic"
    },
    {
      id: 3,
      name: "Quattro Stagioni",
      description: "Four seasons pizza with artichokes, mushrooms, ham, and black olives",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$26",
      category: "Classic"
    },
    {
      id: 4,
      name: "Hawaiian",
      description: "Ham, pineapple, mozzarella cheese, and tomato sauce",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$24",
      category: "Classic"
    },
    {
      id: 5,
      name: "Supreme",
      description: "Pepperoni, sausage, bell peppers, onions, mushrooms, and olives",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$28",
      category: "Classic"
    },
    {
      id: 6,
      name: "BBQ Chicken",
      description: "BBQ sauce, grilled chicken, red onions, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$26",
      category: "Specialty"
    },
    {
      id: 7,
      name: "Vegetarian",
      description: "Bell peppers, mushrooms, onions, olives, tomatoes, and mozzarella",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$24",
      category: "Vegetarian"
    },
    {
      id: 8,
      name: "Buffalo Chicken",
      description: "Buffalo sauce, grilled chicken, red onions, and ranch drizzle",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$26",
      category: "Specialty"
    },
    {
      id: 9,
      name: "Meat Lovers",
      description: "Pepperoni, sausage, bacon, ham, and mozzarella cheese",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$30",
      category: "Classic"
    },
    {
      id: 10,
      name: "Mediterranean",
      description: "Feta cheese, olives, sun-dried tomatoes, artichokes, and fresh herbs",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$26",
      category: "Vegetarian"
    },
    {
      id: 11,
      name: "Pesto Chicken",
      description: "Basil pesto sauce, grilled chicken, cherry tomatoes, and mozzarella",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$26",
      category: "Specialty"
    },
    {
      id: 12,
      name: "Four Cheese",
      description: "Mozzarella, parmesan, gorgonzola, and ricotta cheese blend",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$24",
      category: "Vegetarian"
    }
  ];

  const categories = ["All", "Classic", "Specialty", "Vegetarian"];

  return (
    <div className="min-h-screen light-wood-texture">
      <Header 
        navItems={navItems} 
        activeSection="menu" 
        scrollToSection={scrollToSection} 
      />
      
      {/* Menu Hero Section */}
      <section className="pt-20 pb-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-beigelight-100 mb-6 font-serif italic">
              Our Complete Menu
            </h1>
            <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
              Explore our full selection of handcrafted pizzas, each made with premium ingredients and traditional wood-fired techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-8 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 bg-woodbrown-600 hover:bg-woodbrown-700 text-white rounded-full transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Pizza Grid */}
      <section className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPizzas.map((pizza) => (
              <div key={pizza.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-woodbrown-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {pizza.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-beigelight-200 text-woodbrown-800 px-2 py-1 rounded text-xs font-medium">
                    {pizza.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-woodbrown-800 mb-2">{pizza.name}</h3>
                  <p className="text-woodbrown-600 text-sm">{pizza.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-beigelight-100 mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-beigelight-200 mb-8 max-w-2xl mx-auto">
            Contact us to book our mobile pizza catering service for your next event!
          </p>
          <button className="bg-beigelight-100 hover:bg-beigelight-200 text-woodbrown-800 font-bold py-3 px-8 rounded-lg transition-colors">
            BOOK NOW
          </button>
        </div>
      </section>

      <Footer 
        navItems={navItems} 
        scrollToSection={scrollToSection} 
      />
      <ChatWidget />
    </div>
  );
};

export default Menu;
