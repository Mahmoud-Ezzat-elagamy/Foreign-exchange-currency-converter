import { validCurrencies } from "../../public/data";

function Header() {
  return (
    <div className="flex items-center justify-between bg-neutral-900 px-4 py-4 sm:px-6 sm:py-5">
      <img src="/logo.svg" alt="FX_CHECKER" />
      <div className="flex max-w-[60%] items-center gap-1 text-xs uppercase text-neutral-200 sm:max-w-none sm:gap-0 sm:text-sm">
        {validCurrencies.length} currencies{" "}
        <span className="mx-1 text-sm leading-none sm:text-lg">.</span>
        eod <span className="mx-1 text-sm leading-none sm:text-lg">.</span> ecb
        data
      </div>
    </div>
  );
}

export default Header;
