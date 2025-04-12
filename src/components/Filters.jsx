import React from "react";
import cars from "../cardata/cars";

const Filters = ({ setFilters }) => {
  return (
    <div className="flex flex-wrap gap-4">
      <select
        onChange={(e) => setFilters((f) => ({ ...f, brand: e.target.value }))}
        className="p-2 border rounded"
      >
        <option value="">All Brands</option>
        {[...new Set(cars.map((car) => car.brand))].map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setFilters((f) => ({ ...f, fuel: e.target.value }))}
        className="p-2 border rounded"
      >
        <option value="">All Fuel Types</option>
        {[...new Set(cars.map((car) => car.fuel))].map((fuel) => (
          <option key={fuel} value={fuel}>
            {fuel}
          </option>
        ))}
      </select>
      <select
        onChange={(e) => setFilters((f) => ({ ...f, seat: e.target.value }))}
        className="p-2 border rounded"
      >
        <option value="">All Seating</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="7">7</option>
      </select>
      <select
        onChange={(e) => setFilters((f) => ({ ...f, price: e.target.value }))}
        className="p-2 border rounded"
      >
        <option value="">Any Price</option>
        <option value="300000">Up to 3L</option>
        <option value="500000">Up to 5L</option>
        <option value="1000000">Up to 10L</option>
      </select>
      <select
        onChange={(e) => setFilters((f) => ({ ...f, sort: e.target.value }))}
        className="p-2 border rounded"
      >
        <option value="">Sort By</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="nameAZ">Name: A-Z</option>
        <option value="nameZA">Name: Z-A</option>
      </select>
    </div>
  );
};

export default Filters;
