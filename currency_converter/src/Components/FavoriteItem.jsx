import { FaArrowRightLong, FaCaretUp, FaStar } from "react-icons/fa6";
import { useViewContext } from "../contextApi/currentView";
import { useEffect, useState } from "react";
import { getYesterdayRate } from "../helpers/helper";

function FavoriteItem({ item }) {
  const { removeFromFavorites } = useViewContext();
  const [changeInRate, setChangeInRate] = useState(null);

  useEffect(() => {
    async function fetchYesterdayRate() {
      const yesterdayRate = await getYesterdayRate(
        item.sendCurrency,
        item.receiveCurrency,
      );
      if (yesterdayRate !== null) {
        setChangeInRate(((+item.todayRate - +yesterdayRate) * 100).toFixed(2));
      }
    }

    fetchYesterdayRate();
  }, [item]);

  return (
    <li
      className="flex items-center justify-between p-3 bg-neutral-700 rounded-lg border border-neutral-600"
      key={item.fromTo}
    >
      <p className="ml-4 text-neutral-200 tracking-wide text-lg flex items-center gap-2">
        {item.sendCurrency}
        <FaArrowRightLong className="text-neutral-200" />
        {item.receiveCurrency}
      </p>
      <div className="grid grid-cols-2 grid-rows-2 grid-flow-col gap-x-4 ml-auto">
        <p className="text-neutral-200 text-xl tracking-wider">
          {item.todayRate.toFixed(4)}
        </p>
        <p className="text-neutral-500 text-sm justify-self-end flex items-center gap-1">
          {changeInRate > 0 ? (
            <>
              <FaCaretUp className={`w-4 h-5  scale-x-[0.9]  text-green-500`} />
              <span className="text-green-500">{changeInRate}%</span>
            </>
          ) : (
            <>
              <FaCaretUp
                className={`w-4 h-5  scale-x-[0.9]  text-red-500 rotate-180`}
              />
              <span className="text-red-500">{changeInRate}%</span>
            </>
          )}
        </p>
        <button
          className="text-neutral-200 hover:text-white cursor-pointer border border-lime-500 rounded-lg p-2 transition hover:bg-neutral-600 row-span-2 h-11 w-11 flex items-center justify-center my-auto"
          onClick={() => removeFromFavorites(item.fromTo)}
        >
          <FaStar className="text-lime-500 text-xl" />
        </button>
      </div>
    </li>
  );
}

export default FavoriteItem;
