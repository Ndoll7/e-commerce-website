 "use client";

import { FaUserEdit } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#fdf0ba] border-gray-200">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto py-4 px-6">
          {/* Brand or Logo */}
          <div className="text-lg font-bold"></div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="block md:hidden p-2 text-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navbar Links */}
          <ul
            className={`${
              menuOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-8 absolute md:relative bg-[#fdf0ba] w-full md:w-auto left-0 top-[64px] md:top-auto px-6 py-4 md:p-0`}
          >
            <li>
              <Link
                href="/"
                className="text-black text-base font-medium hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className="text-black text-base font-medium hover:underline"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="text-black text-base font-medium hover:underline"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="contact"
                className="text-black text-base font-medium hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2" aria-label="Account">
              <FaUserEdit className="h-5 w-5" aria-hidden="true" />
            </button>
            <button className="p-2" aria-label="Search">
              <FiSearch className="h-5 w-5" aria-hidden="true" />
            </button>
            <button className="p-2" aria-label="Wishlist">
              <GoHeart className="h-5 w-5" aria-hidden="true" />
            </button>
            <button className="p-2" aria-label="Cart">
              <AiOutlineShoppingCart className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
