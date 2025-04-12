import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardDetails from "./pages/CardDetails";
import Navbar from "./components/Navbar";
import carsData from "./cardata/cars";
import axios from "axios";
import Wishlist from "./components/Wishlist";
import { toast, ToastContainer } from "react-toastify";
import img from "./assets/car.svg";

function App() {
  const [filters, setFilters] = useState({
    brand: "",
    fuel: "",
    seat: "",
    price: "",
    sort: "",
  });

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 10;

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((res) => {
        setTimeout(() => {
          setCars(res.data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
        setError("Failed to load cars. Please try again.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
    // setCars(carsData);
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleAddToWishlist = (car) => {
    if (!wishlist.find((item) => item.id === car.id)) {
      setWishlist([...wishlist, car]);
      toast.success(`${car.name} added to wishlist!`);
    }
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter((car) => car.id !== id));
  };

  const filteredCars = cars.filter((car) => {
    return (
      (!filters.brand || car.brand === filters.brand) &&
      (!filters.fuel || car.fuel === filters.fuel) &&
      (!filters.seat || car.seating === parseInt(filters.seat)) &&
      (!filters.price || car.price <= parseInt(filters.price))
    );
  });
  let sortedCars = [...filteredCars];

  if (filters.sort === "priceLowToHigh") {
    sortedCars.sort((a, b) => a.price - b.price);
  } else if (filters.sort === "priceHighToLow") {
    sortedCars.sort((a, b) => b.price - a.price);
  } else if (filters.sort === "nameAZ") {
    sortedCars.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filters.sort === "nameZA") {
    sortedCars.sort((a, b) => b.name.localeCompare(a.name));
  }

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = sortedCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
        <ToastContainer position="top-right" autoClose={2000} />
        <Navbar />
        {loading ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="relative w-[50%] h-24 bg-gray-800 overflow-hidden">
              <div className="absolute bottom-4 w-full flex justify-between px-4">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="w-6 h-1 bg-white mx-1" />
                ))}
              </div>
              <div className="absolute bottom-4 animate-car-move">
                <img src={img} alt="" width={100} />
              </div>
            </div>
            <div className="text-2xl font-bold ">
              Wait Your car is loading...
            </div>
            <div className="w-12 h-12 border-4 border-green-500 border-dotted rounded-full animate-spin "></div>
          </div>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  filters={filters}
                  setFilters={setFilters}
                  currentCars={currentCars}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  filteredCars={filteredCars}
                  carsPerPage={carsPerPage}
                  wishlist={wishlist}
                  handleAddToWishlist={handleAddToWishlist}
                  handleRemoveFromWishlist={handleRemoveFromWishlist}
                />
              }
            />
            <Route
              path="/car/:id"
              element={<CardDetails onAddToWishlist={handleAddToWishlist} />}
            />
            <Route
              path="/wishlist"
              element={
                <Wishlist
                  wishlist={wishlist}
                  onRemove={handleRemoveFromWishlist}
                />
              }
            />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
