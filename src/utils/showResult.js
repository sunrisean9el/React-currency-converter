import currencyToPLN from "./currencyToPLN";

const showResult = (
  event,
  currencyAmount,
  selectedCurrency,
  setConvertedCurrencyInfo
) => {
  event.preventDefault();
  const value = Number(currencyAmount);
  const result = currencyToPLN(selectedCurrency, currencyAmount);

  if (!currencyAmount) {
    setConvertedCurrencyInfo("Wpisz kwotę złotówek aby przeliczyć walutę.");
  } else if (value <= 0) {
    setConvertedCurrencyInfo("Wpisana kwota musi być większa od zera.");
  } else if (value) {
    setConvertedCurrencyInfo(`To ${result} PLN.`);
  }
};

export default showResult;
