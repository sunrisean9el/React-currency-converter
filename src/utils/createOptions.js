const createOptions = (...currencies) => {
  const currencyLabels = {
    USD: "USD",
    EUR: "EUR",
    CHF: "CHF",
  };

  return currencies.map((currency) => (
    <option key={currency.code} value={currency.mid}>
      {currencyLabels[currency.code]}
    </option>
  ));
};

export default createOptions;
