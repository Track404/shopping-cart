import { useState, useEffect } from 'react';

function DataFetching({ category }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  let url = `https://dummyjson.com/products?limit=0`;
  if (category !== undefined) {
    url = `https://dummyjson.com/products/category/${category}`;
  } else {
    url = `https://dummyjson.com/products?limit=0`;
  }
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
  }, [url, category]);

  return {
    data,
    error,
    loading,
  };
}

export default DataFetching;
