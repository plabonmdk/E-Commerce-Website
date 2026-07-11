import React from "react";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Img3 from "../../assets/Img3.png";
import Img4 from "../../assets/Img4.png";
import Img5 from "../../assets/Img5.png";
import { FaStar } from "react-icons/fa6";

const productsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description: "Comfortable and stylish casual clothing for everyday use.",
  },
  {
    id: 2,
    img: Img2,
    title: "Formal Wear",
    description: "Elegant formal outfits perfect for office and special occasions.",
  },
  {
    id: 3,
    img: Img3,
    title: "Sports Wear",
    description: "High-quality activewear designed for  performance.",
  },
  {
    id: 4,
    img: Img4,
    title: "Winter Collection",
    description: "Warm jackets, hoodies, and sweaters for the cold season.",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion Accessories",
    description: "Complete your look with trendy bags, watches, and accessories.",
  },
];

const TopProducts = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-left mb-16">
          <p className="text-primary font-semibold uppercase tracking-wider">
            Top Rated Products for you
          </p>

          <h1 className="text-4xl font-bold mt-2 dark:text-white">
            Best Products
          </h1>

          <p className="text-gray-500 mt-3 dark:text-gray-400 max-w-xl">
            Discover our latest fashion collection with premium quality and
            affordable prices.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-20 pt-16">
          {productsData.map((data) => (
            <div
              key={data.id}
              className="relative h-[270px] rounded-2xl bg-white dark:bg-gray-800 shadow-xl overflow-visible pt-20 px-5 text-center group hover:bg-black/80  duration-300"
            >
              {/* Image */}
              <div
              data-aos="zoom-in"
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-45 h-45 flex items-center justify-center">
                <img
                  src={data.img}
                  alt={data.title}
                  className="w-40 h-40 object-contain drop-shadow-2xl group-hover:scale-110 duration-300"
                />
              </div>

              {/* Content */}
              <div className="mt-5">
                <div className="flex w-full items-center justify-center gap-1">
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaStar className="text-yellow-500"></FaStar>
                    <FaStar className="text-yellow-500"></FaStar>
                </div>
                <h3 className="text-xl font-bold dark:text-white group-hover:text-white">
                  {data.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-300 mt-3 group-hover:text-white line-clamp-3">
                  {data.description}
                </p>
                <button className="mt-6 bg-primary text-white px-6 py-2 rounded-full font-medium group-hover:bg-white group-hover:text-primary duration-300">
                       Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;