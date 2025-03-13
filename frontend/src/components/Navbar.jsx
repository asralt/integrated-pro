import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="navbar bg-gradient-to-br from-gray-900 to-black shadow-md fixed top-0 left-0 w-full z-50 p-4 ">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-cyan-400 hover:text-white transition">
          ||AE||
        </Link>
      </div>

      <div className="flex-none space-x-6">
        <Link to="/" className="text-gray-300 hover:text-white transition text-lg">
          Hero
        </Link>
        <Link to="/projects" className="text-gray-300 hover:text-white transition text-lg">
          Projects
        </Link>
        <Link to="/contact" className="text-gray-300 hover:text-white transition text-lg">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
