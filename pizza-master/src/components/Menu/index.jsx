import { Link } from 'react-router-dom';

const Menu = () => {
  const featuredPizzas = [
    {
      id: 1,
      name: "Margherita",
      description: "Classic tomato sauce, mozzarella, fresh basil",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$18"
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Spicy pepperoni, mozzarella, tomato sauce",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$22"
    },
    {
      id: 3,
      name: "Quattro Stagioni",
      description: "Four seasons with artichokes, mushrooms, ham, olives",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$26"
    }
  ];

  return (
    <section id="menu" className="py-16 beige-gradient-vertical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
            Our Featured Pizzas
          </h2>
          <p className="text-xl text-woodbrown-700 max-w-3xl mx-auto">
            Discover our handcrafted pizzas made with the finest ingredients and traditional wood-fired techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredPizzas.map((pizza) => (
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
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-woodbrown-800 mb-2">{pizza.name}</h3>
                <p className="text-woodbrown-600 mb-4">{pizza.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block bg-woodbrown-600 hover:bg-woodbrown-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            SEE MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Menu;
