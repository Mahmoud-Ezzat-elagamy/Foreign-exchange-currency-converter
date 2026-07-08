import Header from "./Components/Header";
import Main from "./Components/Main";
import Slider from "./Components/Slider";
import View from "./Components/View.jsx";
import CurrencyProvider from "./contextApi/concurrs.jsx";
import CurrentViewContextProvider from "./contextApi/currentView.jsx";

function App() {
  return (
    <CurrencyProvider>
      <CurrentViewContextProvider>
        <div>
          <Header />
          <Slider />
          <Main />
          <View />
        </div>
      </CurrentViewContextProvider>
    </CurrencyProvider>
  );
}

export default App;
