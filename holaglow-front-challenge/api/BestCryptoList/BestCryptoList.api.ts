import Currencies from "@/data/dataBestCrypto";

export default async function BestCryptoList() {
  const getCurrencies = await Currencies;
  return getCurrencies;
  //return await fetch("https://api.coinpaprika.com/v1/coins?limit=20&page=1");
}
