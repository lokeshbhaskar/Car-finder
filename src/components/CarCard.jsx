import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car, onAddToWishlist }) => {
  return (
    <div className="border-none  rounded p-4 shadow hover:shadow-2xl transition hover:scale-105 ">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{car.name}</h2>
      <div className="flex justify-between ">
        <p>Brand: {car.brand}</p>
        <p>Fuel: {car.fuel}</p>
      </div>
      <div className="flex justify-between">
        <p>Seating: {car.seating}</p>
        <p>Price: ₹{car.price}</p>
      </div>
      <div className="flex justify-between mt-2">
        <button
          onClick={() => onAddToWishlist(car)}
          className="bg-green-500 text-white px-3 py-1 rounded cursor-pointer "
        >
          Wishlist
        </button>
        <Link to={`/car/${car.id}`} className="text-sky-500 cursor-pointer">
          Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
