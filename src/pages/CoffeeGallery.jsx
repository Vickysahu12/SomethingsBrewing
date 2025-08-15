import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gallery1 from "../assets/image/gallery1.webp";
import gallery2 from "../assets/image/gallery2.webp";
import gallery3 from "../assets/image/gallery3.webp";
import gallery4 from "../assets/image/gallery4.webp";
import gallery5 from "../assets/image/gallery5.webp";
import gallery6 from "../assets/image/gallery6.webp";

const CoffeeGallery = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    imagesRef.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  const galleryImages = [gallery2, gallery3, gallery4, gallery5];

  return (
    <section className="bg-[#241414] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Explore the Journey of Coffee, from Farm to Cup
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Each image tells a story — from handpicked beans to the warmth of a
          freshly brewed cup. Step into our gallery and discover the rich
          visuals of coffee’s journey.
        </p>
      </div>

      {/* Gallery Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto">
        {/* Left Tall Image */}
        <div
          ref={(el) => imagesRef.current.push(el)}
          className="relative group overflow-hidden rounded-xl shadow-lg opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
        >
          <img
            src={gallery1}
            alt="Coffee Tall Left"
            loading="eager"
            decoding="async"
            className="w-full h-[500px] object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
            <span className="text-lg font-medium text-[#e2b84c]">View More</span>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => imagesRef.current.push(el)}
              className="relative group overflow-hidden rounded-xl shadow-lg opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
            >
              <img
                src={img}
                alt={`Coffee Story ${index + 2}`}
                loading="lazy"
                decoding="async"
                className="w-full h-[240px] object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
                <span className="text-lg font-medium text-[#e2b84c]">View More</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Tall Image */}
        <div
          ref={(el) => imagesRef.current.push(el)}
          className="relative group overflow-hidden rounded-xl shadow-lg opacity-0 translate-y-6 transition-all duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
        >
          <img
            src={gallery6}
            alt="Coffee Tall Right"
            loading="eager"
            decoding="async"
            className="w-full h-[500px] object-cover transform-gpu group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(.19,1,.22,1)]"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-500">
            <span className="text-lg font-medium text-[#e2b84c]">View More</span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Link
              to="/Gallery"
              className="inline-block px-6 py-3 border border-[#e2b84c] rounded-full 
                         text-[#e2b84c] text-sm font-medium bg-transparent
                         hover:bg-[#e2b84c]/20 hover:scale-105
                         transition-transform duration-300 ease-out"
            >
              𝐄𝐱𝐩𝐥𝐨𝐫𝐞 𝐅𝐮𝐥𝐥 𝐆𝐚𝐥𝐥𝐞𝐫𝐲
            </Link>
      </div>
    </section>
  );
};

export default CoffeeGallery;
