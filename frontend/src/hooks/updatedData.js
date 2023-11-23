import { useState, useEffect } from "react";
import Axios from "axios";

const DataUpdatedProvider = (url) => {
  const [dataFetched, setDataFetched] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await Axios.get(url);
        setDataFetched(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  const reFetchData = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(url);
      setDataFetched(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {dataFetched,error,reFetchData,loading}
  
};

export default DataUpdatedProvider;
