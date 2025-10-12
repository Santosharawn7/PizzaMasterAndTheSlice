import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const About = () => {
  // Navigation items are now handled by the centralized Navigation component

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen light-wood-texture">
      <Header 
        pageType="about" 
        activeSection="about" 
        scrollToSection={scrollToSection} 
      />
      
      {/* About Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://i.imgur.com/V55UCGw.jpeg"
            alt="Owners"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center w-full pb-2">
            <h1 className="text-5xl md:text-6xl font-bold text-beigelight-100 mb-4 font-serif italic drop-shadow-lg">
              About Pizza Master & The Slice
            </h1>
            <p className="text-xl md:text-2xl text-beigelight-200 max-w-3xl mx-auto drop-shadow-md">
              Discover the passion, tradition, and expertise behind Adelaide's premier mobile pizza catering service.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Story Section */}
      <section className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-woodbrown-800 mb-6 font-serif italic">
                Meet Chef Ashish Silwal
              </h2>
              <p className="text-lg text-woodbrown-700 mb-6">
                Born and raised in Adelaide, Australia, Chef Ashish Silwal has dedicated his life to perfecting 
                the art of wood-fired pizza making. With over a decade of experience in authentic Italian cuisine, 
                Ashish brings the traditional techniques of Naples to the heart of South Australia.
              </p>
              <p className="text-lg text-woodbrown-700 mb-6">
                His journey began with a simple passion for creating authentic, delicious pizzas that bring people 
                together. After years of training with master pizza chefs and perfecting his craft, Ashish decided 
                to share his expertise with the Adelaide community through his mobile pizza catering service.
              </p>
              <p className="text-lg text-woodbrown-700 mb-8">
                Every pizza crafted by Chef Ashish is a testament to his commitment to quality, authenticity, 
                and the joy of bringing people together over great food.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://i.imgur.com/3r7iBuE.jpeg"
                alt="Chef Ashish Silwal"
                className="rounded-full shadow-xl w-full max-w-md mx-auto border-4 border-woodbrown-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
              Professional Certifications
            </h2>
            <p className="text-xl text-woodbrown-700 max-w-3xl mx-auto">
              Chef Ashish's commitment to excellence is backed by professional certifications and continuous learning.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
              <img
                src="https://i.imgur.com/DDsi693.png"
                alt="Chef Ashish Silwal's Certifications"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-beigelight-100 mb-4 font-serif italic">
              Our Mission
            </h2>
            <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
              To bring the authentic Italian pizza experience directly to your events, creating memorable 
              moments through exceptional food and service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold text-beigelight-100 mb-2">Authentic Tradition</h3>
              <p className="text-beigelight-200">
                Using traditional Neapolitan techniques and the finest ingredients to create authentic Italian pizzas.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-beigelight-100 mb-2">Exceptional Service</h3>
              <p className="text-beigelight-200">
                Professional, friendly service that ensures your event is memorable and stress-free.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-beigelight-100 mb-2">Community Focus</h3>
              <p className="text-beigelight-200">
                Supporting the Adelaide community by bringing authentic pizza experiences to local events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
              Why Choose Pizza Master & The Slice?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">Wood-Fired Excellence</h3>
              <p className="text-woodbrown-700 mb-4">
                Our mobile wood-fired oven brings the authentic Italian experience to your doorstep. 
                The high temperatures and traditional cooking methods create the perfect crispy crust 
                and melted cheese that only wood-fired cooking can achieve.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">Fresh, Quality Ingredients</h3>
              <p className="text-woodbrown-700 mb-4">
                We source only the finest ingredients, from our hand-kneaded dough to our premium 
                toppings. Every ingredient is carefully selected to ensure the highest quality and 
                authentic taste in every bite.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">Interactive Experience</h3>
              <p className="text-woodbrown-700 mb-4">
                Watch as your pizzas are crafted right before your eyes! Our mobile setup creates 
                an engaging, interactive experience that adds excitement and entertainment to your event.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">Flexible & Reliable</h3>
              <p className="text-woodbrown-700 mb-4">
                From intimate gatherings to large celebrations, we adapt to your needs. Our professional 
                team ensures punctual arrival, smooth service, and a memorable experience for all your guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer 
        pageType="about" 
        scrollToSection={scrollToSection} 
      />
      <ChatWidget />
    </div>
  );
};

export default About;
