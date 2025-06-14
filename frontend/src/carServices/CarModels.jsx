import React, { useState } from "react";
import "./CarModels.css";

const carData = [
  {
    id: 1,
    name: "Honda City",
    image: require("../images/city.avif"),
    details: "Electric sedan with autopilot and long range.",
  },
  {
    id: 2,
    name: "Maruti Dzire",
    image: require("../images/Dzire.webp"),
    details: "Muscle car with V8 engine and stylish design.",
  },
  {
    id: 3,
    name: "Honda Elevate",
    image: require("../images/elevate.webp"),
    details: "Spacious SUV with modern comfort and tech.",
  },
  {
    id: 4,
    name: "Hyundai Palisade",
    image: require("../images/Palisade.avif"),
    details: "Premium SUV with 3rd-row seating.",
  },
  {
    id: 5,
    name: "Range Rover Sports",
    image: require("../images/sports.avif"),
    details: "Luxury performance SUV.",
  },
  {
    id: 6,
    name: "Maruti Swift",
    image: require("../images/swift.webp"),
    details: "Compact hatchback perfect for city driving.",
  },
  {
    id: 7,
    name: "Mahindra Thar",
    image: require("../images/thar.avif"),
    details: "Off-road beast with rugged looks.",
  },
  {
    id: 8,
    name: "Volvo XC90",
    image: require("../images/xc90.webp"),
    details: "Safe and stylish luxury SUV.",
  },
  {
    id: 9,
    name: "Mahindra XUV9e",
    image: require("../images/xuv9e.avif"),
    details: "Upcoming electric SUV from Mahindra.",
  },
  {
    id: 10,
    name: "Mahindra XUV700",
    image: require("../images/xuv700.avif"),
    details: "Feature-packed SUV with ADAS.",
  },
  {
    id: 11,
    name: "Range Rover Defender",
    image: require("../images/defender.avif"),
    details: "Rugged luxury off-roader.",
  },
  {
    id: 12,
    name: "Tata Safari",
    image: require("../images/safari.jpeg"),
    details: "Spacious SUV with modern design.",
  },
];

const CarModels = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  const closeOverlay = () => setSelectedCar(null);

  return (
    <div className="container py">
     <h2 className="mb-5 display-5 text-center fw-bold" style={{color:"#0FA4AF"}}>Explore Our Car Models</h2>


      <div className="row g-4">
        {carData.map((car) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={car.id}>
            <div
              className="card h-100 border-0 shadow-lg car-card hover-scale"
              role="button"
              onClick={() => setSelectedCar(car)}
            >
              <img
                src={car.image}
                className="card-img-top rounded-top"
                alt={car.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-semibold"style={{color:"#0FA4AF"}}>{car.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <div className="overlay" onClick={closeOverlay}>
          <div className="overlay-content shadow-lg bg-white rounded p-4" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close float-end"style={{ filter: "invert(0)" }} onClick={closeOverlay}></button>
            <h3 className="text-center mb-3 fw-bold text-dark">{selectedCar.name}</h3>
            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="img-fluid rounded mb-3 d-block mx-auto"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
            <p className="text-center fs-5 text-secondary">{selectedCar.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarModels;

