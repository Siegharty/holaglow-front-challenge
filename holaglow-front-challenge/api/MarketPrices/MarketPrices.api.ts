import dataMarket from "@/data/dataMarket";

function MarketPricesApi() {
  return "https://api.coinbase.com/v2/exchange-rates";
}

async function MarketPricesApiMock() {
  return await dataMarket;
}

export { MarketPricesApi, MarketPricesApiMock };
