import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getDashboard } from "../services/api";
import "./Dashboard.css";

const Dashboard = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
      return;
    }

    getDashboard(token)
      .then((data) => {
        setServices(data.services || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dashboard:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="dashboard-wrapper d-flex flex-row">
      <Sidebar />

      <div className="dashboard-content flex-grow-1 position-relative">
        <main className="p-4 content-area">
          <h1 className="dashboard-title">Discover and Review</h1>
          <h2 className="dashboard-subtitle">Your Favourite Cars!</h2>

          {loading ? (
            <p>Loading services...</p>
          ) : services.length > 0 ? (
            <ul className="list-group mt-2">
              {services.map((service, index) => (
                <li key={index} className="list-group-item">
                  {service}
                </li>
              ))}
            </ul>
          ) : null}
        </main>

        {/* Fixed Explore Button */}
        <div className="explore-fixed-button text-center">
          <button
            className="explore-now-btn"
            onClick={() => (window.location.href = "/car-models")}
          >
            Explore Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
