import { useCurrency } from "../contextApi/concurrs";
import SelectCurrency from "./SelectCurrency";

function ValueBox({ direction }) {
  const text = direction === "send" ? "Send" : "Receive";
  const { handleChangeSendAmount, state } = useCurrency();
  return (
    <div className="rounded-2xl bg-neutral-700 p-4 sm:p-5">
      <p className="text-sm uppercase tracking-[1px] text-neutral-100 sm:text-base">
        {text}
      </p>
      <div className="flex items-end justify-between">
        <input
          value={
            direction === "send"
              ? state.selectedSendAmount
              : state.selectedReceiveAmount
          }
          onChange={(e) => {
            if (direction === "send") handleChangeSendAmount(e.target.value);
          }}
          disabled={direction === "receive"}
          type="text"
          accept="0123456789"
          className={`mt-2 h-16 w-full bg-transparent text-3xl font-bold text-neutral-100 focus:border-none focus:outline-none disabled:text-lime-500 sm:h-20 sm:text-4xl`}
        />
        <SelectCurrency direction={direction} key={direction} />
      </div>
    </div>
  );
}

export default ValueBox;
