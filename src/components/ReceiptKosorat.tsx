"use client";

import { KosoratSelector } from "@/statemanagment/slice/KosoratReceipt";
import { sp } from "@/utils/replaceNumber";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptKosorat() {
  const data = useSelector(KosoratSelector);

  const {
    BimeSahmeKargar,
    MablagGibatRuzane,
    MablagKasrKarRuzane,
    MablagKosorMahaneHogugRadif1,
    MablagKosorMahaneHogugRadif10,
    MablagKosorMahaneHogugRadif11,
    MablagKosorMahaneHogugRadif12,
    MablagKosorMahaneHogugRadif13,
    MablagKosorMahaneHogugRadif14,
    MablagKosorMahaneHogugRadif15,
    MablagKosorMahaneHogugRadif16,
    MablagKosorMahaneHogugRadif17,
    MablagKosorMahaneHogugRadif18,
    MablagKosorMahaneHogugRadif19,
    MablagKosorMahaneHogugRadif2,
    MablagKosorMahaneHogugRadif3,
    MablagKosorMahaneHogugRadif20,
    MablagKosorMahaneHogugRadif4,
    MablagKosorMahaneHogugRadif5,
    MablagKosorMahaneHogugRadif6,
    MablagKosorMahaneHogugRadif7,
    MablagKosorMahaneHogugRadif8,
    MablagKosorMahaneHogugRadif9,
    MablagKosorModavem1HogugRadif1,
    MablagKosorModavem1HogugRadif10,
    MablagKosorModavem1HogugRadif2,
    MablagKosorModavem1HogugRadif3,
    MablagKosorModavem1HogugRadif4,
    MablagKosorModavem1HogugRadif5,
    MablagKosorModavem1HogugRadif6,
    MablagKosorModavem1HogugRadif7,
    MablagKosorModavem1HogugRadif8,
    MablagKosorModavem1HogugRadif9,
    MablagKosorModavem2HogugRadif1,
    MablagKosorModavem2HogugRadif10,
    MablagKosorModavem2HogugRadif2,
    MablagKosorModavem2HogugRadif3,
    MablagKosorModavem2HogugRadif4,
    MablagKosorModavem2HogugRadif5,
    MablagKosorModavem2HogugRadif6,
    MablagKosorModavem2HogugRadif7,
    MablagKosorModavem2HogugRadif8,
    MablagKosorModavem2HogugRadif9,
    MablagTagilSaati,
    MablagTakhirSaati,
    MaliatFish,
    RoundMahGari,
  } = data.data

  return (
    <Grid container style={{textAlign:'center'}}>
       <Grid item xs={12}>
        <Typography variant="subtitle1" style={{borderBottom:'2px solid'}}>کسورات حقوق</Typography>
      </Grid>
      <Grid xs={12} style={{display:'flex' , flexDirection:'column' , padding:'0.5px' , gap:1}}>
        {MablagKosorMahaneHogugRadif1 != 0 && <Typography variant="caption">مساعده : {sp(MablagKosorMahaneHogugRadif1)}</Typography>}
        {MablagKosorMahaneHogugRadif2 != 0 && <Typography variant="caption">جریمه : {sp(MablagKosorMahaneHogugRadif2)}</Typography>}
        {MablagKosorMahaneHogugRadif3 != 0 && <Typography variant="caption">بدهی : {sp(MablagKosorMahaneHogugRadif3)}</Typography>}
        {MablagKosorMahaneHogugRadif4 != 0 && <Typography variant="caption">مرخصی استفاده شده : {sp(MablagKosorMahaneHogugRadif4)}</Typography>}
        {MablagKosorMahaneHogugRadif5 != 0 && <Typography variant="caption">کسور موردی 5: {sp(MablagKosorMahaneHogugRadif5)}</Typography>}
        {MablagKosorMahaneHogugRadif6 != 0 && <Typography variant="caption">کسور موردی 6: {sp(MablagKosorMahaneHogugRadif6)}</Typography>}
        {MablagKosorMahaneHogugRadif7 != 0 && <Typography variant="caption">کسور موردی 7: {sp(MablagKosorMahaneHogugRadif7)}</Typography>}
        {MablagKosorMahaneHogugRadif8 != 0 && <Typography variant="caption">کسور موردی 8: {sp(MablagKosorMahaneHogugRadif8)}</Typography>}
        {MablagKosorMahaneHogugRadif9 != 0 && <Typography variant="caption">کسور موردی 9: {sp(MablagKosorMahaneHogugRadif9)}</Typography>}
        {MablagKosorMahaneHogugRadif10 != 0 && <Typography variant="caption">کسور موردی 10: {sp(MablagKosorMahaneHogugRadif10)}</Typography>}
        {MablagKosorMahaneHogugRadif11 != 0 && <Typography variant="caption">کسور موردی 11: {sp(MablagKosorMahaneHogugRadif11)}</Typography>}
        {MablagKosorMahaneHogugRadif12 != 0 && <Typography variant="caption">کسور موردی 12: {sp(MablagKosorMahaneHogugRadif12)}</Typography>}
        {MablagKosorMahaneHogugRadif13 != 0 && <Typography variant="caption">کسور موردی 13: {sp(MablagKosorMahaneHogugRadif13)}</Typography>}
        {MablagKosorMahaneHogugRadif14 != 0 && <Typography variant="caption">کسور موردی 14: {sp(MablagKosorMahaneHogugRadif14)}</Typography>}
        {MablagKosorMahaneHogugRadif15 != 0 && <Typography variant="caption">کسور موردی 15: {sp(MablagKosorMahaneHogugRadif15)}</Typography>}
        {MablagKosorMahaneHogugRadif16 != 0 && <Typography variant="caption">کسور موردی 16: {sp(MablagKosorMahaneHogugRadif16)}</Typography>}
        {MablagKosorMahaneHogugRadif17 != 0 && <Typography variant="caption">کسور موردی 17: {sp(MablagKosorMahaneHogugRadif17)}</Typography>}
        {MablagKosorMahaneHogugRadif18 != 0 && <Typography variant="caption">کسور موردی 18: {sp(MablagKosorMahaneHogugRadif18)}</Typography>}
        {MablagKosorMahaneHogugRadif19 != 0 && <Typography variant="caption">کسور موردی 19: {sp(MablagKosorMahaneHogugRadif19)}</Typography>}
        {MablagKosorMahaneHogugRadif20 != 0 && <Typography variant="caption">کسور موردی 20: {sp(MablagKosorMahaneHogugRadif20)}</Typography>}
        {MablagKosorModavem1HogugRadif1 != 0 && <Typography variant="caption">وام 1: {sp(MablagKosorModavem1HogugRadif1)}</Typography>}
        {MablagKosorModavem1HogugRadif2 != 0 && <Typography variant="caption">وام 2: {sp(MablagKosorModavem1HogugRadif2)}</Typography>}
        {MablagKosorModavem1HogugRadif3 != 0 && <Typography variant="caption">وام 3: {sp(MablagKosorModavem1HogugRadif3)}</Typography>}
        {MablagKosorModavem1HogugRadif4 != 0 && <Typography variant="caption">وام 4: {sp(MablagKosorModavem1HogugRadif4)}</Typography>}
        {MablagKosorModavem1HogugRadif5 != 0 && <Typography variant="caption">وام 5: {sp(MablagKosorModavem1HogugRadif5)}</Typography>}
        {MablagKosorModavem1HogugRadif6 != 0 && <Typography variant="caption">وام 6: {sp(MablagKosorModavem1HogugRadif6)}</Typography>}
        {MablagKosorModavem1HogugRadif7 != 0 && <Typography variant="caption">وام 7: {sp(MablagKosorModavem1HogugRadif7)}</Typography>}
        {MablagKosorModavem1HogugRadif8 != 0 && <Typography variant="caption">وام 8: {sp(MablagKosorModavem1HogugRadif8)}</Typography>}
        {MablagKosorModavem1HogugRadif9 != 0 && <Typography variant="caption">وام 9: {sp(MablagKosorModavem1HogugRadif9)}</Typography>}
        {MablagKosorModavem1HogugRadif10 != 0 && <Typography variant="caption">وام 10: {sp(MablagKosorModavem1HogugRadif10)}</Typography>}
        {MablagKosorModavem2HogugRadif1 != 0 && <Typography variant="caption">کسور مداوم 1: {sp(MablagKosorModavem2HogugRadif1)}</Typography>}
        {MablagKosorModavem2HogugRadif2 != 0 && <Typography variant="caption">کسور مداوم 2: {sp(MablagKosorModavem2HogugRadif2)}</Typography>}
        {MablagKosorModavem2HogugRadif3 != 0 && <Typography variant="caption">کسور مداوم 3: {sp(MablagKosorModavem2HogugRadif3)}</Typography>}
        {MablagKosorModavem2HogugRadif4 != 0 && <Typography variant="caption">کسور مداوم 4: {sp(MablagKosorModavem2HogugRadif4)}</Typography>}
        {MablagKosorModavem2HogugRadif5 != 0 && <Typography variant="caption">کسور مداوم 5: {sp(MablagKosorModavem2HogugRadif5)}</Typography>}
        {MablagKosorModavem2HogugRadif6 != 0 && <Typography variant="caption">کسور مداوم 6: {sp(MablagKosorModavem2HogugRadif6)}</Typography>}
        {MablagKosorModavem2HogugRadif7 != 0 && <Typography variant="caption">کسور مداوم 7: {sp(MablagKosorModavem2HogugRadif7)}</Typography>}
        {MablagKosorModavem2HogugRadif8 != 0 && <Typography variant="caption">کسور مداوم 8: {sp(MablagKosorModavem2HogugRadif8)}</Typography>}
        {MablagKosorModavem2HogugRadif9 != 0 && <Typography variant="caption">کسور مداوم 9: {sp(MablagKosorModavem2HogugRadif9)}</Typography>}
        {MablagKosorModavem2HogugRadif10 != 0 && <Typography variant="caption">کسور مداوم 10: {sp(MablagKosorModavem2HogugRadif10)}</Typography>}
        {MablagTakhirSaati != 0 && <Typography variant="caption">تاخیر: {sp(MablagTakhirSaati)}</Typography>}
        {MablagTagilSaati != 0 && <Typography variant="caption">تعجیل: {sp(MablagTagilSaati)}</Typography>}
        {MablagGibatRuzane != 0 && <Typography variant="caption">غیبت: {sp(MablagGibatRuzane)}</Typography>}
        {MablagKasrKarRuzane != 0 && <Typography variant="caption">کسر کار: {sp(MablagKasrKarRuzane)}</Typography>}
        {MablagKasrKarRuzane != 0 && <Typography variant="caption">بیمه: {sp(MablagKasrKarRuzane)}</Typography>}
        {MaliatFish != 0 && <Typography variant="caption">مالیات: {sp(MaliatFish)}</Typography>}
        {RoundMahGari != 0 && <Typography variant="caption">روند ماه جاری: {sp(RoundMahGari)}</Typography>}
        {BimeSahmeKargar != 0 && <Typography variant="caption">بیمه سهم کارگر: {sp(BimeSahmeKargar)}</Typography>}
     </Grid>
    </Grid>
  );
}
