import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import Loading from './Loading';

export default function CountriesList({ query, filters }) {
  const [countriesData, setCountriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setCountriesData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="countries-container">
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()))
        .filter((country) => filters===''|| country.region === filters)
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          );
        })}
    </div>
  );
}
