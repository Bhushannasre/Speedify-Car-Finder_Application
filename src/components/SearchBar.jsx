import React from 'react';

const SearchBar = ({value,onChange}) => {
    return (
        <div>
            <input
    type="text"
    placeholder="Search cars..."
    value={value}
    onChange={e => onChange(e.target.value)}
     className="bg-gray-600 pl-10 pr-4 py-1.5 rounded text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
        </div>
    );
};

export default SearchBar;