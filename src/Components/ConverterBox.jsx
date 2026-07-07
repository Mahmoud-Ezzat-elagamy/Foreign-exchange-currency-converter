import SwapFigger from "./SwapFigger";
import ValueBox from "./ValueBox";

function ConverterBox() {
  return (
    <div className="flex flex-col md:flex-row gap-6 bg-neutral-800 rounded-t-lg px-5 pt-5 pb-4 items-center border-b border-neutral-700 border-dashed">
      <ValueBox direction="send" />
      <SwapFigger />
      <ValueBox direction="receive" />
    </div>
  );
}

export default ConverterBox;
