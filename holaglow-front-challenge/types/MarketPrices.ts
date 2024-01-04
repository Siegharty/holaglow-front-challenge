export interface MarketPrices {
  currency: string;
  rates: RateDictionary[];
}

export type RateDictionary = { [key: string]: string };

