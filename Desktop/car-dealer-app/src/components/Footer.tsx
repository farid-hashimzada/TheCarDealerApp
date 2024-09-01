import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-semibold">Car Filter</h4>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-200 hover:text-white transition duration-300">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
