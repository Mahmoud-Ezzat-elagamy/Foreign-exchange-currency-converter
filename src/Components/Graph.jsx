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
  "3M": "90",
  "1Y": "365",
  "5Y": "1825",
};

const gradient = (context) => {
  const chart = context.chart;
  const { ctx, chartArea } = chart;

  if (!chartArea) {
    return "rgba(206, 247, 57, 0.2)";
  }

  const gradient = ctx.createLinearGradient(
    0,
    chartArea.top,
    0,
    chartArea.bottom,
  );

  gradient.addColorStop(0, "rgba(206, 247, 57, 0.5)");
  gradient.addColorStop(1, "rgba(206, 247, 57, 0)");

  return gradient;
};

function Graph() {
  const [data, setData] = useState(null);
  const { state } = useCurrency();
  const { timeframe, setStart, setEnd } = useViewContext();
  const { selectedSendCurrency, selectedReceiveCurrency } = state;

  useEffect(() => {
    async function fetchData() {
      const data = await getRatesForTimeFrame(
        selectedSendCurrency,
        selectedReceiveCurrency,
        timeFrames[timeframe],
      );
      setData(data);
      setStart(data?.[0]);
      setEnd(data?.[data.length - 1]);
    }
    fetchData();
  }, [
    selectedSendCurrency,
    selectedReceiveCurrency,
    timeframe,
    setStart,
    setEnd,
  ]);

  const labels = data ? data.map((item) => item.date) : [];
  const rates = data ? data.map((item) => item.rate) : [];

  return (
    <div className="w-full h-75 md:h-100 lg:h-100">
      <Line
        datasetIdKey="id"
        data={{
          labels: labels,
          datasets: [
            {
              id: 1,
              label: "",
              data: rates,
              borderColor: "#CEF739",
              fill: true,
              backgroundColor: gradient,
              pointRadius: 0,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default Graph;
