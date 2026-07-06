import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { validCurrencies } from "../../public/data";
import reducer, {
  setReceiveAmount,
  setReceiveCurrency,
  setSendAmount,
  setSendCurrency,
} from "./contextReducer";
import { getRate } from "../helpers/helper";

const CurrencyContext = createContext();
const initialState = {
  selectedSendCurrency: "USD",
  selectedSendAmount: 1,
  selectedReceiveCurrency: "EUR",
  rate: await getRate("USD", "EUR"),
};

function CurrencyProvider({ children }) {
  const [currencies, setCurrencies] = useState([]);
  const [randomSliderItems, setRandomSliderItems] = useState([]);
  const [loadingRandomSliderItems, setLoadingRandomSliderItems] =
    useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);

  function addCurrecy(currency) {
    setCurrencies((prevCurrencies) => [...prevCurrencies, currency]);
  }

  async function changeSendCurrency(currency) {
    const rate = await getRate(currency, state.selectedReceiveCurrency);
    const newReceiveAmount = Number(state.selectedSendAmount) * rate;

    dispatch(setSendCurrency(currency, rate));
    dispatch(setReceiveAmount(newReceiveAmount.toFixed(2)));
  }

  async function changeReceiveCurrency(currency) {
    const rate = await getRate(state.selectedSendCurrency, currency);
    const newReceiveAmount = Number(state.selectedSendAmount) * rate;

    dispatch(setReceiveCurrency(currency, rate));
    dispatch(setReceiveAmount(newReceiveAmount.toFixed(2)));
  }

  function handleChangeSendAmount(amount) {
    dispatch(setSendAmount(amount));
    dispatch(setReceiveAmount());
  }

  // get the random slider items from the api and store them in the state
  useEffect(() => {
    async function getRandomItems() {
      const items = [];
      const seenPairs = new Set();
      const today = new Date().toISOString().slice(0, 10);
      const yesterday = new Date(Date.now() - 86400000)
        .toISOString()
        .slice(0, 10);

      async function fetchPair(randomSendCurrency, randomReceiveCurrency) {
        const [resToday, resYesterday] = await Promise.all([
          fetch(
            `https://api.frankfurter.dev/v2/rates?date=${today}&base=${randomSendCurrency}&quotes=${randomReceiveCurrency}`,
          ),
          fetch(
            `https://api.frankfurter.dev/v2/rates?date=${yesterday}&base=${randomSendCurrency}&quotes=${randomReceiveCurrency}`,
          ),
        ]);

        const [dataToday] = await resToday.json();
        const [dataYesterday] = await resYesterday.json();

        if (!dataToday || !dataYesterday) {
          return null;
        }

        const rateChange = dataToday.rate - dataYesterday.rate;
        if (rateChange !== 0 && Math.abs(rateChange) > 0.01) {
          return {
            sendCurrency: randomSendCurrency,
            receiveCurrency: randomReceiveCurrency,
            changePercentage: ((rateChange / dataYesterday.rate) * 100).toFixed(
              2,
            ),
          };
        }

        return null;
      }

      while (
        items.length < 30 &&
        seenPairs.size < validCurrencies.length ** 2
      ) {
        const batch = [];

        while (batch.length < 8 && items.length + batch.length < 30) {
          const randomSend = Math.floor(Math.random() * validCurrencies.length);
          const randomReceive = Math.floor(
            Math.random() * validCurrencies.length,
          );

          const randomSendCurrency = validCurrencies[randomSend];
          const randomReceiveCurrency = validCurrencies[randomReceive];
          const pairKey = `${randomSendCurrency}-${randomReceiveCurrency}`;

          if (seenPairs.has(pairKey)) {
            continue;
          }

          seenPairs.add(pairKey);
          batch.push(fetchPair(randomSendCurrency, randomReceiveCurrency));
        }

        const results = await Promise.all(batch);
        results.forEach((result) => {
          if (result) {
            items.push(result);
          }
        });
      }

      setRandomSliderItems(items);
      setLoadingRandomSliderItems(false);
    }

    getRandomItems();
  }, []);

  // get all the currencies from the api and store them in the state
  useEffect(() => {
    async function getAllCurrencies() {
      const res = await fetch("https://api.frankfurter.dev/v2/rates");
      const data = await res.json();

      data.forEach((currency) => {
        if (validCurrencies.includes(currency.quote)) {
          addCurrecy(currency);
        }
      });
    }

    getAllCurrencies();
  }, []);

  return (
    <CurrencyContext.Provider
      value={{
        state,
        currencies,
        validCurrencies,
        randomSliderItems,
        loadingRandomSliderItems,
        dispatch,
        changeSendCurrency,
        changeReceiveCurrency,
        setCurrencies,
        setRandomSliderItems,
        handleChangeSendAmount,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}

export default CurrencyProvider;
