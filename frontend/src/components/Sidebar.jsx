import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
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

      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1030 }}
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar bg-dark text-white p-3 vh-100 position-fixed top-0 start-0 ${
          isOpen ? "sidebar-open" : "sidebar-closed"
        }`}
        style={{
          width: "250px",
          zIndex: 1040,
          transform: isOpen ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <h4 className="ms-5 mb-4">Car Dashboard</h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/dashboard"
              onClick={closeSidebar}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/car-models"
              onClick={closeSidebar}
            >
              Car Models
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white"
              to="/services"
              onClick={closeSidebar}
            >
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