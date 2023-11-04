import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { format } from "date-fns"
import { DateRange } from "react-date-range"

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.options)
  const [date, setDate] = useState(location.state.date)


  return (
    <div>
      <Navbar /> 
      {/* ovo koristimo da iskljucimo serach bar i hedaer naslove iz stranice list */}
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="liTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text" placeholder="Destination"/>
            </div>
            {/* second div list item */}
            <div className="lsItem">
              <label>Check in</label>
              <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}</span>
              <DateRange 
              
              />
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}

export default List
