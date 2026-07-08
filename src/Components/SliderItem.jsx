import { FaCaretUp } from "react-icons/fa";

function SliderItem({ item }) {
  return (
    <div className="flex items-center gap-2.5 px-3 py-1.5 bg-neutral-800 border-r border-neutral-500">
      <span className="uppercase text-neutral-200">
        {item.sendCurrency}/{item.receiveCurrency}
      </span>

      {/* TODO: green or red based on value */}
      {item.changePercentage >= 0 ? (
        <>
          <FaCaretUp
            className={`w-4 h-5  scale-y-[2] scale-x-[0.9] -translate-y-0.5 text-green-500`}
          />
          <span className="text-green-500">{item.changePercentage}%</span>
        </>
      ) : (
        <>
          <FaCaretUp
            className={`w-4 h-5  scale-y-[2] scale-x-[0.9] translate-y-0.5 text-red-500 rotate-180`}
          />
          <span className="text-red-500">{item.changePercentage}%</span>
        </>
      )}
    </div>
  );
}

export default SliderItem;
