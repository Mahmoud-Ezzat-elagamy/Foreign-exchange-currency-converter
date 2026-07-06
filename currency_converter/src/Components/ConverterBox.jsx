import SwapFigger from "./SwapFigger";
import ValueBox from "./ValueBox";

function ConverterBox() {
  return (
    <div className="flex gap-6 bg-neutral-800 rounded-lg px-5 pt-5 pb-4 items-center">
      <ValueBox direction="send" />
      <SwapFigger />
      <ValueBox direction="receive" />
    </div>
  );
}

export default ConverterBox;
