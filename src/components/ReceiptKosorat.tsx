"use client";

import { KosoratSelector } from "@/statemanagment/slice/KosoratReceipt";
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
    <Grid container>
      <Grid xs={12}>
        {MablagKosorMahaneHogugRadif1 != 0 && <Typography variant="h6">مساعده : {MablagKosorMahaneHogugRadif1}</Typography>}
        {MablagKosorMahaneHogugRadif2 != 0 && <Typography variant="h6">جریمه : {MablagKosorMahaneHogugRadif2}</Typography>}
        {MablagKosorMahaneHogugRadif3 != 0 && <Typography variant="h6">بدهی : {MablagKosorMahaneHogugRadif3}</Typography>}
        {MablagKosorMahaneHogugRadif4 != 0 && <Typography variant="h6">مرخصی استفاده شده : {MablagKosorMahaneHogugRadif4}</Typography>}
        {MablagKosorMahaneHogugRadif5 != 0 && <Typography variant="h6">کسور موردی 5: {MablagKosorMahaneHogugRadif5}</Typography>}
        {MablagKosorMahaneHogugRadif6 != 0 && <Typography variant="h6">کسور موردی 6: {MablagKosorMahaneHogugRadif6}</Typography>}
        {MablagKosorMahaneHogugRadif7 != 0 && <Typography variant="h6">کسور موردی 7: {MablagKosorMahaneHogugRadif7}</Typography>}
        {MablagKosorMahaneHogugRadif8 != 0 && <Typography variant="h6">کسور موردی 8: {MablagKosorMahaneHogugRadif8}</Typography>}
        {MablagKosorMahaneHogugRadif9 != 0 && <Typography variant="h6">کسور موردی 9: {MablagKosorMahaneHogugRadif9}</Typography>}
        {MablagKosorMahaneHogugRadif10 != 0 && <Typography variant="h6">کسور موردی 10: {MablagKosorMahaneHogugRadif10}</Typography>}
        {MablagKosorMahaneHogugRadif11 != 0 && <Typography variant="h6">کسور موردی 11: {MablagKosorMahaneHogugRadif11}</Typography>}
        {MablagKosorMahaneHogugRadif12 != 0 && <Typography variant="h6">کسور موردی 12: {MablagKosorMahaneHogugRadif12}</Typography>}
        {MablagKosorMahaneHogugRadif13 != 0 && <Typography variant="h6">کسور موردی 13: {MablagKosorMahaneHogugRadif13}</Typography>}
        {MablagKosorMahaneHogugRadif14 != 0 && <Typography variant="h6">کسور موردی 14: {MablagKosorMahaneHogugRadif14}</Typography>}
        {MablagKosorMahaneHogugRadif15 != 0 && <Typography variant="h6">کسور موردی 15: {MablagKosorMahaneHogugRadif15}</Typography>}
        {MablagKosorMahaneHogugRadif16 != 0 && <Typography variant="h6">کسور موردی 16: {MablagKosorMahaneHogugRadif16}</Typography>}
        {MablagKosorMahaneHogugRadif17 != 0 && <Typography variant="h6">کسور موردی 17: {MablagKosorMahaneHogugRadif17}</Typography>}
        {MablagKosorMahaneHogugRadif18 != 0 && <Typography variant="h6">کسور موردی 18: {MablagKosorMahaneHogugRadif18}</Typography>}
        {MablagKosorMahaneHogugRadif19 != 0 && <Typography variant="h6">کسور موردی 19: {MablagKosorMahaneHogugRadif19}</Typography>}
        {MablagKosorMahaneHogugRadif20 != 0 && <Typography variant="h6">کسور موردی 20: {MablagKosorMahaneHogugRadif20}</Typography>}
        {MablagKosorModavem1HogugRadif1 != 0 && <Typography variant="h6">وام 1: {MablagKosorModavem1HogugRadif1}</Typography>}
        {MablagKosorModavem1HogugRadif2 != 0 && <Typography variant="h6">وام 2: {MablagKosorModavem1HogugRadif2}</Typography>}
        {MablagKosorModavem1HogugRadif3 != 0 && <Typography variant="h6">وام 3: {MablagKosorModavem1HogugRadif3}</Typography>}
        {MablagKosorModavem1HogugRadif4 != 0 && <Typography variant="h6">وام 4: {MablagKosorModavem1HogugRadif4}</Typography>}
        {MablagKosorModavem1HogugRadif5 != 0 && <Typography variant="h6">وام 5: {MablagKosorModavem1HogugRadif5}</Typography>}
        {MablagKosorModavem1HogugRadif6 != 0 && <Typography variant="h6">وام 6: {MablagKosorModavem1HogugRadif6}</Typography>}
        {MablagKosorModavem1HogugRadif7 != 0 && <Typography variant="h6">وام 7: {MablagKosorModavem1HogugRadif7}</Typography>}
        {MablagKosorModavem1HogugRadif8 != 0 && <Typography variant="h6">وام 8: {MablagKosorModavem1HogugRadif8}</Typography>}
        {MablagKosorModavem1HogugRadif9 != 0 && <Typography variant="h6">وام 9: {MablagKosorModavem1HogugRadif9}</Typography>}
        {MablagKosorModavem1HogugRadif10 != 0 && <Typography variant="h6">وام 10: {MablagKosorModavem1HogugRadif10}</Typography>}
        {MablagKosorModavem2HogugRadif1 != 0 && <Typography variant="h6">کسور مداوم 1: {MablagKosorModavem2HogugRadif1}</Typography>}
        {MablagKosorModavem2HogugRadif2 != 0 && <Typography variant="h6">کسور مداوم 2: {MablagKosorModavem2HogugRadif2}</Typography>}
        {MablagKosorModavem2HogugRadif3 != 0 && <Typography variant="h6">کسور مداوم 3: {MablagKosorModavem2HogugRadif3}</Typography>}
        {MablagKosorModavem2HogugRadif4 != 0 && <Typography variant="h6">کسور مداوم 4: {MablagKosorModavem2HogugRadif4}</Typography>}
        {MablagKosorModavem2HogugRadif5 != 0 && <Typography variant="h6">کسور مداوم 5: {MablagKosorModavem2HogugRadif5}</Typography>}
        {MablagKosorModavem2HogugRadif6 != 0 && <Typography variant="h6">کسور مداوم 6: {MablagKosorModavem2HogugRadif6}</Typography>}
        {MablagKosorModavem2HogugRadif7 != 0 && <Typography variant="h6">کسور مداوم 7: {MablagKosorModavem2HogugRadif7}</Typography>}
        {MablagKosorModavem2HogugRadif8 != 0 && <Typography variant="h6">کسور مداوم 8: {MablagKosorModavem2HogugRadif8}</Typography>}
        {MablagKosorModavem2HogugRadif9 != 0 && <Typography variant="h6">کسور مداوم 9: {MablagKosorModavem2HogugRadif9}</Typography>}
        {MablagKosorModavem2HogugRadif10 != 0 && <Typography variant="h6">کسور مداوم 10: {MablagKosorModavem2HogugRadif10}</Typography>}
        {MablagTakhirSaati != 0 && <Typography variant="h6">تاخیر: {MablagTakhirSaati}</Typography>}
        {MablagTagilSaati != 0 && <Typography variant="h6">تعجیل: {MablagTagilSaati}</Typography>}
        {MablagGibatRuzane != 0 && <Typography variant="h6">غیبت: {MablagGibatRuzane}</Typography>}
        {MablagKasrKarRuzane != 0 && <Typography variant="h6">کسر کار: {MablagKasrKarRuzane}</Typography>}
        {MablagKasrKarRuzane != 0 && <Typography variant="h6">بیمه: {MablagKasrKarRuzane}</Typography>}
        {MaliatFish != 0 && <Typography variant="h6">مالیات: {MaliatFish}</Typography>}
        {RoundMahGari != 0 && <Typography variant="h6">روند ماه جاری: {RoundMahGari}</Typography>}
        {BimeSahmeKargar != 0 && <Typography variant="h6">بیمه سهم کارگر: {BimeSahmeKargar}</Typography>}
     </Grid>
    </Grid>
  );
}
