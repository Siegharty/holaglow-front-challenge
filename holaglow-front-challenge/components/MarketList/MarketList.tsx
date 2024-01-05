"use client";
import React from "react";
import Image from "next/image";
import classes from "./MarketList.module.css";
import {
  Card,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { RateDictionary } from "@/types/MarketPrices";
import stringToFloat from "@/helpers/stringToFloat";

interface MarketListProps {
  prices: RateDictionary[] | undefined;
}

export default function MarketList({ prices }: MarketListProps) {
  return (
    <>
      <Grid
        container
        display={"flex"}
        alignItems={"text"}
        alignContent={"center"}
        justifyContent={"center"}
        justifyItems={"center"}
      >
        <Grid item>
          <Typography variant="h4">Market overview</Typography>
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
            maxHeight: "100%",
            overflow: "auto",
            position: "relative",
            paddingTop: 0,
            paddingBottom: 0,
          }}
        >
          {prices &&
            prices.map((price) => (
              <div key={price.key}>
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
                        src={`https://assets.coincap.io/assets/icons/${price.key.toLowerCase()}@2x.png`}
                        width={"30"}
                        height={"30"}
                        alt={""}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <ListItemText>{price.key}</ListItemText>
                    </Grid>
                    <Grid item xs={3}>
                      <ListItemText>
                        USD {stringToFloat(price.value)}
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
