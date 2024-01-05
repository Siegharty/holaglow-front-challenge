import Currencies from "@/data/dataBestCrypto";

function BestCryptoListApi(): string {
  return "https://api.coinpaprika.com/v1/coins";
}

async function BestCryptoListMock() {
  const getCurrencies = await Currencies;
  return getCurrencies;
}

export { BestCryptoListApi, BestCryptoListMock };
