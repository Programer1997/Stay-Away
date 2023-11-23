import { useState, useEffect, createContext } from "react";
import Axios from "axios";

//step 1
export const DataContext = createContext();

const DataUpdatedProvider = ({ children }) => {
  const [dataFetched, setDataFetched] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const fetchData = async (url) => {
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
  useEffect(() => {
    fetchData(url);
  }, [url]);

  const reFetchData = async () => {
    setDataFetched();
  };

  //return {dataFetched,error,reFetchData,loading}
  return (
    <DataContext.Provider value={{ dataFetched, error, loading, reFetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataUpdatedProvider;
