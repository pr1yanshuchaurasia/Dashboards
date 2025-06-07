import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white p-3 vh-100">
      <h4>Car Dashboard</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="#">Car Models</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="#">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="#" onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
