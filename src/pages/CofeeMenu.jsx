import React from "react";
import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import latte from "../assets/image/ca6.jpg";
import caramel from "../assets/image/ca5.jpg";
import vanilla from "../assets/image/ca4.jpg";
import coffeeCup from "../assets/image/ca3.jpg";
import flatWhite from "../assets/image/ca2.jpg";
import cinnamon from "../assets/image/ca1.jpg";
import AnimatedSection from "../components/AnimatedSection";

const coffeeItems = [
  { id: 1, name: "Latte Supreme", price: "$10.99", rating: 4.8, image: latte },
  { id: 2, name: "Caramel Cloud", price: "$12.99", rating: 4.9, image: caramel },
  { id: 3, name: "Vanilla Ember", price: "$14.99", rating: 4.7, image: vanilla },
  { id: 4, name: "Classic Brew", price: "$9.49", rating: 4.6, image: coffeeCup },
  { id: 5, name: "Flat White Bliss", price: "$11.99", rating: 4.9, image: flatWhite },
  { id: 6, name: "Cinnamon Spice", price: "$13.49", rating: 4.8, image: cinnamon },
];

const CoffeeGrid = () => {
  return (
    <AnimatedSection>
      <section className="bg-[#241414] text-white py-16 px-6" id="signature-coffees">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Signature Coffees</h2>
            <p className="text-gray-400 mt-2 max-w-xl mx-auto leading-relaxed">
              Taste the vibe ☕ — handcrafted blends, smooth vibes, and flavors that slap harder than your Monday alarm.
            </p>
          </div>

          {/* Coffee Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coffeeItems.map((coffee) => (
              <article
                key={coffee.id}
                className="group relative rounded-xl overflow-hidden shadow-lg bg-black/20
                           transform-gpu transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={coffee.image}
                    alt={coffee.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center 
                               will-change-transform transform-gpu
                               group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 w-full p-5 
                                bg-gradient-to-t from-black/80 via-black/50 to-transparent
                                group-hover:from-black/90 group-hover:via-black/70
                                transition-colors duration-300 ease-in-out">
                  <h3 className="text-lg font-semibold">{coffee.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center space-x-1 text-[#e2b84c]">
                      <Star size={16} fill="#e2b84c" />
                      <span className="text-sm">{coffee.rating}</span>
                    </div>
                    <p className="text-white font-bold">{coffee.price}</p>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <a href="#buy" className="text-sm underline hover:text-[#e2b84c] transition">
                      Buy Now
                    </a>
                    <button
                      aria-label="Add to favorites"
                      className="hover:text-[#e2b84c] transition"
                    >
                      <Heart size={20} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <Link
              to="/menu"
              className="inline-block px-6 py-3 border border-[#e2b84c] rounded-full 
                         text-[#e2b84c] text-sm font-medium bg-transparent
                         hover:bg-[#e2b84c]/20 hover:scale-105
                         transition-transform duration-300 ease-out"
            >
              𝒱𝒾𝑒𝓌 𝒜𝓁𝓁
            </Link>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default CoffeeGrid;
