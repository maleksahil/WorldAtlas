import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryIndData(params.id);
      console.log(res);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {country && (
          <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {/* Flag Image and Country Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Flag Image */}
              <img
                src={country.flags.svg}
                alt={country.flags.alt}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
              />

              {/* Country Content */}
              <div className="country-content">
                <h2 className="text-3xl font-bold text-white mb-6">
                  {country.name.official}
                </h2>

                <div className="space-y-4 text-gray-300">
                  <p>
                    <span className="font-semibold">Native Names:</span>{" "}
                    {Object.keys(country.name.nativeName)
                      .map((key) => country.name.nativeName[key].common)
                      .join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold">Region:</span> {country.region}
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {country.subregion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital:</span> {country.capital}
                  </p>
                  <p>
                    <span className="font-semibold">Top Level Domain:</span>{" "}
                    {country.tld[0]}
                  </p>
                  <p>
                    <span className="font-semibold">Currencies:</span>{" "}
                    {Object.keys(country.currencies)
                      .map((curElem) => country.currencies[curElem].name)
                      .join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold">Languages:</span>{" "}
                    {Object.keys(country.languages)
                      .map((key) => country.languages[key])
                      .join(", ")}
                  </p>
                </div>
              </div>
            </div>

            {/* Go Back Button */}
            <div className="p-6">
              <NavLink to="/country">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Go Back
                </button>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryDetails;