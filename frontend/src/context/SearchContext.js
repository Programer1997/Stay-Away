import { createContext, useContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  type: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined
  }
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return { ...state, ...action.payload };
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

//using reducer in a context:
export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  //when we activate search bar it will activate first case "NEW SEARCH" //dispatch
  return (
    //defining provider:
    <SearchContext.Provider
      value={{
        //we need it in home, hotels page and single also
        ...state,
        dispatch
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
