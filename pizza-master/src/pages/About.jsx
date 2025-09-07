import Header from "../components/Header";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";
import AboutMe from "../assets/AboutMe.jpg";
import PizzaCertificate from "../assets/PizzaCertificate.jpg";

const About = () => {
  const navItems = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "contact", label: "CONTACT" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen light-wood-texture">
      <Header
        navItems={navItems}
        activeSection="about"
        scrollToSection={scrollToSection}
      />

      {/* About Hero Section */}
      <section className="pt-20 pb-16 footer-gradient darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-beigelight-100 mb-6 font-serif italic">
              About Pizza Master & The Slice
            </h1>
            <p className="text-xl text-beigelight-200 max-w-3xl mx-auto">
              Discover the passion, tradition, and expertise behind Adelaide's
              premier mobile pizza catering service.
            </p>
          </div>
        </div>
      </section>

      {/* Chef Story Section */}
      <section className="py-16 beige-gradient-vertical">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:hidden flex justify-center mb-12">
            <img
              src={AboutMe}
              alt="Chef Ashish Silwal"
              className="rounded-full shadow-xl w-80 h-80 object-cover"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {" "}
            {/* Changed from items-center to items-start */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-woodbrown-800 mb-6 font-serif italic">
                About Chef Ashish Silwal
              </h2>
              <p className="text-lg text-woodbrown-700 mb-6">
                Meet Chef Ashish Silwal, a proud finalist of the 2025 Australian
                Pizza Awards and the passionate pizza master behind Pizza Master
                & The Slice.
              </p>
              <p className="text-lg text-woodbrown-700 mb-6">
                Originally from Nepal, my culinary journey began when I moved to
                Australia at the age of 19. While working at a local Italian
                pizzeria in Sydney, I discovered my love for pizza—a passion
                that inspired me to pursue formal culinary training and become a
                fully qualified chef. Over the years, I worked my way up from
                Chef de Partie to Sous Chef and eventually Head Chef, leading
                kitchens in well-known hotels and restaurants across South
                Australia.
              </p>
              <p className="text-lg text-woodbrown-700 mb-6">
                Specialising in Italian and Modern Australian cuisine, I’ve
                gained valuable experience in both casual pizzerias and fine
                dining establishments, shaping my approach to flavour,
                technique, and hospitality.
              </p>
              <p className="text-lg text-woodbrown-700 mb-6">
                In 2020, I followed my true passion for pizza and became a
                familiar face at Pizza Junkie Adelaide, where I helped bring
                vibrant, wood-fired flavour around Adelaide. With years of
                experience in authentic Italian cuisine, I bring the traditional
                techniques of Naples to Adelaide, creating pizzas that are both
                authentic and innovative. Today, through my wood-fired mobile
                pizza truck, I bring the true Italian pizza experience directly
                to private events, celebrations, and festivals.
              </p>
              <p className="text-lg text-woodbrown-700 mb-6">
                I specialise in a wide variety of styles including:
              </p>
              <ul className="list-disc list-inside text-lg text-woodbrown-700 mb-6">
                <li>Neapolitan</li>
                <li>New York</li>
                <li>Detroit</li>
                <li>Pizza Romana</li>
                <li>Focaccia</li>
              </ul>
              <p className="text-lg text-woodbrown-700 mb-8">
                In addition to crafting pizzas, I also work as a pizza
                consultant, helping established pizzerias refine their menus and
                guiding aspiring entrepreneurs to launch their own successful
                pizza ventures.
              </p>
            </div>
            <div className="flex flex-col items-center md:space-y-8">
              {/* Chef Photo */}
              <div className="hidden md:flex justify-center">
                <img
                  src={AboutMe}
                  alt="Chef Ashish Silwal"
                  className="rounded-full shadow-xl w-full max-w-md object-cover"
                />
              </div>

              {/* Pizza Certificate */}
              <div className="flex justify-center">
                <img
                  src={PizzaCertificate}
                  alt="Pizza Certificate"
                  className="shadow-xl w-full max-w-md"
                />
              </div>
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
              To bring the authentic Italian pizza experience directly to your
              events, creating memorable moments through exceptional food and
              service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-beigelight-50 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-2">
                Authentic Tradition
              </h3>
              <p className="text-woodbrown-600">
                Using traditional Neapolitan techniques and the finest
                ingredients to create authentic Italian pizzas.
              </p>
            </div>

            <div className="bg-beigelight-50 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-2">
                Exceptional Service
              </h3>
              <p className="text-woodbrown-600">
                Professional, friendly service that ensures your event is
                memorable and stress-free.
              </p>
            </div>

            <div className="bg-beigelight-50 p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-woodbrown-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-woodbrown-800 mb-2">
                Community Focus
              </h3>
              <p className="text-woodbrown-600">
                Supporting the Adelaide community by bringing authentic pizza
                experiences to local events.
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
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">
                Wood-Fired Excellence
              </h3>
              <p className="text-woodbrown-700 mb-4">
                Our mobile wood-fired oven brings the authentic Italian
                experience to your doorstep. The high temperatures and
                traditional cooking methods create the perfect crispy crust and
                melted cheese that only wood-fired cooking can achieve.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">
                Fresh, Quality Ingredients
              </h3>
              <p className="text-woodbrown-700 mb-4">
                We source only the finest ingredients, from our hand-kneaded
                dough to our premium toppings. Every ingredient is carefully
                selected to ensure the highest quality and authentic taste in
                every bite.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">
                Interactive Experience
              </h3>
              <p className="text-woodbrown-700 mb-4">
                Watch as your pizzas are crafted right before your eyes! Our
                mobile setup creates an engaging, interactive experience that
                adds excitement and entertainment to your event.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-woodbrown-800 mb-4">
                Flexible & Reliable
              </h3>
              <p className="text-woodbrown-700 mb-4">
                From intimate gatherings to large celebrations, we adapt to your
                needs. Our professional team ensures punctual arrival, smooth
                service, and a memorable experience for all your guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer navItems={navItems} scrollToSection={scrollToSection} />
      <ChatWidget />
    </div>
  );
};

export default About;
