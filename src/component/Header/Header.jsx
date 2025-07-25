"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaBriefcase, FaUser, FaUserPlus } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-sm  w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-blue-700 w-10 h-10 rounded-full flex items-center justify-center">
            <FaBriefcase className="text-white text-xl" />
          </div>
          <h1 className="ml-3 text-2xl font-bold text-blue-800">
            Career<span className="text-blue-500">Connect</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/services"
            className="text-blue-800 font-medium hover:text-blue-600 border-b-2 border-blue-500"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-blue-800 font-medium hover:text-blue-600"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-blue-800 font-medium hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            href="/profile"
            className="text-blue-800 font-medium hover:text-blue-600"
          >
            Profile
          </Link>

          {/* Desktop Auth Buttons */}
          <div className="flex items-center space-x-4 ml-4">
            <Link
              href="/login"
              className="flex items-center bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium transition duration-300"
            >
              <FaUser className="mr-2" />
              Login
            </Link>
            <Link
              href="/signup"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
            >
              <FaUserPlus className="mr-2" />
              Sign Up
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-blue-800 font-medium hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="text-blue-800 font-medium hover:text-blue-600 py-2 border-b-2 border-blue-500 w-max"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-blue-800 font-medium hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-blue-800 font-medium hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/profile"
              className="text-blue-800 font-medium hover:text-blue-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              profile
            </Link>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col space-y-3 mt-4">
              <Link
                href="/login"
                className="flex items-center justify-center bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaUser className="mr-2" />
                Login
              </Link>
              <Link
                href="/signup"
                className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaUserPlus className="mr-2" />
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
