"use client";

import { KosoratSelector } from "@/statemanagment/slice/KosoratReceipt";
import { sp } from "@/utils/replaceNumber";
import { Grid } from "@mui/material";
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
       <Grid item xs={12} style={{borderBottom:'2px solid'}}>
        <span>کسورات حقوق</span>
      </Grid>
      <Grid xs={12} style={{display:'flex' , flexDirection:'column' , padding:'0.5px' , gap:1}}>
        {MablagKosorMahaneHogugRadif1 != 0 && <span>مساعده : {sp(MablagKosorMahaneHogugRadif1)}</span>}
        {MablagKosorMahaneHogugRadif2 != 0 && <span>جریمه : {sp(MablagKosorMahaneHogugRadif2)}</span>}
        {MablagKosorMahaneHogugRadif3 != 0 && <span>بدهی : {sp(MablagKosorMahaneHogugRadif3)}</span>}
        {MablagKosorMahaneHogugRadif4 != 0 && <span>مرخصی استفاده شده : {sp(MablagKosorMahaneHogugRadif4)}</span>}
        {MablagKosorMahaneHogugRadif5 != 0 && <span>کسور موردی 5: {sp(MablagKosorMahaneHogugRadif5)}</span>}
        {MablagKosorMahaneHogugRadif6 != 0 && <span>کسور موردی 6: {sp(MablagKosorMahaneHogugRadif6)}</span>}
        {MablagKosorMahaneHogugRadif7 != 0 && <span>کسور موردی 7: {sp(MablagKosorMahaneHogugRadif7)}</span>}
        {MablagKosorMahaneHogugRadif8 != 0 && <span>کسور موردی 8: {sp(MablagKosorMahaneHogugRadif8)}</span>}
        {MablagKosorMahaneHogugRadif9 != 0 && <span>کسور موردی 9: {sp(MablagKosorMahaneHogugRadif9)}</span>}
        {MablagKosorMahaneHogugRadif10 != 0 && <span>کسور موردی 10: {sp(MablagKosorMahaneHogugRadif10)}</span>}
        {MablagKosorMahaneHogugRadif11 != 0 && <span>کسور موردی 11: {sp(MablagKosorMahaneHogugRadif11)}</span>}
        {MablagKosorMahaneHogugRadif12 != 0 && <span>کسور موردی 12: {sp(MablagKosorMahaneHogugRadif12)}</span>}
        {MablagKosorMahaneHogugRadif13 != 0 && <span>کسور موردی 13: {sp(MablagKosorMahaneHogugRadif13)}</span>}
        {MablagKosorMahaneHogugRadif14 != 0 && <span>کسور موردی 14: {sp(MablagKosorMahaneHogugRadif14)}</span>}
        {MablagKosorMahaneHogugRadif15 != 0 && <span>کسور موردی 15: {sp(MablagKosorMahaneHogugRadif15)}</span>}
        {MablagKosorMahaneHogugRadif16 != 0 && <span>کسور موردی 16: {sp(MablagKosorMahaneHogugRadif16)}</span>}
        {MablagKosorMahaneHogugRadif17 != 0 && <span>کسور موردی 17: {sp(MablagKosorMahaneHogugRadif17)}</span>}
        {MablagKosorMahaneHogugRadif18 != 0 && <span>کسور موردی 18: {sp(MablagKosorMahaneHogugRadif18)}</span>}
        {MablagKosorMahaneHogugRadif19 != 0 && <span>کسور موردی 19: {sp(MablagKosorMahaneHogugRadif19)}</span>}
        {MablagKosorMahaneHogugRadif20 != 0 && <span>کسور موردی 20: {sp(MablagKosorMahaneHogugRadif20)}</span>}
        {MablagKosorModavem1HogugRadif1 != 0 && <span>وام 1: {sp(MablagKosorModavem1HogugRadif1)}</span>}
        {MablagKosorModavem1HogugRadif2 != 0 && <span>وام 2: {sp(MablagKosorModavem1HogugRadif2)}</span>}
        {MablagKosorModavem1HogugRadif3 != 0 && <span>وام 3: {sp(MablagKosorModavem1HogugRadif3)}</span>}
        {MablagKosorModavem1HogugRadif4 != 0 && <span>وام 4: {sp(MablagKosorModavem1HogugRadif4)}</span>}
        {MablagKosorModavem1HogugRadif5 != 0 && <span>وام 5: {sp(MablagKosorModavem1HogugRadif5)}</span>}
        {MablagKosorModavem1HogugRadif6 != 0 && <span>وام 6: {sp(MablagKosorModavem1HogugRadif6)}</span>}
        {MablagKosorModavem1HogugRadif7 != 0 && <span>وام 7: {sp(MablagKosorModavem1HogugRadif7)}</span>}
        {MablagKosorModavem1HogugRadif8 != 0 && <span>وام 8: {sp(MablagKosorModavem1HogugRadif8)}</span>}
        {MablagKosorModavem1HogugRadif9 != 0 && <span>وام 9: {sp(MablagKosorModavem1HogugRadif9)}</span>}
        {MablagKosorModavem1HogugRadif10 != 0 && <span>وام 10: {sp(MablagKosorModavem1HogugRadif10)}</span>}
        {MablagKosorModavem2HogugRadif1 != 0 && <span>کسور مداوم 1: {sp(MablagKosorModavem2HogugRadif1)}</span>}
        {MablagKosorModavem2HogugRadif2 != 0 && <span>کسور مداوم 2: {sp(MablagKosorModavem2HogugRadif2)}</span>}
        {MablagKosorModavem2HogugRadif3 != 0 && <span>کسور مداوم 3: {sp(MablagKosorModavem2HogugRadif3)}</span>}
        {MablagKosorModavem2HogugRadif4 != 0 && <span>کسور مداوم 4: {sp(MablagKosorModavem2HogugRadif4)}</span>}
        {MablagKosorModavem2HogugRadif5 != 0 && <span>کسور مداوم 5: {sp(MablagKosorModavem2HogugRadif5)}</span>}
        {MablagKosorModavem2HogugRadif6 != 0 && <span>کسور مداوم 6: {sp(MablagKosorModavem2HogugRadif6)}</span>}
        {MablagKosorModavem2HogugRadif7 != 0 && <span>کسور مداوم 7: {sp(MablagKosorModavem2HogugRadif7)}</span>}
        {MablagKosorModavem2HogugRadif8 != 0 && <span>کسور مداوم 8: {sp(MablagKosorModavem2HogugRadif8)}</span>}
        {MablagKosorModavem2HogugRadif9 != 0 && <span>کسور مداوم 9: {sp(MablagKosorModavem2HogugRadif9)}</span>}
        {MablagKosorModavem2HogugRadif10 != 0 && <span>کسور مداوم 10: {sp(MablagKosorModavem2HogugRadif10)}</span>}
        {MablagTakhirSaati != 0 && <span>تاخیر: {sp(MablagTakhirSaati)}</span>}
        {MablagTagilSaati != 0 && <span>تعجیل: {sp(MablagTagilSaati)}</span>}
        {MablagGibatRuzane != 0 && <span>غیبت: {sp(MablagGibatRuzane)}</span>}
        {MablagKasrKarRuzane != 0 && <span>کسر کار: {sp(MablagKasrKarRuzane)}</span>}
        {MablagKasrKarRuzane != 0 && <span>بیمه: {sp(MablagKasrKarRuzane)}</span>}
        {MaliatFish != 0 && <span>مالیات: {sp(MaliatFish)}</span>}
        {RoundMahGari != 0 && <span>روند ماه جاری: {sp(RoundMahGari)}</span>}
        {BimeSahmeKargar != 0 && <span>بیمه سهم کارگر: {sp(BimeSahmeKargar)}</span>}
     </Grid>
    </Grid>
  );
}
