"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png"; // Sesuaikan path jika perlu

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const navbar = document.getElementById("navbar");
    if (isOpen && navbar && !navbar.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <div>
      <div className="flex border justify-between items-center px-3 py-2">
        {/* Tombol Toggle */}
        {!isOpen && (
          <button
            className="md:hidden p-4 z-50 relative"
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
        )}
        <span>
          <Image src={logo} alt="Online Store Logo" width={100} height={50} />
        </span>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-900 hover:text-primary">
            Home
          </Link>
          <Link href="/products" className="text-gray-900 hover:text-primary">
            Products
          </Link>
          <Link href="/about" className="text-gray-900 hover:text-primary">
            About
          </Link>
          <Link href="/cart" className="text-gray-900 hover:text-primary">
            Cart
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button aria-label="Search">
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
                d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          <button aria-label="Cart">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M9 21h6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Overlay untuk Latar Belakang */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      {/* Navbar */}
      <nav
        id="navbar"
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transform md:transform-none fixed left-0 top-0 h-full w-6/12 bg-primary text-white md:static md:h-auto md:w-full z-30 transition-transform duration-300 md:hidden`}
      >
        {/* Tombol Close */}
        <button
          className="md:hidden p-4 absolute top-4 left-4 z-40"
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
        <ul className="flex flex-col space-y-4 mt-10 px-4">
          <li>
            <Link href="/" className="text-gray-900 hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="text-gray-900 hover:text-primary">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-900 hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/cart" className="text-gray-900 hover:text-primary">
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

