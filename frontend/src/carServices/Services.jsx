import React from "react";
import "./Services.css";

const services = [
  {
    id: 1,
    name: "Engine Oil Replacement",
    image: require("../images/castrol.jpeg"),
    description: "Keep your engine smooth with timely oil changes.",
  },
  {
    id: 2,
    name: "Battery Check & Replacement",
    image: require("../images/Battery.jpeg"),
    description: "Ensure a powerful start every time.",
  },
  {
    id: 3,
    name: "Brake Inspection",
    image: require("../images/brake.jpeg"),
    description: "Safety first with reliable braking systems.",
  },
  {
    id: 4,
    name: "AC Repair & Maintenance",
    image: require("../images/ac.jpg"),
    description: "Drive comfortably with efficient cooling.",
  },
  {
    id: 5,
    name: "Tire Replacement",
    image: require("../images/tire.jpeg"),
    description: "Enhance road grip and reduce wear.",
  },
  {
    id: 6,
    name: "General Servicing",
    image: require("../images/general.jpeg"),
    description: "All-round inspection and tuning for performance.",
  },
];

const Services = () => {
  return (
    <div className="services-wrapper py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold display-5"style={{color:"#0FA4AF"}}>
          Our Car Services
        </h2>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-12 col-sm-6 col-md-4" key={service.id}>
              <div className="card h-100 shadow service-card">
                <img
                  src={service.image}
                  alt={service.name}
                  className="card-img-top service-img"
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{service.name}</h5>
                  <p className="card-text" style={{color:"#0FA4AF"}}>{service.description}</p>
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
