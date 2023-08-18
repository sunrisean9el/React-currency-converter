import "../styles/Form.css";

const Form = ({
  currencyAmount,
  setCurrencyAmount,
  selectedCurrency,
  setSelectedCurrency,
  showResult,
  createOptions,
  currencies,
}) => {
  return (
    <form className="form">
      <input
        type="number"
        value={currencyAmount}
        onChange={(e) => setCurrencyAmount(e.target.value)}
        id="currency-amount"
        className="input"
      />
      <select
        value={selectedCurrency}
        onChange={(e) => setSelectedCurrency(e.target.value)}
        id="currency-select"
        className="select"
      >
        {createOptions(...currencies)}
      </select>
      <button id="submit-btn" className="submit-btn" onClick={showResult}>
        Przelicz
      </button>
    </form>
  );
};

export default Form;
