import React from "react";
import BannerImg from "../../assets/image2.png";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="py-14  dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image Section */}
          <div data-aos="zoom-in" className="flex justify-center">
            <img
              src={BannerImg}
              alt="Winter Sale"
              className="bg-amber-400 w-[3500px] sm:w-[420px] h-auto object-cover drop-shadow-2xl rounded-2xl hover:scale-105 duration-300 "
            />
          </div>

          {/* Text Section */}
          <div
            
            className="flex flex-col justify-center gap-6"
          >
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Winter Sale <br />
              <span data-aos="fade-up" className="text-primary">Up To 50% Off</span>
            </h1>

            <p data-aos="fade-up" className="text-gray-600 dark:text-gray-300 leading-7">
              Discover premium quality fashion at unbeatable prices. Shop your
              favorite collections with exclusive discounts and enjoy a better
              shopping experience today.
            </p>

            {/* Features */}
            <div data-aos="fade-down" className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-violet-100 dark:bg-violet-900 p-3 rounded-full">
                  <GrSecure className="text-2xl text-violet-600" />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  Premium Quality Products
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-full">
                  <GiFoodTruck className="text-2xl text-orange-500" />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  Fast & Free Delivery
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                  <MdLocalOffer className="text-2xl text-green-600" />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  Daily Best Offers
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <FaCreditCard className="text-2xl text-blue-600" />
                </div>
                <p className="font-medium text-gray-700 dark:text-gray-200">
                  Secure Payment
                </p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;