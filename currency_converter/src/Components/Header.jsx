function Header() {
  return (
    <div className="flex justify-between items-center bg-neutral-900 px-6 py-5">
      <img src="/logo.svg" alt="FX_CHECKER" />
      <div className="uppercase flex text-neutral-200 ">
        XX currendies <span className="mx-1 text-xl -translate-y-1.5">.</span>
        eod <span className="mx-1 text-xl -translate-y-1.5">.</span> ecb data
      </div>
    </div>
  );
}

export default Header;
