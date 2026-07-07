import { useCurrency } from "../contextApi/concurrs";
import SliderItem from "./SliderItem";

function Slider() {
  const { randomSliderItems, loadingRandomSliderItems } = useCurrency();

  return (
    <div className="flex items-center overflow-hidden">
      <div className="flex shrink-0 gap-2 bg-lime-500 px-4 py-3 uppercase text-neutral-900 z-50">
        <span
          className="h-2 w-2 rounded-full bg-neutral-900 translate-y-2.25"
          aria-hidden="true"
        />
        <span className="wrap-break-word">live markets</span>
      </div>
      {loadingRandomSliderItems ||
      !randomSliderItems ||
      randomSliderItems.length === 0 ? (
        <div className="flex items-center text-center text-neutral-100">
          Loading...
        </div>
      ) : (
        <div className="flex slider z-10 whitespace-nowrap text-neutral-100">
          {randomSliderItems.map((item) => (
            <SliderItem
              key={`${item.sendCurrency}-${item.receiveCurrency}`}
              item={item}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Slider;
