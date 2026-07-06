import { createContext, useContext, useState } from "react";

const currentViewContext = createContext();

function CurrentViewContextProvider({ children }) {
  const [selectedView, setSelectedView] = useState("converter");
  const value = { selectedView, setSelectedView };
  return (
    <currentViewContext.Provider value={value}>
      {children}
    </currentViewContext.Provider>
  );
}

function ViewContext() {
  const context = useContext(currentViewContext);
  if (!context) {
    throw new Error(
      "currentViewContext must be used within a currentViewContextProvider",
    );
  }
  return context;
}

export default CurrentViewContextProvider;
export { ViewContext };
