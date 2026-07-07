import { FaTrashCan } from "react-icons/fa6";
import { useViewContext } from "../contextApi/currentView";

function formatAmount(value) {
  const amount = Number(value);

  if (Number.isNaN(amount)) {
    return value ?? "-";
  }

  return amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function getTimeLogged(timeLogged) {
  if (!timeLogged) {
    return "-";
  }

  const nowTime = new Date();
  const timeDifference = nowTime - new Date(timeLogged);

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) {
    return `${days}D`;
  }
  if (hours > 0) {
    return `${hours}H`;
  }
  if (minutes > 0) {
    return `${minutes}M`;
  }
  return `${seconds}S`;
}

function LogItem({ item }) {
  const { removeFromLog } = useViewContext();

  return (
    <li className="flex items-center gap-3 rounded-lg border border-neutral-700 bg-neutral-900/40 px-4 py-3 text-sm text-neutral-400 transition hover:border-neutral-500 hover:text-white md:gap-6 md:px-5 md:py-4 md:text-base">
      <p className="text-sm uppercase tracking-[0.35em] text-neutral-400 md:text-[15px] md:tracking-[0.3em]">
        {getTimeLogged(item.timeLogged)}
      </p>

      <p className="text-xl uppercase tracking-[0.35em] text-neutral-100 md:ml-3 md:text-[19px]">
        {item.sendCurrency} <span className="text-neutral-500">→</span>{" "}
        {item.receiveCurrency}
      </p>

      <p className="text-left text-xl tracking-[0.22em] text-neutral-200 md:text-right md:text-[19px] ml-auto">
        {formatAmount(item.sendAmount)}
      </p>

      <p className="text-left text-xl tracking-[0.22em] text-lime-400 md:text-right md:text-[19px]">
        {formatAmount(item.receiveAmount)}
      </p>

      <button
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-900/40 text-neutral-300 transition hover:border-neutral-500 hover:text-white cursor-pointer md:justify-self-end"
        onClick={() => removeFromLog(item.logIndex)}
        aria-label={`Remove log for ${item.sendCurrency} to ${item.receiveCurrency}`}
      >
        <FaTrashCan className="text-sm" />
      </button>
    </li>
  );
}

export default LogItem;
