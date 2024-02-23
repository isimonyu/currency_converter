const axios = require("axios");

let rates = [];

// Rates by Exchange Rate API https://www.exchangerate-api.com/docs/free
async function getRates() {
  try {
    const response = await axios.get(`https://open.er-api.com/v6/latest/USD`);
    rates = response.data.rates;
    return rates;
  } catch (error) {
    console.error("Error fetching rates:", error);
    return [];
  }
}

async function checkRates() {
  if (rates.length == 0) {
    await getRates();
  }
}

async function convertTo(amount, symbol) {
  await checkRates();
  return (rates[symbol] * amount).toFixed(2);
}

module.exports = {
  convertTo: convertTo,
};
