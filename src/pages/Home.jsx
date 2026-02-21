import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../assets/home.jpg";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col p-10 space-y-10">

        {/* Welcome Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4 animate-bounce text-white">
            Welcome to LibraryLynx
          </h1>
          <p className="text-2xl text-gray-300 animate-bounce">
            Manage your books and track borrowings easily.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/90 text-gray-900 p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="text-sm">Total Books</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>

          <div className="bg-white/90 text-gray-900 p-4 rounded shadow flex justify-between items-center">
            <div>
              <p className="text-sm">Available</p>
              <p className="text-2xl font-bold">10</p>
            </div>
          </div>
        </div>

        {/* Books Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-white">Books Collection</h2>
          <div className=" bg-center bg-cover grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Book Cards */}
            {[
              {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                available: 3,
                img: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=400&q=80",
              },
              {
                title: "Cristiano Ronaldo",
                author: "Alex Ferguson",
                available: 1,
                img: "https://i.pinimg.com/736x/a6/33/8b/a6338b730274f76360d1ea0165843e8a.jpg",
              },
              {
                title: "Baby Kitten",
                author: "K. C",
                available: 5,
                img: "https://i.pinimg.com/1200x/d3/a8/77/d3a87718db19ee6d1e43f3aab144595a.jpg",
              },
              {
                title: "Self sabotager or Saver?",
                author: "Scott Fitzgerald",
                available: 3,
                img: "https://i.pinimg.com/736x/35/81/7f/35817f6d725a596d27819c3bb48e6c04.jpg",
              },
            ].map((book, i) => (
              <div
                key={i}
                className="bg-white/90 text-gray-900 rounded shadow overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={book.img}
                  className="w-full h-48 object-cover"
                  alt={book.title}
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{book.title}</h3>
                  <p className="text-gray-700 text-sm">{book.author}</p>
                  <p className="text-green-600 mt-1">{book.available} available</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}