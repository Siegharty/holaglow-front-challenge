import dataMarket from "@/data/dataMarket";

function MarketPricesApi() {
  return "https://api.coinbase.com/v2/exchange-rates";
}

function MarketPricesApiMock() {
  return dataMarket;
}

export { MarketPricesApi, MarketPricesApiMock };
