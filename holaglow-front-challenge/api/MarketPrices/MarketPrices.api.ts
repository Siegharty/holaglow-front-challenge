import dataMarket from "@/data/dataMarket"

export default async function MarketPrices() {
    return await dataMarket;
    //return await fetch("https://api.coinbase.com/v2/exchange-rates");
}  