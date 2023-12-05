import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";
//INITIAL STATE of context  :
const INITIAL_STATE = {
  updatedBooking: () => {},
  deleteBooking: () => {},
  bookingsData: [],
  createBooking: () => {},
};
//Step 1  create context  :
const BookingContext = createContext(INITIAL_STATE);

export const BookingContextProvider = ({ children }) => {
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    axios
      .get("/bookings/")
      .then((response) => {
        setBookingsData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteBooking = (_id) => {
    axios
      .delete(`/bookings/${_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setBookingsData((prev) => {
      const users = [...prev];
      const userIndex = users.findIndex((state) => state._id === _id);
      users.splice(userIndex, 1);

      return users;
    });
  };
  const updateBooking = () => {
    console.log("data ready to Update");
  };

  const value = { bookingsData, deleteBooking, updateBooking };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

export const useBookingContext = () => useContext(BookingContext);
