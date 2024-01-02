"use client";

import { Currency } from "@/types/Currency";
import classes from "./Currencies.module.css";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useRouter } from "next/navigation";

interface CurrenciesListProps {
  currencies: Currency[];
}

function CurrenciesList({ currencies }: CurrenciesListProps) {
  const router = useRouter();
  
  const goToCurrencyDetail = (currencySelected: string) => {
    router.push(`/live/${currencySelected}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Rank</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.map((currency) => (
            <TableRow
              key={currency.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              onClick={() => {
                goToCurrencyDetail(currency.symbol);
              }}
            >
              <TableCell component="th" scope="row">
                {currency.name}
              </TableCell>
              <TableCell align="right">{currency.symbol}</TableCell>
              <TableCell align="right">{currency.rank.toString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CurrenciesList;
