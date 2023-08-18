import { useState, useEffect } from "react";
import optionsTemplate from "../utils/optionsTemplate";

export const useCurrencyState = () => {
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [currencyAmount, setCurrencyAmount] = useState("");
  const [convertedCurrencyInfo, setConvertedCurrencyInfo] = useState("");

  useEffect(() => {
    const url = "https://api.nbp.pl/api/exchangerates/tables/a/";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        optionsTemplate(data, setCurrencies, setSelectedCurrency);
      })
      .catch((err) => console.error(err));
  }, []);

  return {
    currencies,
    setCurrencies,
    selectedCurrency,
    setSelectedCurrency,
    currencyAmount,
    setCurrencyAmount,
    convertedCurrencyInfo,
    setConvertedCurrencyInfo,
  };
};
