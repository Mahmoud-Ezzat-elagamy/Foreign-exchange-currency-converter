import { useCurrency } from "../contextApi/concurrs";
import { FaStar } from "react-icons/fa";

function RateAndOptionsBox() {
  const { state } = useCurrency();
  return (
    <div className="flex items-center gap-4 bg-neutral-800 rounded-b-lg px-5 py-3 text-neutral-100 py-4">
      <p>
        1 {state.selectedSendCurrency} = {state.rate}{" "}
        {state.selectedReceiveCurrency}
      </p>

      <div className="ml-auto flex gap-3 ">
        <button className="flex items-center gap-2 rounded-md px-4 py-2  transition hover:bg-neutral-600 bg-lime-500 text-neutral-900 cursor-pointer">
          <FaStar />
          <span className="uppercase tracking-wider">favourite</span>
        </button>
        <button className="uppercase tracking-wider px-4 py-2 transition hover:bg-lime-600/15 border border-lime-500 rounded-md cursor-pointer">
          log conversion
        </button>
      </div>
    </div>
  );
}

export default RateAndOptionsBox;
