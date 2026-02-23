import React from "react";
import {Link} from "react-router-dom"
import bgImage from "../assets/adminnn.jpg"

export default function AdminDashboard() {
  return (
    <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="dashboard flex min-h-screen">

      {/* Sidebar */}
      <aside className="sidebar bg-gray-800 text-white w-64 p-6 flex flex-col">
        <h1 className="logo text-2xl font-bold mb-8">LibraryLynx</h1>

        <nav className="flex flex-col space-y-4">
          <a href="#" className="hover:text-purple-400">Dashboard</a>
          <a href="#" className="hover:text-purple-400">Books</a>
          <a href="#" className="hover:text-purple-400">Users</a>
          <a href="#" className="hover:text-purple-400">Issued Books</a>
          <a href="#" className="hover:text-purple-400">Reports</a>
          <a href="index.html" className="logout mt-auto text-red-500 hover:text-red-400">Logout</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content flex-1 bg-gray-100 p-8"> 

        {/* Header */}
       <header className="header flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <div className="admin-info text-gray-700">Welcome, Admin</div>
        </header> 

        {/* Stats Cards */}
         <section className="stats grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="card bg-white p-4 rounded shadow">
            <p className="text-gray-500">Total Books</p>
            <h3 id="totalBooks" className="text-2xl font-bold">0</h3>
          </div>

          <div className="card bg-white p-4 rounded shadow">
            <p className="text-gray-500">Total Users</p>
            <h3 id="totalUsers" className="text-2xl font-bold">0</h3>
          </div>

          <div className="card bg-white p-4 rounded shadow">
            <p className="text-gray-500">Books Issued</p>
            <h3 id="totalIssued" className="text-2xl font-bold">0</h3>
          </div>

          <div className="card bg-red-100 text-red-700 p-4 rounded shadow">
            <p>Overdue</p>
            <h3 id="totalOverdue" className="text-2xl font-bold">0</h3>
          </div>
        </section> 

        {/* Recent Activity Table */}
          <h3 className="text-xl font-bold mb-4">Recent Issued Books</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className="p-2 border-b">Book Name</th>
                  <th className="p-2 border-b">Student</th>
                  <th className="p-2 border-b">Issue Date</th>
                  <th className="p-2 border-b">Return Date</th>
                  <th className="p-2 border-b">Status</th>
                </tr>
              </thead>
              <tbody id="recentIssuedTable">
                {/* Dynamic rows go here */}
             </tbody>
            </table>
          </div>
      </main>
    </div> 
    </div>
  );
}