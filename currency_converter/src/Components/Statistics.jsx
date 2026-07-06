function Statistics() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      <div className="bg-neutral-800 px-4 py-3 rounded-lg flex flex-col gap-2">
        <p className="text-neutral-400 uppercase tracking-wide scale-x-[1.1]">
          open
        </p>{" "}
        <p className="text-neutral-200 text-xl">X.XXX</p>
      </div>
      <div className="bg-neutral-800 px-4 py-3 rounded-lg flex flex-col gap-2">
        <p className="text-neutral-400 uppercase tracking-wide scale-x-[1.1]">
          last
        </p>{" "}
        <p className="text-neutral-200 text-xl">X.XXX</p>
      </div>
      <div className="bg-neutral-800 px-4 py-3 rounded-lg flex flex-col gap-2">
        <p className="text-neutral-400 uppercase tracking-wide scale-x-[1.1]">
          Change
        </p>{" "}
        <p className="text-neutral-200 text-xl">X.XXX</p>
      </div>
      <div className="bg-neutral-800 px-4 py-3 rounded-lg flex flex-col gap-2">
        <p className="text-neutral-400 uppercase tracking-wide scale-x-[1.1]">
          % Change
        </p>{" "}
        <p className="text-neutral-200 text-xl">X.XXX</p>
      </div>
    </div>
  );
}

export default Statistics;
