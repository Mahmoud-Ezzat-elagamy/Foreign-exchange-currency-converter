import { useEffect, useRef, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useCurrency } from "../contextApi/concurrs";
import { validCurrencies } from "../../public/data";
import { useViewContext } from "../contextApi/currentView";
import CurrencyItem from "./CurrencyItem";

const flageTemplate = (code) => `/flags/${code.toLowerCase()}.webp`;

function SelectCurrency({ direction }) {
  const { logViewData } = useViewContext();
  const [isOpen, setIsOpen] = useState(false);
  const { changeSendCurrency, changeReceiveCurrency, state } = useCurrency();
  const ref = useRef(null);
  const [searchCurrency, setSearchCurrency] = useState(null);

  const recentlyUsedCurrencies = logViewData
    .slice(-3)
    .reduce((acc, logItem) => {
      const send = logItem.sendCurrency;
      const receive = logItem.receiveCurrency;
      if (!acc.includes(send)) {
        acc.push(send);
      }
      if (!acc.includes(receive)) {
        acc.push(receive);
      }
      return acc;
    }, [])
    .slice(-4); // Get the last 4 unique currencies

  const filteredCurrencies = (
    searchCurrency
      ? validCurrencies.filter((currency) =>
          currency.toLowerCase().includes(searchCurrency.toLowerCase()),
        )
      : validCurrencies
  ).filter((currency) => !recentlyUsedCurrencies.includes(currency));

  function toggleDropdown() {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleCurrencySelect(currency) {
    if (direction === "send") {
      changeSendCurrency(currency.toUpperCase());
    } else if (direction === "receive") {
      changeReceiveCurrency(currency.toUpperCase());
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const imageSrc =
    direction === "send"
      ? flageTemplate(state.selectedSendCurrency)
      : flageTemplate(state.selectedReceiveCurrency);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="currency-menu"
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-800/90 px-3 py-2 text-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-200 hover:border-lime-500/40 hover:bg-neutral-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-lime-500"
      >
        <img
          src={imageSrc}
          alt={
            direction === "send"
              ? state.selectedSendCurrency
              : state.selectedReceiveCurrency
          }
          className="h-5 w-5 rounded-full object-cover"
        />
        <span>
          {direction === "send"
            ? state.selectedSendCurrency
            : state.selectedReceiveCurrency}
        </span>
        <FaCaretDown className="ml-1 text-neutral-400" />
      </button>

      {isOpen && (
        <div
          id="currency-menu"
          role="listbox"
          className="absolute right-0 top-full z-10 mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="border-b border-white/10 px-4 py-3 text-[12px] uppercase tracking-[0.4em] text-neutral-500">
            Select currency
          </div>

          <div className="px-4 py-3">
            <input
              type="text"
              placeholder="Search currency..."
              className="mt-2 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-neutral-100 placeholder:text-neutral-500 focus:outline-none"
              value={searchCurrency || ""}
              onChange={(e) => setSearchCurrency(e.target.value.toUpperCase())}
            />
          </div>

          <div className="max-h-80 overflow-auto p-2">
            {recentlyUsedCurrencies.length > 0 && !searchCurrency && (
              <div className="border-b border-white/10 px-4 py-3 text-[12px] uppercase tracking-[0.4em] text-neutral-500">
                <h2 className="tracking-[3px] text-[15px] text-neutral-500 uppercase">
                  Recently used
                </h2>
                {recentlyUsedCurrencies.map((currency) => (
                  <CurrencyItem
                    currency={currency}
                    direction={direction}
                    handleCurrencySelect={handleCurrencySelect}
                    state={state}
                    key={currency}
                  />
                ))}
              </div>
            )}
            {filteredCurrencies.length > 0 ? (
              filteredCurrencies?.map((currency) => (
                <CurrencyItem
                  currency={currency}
                  direction={direction}
                  handleCurrencySelect={handleCurrencySelect}
                  state={state}
                  key={currency}
                />
              ))
            ) : (
              <p className="px-4 py-3 text-neutral-500">No currencies found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectCurrency;
