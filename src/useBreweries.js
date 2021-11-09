import { useState, useEffect } from "react";

const API_LIST_BREWERIES = "https://api.openbrewerydb.org/breweries";

const fetchBreweriesFromAPI = async (params) => {
  const queryString = params
    ? "?" +
      Object.keys(params)
        .map((key) => key + "=" + params[key])
        .join("&")
    : "";
  const response = await fetch(API_LIST_BREWERIES + queryString);
  const listBreweries = await response.json();
  return listBreweries;
};

const useBreweries = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [breweryCollection, setBreweryCollection] = useState();
  const [breweryTypes, setBreweryTypes] = useState([]);
  const [activeBreweryFilter, setActiveBreweryFilter] = useState();

  useEffect(() => {
    (async function () {
      try {
        const responseBreweryCollection = await fetchBreweriesFromAPI(
          activeBreweryFilter
        );
        setBreweryCollection(responseBreweryCollection);
      } catch (error) {
        setError(true);
      }
    })();
  }, [activeBreweryFilter]);

  useEffect(() => {
    (async function () {
      try {
        const breweryTypesResponse = await fetchBreweriesFromAPI();
        const getBreweryTypes = breweryTypesResponse.map(
          (item) => item.brewery_type && item.brewery_type
        );
        const uniquebreweryTypes = [...new Set(getBreweryTypes)];
        if (uniquebreweryTypes.length) {
          setBreweryTypes(uniquebreweryTypes);
        }
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  useEffect(() => {
    if (breweryCollection) {
      setLoading(false);
    }
  }, [breweryCollection]);

  return {
    loading,
    breweryTypes,
    breweryCollection,
    error,
    activeBreweryFilter,
    setActiveBreweryFilter,
  };
};

export default useBreweries;
