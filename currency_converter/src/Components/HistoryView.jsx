import Graph from "./Graph";
import GraphTitle from "./GraphTitle";
import Statistics from "./Statistics";
import TimeSpan from "./TimeSpan";

function HistoryView() {
  return (
    <>
      <div className="flex lg:flex-row flex-col gap-3 justify-between lg:items-center items-start mt-4">
        <Statistics />
        <TimeSpan />
      </div>
      <div className="bg-neutral-800 rounded-xl p-5 mt-8">
        <GraphTitle />
        <Graph />
      </div>
    </>
  );
}

export default HistoryView;
