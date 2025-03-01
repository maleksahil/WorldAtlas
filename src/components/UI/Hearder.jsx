import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Hearder = () => {

  const [show, setShow] = useState(false)
  const handleButtonToggle = () =>{
       return setShow(!show)
  }
  return (
    <header className="bg-gray-800 shadow-lg">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="logo">
          <NavLink to="/" className="text-white text-2xl font-bold">
            WorldAtlas
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-white hover:text-purple-500 transition-colors"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white hover:text-purple-500 transition-colors"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white hover:text-purple-500 transition-colors"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country"
                className="text-white hover:text-purple-500 transition-colors"
              >
                Country
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={handleButtonToggle}
            className="text-white focus:outline-none"
          >
            <GiHamburgerMenu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {show && (
        <nav className="md:hidden bg-gray-700 mt-2 py-2">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                to="/"
                className="block text-white px-4 py-2 hover:bg-gray-600"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block text-white px-4 py-2 hover:bg-gray-600"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block text-white px-4 py-2 hover:bg-gray-600"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/country"
                className="block text-white px-4 py-2 hover:bg-gray-600"
              >
                Country
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  </header>
  );
};

export default Hearder;
