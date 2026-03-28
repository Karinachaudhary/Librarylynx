import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/contactme.jpg"

export default function Contact() {
  return (
   <div
             className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
             style={{ backgroundImage: `url(${bgImage})` }}>
        {/* Form Section */}
        
          <div className="bg-white/90 p-8 rounded shadow-md w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Contact Us
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Sanita"
                  className="w-full border-2 border-gray-400 placeholder-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="sanita@gmail.com"
                  className="w-full border-2 border-gray-400 placeholder-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your whatever message!"
                  className="w-full border-2 border-gray-400 placeholder-gray-400 rounded-lg p-2 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
              >
                Send Message
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              <Link to="/" className="text-gray-500 hover:underline">
                Back to Home
              </Link>
            </p>
          </div>
        </div>

  );
}