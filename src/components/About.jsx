import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-6 mt-20">
      <div className="card bg-base-300 shadow-lg p-6">
        <h1 className="text-5xl font-bold text-primary text-center">About</h1>
        <p className="text-gray-300 text-lg mt-10 leading-relaxed text-center max-w-2xl mx-auto">
          This is a powerful{" "}
          <span className="font-semibold text-white">
            CRUD (Create, Read, Update, Delete)
          </span>{" "}
          application built using{" "}
          <span className="font-semibold text-white">
            React, JSON Server, and React Router
          </span>
          . It enables users to{" "}
          <span className="font-semibold text-white">
            add, edit, delete, and view users
          </span>{" "}
          effortlessly with a smooth and intuitive interface.
        </p>

        <h2 className="text-3xl font-semibold mt-10">Tech Stack:</h2>
        <ul className="list-disc pl-10 mt-2 text-gray-300">
          <li>⚛️ React (Frontend)</li>
          <li>🌐 JSON Server (Backend API)</li>
          <li>🚀 React Router (Navigation)</li>
          <li>🎨 Daisy UI & Tailwind CSS (Styling)</li>
        </ul>
        <h2 className="text-3xl font-semibold mt-10">Features:</h2>
        <ul className="list-disc pl-10 mt-2 text-gray-300">
          <li>📝 Add new users</li>
          <li>✏️ Edit user details</li>
          <li>❌ Delete users</li>
          <li>📋 View all users</li>
        </ul>
        <div className="mt-6 flex justify-center">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/users")}
          >
            Explore Users
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
