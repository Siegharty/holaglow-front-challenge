"use client";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Card, Grid, Typography } from "@mui/material";
import Image from "next/image";
import classes from "./CurrencyDetail.module.css";

import dataCryptoDetail from "@/dataCryptoDetailed";
import dataOverview from "@/dataOverview";

interface CurrencyDetailProp {
  currencyToCheck: string;
}

function CurrencyDetail({ currencyToCheck }: CurrencyDetailProp) {
  const filteredCurrency = dataOverview.find(
    (currencyDetail) =>
      currencyDetail.symbol.toLowerCase() === currencyToCheck.toLowerCase()
  );

  const dataCurrencyInformation = filteredCurrency?.quote.USD;

  const tableRows = [
    {
      dataName: "Capitalización bursatil",
      value: dataCurrencyInformation?.market_cap.toFixed(2),
    },
    {
      dataName: "Volumen (24 horas)",
      value: dataCurrencyInformation?.volume_24h.toFixed(2),
    },
    {
      dataName: "Tendencia (24 horas)",
      value: dataCurrencyInformation?.volume_change_24h.toFixed(2),
    },
    {
      dataName: "Maximo historico",
      value: dataCurrencyInformation?.fully_diluted_market_cap.toFixed(2),
    },
    {
      dataName: "Posicion en el mercado",
      value: dataCurrencyInformation?.market_cap_dominance.toFixed(2),
    },
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Image
          src={`https://assets.coincap.io/assets/icons/${currencyToCheck.toLowerCase()}@2x.png`}
          width={"50"}
          height={"50"}
          alt={""}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          {filteredCurrency?.name} - {currencyToCheck}
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h3">Precio</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">USD {dataCryptoDetail.last}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Card style={{ width: "50vw" }}>
          <Table>
            <TableBody>
              {tableRows.map((row) => (
                <TableRow key={row.dataName} className={classes.tableRow}>
                  <TableCell>{row.dataName}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CurrencyDetail;
