"use client";
import React from "react";
import Image from "next/image";
import classes from "./Market.module.css";
import { Card, Grid, List, ListItem, ListItemText } from "@mui/material";
import { MarketPrices, RateDictionary } from "@/types/MarketPrices";
import stringToFloat from "@/helpers/stringToFloat";

interface MarketListProps {
  prices: RateDictionary[] | undefined;
}

export default function MarketList({ prices }: MarketListProps) {
  return (
    <>
      <div>MarketList</div>
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
          {prices &&
            prices.map((price) => (
              <div key={Object.keys(price)[0]}>
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
                        src={`https://assets.coincap.io/assets/icons/${Object.keys(
                          price
                        )[0]
                          .toString()
                          .toLowerCase()}@2x.png`}
                        width={"30"}
                        height={"30"}
                        alt={""}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <ListItemText>
                        {Object.keys(price)[0].toString()}
                      </ListItemText>
                    </Grid>
                    <Grid item xs={3}>
                      <ListItemText>
                        {stringToFloat(price[Object.keys(price).toString()])}
                      </ListItemText>
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
