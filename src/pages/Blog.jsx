import React from 'react';
import caaa from "../assets/image/caaa.jpg"
import reaaa from "../assets/image/reaaa.jpg"
import ca2 from "../assets/image/ca2.jpg"
import AnimatedSection from '../components/AnimatedSection';

const Blog = () => {
  const features = [
    {
      id: 1,
      title: "Premium Quality Beans",
      description: "We source only the finest coffee beans from sustainable farms around the world, flavorful, and ethically produced.",
      image: caaa
    },
    {
      id: 2,
      title: "Freshness Guaranteed", 
      description: "Our beans are roasted to perfection and shipped directly to your door, ensuring the freshest possible coffee every time.",
      image: reaaa
    },
    {
      id: 3,
      title: "Variety of Options",
      description: "Whether you're a fan of bold espressos, smooth lattes, or refreshing cold brews, we have a coffee to suit every taste.",
      image: ca2
    },
  ];

  return (
    <AnimatedSection>
    <section className="bg-[#241414] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-amber-200 text-lg max-w-2xl mx-auto">
            𝐹𝓇𝑜𝓂 𝒷𝑒𝒶𝓃 𝓉𝑜 𝒸𝓊𝓅, 𝓌𝑒 𝑒𝓃𝓈𝓊𝓇𝑒 𝑒𝓋𝑒𝓇𝓎 𝓈𝒾𝓅 𝒾𝓈 𝒶 𝓅𝓇𝑒𝓂𝒾𝓊𝓂 𝑒𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.slice(0, 3).map((feature) => (
            <div 
              key={feature.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 hover:bg-white/15 border border-white/20"
            >
              {/* Image */}
              <div className="h-48 mb-6 rounded-lg overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Button */}
              <button className="flex items-center text-amber-400 hover:text-amber-300 font-medium transition-colors">
                <span className="mr-2">→</span>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Blog;