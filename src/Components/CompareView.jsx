import { useEffect } from "react";
import { useCurrency } from "../contextApi/concurrs";
import { getRatesForCurrency } from "../helpers/helper";
import { useViewContext } from "../contextApi/currentView";

function CompareView() {
  const { state } = useCurrency();
  const { compareViewData, setCompareViewData } = useViewContext();
  const { selectedSendCurrency, selectedSendAmount } = state;

  useEffect(() => {
    async function fetchData() {
      const data = await getRatesForCurrency(selectedSendCurrency);
      setCompareViewData(data);
    }
    fetchData();
  }, [selectedSendCurrency, setCompareViewData]);
  return (
    <div className="mb-5">
      <h4 className="text-neutral-500 text-lg uppercase tracking-wide scale-y-[1.1] mb-5">
        Multi-currency{" "}
        <span className="text-neutral-200">
          1.000 from {selectedSendCurrency}
        </span>
      </h4>
      <div>
        {compareViewData ? (
          <ul className="flex flex-col space-y-3">
            {compareViewData.slice(0, 8).map((item) => (
              <li
                key={item.currency}
                className="flex items-center p-2.5 bg-neutral-700 rounded-lg border border-neutral-600"
              >
                <img
                  src={`/flags/${item.quote.toLowerCase()}.webp`}
                  alt={item.quote}
                  className="w-9 h-9 rounded-full"
                />
                <p className="ml-4 text-neutral-200 tracking-wide text-lg">
                  {item.quote}
                </p>

                <div className="ml-auto flex flex-col  mr-4">
                  <p className=" text-neutral-200 scale-y-[1.1] tracking-wide text-lg">
                    {(item.rate * selectedSendAmount).toFixed(3)}
                  </p>
                  <p className="text-neutral-400 text-sm tracking-wide">
                    @ {item.rate}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-neutral-400 text-center">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default CompareView;
