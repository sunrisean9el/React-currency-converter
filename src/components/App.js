import { useCurrencyState } from "../hooks/useCurrencyState.js";
import showResult from "../utils/showResult";
import createOptions from "../utils/createOptions.js";
import "../styles/App.css";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

const App = () => {
  const {
    currencies,
    selectedCurrency,
    setSelectedCurrency,
    currencyAmount,
    setCurrencyAmount,
    convertedCurrencyInfo,
    setConvertedCurrencyInfo,
  } = useCurrencyState();

  return (
    <div className="container">
      <Header />
      <Form
        currencyAmount={currencyAmount}
        setCurrencyAmount={setCurrencyAmount}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={setSelectedCurrency}
        showResult={(event) =>
          showResult(
            event,
            currencyAmount,
            selectedCurrency,
            setConvertedCurrencyInfo
          )
        }
        createOptions={createOptions}
        currencies={currencies}
      />
      <Result convertedCurrencyInfo={convertedCurrencyInfo} />
    </div>
  );
};

export default App;
