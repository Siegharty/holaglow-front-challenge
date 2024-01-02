import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import dataOverview from "@/dataOverview";

interface CurrencyDetailProp {
    currencyToCheck : string;
}

function CurrencyDetail({currencyToCheck}: CurrencyDetailProp) {

  const filteredCurrency = dataOverview.filter((currencyDetail) => currencyDetail.symbol.toLowerCase() === currencyToCheck.toLowerCase());
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCurrency.map((currency) => (
            <TableRow
              key={currency.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {currency.name}
              </TableCell>
              <TableCell align="right">{currency.symbol}</TableCell>
              <TableCell align="right">{currency.quote.USD.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CurrencyDetail;
