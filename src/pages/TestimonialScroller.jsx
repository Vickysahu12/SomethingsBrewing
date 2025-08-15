import React from "react";
import bgImage from "../assets/image/caaa.webp"; // Transparent image for inside box
import AnimatedSection from "../components/AnimatedSection";

const testimonials = [
  {
    name: "Aarav",
    text: `The best coffee experience I’ve ever had. The aroma instantly fills my senses with warmth,
    and every sip feels like a gentle hug on a cold morning. It’s not just coffee; 
    it’s an experience that makes my day brighter, more focused, and full of energy. 
    Absolutely love it!`,
  },
  {
    name: "Sneha",
    text: `Smooth and flavorful, simply amazing! From the very first sip, I could taste the richness 
    of the beans and the care put into crafting every cup. It feels like a small luxury I get to 
    enjoy every morning, giving me the perfect start to my day.`,
  },
  {
    name: "Karan",
    text: `Every cup feels like a warm hug. The flavors are perfectly balanced, and the quality is 
    always consistent. I genuinely look forward to my coffee breaks now because they don’t just 
    recharge me—they make me happy and content.`,
  },
  {
    name: "Riya",
    text: `The aroma itself makes my day better. It’s rare to find coffee that tastes as wonderful 
    as it smells, but this one does it flawlessly. Each sip is a reminder of the little joys in life, 
    and it always leaves me refreshed.`,
  },
  {
    name: "Aditya",
    text: `Exceptional quality and taste every time. What impresses me most is the consistency. 
    Whether it’s the first cup of the day or a late-night craving, the flavor never disappoints. 
    It truly feels like a handcrafted masterpiece in every sip.`,
  },
  {
    name: "Priya",
    text: `This coffee is my morning motivation! It wakes me up, lifts my spirits, and gets me 
    ready to face the day with confidence. I can’t imagine starting my mornings without this 
    delightful ritual anymore.`,
  },
];

const TestimonialsScroller = () => {
  return (
    <AnimatedSection>
    <section className="bg-[#241414] py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Heading */}
      <div className="relative container mx-auto text-center mb-12 z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
          What Our Coffee Lovers Say ☕
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
          𝐑𝐞𝐚𝐥 𝐬𝐭𝐨𝐫𝐢𝐞𝐬 𝐫𝐞𝐚𝐥 𝐩𝐚𝐬𝐬𝐢𝐨𝐧 𝐄𝐚𝐜𝐡 𝐭𝐞𝐬𝐭𝐢𝐦𝐨𝐧𝐢𝐚𝐥 𝐫𝐞𝐟𝐥𝐞𝐜𝐭 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞 𝐰𝐚𝐫𝐦𝐭𝐡 𝐚𝐧𝐝 𝐣𝐨𝐲 𝐭𝐡𝐚𝐭 𝐨𝐮𝐫 𝐜𝐨𝐟𝐞𝐞 𝐛𝐫𝐢𝐧𝐠𝐬 𝐭𝐨 𝐝𝐚𝐢𝐥𝐲 𝐥𝐢𝐟𝐞.
          𝐃𝐢𝐬𝐜𝐨𝐯𝐞𝐫 𝐰𝐡𝐚𝐭 𝐦𝐚𝐤𝐞𝐬 𝐨𝐮𝐫 𝐛𝐫𝐞𝐰𝐬 𝐮𝐧𝐟𝐨𝐫𝐞𝐠𝐞𝐭𝐚𝐛𝐥𝐞
        </p>
      </div>

      {/* Testimonials Box */}
      <div className="relative rounded-2xl shadow-2xl p-10 z-10 overflow-hidden">
        {/* Transparent background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Scroller */}
        <div className="overflow-hidden relative z-10">
          <div
            className="flex gap-8 animate-marquee"
            style={{
              width: "max-content",
            }}
          >
            {Array(2) // duplicate for infinite scroll
              .fill(testimonials)
              .flat()
              .map((t, index) => (
                <div
                  key={index}
                  className="bg-black/50 backdrop-blur-md rounded-xl p-8 w-96 shrink-0 
                             transform hover:scale-105 transition-transform 
                             duration-500 ease-out shadow-lg whitespace-normal"
                >
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 10}`}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    className="h-20 w-20 mx-auto rounded-full mb-6 object-cover border-4 border-[#e2b84c]"
                  />
                  <p className="text-gray-200 italic mb-6 leading-relaxed text-justify">
                    “{t.text}”
                  </p>
                  <h4 className="text-[#e2b84c] font-semibold text-lg text-center">
                    {t.name}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}
      </style>
    </section>
    </AnimatedSection>
  );
};

export default TestimonialsScroller;
