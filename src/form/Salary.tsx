"use client";
import RTLTextField from "@/components/RTLTextField";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Salary() {
  const [data, setData] = useState();

  const getList = async ()=>{
    if(!data){
      toast.error('')
    }
  }

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
        borderColor: 'grey.500',
      }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h6">نمایش فیش حقوقی</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField fullWidth label="کد پرسنلی" />
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField fullWidth label="کد ملی" />
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField fullWidth label="ماه" />
        </Grid>
        <Grid item xs={12} md={6}>
          <RTLTextField fullWidth label="سال" />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center"}}>
          <Button onClick={getList} fullWidth variant="outlined">نمایش</Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
