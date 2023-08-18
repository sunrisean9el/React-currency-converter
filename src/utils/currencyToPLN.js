const currencyToPLN = (selectedCurrency, currencyAmount) => {
  const currentExchangeRate = Number(selectedCurrency);
  const valueToConvert = Number(currencyAmount);
  const countValue = (valueToConvert * currentExchangeRate).toFixed(2);
  return countValue;
};

export default currencyToPLN;
