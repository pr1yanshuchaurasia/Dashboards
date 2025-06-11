// src/pages/Services.jsx
import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    name: "Engine Oil Replacement",
    description: "Keep your engine smooth with timely oil changes.",
    image: require("../images/services/oil.jpg"),
  },
  {
    id: 2,
    name: "Battery Check & Replacement",
    description: "Ensure a powerful start every time.",
    image: require("../images/services/battery.jpg"),
  },
  {
    id: 3,
    name: "Brake Inspection",
    description: "Safety first with reliable braking systems.",
    image: require("../images/services/brake.jpg"),
  },
  {
    id: 4,
    name: "AC Repair & Maintenance",
    description: "Drive comfortably with efficient cooling.",
    image: require("../images/services/ac.jpg"),
  },
  {
    id: 5,
    name: "Tire Replacement",
    description: "Enhance road grip and reduce wear.",
    image: require("../images/services/tyre.jpg"),
  },
  {
    id: 6,
    name: "General Servicing",
    description: "All-round inspection and tuning for performance.",
    image: require("../images/services/general.jpg"),
  },
];

const Services = () => {
  return (
    <div className="services-wrapper bg-dark text-light py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-5 fw-bold text-primary">
          Our Car Services
        </h2>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-12 col-sm-6 col-md-4" key={service.id}>
              <div className="card bg-secondary text-light h-100 shadow service-card">
                <img
                  src={service.image}
                  alt={service.name}
                  className="card-img-top service-img"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
