import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const INITIAL_STATE = {
  customers: [],
  updateCustomer: () => {},
  deleteCustomer: () => {},
};

export const CustomerContext = createContext(INITIAL_STATE); //step 1

export const CustomerContextProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);

  const fetchDataCustomers = async () => {
    try {
      const response = await axios.get("/users/testing");
      setCustomers(response.data);
      console.log(response.data, "esta data es from Hook");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDataCustomers();
  }, []);

  const updateCustomer = (user) => {
    const { _id, firstName, lastName, email } = user;
    axios
      .put(`/users/testing/${_id}`, { firstName, lastName, email })
      .then((response) => {
        const updatedUser = response.data;

        setCustomers((prev) => {
          const users = [...prev];
          const updatedUserIndex = users.findIndex(
            (state) => state._id === updatedUser._id
          );
          users.splice(updatedUserIndex, 1, updatedUser);

          return users;
        });
      })
      .catch((err) => {
        console.log("You got an error editing data (handleEdit): ", err);
      });
  };

  const deleteCustomer = (user) => {
    // delete the user
  };

  const value = { customers, updateCustomer, deleteCustomer };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => useContext(CustomerContext);
