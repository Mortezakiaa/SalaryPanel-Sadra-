"use client";

import { FooterSelector } from "@/statemanagment/slice/FooterReceipt";
import { HeadSelector } from "@/statemanagment/slice/HeadReceipt";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

const months = {
  1: "فروردين",
  2: "ارديبهشت",
  3: "خرداد",
  4: "تير",
  5: "مرداد",
  6: "شهريور",
  7: "مهر",
  8: "آبان",
  9: "آذر",
  10: "دي",
  11: "بهمن",
  12: "اسفند",
};

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
  const {
    data: { DateAsarStr },
  } = useSelector(FooterSelector);

  const date: any = DateAsarStr.split("/");
  const monthNumber: any = Number(date[1]).toFixed(0);
  const monthName: any = Object.values(months).at(monthNumber - 1);

  return (
    <Grid container style={{ borderBottom: "1px solid", padding: "5px" }}>
      <Grid
        item
        xs={12}
        textAlign={"center"}
        marginBottom={2}
        style={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <span>فیش حقوق صدرا نگین پاسارگاد</span>
        <span>
          فیش حقوق {monthName} {date[0]}
        </span>
      </Grid>
      <Grid
        item
        xs={4}
        paddingRight={5}
        style={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <span>کد پرسنلی : {Code}</span>
        <span>نام: {NamePersonel}</span>
        <span>
          نام خانوادگی: {FamilyPersonel}
        </span>
      </Grid>
      <Grid
        item
        xs={4}
        paddingRight={5}
        style={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <span>کد ملی : {CodeMeli}</span>
        <span>
          شماره شناسنامه: {ShomareShenasname}
        </span>
        <span>شماره حساب: {ShomareHesab1}</span>
      </Grid>
      <Grid
        item
        xs={4}
        paddingRight={5}
        style={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <span>کد بیمه : {ShomareBime}</span>
        <span>سمت: {Semat}</span>
      </Grid>
    </Grid>
  );
}
