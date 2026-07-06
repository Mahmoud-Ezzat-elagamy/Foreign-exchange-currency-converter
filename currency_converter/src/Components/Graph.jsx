import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { getRatesForTimeFrame } from "../helpers/helper";
import { useCurrency } from "../contextApi/concurrs";
import { useViewContext } from "../contextApi/currentView";
import { useEffect, useState } from "react";

const timeFrames = {
  "1D": "1",
  "1W": "7",
  "1M": "30",
  "6M": "180",
  "1Y": "365",
};

function Graph() {
  const [data, setData] = useState(null);
  const { state } = useCurrency();
  const { timeframe } = useViewContext();
  const { selectedSendCurrency, selectedReceiveCurrency } = state;
  useEffect(() => {
    async function fetchData() {
      const data = await getRatesForTimeFrame(
        selectedSendCurrency,
        selectedReceiveCurrency,
        timeFrames[timeframe],
      );
      setData(data);
    }
    fetchData();
  }, [selectedSendCurrency, selectedReceiveCurrency, timeframe]);
  console.log(data);
  return (
    <div>
      {/* <Line
        datasetIdKey="id"
        data={{
          labels: ["Jun", "Jul", "Aug"],
          datasets: [
            {
              id: 1,
              label: "",
              data: [5, 6, 7],
            },
            {
              id: 2,
              label: "",
              data: [3, 2, 1],
            },
          ],
        }}
      /> */}
    </div>
  );
}

export default Graph;
