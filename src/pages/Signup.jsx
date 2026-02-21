import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/signupp.jpg"

export default function Signup() {
  return (
    <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage})` }}>
    
      <div className="form-card bg-white bg-opacity-90 p-6 rounded shadow-md w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Create Your Account
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-md mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Sneha Sah"
              className="w-full rounded-lg p-2 placeholder-gray-400 border-2 border-gray-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Sneha@gmail.com"
              className="w-full border-2 border-gray-400 placeholder-gray-400 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border-2 border-gray-400 placeholder-gray-400 rounded-lg p-2"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full border-2 border-gray-400 placeholder-gray-400 rounded-lg p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
          <br />
          <Link to="/" className="text-gray-500 hover:underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
    
  )
}