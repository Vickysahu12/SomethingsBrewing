import React from "react";
import bgImage from "../assets/image/shop.jpg"; // apna cozy background image add kar
import AnimatedSection from "../components/AnimatedSection";

const BookASeat = () => {
  return (
    <AnimatedSection>
    <section
      className="relative bg-[#241414] py-20 px-6 md:px-12 lg:px-20 text-white"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="relative container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Reserve Your Cozy Spot ☕
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Whether it’s a morning coffee with friends or a relaxing evening 
            with your favorite brew, make sure your seat is waiting for you. 
            Book now and let us serve you the perfect experience.
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e2b84c] outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e2b84c] outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-lg bg-black/30 border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-[#e2b84c] outline-none"
            />
            <select
              className="w-full p-4 rounded-lg bg-black/30 border border-white/20 text-white focus:ring-2 focus:ring-[#e2b84c] outline-none"
            >
              <option value="">Number of Guests</option>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num} className="text-black">
                  {num}
                </option>
              ))}
            </select>
            <input
              type="datetime-local"
              className="w-full p-4 rounded-lg bg-black/30 border border-white/20 text-white focus:ring-2 focus:ring-[#e2b84c] outline-none"
            />

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#d4b06c] to-[#e2b84c] text-black font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            >
              Reserve My Seat
            </button>
          </form>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default BookASeat;
