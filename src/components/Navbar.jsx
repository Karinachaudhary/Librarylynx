import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, Home, User, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
        <span className="text-xl font-bold text-black">LibraryLynx</span>
      </div>

      {/* Links */}
      <div className="flex space-x-4 items-center">
        <Link to="/" className="flex items-center space-x-1 text-gray-800 hover:text-blue-600">
          <Home size={18} />
          <span>Home</span>
        </Link>

        <Link to="/books" className="flex items-center space-x-1 text-gray-800 hover:text-blue-600">
          <BookOpen size={18} />
          <span>Books</span>
        </Link>

        <Link to="/students" className="flex items-center space-x-1 text-gray-800 hover:text-blue-600">
          <User size={18} />
          <span>Students</span>
        </Link>

        <Link to="/admin" className="flex items-center space-x-1 text-gray-800 hover:text-blue-600">
          <Settings size={18} />
          <span>Admin</span>
        </Link>
        <Link to="/login" className="text-gray-800 hover:text-blue-600">Login</Link>
        <Link to="/signup" className="text-gray-800 hover:text-blue-600">Sign Up</Link>
        <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
}