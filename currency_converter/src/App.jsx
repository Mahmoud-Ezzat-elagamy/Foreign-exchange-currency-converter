import Header from "./Components/Header";
import Main from "./Components/Main";
import Slider from "./Components/Slider";
import CurrencyProvider from "./contextApi/concurrs.jsx";

function App() {
  return (
    <CurrencyProvider>
      <Header />
      {/* <Slider /> */}
      <Main />
    </CurrencyProvider>
  );
}

export default App;
