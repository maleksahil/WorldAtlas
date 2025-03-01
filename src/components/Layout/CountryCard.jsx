import React from "react";
import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flags, name, population, region, capital } = country;

  return (
    <li className="bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      {/* Flag Image */}
      <img
        src={flags.svg}
        alt={flags.alt}
        className="w-full h-48 object-cover"
      />

      {/* Country Info */}
      <div className="p-6">
        {/* Country Name */}
        <p className="text-xl font-bold text-white mb-4">
          {name.common.length > 10
            ? name.common.slice(0, 10) + "..."
            : name.common}
        </p>

        {/* Population */}
        <p className="text-gray-400 mb-2">
          <span className="font-semibold">Population:</span>{" "}
          {population.toLocaleString()}
        </p>

        {/* Region */}
        <p className="text-gray-400 mb-2">
          <span className="font-semibold">Region:</span> {region}
        </p>

        {/* Capital */}
        <p className="text-gray-400 mb-4">
          <span className="font-semibold">Capital:</span> {capital[0]}
        </p>

        {/* Read More Button */}
        <NavLink to={`/country/${name.common}`}>
          <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
            Read More
          </button>
        </NavLink>
      </div>
    </li>
  );
};

export default CountryCard;