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
  } = data.data;

  return (
    <Grid container style={{ borderBottom: "1px solid", padding: "5px" }}>
      <Grid item xs={12} textAlign={"center"} marginBottom={2}>
        <Typography variant="subtitle1">فیش حقوق صدرا نگین پاسارگاد</Typography>
        <Typography variant="subtitle1">فیش حقوق</Typography>
      </Grid>
      <Grid item xs={4} paddingRight={5}>
        <Typography variant="subtitle1">کد پرسنلی : {Code}</Typography>
        <Typography variant="subtitle1">نام: {NamePersonel}</Typography>
        <Typography variant="subtitle1">
          نام خانوادگی: {FamilyPersonel}
        </Typography>
      </Grid>
      <Grid item xs={4} paddingRight={5}>
        <Typography variant="subtitle1">کد ملی : {CodeMeli}</Typography>
        <Typography variant="subtitle1">
          شماره شناسنامه: {ShomareShenasname}
        </Typography>
        <Typography variant="subtitle1">شماره حساب: {ShomareHesab1}</Typography>
      </Grid>
      <Grid item xs={4} paddingRight={5}>
        <Typography variant="subtitle1">کد بیمه : {ShomareBime}</Typography>
        <Typography variant="subtitle1">سمت: {Semat}</Typography>
      </Grid>
    </Grid>
  );
}
