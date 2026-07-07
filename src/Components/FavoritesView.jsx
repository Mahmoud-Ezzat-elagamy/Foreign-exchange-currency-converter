import { useViewContext } from "../contextApi/currentView";
import FavoriteItem from "./FavoriteItem";

function FavoritesView() {
  const { favorites = [] } = useViewContext();

  return (
    <div>
      <h4 className="text-neutral-200 text-lg uppercase tracking-wider scale-y-[1.1] mb-5 flex">
        pinned pairs
        <span className="text-neutral-500 ml-auto">
          {favorites.length} favorites
        </span>
      </h4>

      {favorites.length > 0 ? (
        <ul className="flex flex-col space-y-3">
          {favorites.map((item) => (
            <FavoriteItem key={item.fromTo} item={item} />
          ))}
        </ul>
      ) : (
        <div className="text-neutral-400 text-center">
          No favorite pairs added.
        </div>
      )}
    </div>
  );
}

export default FavoritesView;
