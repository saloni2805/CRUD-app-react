import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-3xl">
            CRUD APP
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <Link to="/about">About</Link>
            </li>
            <li className="font-bold">
              <details>
                <summary>Activity</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link to="/">Users</Link>
                  </li>
                  <li>
                    <Link to="/add">Add</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
