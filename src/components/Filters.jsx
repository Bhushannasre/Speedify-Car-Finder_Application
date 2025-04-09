import React from 'react';


const Filters = ({setFilters, filters}) => {
    return (
        <div>
            
             <div className="flex flex-wrap gap-2 my-2">
      <select onChange={e => setFilters(f => ({ ...f, brand: e.target.value }))} value={filters.brand} className="bg-white text-black dark:bg-black dark:text-white p-4">
        <option value="">Basic Brands</option>
        <option value="Honda">Honda</option>
        <option value="Toyota">Toyota</option>
        <option value="Hyundai">Hyundai</option>
        <option value="Tata">Tata</option>
        <option value="Maruti">Maruti</option>
        <option value="Kia">Kia</option>
        <option value="Mahindra">Mahindra</option>
        <option value="Nissan">Nissan</option>
        <option value="Volkswagen">Volkswagen</option>
      </select>
      <select onChange={e => setFilters(f => ({ ...f, fuel: e.target.value }))} value={filters.fuel} className="bg-white text-black dark:bg-black dark:text-white p-4">
        <option value="">All Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
        <option value="Hybrid">Hybrid</option>
      </select>
      <select onChange={e => setFilters(f => ({ ...f, price: e.target.value }))} value={filters.price} className="bg-white text-black dark:bg-black dark:text-white p-4">
        <option value="">All Prices</option>
        <option value="0-1000000">Below 10L</option>
        <option value="1000000-2000000">10L - 20L</option>
        <option value="2000000-5000000">20L - 50L</option>
        <option value="12000000-30000000">1Cr - 3Cr</option>
        <option value="50000000-70000000 ">5Cr-7Cr</option>
      </select>
      <select onChange={e => setFilters(f => ({ ...f, seats: e.target.value }))} value={filters.seats} className="bg-white text-black dark:bg-black dark:text-white p-4">
        <option value="">All Seats</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
      <select onChange={e => setFilters(f => ({ ...f, brand: e.target.value }))} value={filters.brand} className="bg-white text-black dark:bg-black dark:text-white p-4">
        <option value="">Luxury Brands</option>
        <option value="Mercedes-Benz">Mercedes-Benz</option>
        <option value="BMW">BMW</option>
        <option value="Audi">Audi</option>
          <option value="Tesla">Tesla</option>
          <option value="Lexus">Lexus</option>
          <option value="Range Rover">Range Rover</option>
          <option value="Porsche">Porsche</option>
          <option value="Rolls-Royce">Rolls-Royce</option>
        </select>
    </div>
        </div>
    );
};

export default Filters;