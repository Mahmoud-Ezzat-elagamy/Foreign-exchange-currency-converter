import { useViewContext } from "../contextApi/currentView";
import StatisticsItemBox from "./StatisticsItemBox";

function Statistics() {
  const { start, end } = useViewContext();
  const startRate = start?.rate ?? 0;
  const endRate = end?.rate ?? 0;
  const change = endRate - startRate;
  const changePercentage = (change / startRate) * 100;
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <StatisticsItemBox text="start" value={startRate.toFixed(3)} />
      <StatisticsItemBox text="last" value={endRate.toFixed(3)} />
      <StatisticsItemBox text="Change" value={change.toFixed(3)} />
      <StatisticsItemBox text="% Change" value={changePercentage} />
    </div>
  );
}

export default Statistics;
