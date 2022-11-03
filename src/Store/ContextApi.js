import { createContext, useReducer, useContext } from "react";

export const Context = createContext();

const Initial_State = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };

    default:
      return state;
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, Initial_State);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export const ModeContext = () => useContext(Context);
