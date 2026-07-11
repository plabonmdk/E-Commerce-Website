import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrder = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "🎉 Order Confirmed!",
      html: `
        <p>Thank you for shopping with us.</p>
        <b>Your order has been placed successfully.</b>
      `,
      icon: "success",
      confirmButtonText: "Continue Shopping",
      confirmButtonColor: "#f97316",
      timer: 3000,
      timerProgressBar: true,
    }).then(() => {
      setOrderPopup(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    });
  };

  if (!orderPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        className="relative w-[90%] max-w-md rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl"
        data-aos="zoom-in"
      >
        {/* Close Button */}
        <button
          onClick={() => setOrderPopup(false)}
          className="absolute right-4 top-4 text-xl text-gray-500 hover:text-red-500 transition"
        >
          <FaTimes />
        </button>

        {/* Title */}
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Place Your Order
        </h2>

        {/* Form */}
        <form onSubmit={handleOrder} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-3 outline-none focus:border-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-3 outline-none focus:border-primary"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-3 outline-none focus:border-primary"
          />

          <textarea
            name="address"
            rows="4"
            placeholder="Delivery Address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-white px-4 py-3 outline-none focus:border-primary resize-none"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary py-3 font-semibold text-white hover:scale-105 transition duration-300"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;