import SelectCurrency from "./SelectCurrency";
import { useCurrency } from "../contextApi/concurrs";
import {
  setSendAmount,
  setReceiveAmount,
} from "../contextApi/contextReducer.js";

function ValueBox({ direction }) {
  const text = direction === "send" ? "Send" : "Receive";
  const { handleChangeSendAmount, state } = useCurrency();
  return (
    <div className="bg-neutral-700 rounded-2xl p-5">
      <p className="uppercase text-neutral-100 tracking-[1px]">{text}</p>
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
          className={`bg-transparent text-neutral-100 text-4xl font-bold w-full mt-2 h-20 focus:border-none focus:outline-none disabled:text-lime-500`}
        />
        <SelectCurrency direction={direction} key={direction} />
      </div>
    </div>
  );
}

export default ValueBox;
