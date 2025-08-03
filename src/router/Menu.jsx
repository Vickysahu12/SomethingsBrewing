import React from 'react';

const Menu = () => {
  return (
    <section className="bg-[#241414] text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#e2b84c] mb-6">
          Menu’s in the Oven 🍽️🔥
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Hold up, fam! Our <span className="text-[#e2b84c]">epic menu</span> is 
          getting a glow-up. From boujee lattes ☕ to snacks that slap 😋 —  
          we’re cooking up a vibe you won’t wanna miss.  
        </p>
        <p className="text-sm md:text-base text-gray-400">
          Stay tuned... the drop’s coming soon 👀✨
        </p>
      </div>
    </section>
  );
};

export default Menu;
