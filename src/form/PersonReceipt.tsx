"use client";

import ReceiptAmary from "@/components/ReceiptAmary";
import ReceiptFooter from "@/components/ReceiptFooter";
import ReceiptHead from "@/components/ReceiptHead";
import ReceiptKarkard from "@/components/ReceiptKarkard";
import ReceiptKosorat from "@/components/ReceiptKosorat";
import ReceiptMazaya from "@/components/ReceiptMazaya";
import { Box, Grid } from "@mui/material";

export default function PersonReceipt() {
  return (
    <Grid container sx={{ border: "0.4px solid", borderRadius: "10px" }}>
      <Grid item xs={12}>
        <ReceiptHead />
      </Grid>
      <Grid item xs={3} sx={{ borderLeft: "2px solid" }}>
        <ReceiptKarkard />
      </Grid>
      <Grid item xs={3} sx={{ borderLeft: "2px solid" }}>
        <ReceiptMazaya />
      </Grid>
      <Grid item xs={3} sx={{ borderLeft: "2px solid" }}>
        <ReceiptKosorat />
      </Grid>
      <Grid item xs={3}>
        <ReceiptAmary />
      </Grid>
      <Grid item xs={12} sx={{ borderTop: "2px solid" }}>
        <ReceiptFooter />
      </Grid>
    </Grid>
  );
}
