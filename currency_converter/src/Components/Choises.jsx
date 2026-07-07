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
            `px-4 py-3 border-b  hover:border-lime-500 cursor-pointer uppercase text-xl text-neutral-200 transition-all duration-300 tracking-wider translate-y-px flex gap-1 ` +
            (selectedView.toLowerCase() === choice.toLowerCase()
              ? "border-lime-500"
              : "border-transparent")
          }
          onClick={() => setSelectedView(choice)}
        >
          {choice}

          {choice === "favorites" && favorites.length > 0 && (
            <span className="ml-2 text-lime-900 bg-lime-500 border border-lime-900 rounded-full flex items-center justify-center h-5 w-5 text-sm mt-0.5 font-bold">
              {favorites.length}
            </span>
          )}
          {choice === "log" && logViewDate.length > 0 && (
            <span className="ml-2 text-lime-900 bg-lime-500 border border-lime-900 rounded-full flex items-center justify-center h-5 w-5 text-sm mt-0.5 font-bold">
              {logViewDate.length}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Choises;
