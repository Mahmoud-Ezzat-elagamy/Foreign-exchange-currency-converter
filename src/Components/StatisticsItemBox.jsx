import { FaCaretUp } from "react-icons/fa";

function StatisticsItemBox({ text, value }) {
  return (
    <div className="bg-neutral-700/50 px-4 py-3 rounded-lg flex flex-col gap-2">
      <p className="text-xs uppercase tracking-wide scale-x-[1.1] text-neutral-400 sm:text-sm">
        {text}
      </p>{" "}
      {text === "% Change" ? (
        <p
          className={`flex items-center gap-2 text-lg ${value >= 0 ? "text-green-500" : "text-red-500"} sm:text-xl`}
        >
          {value >= 0 ? (
            <>
              <FaCaretUp
                className={`w-4 h-5  scale-y-[2] scale-x-[0.9] -translate-y-0.5 text-green-500`}
              />
              <span className="text-green-500">{value.toFixed(3)}%</span>
            </>
          ) : (
            <>
              <FaCaretUp
                className={`w-4 h-5  scale-y-[2] scale-x-[0.9] translate-y-0.5 text-red-500 rotate-180`}
              />
              <span className="text-red-500">{value.toFixed(3)}%</span>
            </>
          )}
        </p>
      ) : (
        <p className="text-lg text-neutral-200 sm:text-xl">{value}</p>
      )}
    </div>
  );
}

export default StatisticsItemBox;
