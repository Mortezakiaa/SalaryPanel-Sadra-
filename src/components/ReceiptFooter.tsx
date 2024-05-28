"use client";

import { FooterSelector } from "@/statemanagment/slice/FooterReceipt";
import { sp } from "@/utils/replaceNumber";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import starkString from "starkstring";

export default function ReceiptFooter() {
  const data = useSelector(FooterSelector);
  const { JamEzafatFish, JamGhabelPardakhtFish, JamKosuratFish } = data.data;
  return (
    <Grid container>
      <Grid item xs={3} style={{borderLeft:'2px solid'}} textAlign={"center"}>
        <span>
          قابل پرداخت : {sp(JamGhabelPardakhtFish)}
        </span>
      </Grid>
      <Grid item xs={3} style={{borderLeft:'2px solid'}} textAlign={"center"}>
        <span>جمع مزایا : {sp(JamEzafatFish)}</span>
      </Grid>
      <Grid item xs={3} style={{borderLeft:'2px solid'}} textAlign={"center"}>
        <span>جمع کسورات : {sp(JamKosuratFish)}</span>
      </Grid>
      <Grid item xs={12} borderTop={"2px solid"} paddingRight={2}>
        <span>قابل پراداخت حروف: {starkString(JamGhabelPardakhtFish.toString()).digitsToWords().toString()} هزار ریال</span>
      </Grid>
    </Grid>
  );
}
