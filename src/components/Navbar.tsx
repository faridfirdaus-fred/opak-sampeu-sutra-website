"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/logo.png"; // Adjust the path if necessary

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSwipe = (e: TouchEvent) => {
    if (e.changedTouches[0].clientX > 100) {
      setIsOpen(true);
    }
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const navbar = document.getElementById("navbar");
    if (isOpen && navbar && !navbar.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("touchend", handleSwipe);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("touchend", handleSwipe);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      {/* Toggle Button */}
      <button
        className="md:hidden p-4 z-50"
        onClick={handleToggle}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>

      {/* Navbar */}
      <nav
        id="navbar"
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:justify-between md:items-center bg-primary md:bg-white p-4 fixed left-0 top-0 h-full w-6/12 md:h-auto md:w-full z-40 md:fixed`}
      >
        {/* Close Button */}
        <button
          className="md:hidden p-4 absolute top-0 left-0"
          onClick={handleToggle}
          aria-label="Close Menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <span>
          <Image src={logo} alt="Online Store Logo" width={100} height={50} />
        </span>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          <li>
            <a href="/home" className="text-gray-900 hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="text-gray-900 hover:text-primary">
              Products
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-900 hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="/cart" className="text-gray-900 hover:text-primary">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
