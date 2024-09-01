import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Car Filter
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-200 hover:text-white transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/filter" className="text-gray-200 hover:text-white transition duration-300">
              Filter
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-200 hover:text-white transition duration-300">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
