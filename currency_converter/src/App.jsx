import Header from "./Components/Header";
import Main from "./Components/Main";
// import Slider from "./Components/Slider";
import View from "./Components/View.jsx";
import CurrencyProvider from "./contextApi/concurrs.jsx";
import CurrentViewContextProvider from "./contextApi/currentView.jsx";

function App() {
  return (
    <CurrencyProvider>
      <CurrentViewContextProvider>
        <Header />
        {/* <Slider /> */}
        <Main />
        <View />
      </CurrentViewContextProvider>
    </CurrencyProvider>
  );
}

export default App;
