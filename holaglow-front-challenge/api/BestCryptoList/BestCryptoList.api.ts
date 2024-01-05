import Currencies from "@/data/dataBestCrypto";

function BestCryptoListApi(): string {
  return "https://api.coinpaprika.com/v1/coins";
}

function BestCryptoListMock() {
  const getCurrencies = Currencies;
  return getCurrencies;
}

export { BestCryptoListApi, BestCryptoListMock };
