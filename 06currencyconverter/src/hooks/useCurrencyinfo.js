import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    // 1. Using the updated, stable API URL
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

    fetch(url)
      .then((res) => res.json())
      // 2. Access the nested currency object (e.g., data['usd'])
      .then((res) => setData(res[currency]))
      .catch((err) => console.error("Currency fetch failed:", err));
  }, [currency]); // 3. Re-run when the currency changes

  return data;
}

export default useCurrencyInfo;
