import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import Header from "../../components/header/Header";
import SearchItem from "../../components/itemSearch/SearchItem";
import Navbar from "../../components/navbar/Navbar";
import { useSearch } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./list.css";

// TODO: move to right folder as this is just a helper
const generateUrl = (params) => {
  const newParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
  });

  return `/api/hotels?${newParams.toString()}`;
};

const List = () => {
  const {
    city,
    dates: searchDates,
    options: searchOptions,
    type,
  } = useSearch();
  const [destination, setDestination] = useState(city); //valor que escribo
  const [dates, setDates] = useState(searchDates); //fechas qeu designo
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(searchOptions);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    generateUrl({ city, min, max, type })
  );

  //handle Click for btn:
  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <div>
        <Navbar />
        <Header type="list" />
        <div className="listContainer">
          <div className="listWrapper">
            <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input placeholder={destination} type="text" />
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(
                  dates[0]?.startDate || new Date(),
                  "MM/dd/yyyy"
                )} to ${format(
                  dates[0]?.endDate || new Date(),
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    onChange={(item) => setDates([item.selection])}
                    minDate={new Date()}
                    ranges={dates}
                  />
                )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Min price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMin(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">
                      Max price <small>per night</small>
                    </span>
                    <input
                      type="number"
                      onChange={(e) => setMax(e.target.value)}
                      className="lsOptionInput"
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Adult</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.adult ?? 1}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Children</span>
                    <input
                      type="number"
                      min={0}
                      className="lsOptionInput"
                      placeholder={options.children ?? 0}
                    />
                  </div>
                  <div className="lsOptionItem">
                    <span className="lsOptionText">Room</span>
                    <input
                      type="number"
                      min={1}
                      className="lsOptionInput"
                      placeholder={options.room ?? 1}
                    />
                  </div>
                </div>
              </div>
              <button onClick={handleClick}>Search</button>
            </div>
            <div className="listResult">
              {loading ? (
                "loading"
              ) : (
                <>
                  {data.map((item) => (
                    <SearchItem item={item} key={item._id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
