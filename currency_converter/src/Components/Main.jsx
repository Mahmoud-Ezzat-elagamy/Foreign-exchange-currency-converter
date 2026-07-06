import ConverterBox from "./ConverterBox";
import MainHeader from "./MainHeader";
import RateAndOptionsBox from "./RateAndOptionsBox";

function Main() {
  return (
    <main className="py-12 px-8 max-w-340 mx-auto">
      <MainHeader />
      <ConverterBox />
      <RateAndOptionsBox />
    </main>
  );
}

export default Main;
