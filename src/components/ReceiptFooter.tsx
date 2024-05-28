"use client";

import { FooterSelector } from "@/statemanagment/slice/FooterReceipt";
import { sp } from "@/utils/replaceNumber";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptFooter() {
  const data = useSelector(FooterSelector);
  const { JamEzafatFish, JamGhabelPardakhtFish, JamKosuratFish } = data.data;
  return (
    <Grid container textAlign={"center"}>
      <Grid item xs={3} style={{borderLeft:'2px solid'}}>
        <Typography variant="caption">
          قابل پرداخت : {sp(JamGhabelPardakhtFish)}
        </Typography>
      </Grid>
      <Grid item xs={3} style={{borderLeft:'2px solid'}}>
        <Typography variant="caption">جمع مزایا : {sp(JamEzafatFish)}</Typography>
      </Grid>
      <Grid item xs={3} style={{borderLeft:'2px solid'}}>
        <Typography variant="caption">جمع کسورات : {sp(JamKosuratFish)}</Typography>
      </Grid>
    </Grid>
  );
}
