"use client";

import React from "react";
import classes from "./Currencies.module.css";
import { Currency } from "@/types/Currency";

import { useRouter } from "next/navigation";
import Image from "next/image";

import classNames from "classnames";
import { Card, Grid, List, ListItem, ListItemText } from "@mui/material";

interface CurrenciesListProps {
  currencies: Currency[] | null;
}

function CurrenciesList({ currencies }: CurrenciesListProps) {
  const router = useRouter();

  const goToCurrencyDetail = (currencySelected: string) => {
    router.push(`/live/${currencySelected}`);
  };

  return (
    <>
      <Card variant="outlined" style={{ width: "50%" }}>
        <List
          className={classes.customScroll}
          style={{ maxHeight: "90vh", overflow: "auto", position: "relative" }}
        >
          {currencies &&
            currencies?.map((currency) => (
              <div key={currency.name} onClick={() => goToCurrencyDetail(currency.symbol)}>
                <ListItem className={classes.listItem}>
                  <Grid container spacing={2}>
                    <Grid
                      item
                      xs={1}
                      display={"flex"}
                      alignItems={"center"}
                      alignContent={"center"}
                      justifyContent={"center"}
                    >
                      <Image
                        src={`https://assets.coincap.io/assets/icons/${currency.symbol.toLowerCase()}@2x.png`}
                        width={"30"}
                        height={"30"}
                        alt={""}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <ListItemText>{currency.symbol}</ListItemText>
                      <ListItemText>{currency.name}</ListItemText>
                    </Grid>
                    <Grid item xs={3}>
                      <ListItemText>Rank</ListItemText>
                      <ListItemText>{currency.rank.toString()}</ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
                <hr style={{ margin: 0 }} />
              </div>
            ))}
        </List>
      </Card>
    </>
  );
}

export default CurrenciesList;
