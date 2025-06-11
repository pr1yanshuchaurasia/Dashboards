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
    <div className="dashboard-wrapper d-flex flex-column flex-md-row">
      <Sidebar />

      <main className="p-4 flex-grow-1 content-area">
        <h2 className="mb-4">Welcome to the Car Dashboard</h2>

        {loading ? (
          <p>Loading services...</p>
        ) : services.length > 0 ? (
          <>
            <h4 className="mt-4">Available Car Services:</h4>
            <ul className="list-group mt-2">
              {services.map((service, index) => (
                <li key={index} className="list-group-item">
                  {service}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p>No services available at the moment.</p>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
