import { Link } from 'react-router-dom';
import OurStory from "../../assets/OurStory.jpeg";

const Story = () => {
  return (
    <section id="story" className="py-16 footer-gradient darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-beigelight-100 mb-6 font-serif italic">
              Our Story
            </h2>
            <p className="text-lg text-beigelight-200 mb-6">
              Meet Chef Ashish Silwal, the passionate pizza master behind Pizza Master & The Slice. 
              Originally from Clare, South Australia, Ashish has dedicated his life to perfecting the 
              art of wood-fired pizza making.
            </p>
            <p className="text-lg text-beigelight-200 mb-6">
              With over a decade of experience in authentic Italian cuisine, Ashish brings the 
              traditional techniques of Naples to Adelaide, creating pizzas that are both 
              authentic and innovative. His wood-fired mobile pizza truck brings the authentic 
              Italian experience directly to your events.
            </p>
            <p className="text-lg text-beigelight-200 mb-8">
              Every pizza is crafted with love, using the finest ingredients and traditional 
              methods that have been passed down through generations of Italian pizza masters.
            </p>
            <Link 
              to="/about"
              className="inline-block bg-beigelight-100 hover:bg-beigelight-200 text-woodbrown-800 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              LEARN MORE
            </Link>
          </div>
          <div className="text-center">
            <img
              src={OurStory}
              alt="Chef Ashish Silwal"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
