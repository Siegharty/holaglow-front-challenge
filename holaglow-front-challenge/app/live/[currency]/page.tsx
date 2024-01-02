import React from "react";
import CurrencyDetail from "@/components/CurrencyDetail/CurrencyDetail";
import Link from "next/link";

interface CurrencyPageProps {
  params: any;
}

function CurrencyPage({ params }: CurrencyPageProps) {
  return (
    <div>
      <Link href="/overview"> {`< Go back`} </Link>
      CurrencyPage
      <CurrencyDetail currencyToCheck={params.currency} />
    </div>
  );
}

export default CurrencyPage;
