import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(import.meta.env.VITE_BASE_URL + url);
        setData(res.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getPost();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
