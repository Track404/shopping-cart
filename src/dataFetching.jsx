import { useState, useEffect } from 'react';

function DataFetching(params) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const url = `https://dummyjson.com/products?limit=0`;

  useEffect(() => {
    fetch(url, { mode: 'cors' })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setData(response.products))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url, params]);

  return {
    data,
    error,
    loading,
  };
}

export default DataFetching;
