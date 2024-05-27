"use client";
import { TPersonInfo, TSalarySlice } from "@/Types/Types";
import RTLTextField from "@/components/RTLTextField";
import { setAmary } from "@/statemanagment/slice/AmaryReceipt";
import { setFooter } from "@/statemanagment/slice/FooterReceipt";
import { setHead } from "@/statemanagment/slice/HeadReceipt";
import { setKarkard } from "@/statemanagment/slice/KarkardReceipt";
import { setKosorat } from "@/statemanagment/slice/KosoratReceipt";
import { setMazaya } from "@/statemanagment/slice/MazayaReceipt";
import { setReceiptModal } from "@/statemanagment/slice/ReceiptModal";
import ApiService from "@/utils/axios";
import { p2e } from "@/utils/replaceNumber";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function PersonInfo() {
  const dispatch = useDispatch();
  const currentMonth = p2e(
    new Intl.DateTimeFormat("fa", { month: "2-digit" }).format(Date.now())
  );

  const [personInfo, setPersonInfo] = useState<TPersonInfo>({
    code: "",
    codeMeli: "",
    date: "",
  });

  const [date, setDate] = useState({
    month: currentMonth.toString(),
    year: "1403",
  });

  const getList = async () => {
    if (!personInfo.code) {
      toast.error("کد پرسنلی الزامیست");
      return;
    }
    if (!personInfo.codeMeli) {
      toast.error("کد ملی الزامیست");
      return;
    }
    if (!date.month) {
      toast.error("ماه مورد نظر را وارد کنید");
      return;
    }
    if (!date.year || date.year.length < 4) {
      toast.error("سال مورد نظر را وارد کنید");
      return;
    }
    if (date.month == 0) {
      toast.error("ماه مورد نظر را درست وارد کنید");
      return;
    }
    setPersonInfo({ ...personInfo, date: `${date.year}/${date.month}` });
    const data: TSalarySlice = await ApiService.post("/Pay/Search", personInfo);
    if (data.isSuccess) {
      dispatch(setHead(data.head));
      dispatch(setKarkard(data.karkard));
      dispatch(setAmary(data.amary));
      dispatch(setKosorat(data.kosorat));
      dispatch(setMazaya(data.mazaya));
      dispatch(setFooter(data.footer));
      dispatch(setReceiptModal(true));
    }
  };

  const monthCheck = (e: any) => {
    const val = e.target.value;
    if (val.length > 2) return;
    if (+val > 12) return;
    setDate({ ...date, month: val.toString() });
  };

  const yearCheck = (e: any) => {
    const val = e.target.value;
    if (val.length > 4) return;
    setDate({ ...date, year: val.toString() });
  };

  return (
    <Stack
      sx={{
        boxShadow: 3,
        padding: 2,
        borderRadius: 2,
        position: "absolute",
        top: " 50%",
        left: " 50%",
        transform: "translate(-50%, -50%)",
        borderColor: "grey.500",
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6">نمایش فیش حقوقی</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField
            type="number"
            value={personInfo.code}
            onChange={(e) => {
              setPersonInfo({ ...personInfo, code: e.target.value.toString() });
            }}
            fullWidth
            label="کد پرسنلی"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField
            type="number"
            onChange={(e) => {
              setPersonInfo({
                ...personInfo,
                codeMeli: e.target.value.toString(),
              });
            }}
            value={personInfo.codeMeli}
            fullWidth
            label="کد ملی"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField
            type="number"
            value={date.month}
            onChange={monthCheck}
            fullWidth
            label="ماه"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField
            type="number"
            value={date.year}
            onChange={yearCheck}
            fullWidth
            label="سال"
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={getList} fullWidth variant="outlined">
            نمایش
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}