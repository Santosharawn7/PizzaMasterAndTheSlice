const Catering = () => {
  return (
    <section id="catering" className="py-16 footer-gradient darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-beigelight-100 mb-4 font-serif italic">
            Mobile Pizza Catering
          </h2>
          <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
            We bring the authentic wood-fired pizza experience directly to your event. 
            From intimate gatherings to large celebrations, our mobile pizza truck delivers 
            fresh, delicious pizzas made right before your eyes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-beigelight-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">Events & Parties</h3>
            <p className="text-woodbrown-700 mb-4">
              Perfect for birthdays, anniversaries, corporate events, and family gatherings. 
              Our mobile setup creates an interactive dining experience.
            </p>
            <ul className="text-woodbrown-600 space-y-2">
              <li>• Interactive pizza making</li>
              <li>• Fresh ingredients</li>
              <li>• Professional service</li>
            </ul>
          </div>

          <div className="bg-beigelight-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">Corporate Catering</h3>
            <p className="text-woodbrown-700 mb-4">
              Elevate your business events with our premium pizza catering service. 
              Perfect for team building, client meetings, and company celebrations.
            </p>
            <ul className="text-woodbrown-600 space-y-2">
              <li>• Professional presentation</li>
              <li>• Dietary accommodations</li>
              <li>• Flexible scheduling</li>
            </ul>
          </div>

          <div className="bg-beigelight-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">Weddings & Special Occasions</h3>
            <p className="text-woodbrown-700 mb-4">
              Make your special day unforgettable with our wood-fired pizza catering. 
              A unique and delicious addition to any celebration.
            </p>
            <ul className="text-woodbrown-600 space-y-2">
              <li>• Custom menu options</li>
              <li>• Elegant presentation</li>
              <li>• Memorable experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
