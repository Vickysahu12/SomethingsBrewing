import React from 'react';

const Gallery = () => {
  return (
    <section className="bg-[#241414] text-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#e2b84c] mb-6">
          Insta-Worthy Vibes 📸✨
        </h1>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
          Our gallery is cooking fam — soon you’ll catch  
          jaw-dropping coffee shots ☕ + cozy vibes 🌿  
          that scream <span className="text-[#e2b84c]">aesthetic goals</span>.  
        </p>
        <p className="text-sm md:text-base text-gray-400">
          Keep your cameras ready — we finna drop 🔥📷
        </p>
      </div>
    </section>
  );
};

export default Gallery;
