export async function getRate(fromCurrency, toCurrency) {
  const res = await fetch(
    `https://api.frankfurter.dev/v2/rates?base=${fromCurrency}&quotes=${toCurrency}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch exchange rate");
  }
  const [data] = await res.json();
  return data.rate;
}
