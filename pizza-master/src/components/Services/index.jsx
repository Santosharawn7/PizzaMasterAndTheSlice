import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <section id="services" className="py-16 beige-gradient-vertical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
            Our Services
          </h2>
          <p className="text-xl text-woodbrown-700 max-w-3xl mx-auto">
            From traditional Margherita to gourmet creations, we offer a wide variety of 
            wood-fired pizzas made with the finest ingredients and authentic techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black/30 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🍕</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Classic Pizzas</h3>
            <p className="text-white/90">
              Traditional favorites like Margherita, Pepperoni, and Hawaiian
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌟</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Gourmet Options</h3>
            <p className="text-white/90">
              Premium toppings and unique flavor combinations
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Vegetarian & Vegan</h3>
            <p className="text-white/90">
              Delicious plant-based options for all dietary preferences
            </p>
          </div>

          <div className="bg-black/30 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Custom Orders</h3>
            <p className="text-white/90">
              Personalized pizzas tailored to your specific requirements
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-block bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            VIEW FULL MENU
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
