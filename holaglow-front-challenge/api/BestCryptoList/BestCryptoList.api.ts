import { Currency } from "@/types/Currency";

const BestCryptoList = async (): Promise<any> => {
  return await fetch("https://api.coinpaprika.com/v1/coins");
};

export default BestCryptoList;
