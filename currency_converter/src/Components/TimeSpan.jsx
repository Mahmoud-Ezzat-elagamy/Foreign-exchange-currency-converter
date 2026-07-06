import { useViewContext } from "../contextApi/currentView";

const timeSpans = [
  { label: "1 Day", value: "1d" },
  { label: "1 Week", value: "1w" },
  { label: "1 Month", value: "1m" },
  { label: "3 Months", value: "3m" },
  { label: "1 Year", value: "1y" },
  { label: "5 Years", value: "5y" },
];

function TimeSpan() {
  const { timeframe, setTimeFrame } = useViewContext();

  return (
    <ul className="flex bg-neutral-800  rounded-lg">
      {timeSpans.map((span) => (
        <li
          key={span.value}
          className={`px-4 py-2 cursor-pointer hover:bg-neutral-700 rounded-lg  hover:text-neutral-100 transition-colors duration-200 ${
            timeframe === span.value
              ? "bg-neutral-700 text-neutral-200"
              : "text-neutral-400"
          }`}
          onClick={() => setTimeFrame(span.value)}
        >
          {span.value}
        </li>
      ))}
    </ul>
  );
}

export default TimeSpan;
