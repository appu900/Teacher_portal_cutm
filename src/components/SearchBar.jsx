import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Function to handle search
  const handleSearch = () => {
    // Implement your search logic here
    // For simplicity, let's just filter an array of dummy data
    const dummyData = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Grapes'];
    const filteredResults = dummyData.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredResults);
    setShowResults(true);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onBlur={() => setShowResults(false)} // Hide results when focus is lost
      />
      {showResults && (
        <div className="absolute bg-white border border-gray-300 rounded mt-1 w-full z-10">
          {results.map((result, index) => (
            <div
              key={index}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(result);
                setShowResults(false);
              }}
            >
              {result}
            </div>
          ))}
        </div>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
