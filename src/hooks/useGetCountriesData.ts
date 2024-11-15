import axios from "axios";
import { useEffect, useState } from "react";

export const useGetCountriesData = () => {
  const COUNTRY_URL = "https://restcountries.com/v3.1/all?fields=name";

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesResponse = await axios.get(COUNTRY_URL);
        const sortedCountries = countriesResponse.data.sort((a: any, b: any) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sortedCountries);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return {
    countries,
    loading,
    error,
  };
};
