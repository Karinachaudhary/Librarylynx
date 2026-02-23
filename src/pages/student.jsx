import React from "react";
import {Link} from "react-router-dom";
import bgImage from "../assets/download.jpg";

export default function StudentDashboard() {
  return (
    <div
          className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="bg-gray-100 min-h-screen">
      <StudentSidebar />
      <StudentNavbar />

      <div className="ml-64 mt-20 p-8">
        
        {/* Stats Section */}
        <div className="flex gap-8 mb-10">
          <StatCard title="Books Borrowed" value="5" />
          <StatCard title="Books Returned" value="12" />
          <StatCard title="Pending Returns" value="2" />
        </div>

        {/* Recent Books Section */}
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4">Recently Borrowed</h3>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="pb-2">Book Name</th>
                <th className="pb-2">Author</th>
                <th className="pb-2">Due Date</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3">Clean Code</td>
                <td>Robert C. Martin</td>
                <td>March 10, 2026</td>
              </tr>
              <tr>
                <td className="py-3">Atomic Habits</td>
                <td>James Clear</td>
                <td>March 15, 2026</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
    </div>
  );
}