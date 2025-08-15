import React from 'react';
import { Link } from 'react-router-dom';

const BookaTable = () => {
  return (
    <div className="bg-[#241414] text-white min-h-screen flex items-center justify-center p-6">
      <div className="text-center max-w-lg mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#e2b84c] animate-pulse">
          Hold up! ☕
        </h2>
        <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">
          Hey bestie! ✨ Our table booking feature is on a quick glow-up.
          <br className="hidden sm:block" /> 
          No cap, it's gonna be a whole new vibe.
          We're adding some serious rizz to make it super easy for you.
          <br />
          Check back soon!
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 border border-[#e2b84c] rounded-full text-[#e2b84c] 
                     text-sm font-medium bg-transparent hover:bg-[#e2b84c]/20 hover:scale-105
                     transition-transform duration-300 ease-out"
        >
          Go Back to the Vibe
        </Link>
      </div>
    </div>
  );
};

export default BookaTable;
