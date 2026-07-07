import { useViewContext } from "../contextApi/currentView";
import { FaCaretUp } from "react-icons/fa";

function Statistics() {
  const { start, end } = useViewContext();
  const startRate = start?.rate ?? 0;
  const endRate = end?.rate ?? 0;
  const change = endRate - startRate;
  const changePercentage = (change / startRate) * 100;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="bg-neutral-800 px-4 py-3 rounded-lg flex flex-col gap-2">
        <p className="text-neutral-400 uppercase tracking-wide scale-x-[1.1]">
          open
        </p>{" "}
        <p className="text-neutral-200 text-xl">{startRate.toFixed(3)}</p>
      </div>
      <div className="bg-neutral-800 px-4 py-3 rounded-lg flex flex-col gap-2">
        <p className="text-neutral-400 uppercase tracking-wide scale-x-[1.1]">
          last
        </p>{" "}
        <p className="text-neutral-200 text-xl">{endRate.toFixed(3)}</p>
      </div>
      <div className="bg-neutral-800 px-4 py-3 rounded-lg flex flex-col gap-2">
        <p className="text-neutral-400 uppercase tracking-wide scale-x-[1.1]">
          Change
        </p>{" "}
        <p className="text-neutral-200 text-xl">{change.toFixed(3)}</p>
      </div>
      <div className="bg-neutral-800 px-4 py-3 rounded-lg flex flex-col gap-2">
        <p className="text-neutral-400 uppercase tracking-wide scale-x-[1.1]">
          % Change
        </p>{" "}
        <p
          className={`text-neutral-200 text-xl flex items-center gap-2 ${changePercentage >= 0 ? "text-green-500" : "text-red-500"}`}
        >
          {changePercentage >= 0 ? (
            <>
              <FaCaretUp
                className={`w-4 h-5  scale-y-[2] scale-x-[0.9] -translate-y-0.5 text-green-500`}
              />
              <span className="text-green-500">
                {changePercentage.toFixed(3)}%
              </span>
            </>
          ) : (
            <>
              <FaCaretUp
                className={`w-4 h-5  scale-y-[2] scale-x-[0.9] translate-y-0.5 text-red-500 rotate-180`}
              />
              <span className="text-red-500">
                {changePercentage.toFixed(3)}%
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default Statistics;
