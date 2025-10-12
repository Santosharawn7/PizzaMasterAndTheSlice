import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 69, 19, 0.3), rgba(139, 69, 19, 0.3)), url('http://fornopiombo.com/cdn/shop/articles/The-Best-Pizza-Dough-Recipe-for-A-Wood-Fired-Pizza-Oven.jpg?v=1650287947')`
        }}
      />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-beigelight-50 mb-4 font-serif italic">
          Buon Appetito!
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-beigelight-50 mb-6 font-serif">
          Pizza Master & The Slice
        </h1>
        <h3 className="text-3xl md:text-5xl font-bold text-beigelight-100 mb-6">
          MOBILE PIZZA CATERING
        </h3>
        <h4 className="text-2xl md:text-3xl font-bold text-beigelight-100 mb-8">
          ADELAIDE • WOOD-FIRED • & THE SLICE
        </h4>
        <p className="text-lg md:text-xl text-beigelight-200 mb-8 max-w-2xl mx-auto">
          We'll bring the wood-fired pizza truck to you! Book our mobile pizza catering service for unforgettable events
        </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 {/* <Link
                   to="/booking"
                   className="inline-block bg-woodbrown-600 hover:bg-woodbrown-700 text-beigelight-50 font-bold py-4 px-8 rounded-lg transition-colors"
                 >
                   BOOK NOW
                 </Link> */}
                 <Link
                   to="/menu"
                   className="inline-block bg-transparent border-2 border-beigelight-100 text-beigelight-100 hover:bg-beigelight-100 hover:text-woodbrown-800 font-bold py-4 px-8 rounded-lg transition-colors"
                 >
                   VIEW MENU
                 </Link>
               </div>
      </div>
    </section>
  );
};

export default Hero;
