// components/Navigation.js
import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link href="/" className="text-xl font-bold text-blue-600">
            Postly
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="/" label="Home" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 flex flex-col items-center space-y-2">
            <NavLink href="/" label="Home" />
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLink({ href, label }) {
  return (
    <Link href={href} className="block text-gray-700 hover:text-blue-600">
      {label}
    </Link>
  );
}
