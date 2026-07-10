import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "30% off on all Men's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "30% off on Kids Collection",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = () => {
  return (
    <section className="bg-gray-100 dark:bg-slate-950 transition-colors duration-200 ">
      <div className="w-full px-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {ImageList.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 transition-colors duration-500 h-[500px]">

                {/* Triangle Background (Fixed Color) */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: "polygon(0 0,100% 0,75% 100%,25% 100%)",
                    background: "#f6d39a",
                  }}
                ></div>

                <div className="relative z-10 grid h-full grid-cols-1 md:grid-cols-2 items-center px-8 md:px-16">

                  {/* Left Side */}
                  <div className="space-y-5">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-white transition-colors duration-500">
                      {item.title}
                    </h1>

                    <p className="max-w-md text-gray-800 dark:text-gray-50 transition-colors duration-500">
                      {item.description}
                    </p>

                    <button className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white hover:bg-orange-600 transition duration-300">
                      Order Now
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="flex justify-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-[300px] sm:w-[380px] md:w-[430px] object-contain"
                    />
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;