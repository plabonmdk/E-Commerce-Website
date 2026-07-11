import React from "react";
import BannerImage from "../../assets/banner.jpg";

const bannerStyle = {
  backgroundImage: `url(${BannerImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      style={bannerStyle}
      className="py-16"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      {/* Overlay */}
      <div className=" w-full  h-[200px] py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">

            {/* Heading */}
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="text-3xl sm:text-5xl font-bold text-white"
            >
              Get Notified About New Products
            </h1>

            {/* Input + Button */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-[400px] bg-white dark:bg-gray-800 dark:text-white px-5 py-3 rounded-full outline-none shadow-lg transition-all duration-200 focus:scale-105"
              />

              <button
                className="bg-primary hover:bg-primary/80 hover:scale-105 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 shadow-lg"
              >
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;