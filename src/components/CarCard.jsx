import React from 'react';

const CarCard = ({car,isWishlisted,toggleWishlist}) => {
    return (
        <div>
             <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
    <img src={car.image} alt={car.name} className="w-full h-60 object-cover rounded" />
    <h2 className="text-lg font-bold mt-2">{car.name}</h2>
    <p>{car.brand} | {car.fuelType} | {car.seating} Seats</p>
    <p className="font-semibold">₹{car.price.toLocaleString()}</p>
    <button
      className={`mt-2 px-3 py-1 rounded ${isWishlisted ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
      onClick={() => toggleWishlist(car)}
    >
      {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  </div>
        </div>
    );
};

export default CarCard;