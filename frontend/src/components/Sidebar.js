import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Sidebar.css"; // Contains your transition CSS

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button - Always visible and outside the sidebar */}
      <div
        className="position-fixed top-0 start-0 p-3 bg-white shadow"
        style={{ zIndex: 1100 }}
      >
        <FaBars
          size={20}
          className="text-dark"
          role="button"
          onClick={toggleSidebar}
        />
      </div>

      {/* Sidebar */}
      <div
        className={`bg-dark text-white p-3 vh-100 position-fixed top-0 start-0 transition-sidebar ${
          isOpen ? "sidebar-open" : "sidebar-closed"
        }`}
        style={{ width: "250px", zIndex: 1040 }}
      >
        <h4 className="ms-5">Car Dashboard</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#" onClick={toggleSidebar}>
              Car Models
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="#" onClick={toggleSidebar}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="#"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
