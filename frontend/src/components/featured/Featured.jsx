import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const { data, loading, error } = useFetch("/api/hotels/countByCityWithRooms");

  const { data: citiesData } = useFetch("/api/hotels/distinctCities");

  if (loading) return <div>Loading, please wait...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;

  const handleFeatureClick = (city) => {
    dispatch({ type: "NEW_SEARCH", payload: { city } });

    navigate("/hotels");
  };

  return (
    <div className="featured">
      {loading ? (
        <div>Loading please wait...</div>
      ) : error ? (
        <div>Error occurred: {error.message}</div>
      ) : (
        <>
          {citiesData.slice(0, 3).map((city, index) => (
            <div className="featuredItem" key={city._id}>
              <img
                src={city.hotels[0].imgSrc}
                alt={city.city}
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>{city.city}</h1>
                <h2>{city.hotels.length} properties</h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Featured;
