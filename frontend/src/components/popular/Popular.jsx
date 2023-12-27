import useFetch from "../../hooks/useFetch";
import "./popular.css";

const Popular = () => {
  const { data, loading } = useFetch("/api/hotels?featured=true");

  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.slice(0, 5).map((item) => (
            <div className="fpItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="fpImg" />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">
                Starting from ${item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Popular;
