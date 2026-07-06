import { useViewContext } from "../contextApi/currentView";

const choises = ["history", "compare", "favorites", "log"];

function Choises() {
  const { selectedView, setSelectedView } = useViewContext();
  return (
    <ul className="flex items-center justify-start w-full border-b border-neutral-600 ">
      {choises.map((choice, index) => (
        <li
          key={index}
          className={
            `px-4 py-3 border-b  hover:border-lime-500 cursor-pointer uppercase text-xl text-neutral-200 transition-all duration-300 tracking-wider translate-y-px ` +
            (selectedView.toLowerCase() === choice.toLowerCase()
              ? "border-lime-500"
              : "border-transparent")
          }
          onClick={() => setSelectedView(choice)}
        >
          {choice}
        </li>
      ))}
    </ul>
  );
}

export default Choises;
