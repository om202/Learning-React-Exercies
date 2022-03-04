import { useEffect, useState } from "react";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then( data => setData(data))
      .then(() => setLoading(false))
      .catch(err => setError(err));
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}
