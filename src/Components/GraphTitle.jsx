import { useCurrency } from "../contextApi/concurrs";

function GraphTitle() {
  const { state } = useCurrency();
  const date = new Date().toUTCString();
  // console.log(date);

  return (
    <div className="flex justify-between items-center mb-4 flex-wrap">
      <p className="text-lg font-semibold text-neutral-200">
        {state.selectedSendCurrency}/{state.selectedReceiveCurrency}
      </p>
      <p className="text-sm text-neutral-500">{date}</p>
    </div>
  );
}

export default GraphTitle;
