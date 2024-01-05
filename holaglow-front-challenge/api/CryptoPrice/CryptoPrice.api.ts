import dataCryptoDetail from "@/data/dataCryptoDetailed";
async function CryptoPrice(symbol: string) {
  return await fetch(
    `https://api.kucoin.com/api/v1/market/stats?symbol=${symbol}-USDT`
  );
}

async function CryptoPriceMock(symbol: string) {
  return await dataCryptoDetail;
}

export { CryptoPrice, CryptoPriceMock };
