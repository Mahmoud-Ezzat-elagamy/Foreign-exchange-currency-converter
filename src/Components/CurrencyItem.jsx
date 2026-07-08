import { FaCheck } from "react-icons/fa";

const flageTemplate = (code) => `/flags/${code.toLowerCase()}.webp`;

function CurrencyItem({ currency, handleCurrencySelect, direction, state }) {
  return (
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
        <p className="truncate text-xs text-neutral-400">{currency.name}</p>
      </div>
    </button>
  );
}

export default CurrencyItem;
