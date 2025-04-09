import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import CarCard from './components/CarCard';
import Pagination from './components/Pagination';
import Wishlist from './components/Wishlist';
import DarkModeToggle from './components/DarkModeToggle';
import carData from './data/cars.json';



const App = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ brand: '', fuel: '', price: '', seats: '' });
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('wishlist')) || []);
  const [currentPage, setCurrentPage] = useState(1);
 
  const carsPerPage = 10;

  useEffect(() => {
    let filtered = carData;

    if (search) {
      filtered = filtered.filter(car => car.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (filters.brand) filtered = filtered.filter(car => car.brand === filters.brand);
    if (filters.fuel) filtered = filtered.filter(car => car.fuelType === filters.fuel);
    if (filters.price) {
      const [min, max] = filters.price.split('-');
      filtered = filtered.filter(car => car.price >= +min && car.price <= +max);
    }
    if (filters.seats) filtered = filtered.filter(car => car.seating === +filters.seats);

    setCars(filtered);
  }, [search, filters]);
  

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (car) => {
    setWishlist((prev) => {
      const exists = prev.find(item => item.id === car.id);
      if (exists) return prev.filter(item => item.id !== car.id);
      return [...prev, car];

      
    });
   
  };


  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    
    <div className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
  {/* Navbar */}
  <nav className="w-full bg-gray-900 text-white px-4 py-3 flex items-center justify-between">
    {/* Left Section - Logo */}
    <div className="flex items-center space-x-8">
      <div className="text-purple-400 text-2xl font-bold">🚗 Speedify</div>
      <SearchBar value={search} onChange={setSearch} />
    </div>
    {/* Right Section - Dark Mode Toggle */}
    <div>
      <DarkModeToggle />
    </div>
    
   
  </nav>

  {/* Main Content */}
  <div className="p-4">
   
    <Filters filters={filters} setFilters={setFilters} />
    
    {/* Car Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4">
      {currentCars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          toggleWishlist={toggleWishlist}
          isWishlisted={wishlist.some((w) => w.id === car.id)}
        />
      ))}
    </div>

    {/* Pagination */}
    <Pagination
      total={cars.length}
      perPage={carsPerPage}
      current={currentPage}
      setCurrent={setCurrentPage}
    />

    {/* Wishlist */}
    <Wishlist items={wishlist} toggleWishlist={toggleWishlist} />
  </div>
  </div>
  );
};

export default App;
