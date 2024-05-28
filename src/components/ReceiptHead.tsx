"use client";

import { HeadSelector } from "@/statemanagment/slice/HeadReceipt";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptHead() {
  const data = useSelector(HeadSelector);
  const {
    Code,
    CodeMeli,
    FamilyPersonel,
    NamePersonel,
    Semat,
    ShomareBime,
    ShomareHesab1,
    ShomareShenasname,
  } = data.data

  return (
    <Grid container>
      <Grid
        item
        xs={4}
        style={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Typography variant="h6">کد پرسنلی : {Code}</Typography>
        <Typography variant="h6">نام: {NamePersonel}</Typography>
        <Typography variant="h6">نام خانوادگی: {FamilyPersonel}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">کد ملی : {CodeMeli}</Typography>
        <Typography variant="h6">
          شماره شناسنامه: {ShomareShenasname}
        </Typography>
        <Typography variant="h6">شماره حساب: {ShomareHesab1}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h6">کد بیمه : {ShomareBime}</Typography>
        <Typography variant="h6">سمت: {Semat}</Typography>
      </Grid>
    </Grid>
  );
}
