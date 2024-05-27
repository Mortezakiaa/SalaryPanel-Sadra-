"use client";
import { PersonInfo } from "@/Types/Types";
import RTLTextField from "@/components/RTLTextField";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Salary() {
  const [personInfo, setPersonInfo] = useState<PersonInfo>({
    code: "",
    codeMeli: "",
    date: "",
  });

  const [date, setDate] = useState({
    month: "",
    year: "",
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
    if (!date.year) {
      toast.error("سال مورد نظر را وارد کنید");
      return;
    }
    setPersonInfo({ ...personInfo, date: `${date.year}/${date.month}` });
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
            onChange={(e) => {
              setDate({ ...date, month: e.target.value.toString() });
            }}
            fullWidth
            label="ماه"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField
            type="number"
            value={date.year}
            onChange={(e) => {
              setDate({ ...date, year: e.target.value.toString() });
            }}
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
