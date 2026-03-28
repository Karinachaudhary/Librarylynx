import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/loginn.avif";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}>

    <div className="min-h-screen flex items-center justify-center  from-blue-100 to-blue-200">
      
      <div className="bg-white shadow-2xl rounded-2xl p-9 w-full max-w-md">
        
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-5">
          Login to Librarylynx
        </h2>

        <form className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-gray-800 mb-1">Email</label>
            <input
              type="email"
              placeholder="Karina@gmail.com"
              className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-800 mb-1">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border-2 border-gray-400 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link 
  to="/register" 
  className="text-blue-600 hover:underline"
>
  Sign up
</Link>
        </p>
        <p className="text-center text-sm text-gray-600 mt-1">
          <Link to="/"
   
  className=" hover:underline"
>
  Back to home
</Link>
        </p>

      </div>
    </div>
    </div>
  );
}