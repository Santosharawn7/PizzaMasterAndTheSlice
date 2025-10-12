import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Navigation items are now handled by the centralized Navigation component

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log('Gallery component is rendering');

  const galleryImages = [
    {
      id: 1,
      src: "https://i.imgur.com/GQK0dSf.jpeg",
      title: "Our Pizza Station",
      description: "Our authentic wood-fired pizza oven where the magic happens",
      category: "Kitchen"
    },
    {
      id: 2,
      src: "https://i.imgur.com/V55UCGw.jpeg",
      title: "Owners",
      description: "Meet the passionate owners behind Pizza Master & The Slice",
      category: "Team"
    },
    {
      id: 3,
      src: "https://i.imgur.com/lnaEwCs.jpeg",
      title: "Chef at Work",
      description: "Chef Ashish Silwal crafting authentic Italian pizzas with passion",
      category: "Chef"
    },
    {
      id: 4,
      src: "https://i.imgur.com/JR7WOsM.jpeg",
      title: "Our Pizzas",
      description: "A beautiful display of our authentic Italian pizzas",
      category: "Food"
    },
    {
      id: 5,
      src: "https://i.imgur.com/5XAJJ3C.mp4",
      title: "Pizza Making Process",
      description: "Watch Chef Ashish in action creating authentic wood-fired pizzas",
      category: "Video",
      type: "video"
    }
  ];

  return (
    <div className="min-h-screen light-wood-texture">
      <Header pageType="gallery" activeSection="gallery" scrollToSection={scrollToSection} />

      {/* Gallery Hero Section */}
      <section className="pt-20 pb-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-beigelight-100 mb-6 font-serif italic">
            Our Gallery
          </h1>
          <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
            Take a visual journey through our authentic Italian pizza experience, from our wood-fired kitchen to our passionate team.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryImages.map((image) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-80 md:h-96">
                  {image.type === 'video' ? (
                    <video
                      src={image.src}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Image Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-woodbrown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                    <p className="text-beigelight-200 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer pageType="gallery" scrollToSection={scrollToSection} />
      <ChatWidget />

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Image/Video */}
            <div className="relative">
              {selectedImage.type === 'video' ? (
                <video
                  src={selectedImage.src}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  controls
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              )}
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-woodbrown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-beigelight-200 text-lg leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
