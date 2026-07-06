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

export async function getRatesForTimeFrame(
  fromCurrency,
  toCurrency,
  timeframe,
) {
  const dayseconds = 24 * 60 * 60 * 1000;
  const today = getDateFormated(new Date().toLocaleDateString());
  const startDate = getDateFormated(
    new Date(Date.now() - dayseconds * timeframe).toLocaleDateString(),
  );

  console.log(
    `https://api.frankfurter.dev/v2/rates?from=${startDate}&to=${today}&quotes=${toCurrency}&base=${fromCurrency}`,
  );

  const res = await fetch(
    `https://api.frankfurter.dev/v2/rates?from=${startDate}&to=${today}&quotes=${toCurrency}&base=${fromCurrency}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch exchange rates for timeframe");
  }
  return await res.json();
}

function getDateFormated(date) {
  const [month, day, year] = date.split("/");
  return `${year}-${month}-${day}`;
}
