import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter, countries, setCountries }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      return value === "asc"
        ? a.name.common.localeCompare(b.name.common)
        : b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="bg-gray-800 py-6 rounded-lg">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={handleInputChange}
          className="w-full md:w-auto flex-grow px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-600 focus:outline-none"
        />

        {/* Sort Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => sortCountries("asc")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Asc
          </button>
          <button
            onClick={() => sortCountries("des")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Desc
          </button>
        </div>

        {/* Region Filter Dropdown */}
        <select
          value={filter}
          onChange={handleSelectChange}
          className="w-full md:w-auto px-4 py-2 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-600 focus:outline-none"
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;