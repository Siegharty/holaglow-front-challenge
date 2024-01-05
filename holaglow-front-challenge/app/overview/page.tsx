"use client";
import React from "react";
import { Grid, Typography } from "@mui/material";
import CurrenciesList from "@/components/CurrenciesList/CurrenciesList";
import BestCryptoList from "@/api/BestCryptoList/BestCryptoList.api";
import MarketPrices from "@/api/MarketPrices/MarketPrices.api";
import MarketList from "@/components/MarketList/MarketList";

async function BestCrypto() {
  const getData = await BestCryptoList();
  return getData;
  //const result = await getData.json();
  //const limitedArray = result.slice(0, 20);
}

async function MarketPricesData() {
  const dataPrices = await MarketPrices();
  return dataPrices;
}

export default async function OverviewPage() {
  const bestCrypto = BestCrypto();
  const dataMarketPrices = MarketPricesData();

  const [dataCrypto, dataPrices] = await Promise.all([
    bestCrypto,
    dataMarketPrices,
  ]);

  const filteredMarketPricesByRank = () => {
    if (dataCrypto !== undefined || dataCrypto !== null) {
      const dataCryptoSymbols = dataCrypto.map((crypto) =>
        crypto.symbol.toLowerCase()
      );
      return dataPrices.rates.filter((price) =>
        dataCryptoSymbols.includes(Object.keys(price)[0].toLowerCase())
      );
    }
  };

  return (
    <div>
      <Grid container direction={"row"}>
        <Grid item>
          <Typography variant="h3">Holaglow Crypto</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          {dataCrypto && <CurrenciesList currencies={dataCrypto} />}
        </Grid>

        <Grid item xs={6}>
          <MarketList prices={filteredMarketPricesByRank()} />
        </Grid>
      </Grid>
    </div>
  );
}
