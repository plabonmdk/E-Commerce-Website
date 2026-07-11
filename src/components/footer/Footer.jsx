import React from "react";
import FooterLogo from "../../assets/Logo pick.png";
import BannerImage from "../../assets/banner.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaHeart,
} from "react-icons/fa";

const bannerStyle = {
  backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${BannerImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const footerLink = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Products",
    link: "#products",
  },
  {
    title: "Contact",
    link: "#contact",
  },
  {
    title: "Blog",
    link: "#blog",
  },
];

const Footer = () => {
  return (
    <footer
      style={bannerStyle}
      className="mt-20 text-white transition-all duration-500"
    >
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo Section */}
          <div data-aos="fade-right">
            <div className="flex items-center ">
              <img
                src={FooterLogo}
                alt="Logo"
                className="w-14 h-14 object-contain hover:rotate-12 hover:scale-110 duration-500"
              />
              <h1 className="text-3xl font-bold">Shopsy</h1>
            </div>

            <p className="mt-5 text-gray-300 leading-7">
              Discover premium fashion products with the best quality and
              affordable prices. Shop with confidence and enjoy the best online
              shopping experience.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/share/1B7qkKE8NJ/"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/effy55880hh/?hl=en"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaInstagram />
              </a>

              <a
                href="https://github.com/plabonmdk"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/plabon-chandro-modak-411543383"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-sky-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-5">Quick Links</h2>

            <ul className="space-y-4">
              {footerLink.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 hover:translate-x-2 transition-all duration-300"
                  >
                    <FaArrowRight className="text-xs" />
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div data-aos="fade-left">
            <h2 className="text-2xl font-semibold mb-5">Contact Info</h2>

            <div className="space-y-4 text-gray-300">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                Gaibandha, Bangladesh
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-400" />
                +880 1717448042
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-red-400" />
                Plabonmdk@gmail.com
              </p>

              <p className="flex items-center gap-3">
                <FaClock className="text-blue-400" />
                9:00 AM - 10:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-center">
            © {new Date().getFullYear()} Shopsy. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-300">
            Developed with
            <FaHeart className="text-red-500 animate-pulse" />
            by
            <span className="font-semibold text-yellow-400 hover:text-yellow-300 transition duration-300 cursor-pointer">
              Plabon Chandro Modak
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;