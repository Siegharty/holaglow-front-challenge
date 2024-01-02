import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import dataCryptoDetail from "@/dataCryptoDetailed";

interface CurrencyDetailProp {
  currencyToCheck: string;
}

function CurrencyDetail({ currencyToCheck }: CurrencyDetailProp) {
  //const filteredCurrency = dataOverview.filter((currencyDetail) => currencyDetail.symbol.toLowerCase() === currencyToCheck.toLowerCase());
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Symbol</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key={dataCryptoDetail.symbol}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {dataCryptoDetail.symbol}
            </TableCell>

            <TableCell align="right">{dataCryptoDetail.buy}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CurrencyDetail;
