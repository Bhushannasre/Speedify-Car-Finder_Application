import React from 'react';
import CarCard from './CarCard';
const Wishlist = ({items, toggleWishlist}) => {
    return (
        <div>
            <div className="mt-8">
    <h2 className="text-xl font-bold mb-2">Wishlist</h2>
    {items.length === 0 ? <p>No items in wishlist</p> : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map(car => (
          <CarCard key={car.id} car={car} toggleWishlist={toggleWishlist} isWishlisted={true} />
        ))}
      </div>
    )}
  </div>
        </div>
    );
};

export default Wishlist;