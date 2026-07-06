import { useViewContext } from "../contextApi/currentView";
import Choises from "./Choises";
import HistoryView from "./HistoryView";

function View() {
  const { selectedView } = useViewContext();
  return (
    <section className="max-w-340 mx-auto px-4 sm:px-6 lg:px-8">
      <Choises />
      {selectedView === "history" && <HistoryView />}
      {selectedView === "compare" && <div>Compare View</div>}
      {selectedView === "favorites" && <div>Favorites View</div>}
      {selectedView === "log" && <div>Log View</div>}
    </section>
  );
}

export default View;
