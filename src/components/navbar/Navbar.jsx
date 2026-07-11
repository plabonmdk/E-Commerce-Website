import React, { useState } from "react";
import Logo from "../../assets/Logo pick.png";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import DarkMode from "../DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "Top Rated", link: "#top-products" },
  { id: 3, name: "Kids Wear", link: "#products" },
  { id: 4, name: "Men's Wear", link: "#products" },
  { id: 5, name: "Electronics", link: "#products" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Products", link: "/#" },
  { id: 2, name: "Best Selling", link: "/#" },
  { id: 3, name: "Top Rated", link: "/#" },
];

const Navbar = ({ setOrderPopup }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 shadow-md bg-white dark:bg-slate-900 text-gray-900 dark:text-white duration-300">
      {/* Top Navbar */}
      <div className="bg-primary/40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={Logo} alt="Logo" className="w-10" />
            <h1 className="text-2xl font-bold">Shopsy</h1>
          </a>

          {/* Search */}
          <div className="hidden lg:block">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search..."
                className="w-[220px] group-hover:w-[320px] transition-all duration-300 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 py-2 pr-10 outline-none focus:border-primary"
              />

              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500 dark:text-gray-300 group-hover:text-primary" />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Order Button */}
            <button
              onClick={() => setOrderPopup(true)}
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-5 py-2 rounded-full text-white hover:scale-105 duration-300"
            >
              Order Now
              <FaCartShopping />
            </button>

            {/* Dark Mode */}
            <DarkMode />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-3xl"
            >
              {open ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div  className="hidden md:flex justify-center bg-white dark:bg-slate-900">
        <ul data-aos="zoom-in" className="flex items-center gap-8 py-3">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="block py-2 hover:text-primary duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 py-2 hover:text-primary duration-300">
              Trending
              <FaCaretDown className="group-hover:rotate-180 duration-300" />
            </button>

            <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[999]">
              <div className="w-56 rounded-lg overflow-hidden bg-white dark:bg-slate-800 shadow-xl border border-gray-200 dark:border-gray-700">
                {DropdownLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block px-4 py-3 hover:bg-primary hover:text-white duration-300"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-700">
          {/* Search */}
          <div className="p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 py-2 pr-10 outline-none"
              />

              <IoMdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300" />
            </div>
          </div>

          {/* Menu */}
          <ul>
            {Menu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 hover:bg-primary hover:text-white duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li className="px-6 py-3 font-semibold">
              Trending Products
            </li>

            {DropdownLinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="block pl-10 py-3 hover:bg-primary hover:text-white duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}

            {/* Mobile Order Button */}
            <div className="p-4">
              <button
                onClick={() => {
                  setOrderPopup(true);
                  setOpen(false);
                }}
                className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-primary to-secondary py-3 rounded-full text-white hover:scale-105 duration-300"
              >
                Order Now
                <FaCartShopping />
              </button>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;