import { useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCheck } from "react-icons/fa";
import { useCurrency } from "../contextApi/concurrs";
import { validCurrencies } from "../../public/data";

const flageTemplate = (code) => `/flags/${code.toLowerCase()}.webp`;

function SelectCurrency({ direction }) {
  const [isOpen, setIsOpen] = useState(false);
  const { changeSendCurrency, changeReceiveCurrency, state } = useCurrency();
  const ref = useRef(null);

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
      console.log("ref.current:", ref.current);
      console.log("event.target:", event.target);
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

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-neutral-800/90 px-3 py-2 text-neutral-100 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition duration-200 hover:border-lime-500/40 hover:bg-neutral-800 cursor-pointer"
      >
        <div className="h-6 w-6 overflow-hidden rounded-full bg-white ring-1 ring-white/10">
          <img
            src={
              direction === "send"
                ? flageTemplate(state.selectedSendCurrency)
                : flageTemplate(state.selectedReceiveCurrency)
            }
            alt={`${direction === "send" ? state.selectedSendCurrency : state.selectedReceiveCurrency} flag`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col leading-none text-left">
          <span className=" font-medium tracking-[0.18em]">
            {direction === "send"
              ? state.selectedSendCurrency
              : state.selectedReceiveCurrency}
          </span>
        </div>
        <FaCaretDown className="ml-1 text-neutral-400" />
      </div>
      {isOpen && (
        <div className="absolute right-0 top-full z-10 mt-2 w-80 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="border-b border-white/10 px-4 py-3 text-[12px] uppercase tracking-[0.4em] text-neutral-500">
            Select currency
          </div>

          <div className="max-h-80 overflow-auto p-2">
            {validCurrencies.map((currency) => (
              <button
                key={currency}
                type="button"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition hover:bg-white/5"
                onClick={(e) => handleCurrencySelect(currency, e)}
              >
                <div className="h-8 w-8 overflow-hidden rounded-full bg-white ring-1 ring-white/10">
                  <img
                    src={flageTemplate(currency)}
                    alt={currency}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-semibold tracking-[0.18em] text-neutral-100">
                      {currency.toUpperCase()}
                    </span>
                    {currency ==
                    (direction === "send"
                      ? state.selectedSendCurrency
                      : state.selectedReceiveCurrency) ? (
                      <FaCheck className="shrink-0 text-lime-500" />
                    ) : null}
                  </div>
                  <p className="truncate text-xs text-neutral-400">
                    {currency.name}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectCurrency;
