import findElem from "./findElem";

const optionsTemplate = (data, setCurrencies, setSelectedCurrency) => {
  if (!data) return;
  const { rates } = data[0];
  const USD = findElem(rates, "USD");
  const EUR = findElem(rates, "EUR");
  const CHF = findElem(rates, "CHF");
  setCurrencies([USD, EUR, CHF]);
  setSelectedCurrency(USD.mid);
};

export default optionsTemplate;
