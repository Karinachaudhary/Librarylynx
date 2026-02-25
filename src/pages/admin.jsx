import React from "react";
import {Link} from "react-router-dom"
import { BookOpen, Users, UserCog } from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <aside className="w-64 bg-black text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-8">📖 BookWorm</h1>

        <nav className="space-y-4">
          <p className="bg-gray-800 p-2 rounded">Dashboard</p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Books</p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Catalog</p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Users</p>
          <p className="hover:bg-gray-800 p-2 rounded cursor-pointer">Add New Admin</p>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold">Admin Dashboard</h2>
          <div className="text-right">
            <p className="font-medium">Muhammad Zeeshan Khan</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>

        {/* Stats + Chart Section */}
        <div className="grid grid-cols-3 gap-6">

          {/* Chart Area */}
          <div className="col-span-2 bg-white p-6 rounded-xl shadow">
            <h3 className="mb-4 font-semibold">Books Overview</h3>

            {/* Chart Placeholder */}
            <div className="h-64 flex items-center justify-center bg-gray-200 rounded-full">
              Chart Here
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">

            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
              <Users size={30} />
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-gray-500">Total Users</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
              <BookOpen size={30} />
              <div>
                <p className="text-2xl font-bold">10</p>
                <p className="text-gray-500">Total Books</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
              <UserCog size={30} />
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-gray-500">Total Admins</p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-3 gap-6 mt-8">

          {/* Quote */}
          <div className="col-span-2 bg-white p-6 rounded-xl shadow">
            <p className="text-lg italic text-gray-700">
              "Embarking on the journey of reading fosters personal growth,
              nurturing a path towards excellence and refinement of character."
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white p-6 rounded-xl shadow text-center">
            <div className="w-24 h-24 mx-auto rounded-full bg-gray-300 mb-4"></div>
            <h3 className="font-semibold text-lg">Muhammad Zeeshan Khan</h3>
            <p className="text-gray-500 text-sm mt-2">
              Welcome to your admin dashboard.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}