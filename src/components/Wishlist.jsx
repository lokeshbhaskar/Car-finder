import React from "react";

const WishList = ({ wishlist, onRemove }) => {
  if (wishlist.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-500 text-lg">
        Your wishlist is empty 🛒
      </div>
    );
  }
  return (
    <div className="mt-10 px-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Wishlist
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-[1.02] transition duration-300"
          >
            <img
              src={car.image}
              alt={car.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {car.name}
              </h3>
              <p className="text-gray-600 text-sm">
                ₹{car.price.toLocaleString()}
              </p>
              <button
                onClick={() => onRemove(car.id)}
                className="mt-2 inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-lg transition"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
