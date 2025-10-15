import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import { useScrollAnimation, useStaggerAnimation } from '../hooks/useScrollAnimation';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // GSAP Scroll Animation refs
  const heroRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.1 });
  const ourPizzasRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });
  const ourWorkRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });
  const ourVideosRef = useScrollAnimation({ animation: 'fadeInUp', delay: 0.2 });

  // Navigation items are now handled by the centralized Navigation component

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log('Gallery component is rendering');

  // Our Pizzas Section
  const ourPizzas = [
    {
      id: 1,
      src: "https://i.imgur.com/JR7WOsM.jpeg",
      title: "Our Pizzas",
      description: "A beautiful display of our authentic Italian pizzas",
      category: "Food"
    },
    {
      id: 2,
      src: "https://i.imgur.com/0SHQFSh.jpeg",
      title: "Margherita Pizza",
      description: "Classic Margherita with San Marzano tomatoes and fresh basil",
      category: "Food"
    },
    {
      id: 3,
      src: "https://i.imgur.com/sb0ilwL.jpeg",
      title: "Pepperoni with Spicy Honey",
      description: "Spicy pepperoni finished with a drizzle of hot honey",
      category: "Food"
    },
    {
      id: 4,
      src: "https://i.imgur.com/tte0yOz.jpeg",
      title: "Vegetarian Pizza",
      description: "Fresh vegetables and herbs on our signature crust",
      category: "Food"
    },
    {
      id: 5,
      src: "https://i.imgur.com/T6MW7d9.jpeg",
      title: "Nutella Pizza",
      description: "Sweet dessert pizza with Nutella and fresh strawberries",
      category: "Food"
    }
  ];

  // Our Work Section
  const ourWork = [
    {
      id: 6,
      src: "https://i.imgur.com/GQK0dSf.jpeg",
      title: "Our Pizza Station",
      description: "Our authentic wood-fired pizza oven where the magic happens",
      category: "Kitchen"
    },
    {
      id: 7,
      src: "https://i.imgur.com/V55UCGw.jpeg",
      title: "Owners",
      description: "Meet the passionate owners behind Pizza Master & The Slice",
      category: "Team"
    },
    {
      id: 8,
      src: "https://i.imgur.com/lnaEwCs.jpeg",
      title: "Chef at Work",
      description: "Chef Ashish Silwal crafting authentic Italian pizzas with passion",
      category: "Chef"
    },
    {
      id: 10,
      src: "https://i.imgur.com/pllf7hb.jpeg",
      title: "Wood-Fired Oven Setup",
      description: "Our mobile wood-fired oven ready for action at your event",
      category: "Equipment"
    },
    {
      id: 11,
      src: "https://i.imgur.com/8LdaoTw.jpeg",
      title: "Pizza Preparation Station",
      description: "Fresh ingredients and tools ready for authentic pizza creation",
      category: "Kitchen"
    },
    {
      id: 12,
      src: "https://i.imgur.com/2n9uVaC.jpeg",
      title: "Chef in Action",
      description: "Master chef demonstrating traditional pizza-making techniques",
      category: "Chef"
    },
    {
      id: 13,
      src: "https://i.imgur.com/DvzmyD6.jpeg",
      title: "Mobile Kitchen Setup",
      description: "Our fully equipped mobile pizza kitchen ready for any event",
      category: "Equipment"
    },
    {
      id: 14,
      src: "https://i.imgur.com/ltdSyDU.jpeg",
      title: "Event Service",
      description: "Serving fresh, hot pizzas directly to your guests",
      category: "Service"
    },
    {
      id: 15,
      src: "https://i.imgur.com/Zmu2Q8I.jpeg",
      title: "Team at Work",
      description: "Our dedicated team ensuring every pizza is perfect",
      category: "Team"
    },
    {
      id: 16,
      src: "https://i.imgur.com/tpUFiKp.jpeg",
      title: "Catering Setup",
      description: "Professional catering setup for your special occasion",
      category: "Service"
    }
  ];

  // Our Videos Section
  const ourVideos = [
    {
      id: 9,
      src: "https://i.imgur.com/5XAJJ3C.mp4",
      title: "Pizza Making Process",
      description: "Watch Chef Ashish in action creating authentic wood-fired pizzas",
      category: "Video",
      type: "video"
    }
  ];

  // Combine all images and videos for carousel
  const allGalleryItems = [...ourPizzas, ...ourWork, ...ourVideos];

  // Navigation functions for carousel
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? allGalleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === allGalleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Handle image click to open modal and set current index
  const handleImageClick = (item, index) => {
    setSelectedImage(item);
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen light-wood-texture">
      <Header pageType="gallery" activeSection="gallery" scrollToSection={scrollToSection} />

      {/* Gallery Hero Section */}
      <section ref={heroRef} className="pt-24 pb-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-beigelight-100 mb-6 font-serif italic">
            Our Gallery
          </h1>
          <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
            Take a visual journey through our authentic Italian pizza experience, from our wood-fired kitchen to our passionate team.
          </p>
        </div>
      </section>

      {/* Our Pizzas Section */}
      <section ref={ourPizzasRef} id="our-pizzas" className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
              Our Pizzas
            </h2>
            <p className="text-xl text-woodbrown-700 max-w-3xl mx-auto">
              Discover our authentic Italian pizzas, each crafted with passion and the finest ingredients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourPizzas.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleImageClick(image, index)}
              >
                <div className="relative h-80 md:h-96">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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

      {/* Our Work Section */}
      <section ref={ourWorkRef} id="our-work" className="py-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-beigelight-100 mb-4 font-serif italic">
              Our Work
            </h2>
            <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
              Behind the scenes of our authentic pizza-making process and the passionate team that makes it all possible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ourWork.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleImageClick(image, ourPizzas.length + index)}
              >
                <div className="relative h-80 md:h-96">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
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

      {/* Our Videos Section */}
      <section ref={ourVideosRef} id="our-videos" className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-woodbrown-800 mb-4 font-serif italic">
              Our Videos
            </h2>
            <p className="text-xl text-woodbrown-700 max-w-3xl mx-auto">
              Watch our master chef in action, creating authentic Italian pizzas with traditional techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {ourVideos.map((video, index) => (
              <div 
                key={video.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleImageClick(video, ourPizzas.length + ourWork.length + index)}
              >
                <div className="relative h-80 md:h-96">
                  <video
                    src={video.src}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Video Overlay Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-woodbrown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {video.category}
                      </span>
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1m16 0V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1m16 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8m16 0H3"/>
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{video.title}</h3>
                    <p className="text-beigelight-200 text-sm leading-relaxed">
                      {video.description}
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

      {/* Image/Video Carousel Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          ></div>
          
          {/* Modal Content */}
          <div className="relative max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
              </svg>
            </button>

            {/* Current Image/Video */}
            <div className="relative">
              {allGalleryItems[currentImageIndex]?.type === 'video' ? (
                <video
                  src={allGalleryItems[currentImageIndex].src}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  controls
                  autoPlay
                  muted
                  loop
                />
              ) : (
                <img
                  src={allGalleryItems[currentImageIndex]?.src}
                  alt={allGalleryItems[currentImageIndex]?.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              )}
              
              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-woodbrown-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {allGalleryItems[currentImageIndex]?.category}
                  </span>
                  <span className="text-white/70 text-sm">
                    {currentImageIndex + 1} / {allGalleryItems.length}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {allGalleryItems[currentImageIndex]?.title}
                </h2>
                <p className="text-beigelight-200 text-lg leading-relaxed">
                  {allGalleryItems[currentImageIndex]?.description}
                </p>
              </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex space-x-2">
                {allGalleryItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex 
                        ? 'bg-woodbrown-600' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
