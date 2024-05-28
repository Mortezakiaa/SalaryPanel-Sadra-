"use client";

import ReceiptAmary from "@/components/ReceiptAmary";
import ReceiptFooter from "@/components/ReceiptFooter";
import ReceiptHead from "@/components/ReceiptHead";
import ReceiptKarkard from "@/components/ReceiptKarkard";
import ReceiptKosorat from "@/components/ReceiptKosorat";
import ReceiptMazaya from "@/components/ReceiptMazaya";
import { Grid } from "@mui/material";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import DownloadIcon from "@mui/icons-material/Download";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { HeadSelector } from "@/statemanagment/slice/HeadReceipt";

export default function PersonReceipt() {
  const targetRef = useRef();
  const {
    data: { NamePersonel, FamilyPersonel },
  } = useSelector(HeadSelector);
  return (
    <>
      <Tooltip title="دانلود فیش با فرمت pdf">
        <IconButton
          onClick={() =>
            generatePDF(targetRef, {
              filename: `${NamePersonel}${FamilyPersonel}.pdf`,
            })
          }
        >
          <DownloadIcon />
        </IconButton>
      </Tooltip>
      <div ref={targetRef as any}>
        <Grid container sx={{ border: "1px solid", borderRadius: "10px" }}>
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
      </div>
    </>
  );
}
