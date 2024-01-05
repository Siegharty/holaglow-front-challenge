"use client";

import React from "react";
import classes from "./Currencies.module.css";
import { Currency } from "@/types/Currency";

import { useRouter } from "next/navigation";
import Image from "next/image";

import classNames from "classnames";
import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

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
      <Grid container>
        <Grid item>
          <Typography variant="h4">Ranking</Typography>
        </Grid>
      </Grid>
      <Card
        variant="outlined"
        style={{
          width: "100%",
          boxShadow: "rgba(0, 0, 0, 0.75) 0px 6px 15px -1px",
        }}
      >
        <List
          className={classes.customScroll}
          style={{
            maxHeight: "90vh",
            overflow: "auto",
            position: "relative",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          {currencies &&
            currencies?.map((currency) => (
              <div
                key={currency.name}
                onClick={() => goToCurrencyDetail(currency.symbol)}
              >
                <ListItem
                  className={classes.listItem}
                  style={{ cursor: "pointer" }}
                >
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
                    <Grid item xs={3} display={"flex"} justifyItems={"end"} alignContent={"center"} alignItems={"center"}>
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
