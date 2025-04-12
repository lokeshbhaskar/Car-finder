import React from "react";
import { useParams } from "react-router-dom";
import carsData from "../cardata/cars";

const CardDetails = ({onAddToWishlist }) => {
  const { id } = useParams();
  const car = carsData.find((c) => c.id === parseInt(id));

  if (!car) return <p className="p-6 text-center text-lg text-red-500">Car not found</p>;

  return (
    <div className="p-4 flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-72 sm:h-96 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-6 space-y-3">
          <h1 className="text-3xl font-extrabold text-gray-800">{car.name}</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <p><span className="font-semibold">Brand:</span> {car.brand}</p>
            <p><span className="font-semibold">Fuel Type:</span> {car.fuel}</p>
            <p><span className="font-semibold">Seating Capacity:</span> {car.seating}</p>
            <p><span className="font-semibold">Price:</span> ₹{car.price.toLocaleString()}</p>
          </div>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => onAddToWishlist(car)}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
