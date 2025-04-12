import React from "react";
import Filters from "../components/Filters";
import Wishlist from "../components/WishList";
import CarCard from "../components/CarCard";

const Home = ({
  filters,
  setFilters,
  currentCars,
  currentPage,
  setCurrentPage,
  filteredCars,
  carsPerPage,
  wishlist,
  handleAddToWishlist,
  handleRemoveFromWishlist,
}) => {
  return (
    <div className="p-4">
      <Filters setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4  ">
        {currentCars.map((car) => (
          <CarCard
            key={car.id}
            car={car}
            onAddToWishlist={handleAddToWishlist}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {Array.from({
          length: Math.ceil(filteredCars.length / carsPerPage),
        }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      {/* <Wishlist wishlist={wishlist} onRemove={handleRemoveFromWishlist} /> */}
    </div>
  );
};

export default Home;
