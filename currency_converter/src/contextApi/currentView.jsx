import { createContext, useContext, useState } from "react";

const currentViewContext = createContext();

function CurrentViewContextProvider({ children }) {
  const [selectedView, setSelectedView] = useState("history");
  const [timeframe, setTimeFrame] = useState("1D");
  const value = { selectedView, setSelectedView, timeframe, setTimeFrame };
  return (
    <currentViewContext.Provider value={value}>
      {children}
    </currentViewContext.Provider>
  );
}

function useViewContext() {
  const context = useContext(currentViewContext);
  if (!context) {
    throw new Error(
      "currentViewContext must be used within a currentViewContextProvider",
    );
  }
  return context;
}

export default CurrentViewContextProvider;
export { useViewContext };
