import { useViewContext } from "../contextApi/currentView";

const choises = ["history", "compare", "favorites", "log"];

function Choises() {
  const { selectedView, setSelectedView, favorites, logViewDate } =
    useViewContext();
  return (
    <ul className="flex items-center justify-start w-full border-b border-neutral-600 ">
      {choises.map((choice, index) => (
        <li
          key={index}
          className={
            `flex gap-1 border-b px-4 py-3 text-base uppercase tracking-wider translate-y-px text-neutral-200 transition-all duration-300 hover:border-lime-500 sm:text-lg md:text-xl ` +
            (selectedView.toLowerCase() === choice.toLowerCase()
              ? "border-lime-500"
              : "border-transparent")
          }
          onClick={() => setSelectedView(choice)}
        >
          {choice}

          {choice === "favorites" && favorites.length > 0 && (
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full border border-lime-900 bg-lime-500 text-[11px] font-bold text-lime-900 sm:text-xs">
              {favorites.length}
            </span>
          )}
          {choice === "log" && logViewDate.length > 0 && (
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full border border-lime-900 bg-lime-500 text-[11px] font-bold text-lime-900 sm:text-xs">
              {logViewDate.length}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Choises;
