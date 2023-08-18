import "../styles/Result.css";

const Result = ({ convertedCurrencyInfo }) => {
  return (
    <p id="converted-currency-info" className="converted-currency-info">
      {convertedCurrencyInfo}
    </p>
  );
};

export default Result;
