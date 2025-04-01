import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar bg-blue-600 text-white flex justify-between items-center p-4 shadow-lg rounded-lg fixed top-0 left-0 right-0 z-50">
      <ul className="flex space-x-6">
        <li className="hover:text-yellow-300 cursor-pointer">Hi</li>
        <li className="hover:text-yellow-300 cursor-pointer">Hello</li>
      </ul>
      <button className="bg-yellow-400 text-black px-4 py-2 rounded-full hover:bg-yellow-500 transition-all">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
