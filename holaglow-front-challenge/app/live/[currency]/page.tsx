import React from "react";
import CurrencyDetail from "@/components/CurrencyDetail/CurrencyDetail";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button, Grid } from "@mui/material";

interface CurrencyPageProps {
  params: any;
}

export default function CurrencyPage({ params }: CurrencyPageProps) {
  return (
    <div>
      <Grid container display={"flex"} justifyContent={"flex-start"}>
        <Grid item style={{ marginTop: 45, marginLeft: "15%" }}>
          <Link
            href="/overview"
            style={{ textDecoration: "none", lineHeight: 1 }}
          >
            <Button variant="outlined" startIcon={<ArrowBackIcon />}>
              Volver al listado de criptomonedas
            </Button>
          </Link>
        </Grid>
      </Grid>
      <CurrencyDetail symbol={params.currency} />
    </div>
  );
}
