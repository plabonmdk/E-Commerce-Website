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
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";


function App() {
  // Popup State
  const [orderPopup, setOrderPopup] = React.useState(false);

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
      <Navbar setOrderPopup={setOrderPopup} />

      <Hero id="home" setOrderPopup={setOrderPopup} />
      <Products id="products" />
      <TopProducts id="top-products" setOrderPopup={setOrderPopup} />
      <Banner />
      <Subscribe id="subscribe" />
      <Products />
      <Testimonial id="testimonial" />
      <Footer />

      <Popup
        orderPopup={orderPopup}
        setOrderPopup={setOrderPopup}
      />
    </div>
  );
}

export default App;