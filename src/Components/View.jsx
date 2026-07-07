import { useViewContext } from "../contextApi/currentView";
import Choises from "./Choises";
import CompareView from "./CompareView";
import FavoritesView from "./FavoritesView";
import HistoryView from "./HistoryView";
import LogView from "./LogView";

function View() {
  const { selectedView } = useViewContext();
  return (
    <section className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <Choises />
      <div className="p-5 bg-neutral-800 rounded-xl mt-6">
        {selectedView === "history" && <HistoryView />}
        {selectedView === "compare" && <CompareView />}
        {selectedView === "favorites" && <FavoritesView />}
        {selectedView === "log" && <LogView />}
      </div>
    </section>
  );
}

export default View;
