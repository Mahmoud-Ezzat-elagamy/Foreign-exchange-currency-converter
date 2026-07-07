import { useCurrency } from "../contextApi/concurrs";
import {
  setRate,
  setReceiveAmount,
  swapCurrencies,
} from "../contextApi/contextReducer";
import { getRate } from "../helpers/helper";

function SwapFigger() {
  const { state, dispatch } = useCurrency();
  const { selectedSendCurrency, selectedReceiveCurrency } = state;

  async function handleSwap() {
    dispatch(swapCurrencies());
    const newRate = await getRate(
      selectedReceiveCurrency,
      selectedSendCurrency,
    );
    const newReceiveAmount = Number(state.selectedSendAmount) * newRate;
    dispatch(setReceiveAmount(newReceiveAmount.toFixed(2)));
    dispatch(setRate(newRate));
  }

  return (
    <div
      className="flex items-center justify-center bg-neutral-700 rounded-xl w-12 h-12 scale-[1.2] cursor-pointer hover:scale-[1.3] transition-transform duration-200"
      onClick={handleSwap}
    >
      <img src="/icon-exchange.svg" alt="Swap" className="hidden md:block" />
      <img
        src="/icon-exchange-vertical.svg"
        alt="swap"
        className="block md:hidden"
      />
    </div>
  );
}

export default SwapFigger;
