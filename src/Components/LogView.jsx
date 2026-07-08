import { useViewContext } from "../contextApi/currentView";
import LogItem from "./LogItem";

function LogView() {
  const { logViewData = [], setLogViewData } = useViewContext();
  const logs = logViewData.filter((log) => log.logIndex);

  return (
    <div>
      <div className="mb-5 flex items-center gap-4">
        <h4 className="text-neutral-200 text-lg uppercase tracking-wider scale-y-[1.1]">
          Conversion log
        </h4>

        <span className="ml-auto text-sm uppercase tracking-[0.25em] text-neutral-500">
          {logs.length} logged
        </span>

        <button
          className="rounded-md border border-neutral-600 bg-neutral-700/50 px-3 py-2 text-sm uppercase cursor-pointer transition-colors text-neutral-400 hover:bg-neutral-600 disabled:cursor-not-allowed disabled:opacity-40"
          onClick={() => setLogViewData([])}
          disabled={logs.length === 0}
        >
          Clear all
        </button>
      </div>

      {logs.length > 0 ? (
        <ul className="flex flex-col gap-3">
          {logs.map((item) => (
            <LogItem key={item.logIndex} item={item} />
          ))}
        </ul>
      ) : (
        <div className="rounded-xl border border-dashed border-neutral-700 bg-neutral-800/40 px-4 py-8 text-center text-neutral-400">
          No conversion logs yet.
        </div>
      )}
    </div>
  );
}

export default LogView;
