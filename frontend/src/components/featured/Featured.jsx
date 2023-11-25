import useFetch  from "../../hooks/useFetch"
import "./featured.css"
import {useState, useEffect} from "react"



const Featured = () => {
  const { data: counts, loading: loadingCounts, error: errorCounts } = useFetch("/hotels/countByCityWithRooms");
  const { data: cities, loading: loadingCities, error: errorCities } = useFetch("/hotels/distinctCities");

  // A state to hold the combined data
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
      // Load vjerovatno?
      if (!loadingCounts && !loadingCities && counts && cities) {
          const updatedData = cities.map(city => {
              
              const cityName = city.city ?? ""; 
              const cityCount = counts.find(count => count.city?.toLowerCase() === cityName.toLowerCase());
              return {
                  ...city,
                  count: cityCount ? cityCount.properties : 0 // nije nadjen
              };
          });
          setCombinedData(updatedData);
      }
  }, [counts, cities, loadingCounts, loadingCities]);

  if (loadingCounts || loadingCities) return <div>Loading, please wait...</div>;
  if (errorCounts || errorCities) return <div>Error occurred: {errorCounts?.message || errorCities?.message}</div>;

  return (
      <div className="featured">
          {combinedData.map((city, index) => (
              <div className="featuredItem" key={index}>
                  <img
                      src={city.hotels[0]?.imgSrc || 'default-image-url'} // Use optional chaining and provide a default image URL
                      alt={city.city}
                      className="featuredImg"
                  />
                  <div className="featuredTitles">
                      <h1>{city.city}</h1>
                      <h2>{city.count} properties</h2> 
                  </div>
              </div>
          ))}
      </div>
  );
};

export default Featured;