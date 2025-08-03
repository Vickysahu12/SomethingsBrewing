import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Landing Page Sections
import Home from "./pages/Home";
import CoffeeMenu from "./pages/CofeeMenu";
import OurStory from "./pages/OurStory";
import CoffeeScroller from "./pages/CofeeScroller";
import CoffeeGallery from "./pages/CoffeeGallery";
import TestimonialsScroller from "./pages/TestimonialScroller";
import Blog from "./pages/Blog";
import BookASeat from "./pages/BookaSeat";

// Individual Pages
import About from "./router/About";
import Menu from "./router/Menu";
import Gallery from "./router/Gallery";
import Contact from "./router/Contact";
import Booking from "./router/Booking";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Landing Page (all sections together) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <CoffeeMenu />
              <OurStory />
              <CoffeeScroller />
              <CoffeeGallery />
              <TestimonialsScroller />
              <Blog />
              <BookASeat />
              <Footer/>
            </>
          }
        />

        {/* Individual Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-table" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;
