import React from "react";
import axios from "axios";
const useFetch = (endpoint, query) => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "4a67a71371mshfe5d803729621b7p1a4427jsnde804166112b",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
    } catch (error) {
      setError(error);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
