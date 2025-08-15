import React from "react";
import CoffeeSplash from "../assets/image/cis.webp"
import { Star } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const Home = () => {
  return (
    <AnimatedSection>
    <section
      id="home"
      className="bg-[#241414] text-white min-h-screen flex flex-col items-center relative"
    >
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 max-w-lg space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
            Awaken Your <span className="text-[#e2b84c]">Senses</span>
            <br /> With Every Sip
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Discover hand-roasted blends from sustainable farms across the globe.
          </p>
          <a
            href="#shop"
            className="inline-block bg-[#e2b84c] text-black px-8 py-3 rounded-md font-semibold 
                      hover:bg-black hover:text-white transition-colors duration-300"
          >
            Taste Our Coffee
          </a>

          {/* Customers */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-6">
            <div className="flex -space-x-3">
              {[32, 44, 65, 72].map((id) => (
                <img
                  key={id}
                  src={`https://randomuser.me/api/portraits/${id % 2 === 0 ? "men" : "women"}/${id}.jpg`}
                  alt="Customer"
                  loading="lazy"
                  className="w-10 h-10 rounded-full border-2 border-[#241414]"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center space-x-1 text-[#e2b84c]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#e2b84c" />
                ))}
              </div>
              <p className="text-sm text-gray-300">Loved by 1000+ customers</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={CoffeeSplash}
            alt="Coffee Splash"
            loading="eager"
            fetchPriority="high"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-2xl animate-fadeIn"
          />
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Home;
