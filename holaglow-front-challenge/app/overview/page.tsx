import React, { useEffect } from "react";
import CurrenciesList from "@/components/CurrenciesList/CurrenciesList";
import useAsync from "@/components/hooks/useAsync";
import BestCryptoList from "@/api/BestCryptoList/BestCryptoList.api";
import { Currency } from "@/types/Currency";
import SpinnerLoading from "@/components/SpinnerLoading/SpinnerLoading";

export default function OverviewPage() {
  const { data, error, loading } = useAsync<Currency[]>(BestCryptoList);

  return (
    <div>
      Overview
      {loading ? (
        <SpinnerLoading />
      ) : error ? (
        <>Hubo un error</>
      ) : (
        <CurrenciesList currencies={data} />
      )}
    </div>
  );
}
