import React from 'react'; 
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import bgImage from "../assets/image/powder.jpg"; // apna transparent bg image add kar
import AnimatedSection from '../components/AnimatedSection';

const Footer = () => {
  const aboutLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Features', href: '#features' },
    { name: 'News & Blogs', href: '#blogs' },
    { name: 'Help & Supports', href: '#support' }
  ];

  const companyLinks = [
    { name: 'How we work', href: '#how-we-work' },
    { name: 'Terms of service', href: '#terms' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' }
  ];

  const socialIcons = [
    { Icon: Facebook, href: '#facebook', label: 'Facebook' },
    { Icon: Twitter, href: '#twitter', label: 'Twitter' },
    { Icon: Instagram, href: '#instagram', label: 'Instagram' },
    { Icon: Youtube, href: '#youtube', label: 'YouTube' }
  ];

  return (
    <AnimatedSection>
    <footer className="relative bg-[#241414] text-white overflow-hidden">
      {/* Transparent Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[#241414]/70"></div>

      {/* Main Footer Content */}
      <div className="relative max-w-6xl mx-auto px-4 py-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                <div className="w-5 h-5 bg-amber-800 rounded-full relative">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-60"></div>
                </div>
              </div>
              <h3 className="text-2xl font-bold">SomethingsBrewing</h3>
            </div>
            
            <p className="text-amber-100 text-sm leading-relaxed mb-6">
              𝒮𝑜𝓂𝑒𝓉𝒽𝒾𝓃𝑔𝓈𝐵𝓇𝑒𝓌𝒾𝓃𝑔 𝑜𝒻𝒻𝑒𝓇𝓈 𝓅𝓇𝑒𝓂𝒾𝓊𝓂, 𝑒𝓍𝓅𝑒𝓇𝓉𝓁𝓎 𝒸𝓇𝒶𝒻𝓉𝑒𝒹 𝒸𝑜𝒻𝒻𝑒𝑒 𝓉𝒽𝒶𝓉 𝒹𝑒𝓁𝒾𝓋𝑒𝓇𝓈 𝓇𝒾𝒸𝒽 𝒻𝓁𝒶𝓋𝑜𝓇𝓈 𝒶𝓃𝒹 𝒶𝓃 𝓊𝓃𝒻𝑜𝓇𝑔𝑒𝓉𝓉𝒶𝒷𝓁𝑒 𝑒𝓍𝓅𝑒𝓇𝒾𝑒𝓃𝒸𝑒 𝒾𝓃 𝑒𝓋𝑒𝓇𝓎 𝒸𝓊𝓅.
            </p>
            
            <div>
              <h4 className="font-semibold mb-3">Join Our Coffee Community</h4>
              <div className="flex space-x-3">
                {socialIcons.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon size={18} className="text-amber-100 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-amber-700 pb-2">
              About
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-100 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-amber-700 pb-2">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-amber-100 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-amber-700 pb-2">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-amber-100 text-sm leading-relaxed">
                  1234 Coffee Lane, Suite 100<br />
                  Seattle, United States
                </p>
              </div>
              
              <div>
                <a
                  href="mailto:majidur.uiux@gmail.com"
                  className="text-amber-100 hover:text-white transition-colors duration-300 text-sm block hover:underline"
                >
                  majidur.uiux@gmail.com
                </a>
              </div>
              
              <div>
                <a
                  href="tel:+8801787123941"
                  className="text-amber-100 hover:text-white transition-colors duration-300 text-sm block hover:underline"
                >
                  +880 1787-123941
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-amber-700/50 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="text-center">
            <p className="text-amber-200 text-sm">
              © 2025 SomethingsBrewing. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </AnimatedSection>
  );
};

export default Footer;
