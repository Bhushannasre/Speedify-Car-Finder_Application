import React from 'react';

const Pagination = ({perPage,current,setCurrent,total}) => {
    const totalPages = Math.ceil(total / perPage);
    return (
        <div>
    <div className="flex gap-2 justify-center mt-4">
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`px-3 py-1 rounded ${current === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          onClick={() => setCurrent(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
        </div>
    );
};

export default Pagination;