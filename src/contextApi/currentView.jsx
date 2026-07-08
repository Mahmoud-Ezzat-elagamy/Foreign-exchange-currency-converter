import { createContext, useContext, useState } from "react";

const currentViewContext = createContext();

function CurrentViewContextProvider({ children }) {
  const favoritesFromLocalStorage =
    JSON.parse(localStorage.getItem("favorites")) || [];
  const logViewDateFromLocalStorage =
    JSON.parse(localStorage.getItem("logViewData")) || [];

  const [selectedView, setSelectedView] = useState("history");
  const [timeframe, setTimeFrame] = useState("1D");
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [compareViewData, setCompareViewData] = useState(null);
  const [favorites, setFavorites] = useState(favoritesFromLocalStorage);
  const [logViewData, setLogViewData] = useState(logViewDateFromLocalStorage);

  const value = {
    selectedView,
    setSelectedView,
    timeframe,
    setTimeFrame,
    start,
    setStart,
    end,
    setEnd,
    compareViewData,
    setCompareViewData,
    favorites,
    setFavorites,
    addToFavorites,
    removeFromFavorites,
    logViewData,
    setLogViewData,
    addToLog,
    removeFromLog,
  };

  function addToFavorites(newFavorite) {
    if (!favorites.some((fav) => fav.fromTo === newFavorite.fromTo)) {
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  }

  function removeFromFavorites(fromTo) {
    const updatedFavorites = favorites.filter((fav) => fav.fromTo !== fromTo);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  }

  function addToLog(newLog) {
    const updatedLogViewData = [...logViewData, newLog];
    setLogViewData(updatedLogViewData);
    localStorage.setItem("logViewData", JSON.stringify(updatedLogViewData));
  }

  function removeFromLog(index) {
    const updatedLogViewData = logViewData.filter(
      (log) => log.logIndex !== index,
    );
    setLogViewData(updatedLogViewData);
    localStorage.setItem("logViewData", JSON.stringify(updatedLogViewData));
  }

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
