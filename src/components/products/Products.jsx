import React from "react";
import productImage1 from "../../assets/productImage1.png (1).png";
import productImage2 from "../../assets/productImage2.png";
import productImage3 from "../../assets/productImage3.png";
import productImage4 from "../../assets/productImage4.png";
import productImage5 from "../../assets/productImage5.png";
import productImage6 from "../../assets/productImage6.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: productImage1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aos: "fade-up",
    aosDelay: "100",
  },
  {
    id: 2,
    img: productImage2,
    title: "Women's Fashion",
    rating: 4.8,
    color: "Pink",
    aos: "fade-down",
    aosDelay: "200",
  },
  {
    id: 3,
    img: productImage3,
    title: "Girls Top",
    rating: 4.7,
    color: "Black",
    aos: "zoom-in",
    aosDelay: "300",
  },
  {
    id: 4,
    img: productImage4,
    title: "Casual T-Shirt",
    rating: 4.9,
    color: "Blue",
    aos: "flip-left",
    aosDelay: "400",
  },
  {
    id: 5,
    img: productImage5,
    title: "Stylish Hoodie",
    rating: 4.6,
    color: "Gray",
    aos: "fade-right",
    aosDelay: "500",
  },
  {
    id: 6,
    img: productImage6,
    title: "Women's Jacket",
    rating: 5.0,
    color: "Brown",
    aos: "zoom-in-up",
    aosDelay: "600",
  },
];

const Products = () => {
  return (
    <section className="py-16  dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p
            data-aos="fade-up"
            className="text-primary font-semibold uppercase tracking-wider"
          >
            Top Selling Products for you
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl font-bold mt-2 dark:text-white"
          >
            Our Products
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-gray-500 mt-3 dark:text-gray-400"
          >
            Discover our latest fashion collection with premium quality and
            affordable prices.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos={data.aos}
              data-aos-delay={data.aosDelay}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-lg dark:text-white">
                  {data.title}
                </h3>

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Color: {data.color}
                </p>

                <div className="flex items-center gap-2 mt-3">
                  <FaStar className="text-yellow-400" />
                  <span className="font-semibold dark:text-white">
                    {data.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button */}
<div
  data-aos="fade-up"
  data-aos-delay="700"
  className="flex justify-center mt-12"
>
  <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    View All Products
  </button>
</div>
      </div>
    </section>
  );
};

export default Products;