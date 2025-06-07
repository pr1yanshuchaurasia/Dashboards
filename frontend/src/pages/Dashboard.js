import React, { useEffect, useState } from "react";
import { getDashboard } from "../services/api";


function Dashboard() {
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
        // Assuming your API returns { services: [...] }
        setServices(data.services || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching dashboard:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="d-flex">
      <div
        className="bg-dark text-white p-3"
        style={{ width: "250px", minHeight: "100vh" }}
      >
        <h4>Car Services</h4>
        <ul className="list-unstyled">
          {services.length > 0 ? (
            services.map((service, i) => (
              <li key={i} className="py-2">
                {service}
              </li>
            ))
          ) : (
            <li>No services available</li>
          )}
        </ul>
      </div>
      <div className="p-4 flex-grow-1">
        <h2>Welcome to Car Dashboard</h2>
        <p>Explore your car-related services here.</p>
      </div>
    </div>
  );
}
export default Dashboard;
