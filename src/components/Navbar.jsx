import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img from "../assets/car.svg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-gray-700  shadow-md relative overflow-hidden">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-10">
        <Link to="/" className="text-2xl font-bold text-green-600">
          <div className="flex items-center gap-0 md:gap-2 ">
            <h1>Car Finder</h1>
            {/* car image */}
            <img src={img} alt="" width={45} className="animate-bounce-car" />
          </div>
        </Link>
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-green-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/wishlist"
            className="text-green-700 hover:text-blue-600 font-medium transition duration-300"
          >
            Wishlist
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-2 py-1 rounded transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
      <div className="absolute bottom-2 left-0 w-full flex justify-between px-4 z-0">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="w-6 h-1 bg-white mx-1" />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
