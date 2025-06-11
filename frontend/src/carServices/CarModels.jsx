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
    details: "Reliable family sedan with great fuel efficiency.",
  },
    {
    id: 4,
    name: "Hyundai Palisade",
    image: require("../images/Palisade.avif"),
    details: "Reliable family sedan with great fuel efficiency.",
  },
    {
    id: 5,
    name: "Range Rover Sports",
    image: require("../images/sports.avif"),
    details: "Reliable family sedan with great fuel efficiency.",
  },
    {
    id: 6,
    name: "Maruti Swift",
    image: require("../images/swift.webp"),
    details: "Reliable family sedan with great fuel efficiency.",
  },
    {
    id: 7,
    name: "Mahindra Thar",
    image: require("../images/elevate.webp"),
    details: "Reliable family sedan with great fuel efficiency.",
  },
    {
    id: 8,
    name: "Volvo xc90",
    image: require("../images/xc90.webp"),
    details: "Reliable family sedan with great fuel efficiency.",
  },
    {
    id: 9,
    name: "Mahindra Xuv9e",
    image: require("../images/xuv9e.avif"),
    details: "Reliable family sedan with great fuel efficiency.",
  },
    {
    id: 10,
    name: "Mahindra xuv700",
    image: require("../images/xuv700.avif"),
    details: "Reliable family sedan with great fuel efficiency.",
  },
     {
    id: 11,
    name: "Mahindra xuv700",
    image: require("../images/xuv700.avif"),
    details: "Reliable family sedan with great fuel efficiency.",
  },
     {
    id: 10,
    name: "Mahindra xuv700",
    image: require("../images/xuv700.avif"),
    details: "Reliable family sedan with great fuel efficiency.",
  }
  
];

const CarModels = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Car Models</h2>

      <div className="row g-4">
        {carData.map((car) => (
          <div className="col-12 col-sm-6 col-md-4" key={car.id}>
            <div
              className="card h-100 shadow-sm car-card"
              role="button"
              onClick={() => setSelectedCar(car)}
            >
              <img
                src={car.image}
                className="card-img-top"
                alt={car.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{car.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCar && (
        <div className="car-detail mt-5 p-4 bg-light rounded shadow">
          <h3>{selectedCar.name}</h3>
          <img
            src={selectedCar.image}
            alt={selectedCar.name}
            className="img-fluid rounded"
            style={{ maxHeight: "300px", objectFit: "contain" }}
          />
          <p className="mt-3">{selectedCar.details}</p>
        </div>
      )}
    </div>
  );
};

export default CarModels;
