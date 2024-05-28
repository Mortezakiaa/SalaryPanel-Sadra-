"use client";

import { FooterSelector } from "@/statemanagment/slice/FooterReceipt";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptFooter() {
  const data = useSelector(FooterSelector);
    const { JamEzafatFish, JamGhabelPardakhtFish, JamKosuratFish } = data.data
  return (
    <Grid container>
      <Grid item xs={3}>
        <Typography variant="h6">
          قابل پرداخت : {JamGhabelPardakhtFish}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6">جمع مزایا : {JamEzafatFish}</Typography>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h6">جمع کسورات : {JamKosuratFish}</Typography>
      </Grid>
    </Grid>
  );
}
