import React from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import TopProducts from "./components/topproducts/TopProducts";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      delay: 100,
      once: true, 
    });

    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] transition-colors duration-300">
      <Navbar />
      <Hero />
      <Products />
      <TopProducts/>
      <Banner></Banner>
      <Subscribe></Subscribe>
      <Products></Products>
    </div>
  );
}

export default App;