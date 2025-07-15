'use client';
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-white mr-8">MyPortfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link href="/" className="text-white hover:text-blue-600 transition">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-blue-600 transition">About</Link></li>
          <li><Link href="/experience" className="text-white hover:text-blue-600 transition">Experience</Link></li>
          <li><Link href="/skills" className="text-white hover:text-blue-600 transition">Skills</Link></li>
          <li><Link href="/project" className="text-white hover:text-blue-600 transition">Projects</Link></li>
          <li><Link href="/contact" className="text-white hover:text-blue-600 transition">Contact</Link></li>
          <Link href="/contact">Contact</Link>

        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2">
          <li><Link href="/" className="text-white hover:text-blue-600">Home</Link></li>
          <li><Link href="/about" className="text-white hover:text-blue-600">About</Link></li>
          <li><Link href="/experience" className="text-white hover:text-blue-600">Experience</Link></li>
          <li><Link href="/skills" className="text-white hover:text-blue-600">Skills</Link></li>
          <li><Link href="/project" className="text-white hover:text-blue-600">Projects</Link></li>
          <li><Link href="/contact" className="text-white hover:text-blue-600">Contact</Link></li>
          <Link href="/contact">Contact</Link>

        </ul>
      )}
    </nav>
  );
};

export default Navbar;
