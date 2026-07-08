import { useCurrency } from "../contextApi/concurrs";
import { FaStar } from "react-icons/fa";
import { useViewContext } from "../contextApi/currentView";

function RateAndOptionsBox() {
  const { state } = useCurrency();
  const {
    favorites,
    addToFavorites,
    removeFromFavorites,
    logViewData,
    addToLog,
    removeFromLog,
  } = useViewContext();
  const {
    selectedSendCurrency,
    selectedReceiveCurrency,
    rate,
    selectedSendAmount,
    selectedReceiveAmount,
  } = state;

  const fromTo = `${selectedSendCurrency}/${selectedReceiveCurrency}`;
  const isFavorite = favorites.some((fav) => fav.fromTo === fromTo); // true if the pair is already in favorites, false otherwise
  const logIndex = `${selectedSendCurrency}/${selectedReceiveCurrency}/${selectedSendAmount}/${selectedReceiveAmount}`;
  const isLogged = logViewData.some((log) => log.logIndex === logIndex); // true if the conversion is already logged, false otherwise

  // add to favorites function
  function handleClickOnFavorite() {
    if (isFavorite) {
      removeFromFavorites(fromTo);
      return; // Exit the function if the pair is already in favorites
    }
    const newFavorite = {
      sendCurrency: selectedSendCurrency,
      receiveCurrency: selectedReceiveCurrency,
      fromTo: `${selectedSendCurrency}/${selectedReceiveCurrency}`,
      todayRate: rate,
      yesterdayRate: null, // You can set this to the actual yesterday's rate if available
    };
    addToFavorites(newFavorite);
  }

  function handleClickOnLog() {
    if (isLogged) {
      removeFromLog(logIndex);
      return; // Exit the function if the conversion is already logged
    }
    const newLog = {
      timeLogged: new Date().toLocaleString(),
      sendCurrency: selectedSendCurrency,
      receiveCurrency: selectedReceiveCurrency,
      sendAmount: selectedSendAmount,
      receiveAmount: selectedReceiveAmount,
      logIndex: `${selectedSendCurrency}/${selectedReceiveCurrency}/${selectedSendAmount}/${selectedReceiveAmount}`,
    };
    addToLog(newLog);
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 bg-neutral-800 rounded-b-lg px-4 text-neutral-400 py-2.5">
      <p>
        1 {state.selectedSendCurrency} = {state.rate}{" "}
        {state.selectedReceiveCurrency}
      </p>

      <div className="md:ml-auto flex gap-3 ">
        <button
          className="flex items-center gap-2 rounded-md px-2 py-1  transition hover:bg-neutral-600 bg-lime-500 text-neutral-900 cursor-pointer"
          onClick={handleClickOnFavorite}
        >
          {isFavorite ? <FaStar /> : ""}
          <span className="uppercase tracking-wider">
            {isFavorite ? "Favorited" : "favorite"}
          </span>
        </button>
        <button
          className="uppercase tracking-wider px-2 py-1 transition hover:bg-lime-600/15 border border-lime-500 rounded-md cursor-pointer"
          onClick={handleClickOnLog}
        >
          {isLogged ? "Logged" : "log conversion"}
        </button>
      </div>
    </div>
  );
}

export default RateAndOptionsBox;
