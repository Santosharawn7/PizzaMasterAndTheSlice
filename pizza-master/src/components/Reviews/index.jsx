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
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-woodbrown-700 mb-4">
              "Amazing experience! The pizza was incredible and the service was top-notch. 
              Our guests couldn't stop raving about it. Highly recommend!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                S
              </div>
              <div>
                <p className="font-semibold text-woodbrown-800">Sarah Johnson</p>
                <p className="text-sm text-woodbrown-600">Wedding Reception</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-woodbrown-700 mb-4">
              "Best pizza catering in Adelaide! The wood-fired oven made such a difference. 
              Fresh, hot, and absolutely delicious. Will definitely book again!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                M
              </div>
              <div>
                <p className="font-semibold text-woodbrown-800">Mike Chen</p>
                <p className="text-sm text-woodbrown-600">Corporate Event</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
            <p className="text-woodbrown-700 mb-4">
              "Incredible service from start to finish. The team was professional, 
              the pizza was outstanding, and everyone had a fantastic time. 10/10!"
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-woodbrown-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                L
              </div>
              <div>
                <p className="font-semibold text-woodbrown-800">Lisa Thompson</p>
                <p className="text-sm text-woodbrown-600">Birthday Party</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
