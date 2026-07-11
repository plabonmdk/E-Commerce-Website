import React from "react";
import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Img1 from "../../assets/profile1.png";
import Img2 from "../../assets/profile2.jpg";
import Img3 from "../../assets/profile3.jpg";
import Img4 from "../../assets/profile4.webp";
import Img5 from "../../assets/profile5.jpg";
import Img6 from "../../assets/profile6.jpg";
import Img7 from "../../assets/profile7.png";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Amazing quality and fast delivery. I'm very happy with my purchase and will definitely shop here again.",
    img: Img1,
  },
  {
    id: 2,
    name: "Sophia",
    text: "The products are exactly as shown. Great customer service and affordable prices.",
    img: Img2,
  },
  {
    id: 3,
    name: "James",
    text: "Excellent shopping experience. The quality exceeded my expectations.",
    img: Img3,
  },
  {
    id: 4,
    name: "Emily",
    text: "I love the stylish collection. The delivery was quick and the packaging was perfect.",
    img: Img4,
  },
  {
    id: 5,
    name: "Michael",
    text: "Highly recommended! Premium quality products at very reasonable prices.",
    img: Img5,
  },
  {
    id: 6,
    name: "Olivia",
    text: "Beautiful designs and comfortable fabrics. I will definitely order again.",
    img: Img6,
  },
  {
    id: 7,
    name: "Daniel",
    text: "Fantastic customer support. They answered all my questions and delivered on time.",
    img: Img7,
  },
];

const Testimonial = () => {
  return (
    <section className="py-16  dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            data-aos="fade-down"
            className="text-primary font-semibold uppercase tracking-[4px]"
          >
            What Our Customers Say
          </p>

          <h1
            data-aos="zoom-in"
            data-aos-delay="200"
            className="text-4xl md:text-5xl font-bold dark:text-white mt-3"
          >
            Testimonials
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto"
          >
            Trusted by thousands of happy customers worldwide.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                data-aos="zoom-in-up"
                className="bg-primary/10 dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-3 hover:shadow-2xl duration-500"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-24 h-24 rounded-full mx-auto border-4 border-primary object-cover"
                />

                <FaQuoteLeft className="text-3xl text-primary mx-auto mt-5" />

                <p className="text-gray-600 dark:text-gray-300 my-5 leading-7">
                  "{item.text}"
                </p>

                <div className="flex justify-center gap-1 mb-3">
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                </div>

                <h3 className="font-bold text-xl dark:text-white">
                  {item.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;