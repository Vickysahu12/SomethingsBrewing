import React from 'react';

const About = () => {
  return (
    <section className="bg-[#241414] text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#e2b84c] mb-6">
          Yo, Chill! 🚀
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Our <span className="text-[#e2b84c]">About Page</span> is still 
          cooking ☕🔥. We’re brewing something super cool for y’all.  
          Stay tuned — it’s gonna be straight-up <span className="italic">lit</span>!  
        </p>
        <p className="text-sm md:text-base text-gray-400">
          (psst... grab your coffee, big things are coming soon 😉)
        </p>
      </div>
    </section>
  );
};

export default About;
