const Reviews = () => {
  return (
    <section id="reviews" className="py-16 beige-gradient-vertical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
            What Our Customers Say
          </h2>
          <p className="text-xl text-woodbrown-700 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers about their 
            experience with Pizza Master & The Slice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-2xl text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-woodbrown-700 mb-4">
              "Absolutely amazing pizza. The crust was perfectly crispy, the sauce tasted super fresh, and the toppings were spot on. I tried the pepperoni and Margherita — both were delicious. The staff were really friendly and quick, even with a line. You can tell they care about quality. Easily one of the best food trucks I’ve tried — highly recommend! 🍕🔥"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                B
              </div>
              <div>
                <p className="font-semibold text-lg text-woodbrown-800">Binaya Shrestha</p>
                {/* <p className="text-sm text-woodbrown-600">Wedding Reception</p> */}
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-2xl text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-woodbrown-700 mb-4">
              "This new pizza spot is a gem! The pizzas are delicious — crispy base, generous toppings, and full of flavour. Great service and welcoming atmosphere. Definitely my new favourite pizza place!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                U
              </div>
              <div>
                <p className="font-semibold text-lg text-woodbrown-800">Upasna Rajbhandari</p>
                {/* <p className="text-sm text-woodbrown-600">Corporate Event</p> */}
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-2xl text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-woodbrown-700 mb-4">
              "Absolutely loved the pizza from Pizza Master and The Slice! 🍕 It was so delicious, perfectly cheesy, and full of flavor. I haven’t had pizza like this before, every bite was amazing! Definitely coming back for more. Highly recommend!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                A
              </div>
              <div>
                <p className="font-semibold text-lg text-woodbrown-800">Albina Thapa</p>
                {/* <p className="text-sm text-woodbrown-600">Birthday Party</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
