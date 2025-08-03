import React from "react";
import coffeeBean from "../assets/image/beans.png"; // tu apna path update karna
import AnimatedSection from "../components/AnimatedSection";

const CoffeeScroller = () => {
  const items = [
    "Cappuccino",
    "Expresso",
    "Mocha",
    "Latte",
    "Americano",
    "Macchiato",
    "Irish Coffee",
    "Cold Brew",
    "Affogato",
    "Flat White",
  ];

  return (
    <AnimatedSection>
    <section className="bg-[#000] py-6 overflow-hidden relative"> {/* ✅ py-10 se py-6 */}
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 10s linear infinite",
        }}
      >
        {Array(3) // repeat to avoid gap
          .fill(items)
          .flat()
          .map((item, index) => (
            <div
              key={index}
              className="flex items-center mx-8 text-white text-xl font-semibold tracking-wide" // ✅ text-2xl se text-xl
            >
              <img
                src={coffeeBean}
                alt="Coffee bean"
                className="h-6 w-6 mx-2" // ✅ h-7 se h-6
                loading="lazy"
              />
              <span>{item}</span>
              <img
                src={coffeeBean}
                alt="Coffee bean"
                className="h-6 w-6 mx-2" // ✅ icons thoda chhota
                loading="lazy"
              />
            </div>
          ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-33.33%); }
          }
        `}
      </style>
    </section>
    </AnimatedSection>
  );
};

export default CoffeeScroller;
