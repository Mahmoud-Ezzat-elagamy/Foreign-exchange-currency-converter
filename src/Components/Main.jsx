import ConverterBox from "./ConverterBox";
import MainHeader from "./MainHeader";
import RateAndOptionsBox from "./RateAndOptionsBox";

function Main() {
  return (
    <main className="pt-8 pb-2 px-8 max-w-310 mx-auto">
      <MainHeader />
      <ConverterBox />
      <RateAndOptionsBox />
    </main>
  );
}

export default Main;
