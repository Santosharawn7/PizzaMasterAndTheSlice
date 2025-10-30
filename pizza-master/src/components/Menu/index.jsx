import { Link } from 'react-router-dom';

const Menu = () => {
  const featuredPackages = [
    {
      id: "classic",
      name: "THE CLASSIC",
      price: "$29.99 AUD",
      perPerson: true,
      description: "Great value with unlimited pizzas and dessert",
      minGuests: 30,
      duration: "2 hours",
      features: ["7 Pizza Varieties", "Unlimited Pizzas", "Dessert"],
      image: "https://i.imgur.com/0SHQFSh.jpeg"
    },
    {
      id: "supreme",
      name: "THE SUPREME",
      price: "$34.99 AUD",
      perPerson: true,
      description: "Perfect balance with unlimited pizzas, drinks, and dessert",
      minGuests: 30,
      duration: "2 hours",
      features: ["10 Pizza Varieties", "Unlimited Pizzas", "Unlimited Drinks", "Dessert"],
      image: "https://i.imgur.com/lWT7FDh.jpeg"
    },
    {
      id: "deluxe",
      name: "THE DELUXE",
      price: "$39.99 AUD",
      perPerson: true,
      description: "Premium experience with unlimited pizzas, antipasto platter, drinks, and dessert",
      minGuests: 40,
      duration: "2 hours",
      features: ["11 Pizza Varieties", "Unlimited Pizzas", "Antipasto Platter", "Unlimited Drinks", "Dessert"],
      image: "https://i.imgur.com/nht9EsV.jpeg"
    }
  ];

  return (
    <section id="menu" className="py-16 footer-gradient darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-beigelight-100 mb-4 font-serif italic">
            Our Pizza Packages
          </h2>
          <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
            Choose from our three premium catering packages, each designed to bring authentic wood-fired pizza to your special event.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredPackages.map((pkg) => (
            <Link key={pkg.id} to={`/menu#${pkg.id}`} className="block">
              <div className="bg-black/30 backdrop-blur-sm border border-white/20 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-woodbrown-600 text-white px-4 py-2 rounded-full text-base font-bold">
                  {pkg.price}
                </div>
                <div className="absolute top-4 left-4 bg-beigelight-200 text-woodbrown-800 px-3 py-2 rounded text-sm font-medium">
                  Min {pkg.minGuests} guests
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-white/90 mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-white mb-2">Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-white/80">
                        <svg className="w-3 h-3 text-white/70 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-sm text-white/70 mb-4">
                  Duration: {pkg.duration}
                </div>
              </div>
              </div>
            </Link>
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
