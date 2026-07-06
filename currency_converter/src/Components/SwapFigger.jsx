function SwapFigger() {
  return (
    <div className="flex items-center justify-center bg-neutral-700 rounded-xl w-12 h-12 scale-[1.2] cursor-pointer hover:scale-[1.3] transition-transform duration-200">
      <img src="/icon-exchange.svg" alt="Swap" className="hidden md:block" />
      <img
        src="/icon-exchange-vertical.svg"
        alt="swap"
        className="block md:hidden"
      />
    </div>
  );
}

export default SwapFigger;
