import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 shadow-sm flex justify-between items-center px-6">
      {/* Logo */}
      <div>
        <Link to="/" className="btn btn-ghost flex items-center gap-2">
          <img
            src="https://www.shutterstock.com/image-illustration/crud-acronym-create-read-update-600nw-2491959959.jpg"
            alt="CRUD APP Logo"
            className="h-10 w-10 object-contain rounded-xl"
          />
          <span className="text-3xl font-bold">CRUD APP</span>
        </Link>
      </div>

      {/* Centered Menu */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex gap-10 font-bold">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </div>

      {/* Activity Dropdown (DaisyUI) */}
      <div className="mr-0">
        <li className="btn btn-ghost font-bold bg-red-600 text-white">
          <Link to="/add">Add User</Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
