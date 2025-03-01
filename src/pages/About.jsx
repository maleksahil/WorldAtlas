import React from "react";
import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Here are the Interesting facts
          <br />
          we're proud of
        </h2>

        {/* Gradient Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countryFacts.map((country) => {
            const { id, countryName, capital, population, interestingFact } = country;
            return (
              <div className="card" key={id}>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <p className="text-2xl font-bold text-white mb-4">{countryName}</p>
                  <p className="text-gray-400 mb-2">
                    <span className="font-semibold">Capital:</span> {capital}
                  </p>
                  <p className="text-gray-400 mb-2">
                    <span className="font-semibold">Population:</span> {population}
                  </p>
                  <p className="text-gray-400">
                    <span className="font-semibold">Interesting Fact:</span> {interestingFact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;