"use client";
import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import CurrenciesList from "@/components/CurrenciesList/CurrenciesList";
import {
  BestCryptoListApi,
  BestCryptoListMock,
} from "@/api/BestCryptoList/BestCryptoList.api";
import {
  MarketPricesApi,
  MarketPricesApiMock,
} from "@/api/MarketPrices/MarketPrices.api";
import MarketList from "@/components/MarketList/MarketList";
import { useAsync } from "@/components/hooks/useAsync";
import { Currency } from "@/types/Currency";
import { MarketPrices, RateDictionary } from "@/types/MarketPrices";
import SpinnerLoading from "@/components/SpinnerLoading/SpinnerLoading";
import { useDataContext } from "@/context/DataContext";
import objectToArray from "@/helpers/objectToArray";

function BestCryptoListApiMock() {
  const getData = BestCryptoListMock();
  return getData;
}

function MarketPricesDataApiMock() {
  const dataPrices = MarketPricesApiMock();
  return dataPrices;
}

export default function OverviewPage() {
  const bestCryptoMock = BestCryptoListApiMock();
  const dataMarketPricesMock = MarketPricesDataApiMock();

  const [dataPricesResult, setDataPricesResult] = React.useState<
    RateDictionary[] | undefined
  >(undefined);
  const { mockDataBoolean, toggleMockData } = useDataContext();

  const [dataCryptoMock, dataPricesMock] = [
    bestCryptoMock,
    dataMarketPricesMock,
  ];

  /*const {
    data: dataCrypto,
    error: errorDataCrypto,
    isLoading: isLoadingDataCrypto,
  } = useAsync<Currency[]>(BestCryptoListApi(), { method: "GET" });*/

  const {
    data: dataPrices,
    error: errorDataPrices,
    isLoading: isLoadingDataPrices,
  } = useAsync<MarketPrices>(MarketPricesApi(), { method: "GET" });

  const filteredMarketPricesByRank = () => {
    if (dataCryptoMock != undefined && dataPrices != undefined) {
      const dataCryptoSymbols = dataCryptoMock?.map((crypto: any) =>
        crypto.symbol.toLowerCase()
      );
      const resultObjectToArray = objectToArray(dataPrices?.data?.data?.rates);
      const result = resultObjectToArray.filter((price: any) =>
        dataCryptoSymbols.includes(price.key.toLowerCase())
      );
      setDataPricesResult(result);
    }
  };

  const filteredMarketPricesByRankMock = () => {
    if (dataCryptoMock != undefined && dataPricesMock != undefined) {
      const dataCryptoSymbols = dataCryptoMock?.map((crypto: any) =>
        crypto.symbol.toLowerCase()
      );
      const resultObjectToArray = objectToArray(dataPricesMock.rates);
      const result = resultObjectToArray.filter((price: any) =>
        dataCryptoSymbols.includes(price.key.toLowerCase())
      );
      return result;
    }
  };

  React.useEffect(() => {
    filteredMarketPricesByRank();
  }, [dataPrices, dataCryptoMock]);

  return (
    <div>
      <Grid
        container
        direction={"row"}
        display={"flex"}
        alignItems={"text"}
        alignContent={"center"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Grid item>
          <Typography variant="h3">Holaglow Crypto</Typography>
        </Grid>
        <Grid item>
          <Button onClick={toggleMockData}>Usar Mock Data</Button>
        </Grid>
      </Grid>
      {/*isLoadingDataPrices || (isLoadingDataCrypto && <SpinnerLoading />)*/}

      <Grid container spacing={6}>
        <Grid item xs={6}>
          <CurrenciesList currencies={dataCryptoMock} />
        </Grid>

        <Grid item xs={6}>
          <MarketList
            prices={
              mockDataBoolean
                ? filteredMarketPricesByRankMock()
                : dataPricesResult
            }
          />
        </Grid>
      </Grid>
    </div>
  );
}
