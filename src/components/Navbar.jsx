import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
  
    <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow p-4 flex justify-between items-center">
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
        <span className="text-xl f text-black font-bold">LibraryLynx</span>
      </div>

      <div className="space-x-4">
        <Link to="/" className="nav-link text-gray-800">Home</Link>
        <Link to="/login" className="nav-link text-gray-800">Login</Link>
        <Link to="/signup" className="nav-link text-gray-800">Sign Up</Link>
        <Link to="/contact" className="nav-link text-gray-800">Contact</Link>
        <Link to="/admin" className="nav-link text-gray-800">Admin</Link>
        <Link to="/student" className="nav-link text-gray-800">Student</Link>

      </div>
    </nav>
  );
}