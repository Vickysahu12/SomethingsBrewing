import React from "react";
import Story from "../assets/image/gallery6.webp"; // apna path update kar lena
import AnimatedSection from "../components/AnimatedSection";

const OurStory = () => {
  return (
    <AnimatedSection>
    <section
      id="our-story"
      className="bg-[#241414] text-white py-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Content */}
        <div className="flex flex-col space-y-10">
          {/* Section 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Story
            </h2>
            <h3 className="text-lg md:text-xl font-semibold text-[#e2b84c] mb-4">
              𝐹𝓇𝑜𝓂 𝒫𝒶𝓈𝓈𝒾𝑜𝓃 𝓉𝑜 𝒫𝑒𝓇𝒻𝑒𝒸𝓉𝒾𝑜𝓃: 𝒯𝒽𝑒 𝒥𝑜𝓊𝓇𝓃𝑒𝓎 𝑜𝒻 𝒞𝒶𝒻é 𝐃𝐚𝐫𝐤𝐇𝐚𝐰𝐤𝐂𝐨𝐟𝐞𝐞
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-xl">
              At Café 𝐃𝐚𝐫𝐤𝐇𝐚𝐰𝐤𝐂𝐨𝐟𝐞𝐞, coffee isn’t just a drink — it’s a passion, a ritual,
              and an experience. Our journey began in 1954, when a group of coffee
              lovers came together with a simple mission: to create exceptional
              coffee that people could truly enjoy, share, and savor every day{" "}
              <span className="text-[#e2b84c] font-medium cursor-pointer hover:underline">
                Read more...
              </span>
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <p className="text-gray-300 leading-relaxed mt-20 mb-5 max-w-xl">
              We believe every cup of coffee tells a story — of dedication,
              craftsmanship, and love for the bean. Our carefully sourced blends
              and unique roasting techniques ensure that each sip offers a
              memorable experience, connecting people one cup at a time.
            </p>
            <p className="text-lg font-medium mb-4">
              𝐰𝐚𝐧𝐭 𝐭𝐨 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞 𝐭𝐡𝐞 𝐪𝐮𝐚𝐥𝐢𝐭𝐲 𝐚𝐧𝐝 𝐚𝐧𝐝 𝐜𝐚𝐫𝐞 𝐛𝐞𝐡𝐢𝐧𝐝 𝐞𝐯𝐞𝐫𝐲 𝐜𝐮𝐩
            </p>
            <a
              href="#shop"
              className="inline-block bg-gradient-to-r from-[#d4b06c] to-[#e2b84c] text-black 
                         font-semibold px-6 py-3 rounded-md shadow-lg 
                         hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              𝒮𝒽𝑜𝓅 𝒩𝑜𝓌
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative group flex justify-center">
          <img
            src={Story}
            alt="Cafe Story"
            loading="lazy"
            className="w-3/4 max-w-sm rounded-xl shadow-2xl 
                       group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Decorative glow */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-[#e2b84c]/30 to-transparent 
                          rounded-xl blur-3xl opacity-40 group-hover:opacity-60 transition duration-500">
          </div>
        </div>
      </div>
    </section>
    </AnimatedSection>
  );
};

export default OurStory;
