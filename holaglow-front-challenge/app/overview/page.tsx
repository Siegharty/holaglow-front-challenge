import React from "react";
import CurrenciesList from "@/components/CurrenciesList/CurrenciesList";
import Currencies from "@/dataBestCrypto";

export default function OverviewPage() {

  return (
    <div>
      Overview
      <CurrenciesList currencies={Currencies} />
    </div>
  );
}
