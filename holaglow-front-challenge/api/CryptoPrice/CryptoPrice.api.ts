import dataCryptoDetail from "@/data/dataCryptoDetailed";
function CryptoPrice(symbol: string): string {
  return `https://api.kucoin.com/api/v1/market/stats?symbol=${symbol}-USDT`;
}

async function CryptoPriceMock(symbol: string) {
  return await dataCryptoDetail;
}

export { CryptoPrice, CryptoPriceMock };
