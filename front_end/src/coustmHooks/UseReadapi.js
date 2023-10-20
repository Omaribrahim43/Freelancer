import { useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const getFetch = async () => {
    const api = await fetch(url);
    const response = await api.json();

    setData(response);
  };

  return [data, getFetch];
};

export default useFetch;
