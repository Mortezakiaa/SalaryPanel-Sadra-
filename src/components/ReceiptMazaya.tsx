"use client";

import { MazayaSelector } from "@/statemanagment/slice/MazayaReceipt";
import { sp } from "@/utils/replaceNumber";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptMazaya() {
  const data = useSelector(MazayaSelector);

  const{
    MablagBazkharidBon,
    MablagBazkharidEidi,
    MablagBazkharidMorkhasi,
    MablagBazkharidSanavat,
    MablagEzafeKariSaati1,
    MablagEzafeKariSaati2,
    MablagEzafeKariSaati3,
    MablagEzafeKariSaati4,
    MablagEzafeKariSaati5,
    MablagGomeKariSaati,
    MablagHokmHogugRadif1,
    MablagHokmHogugRadif11,
    MablagHokmHogugRadif12,
    MablagHokmHogugRadif13,
    MablagHokmHogugRadif14,
    MablagHokmHogugRadif15,
    MablagHokmHogugRadif16,
    MablagHokmHogugRadif17,
    MablagHokmHogugRadif18,
    MablagHokmHogugRadif19,
    MablagHokmHogugRadif10,
    MablagHokmHogugRadif2,
    MablagHokmHogugRadif20,
    MablagHokmHogugRadif3,
    MablagHokmHogugRadif4,
    MablagHokmHogugRadif5,
    MablagHokmHogugRadif6,
    MablagHokmHogugRadif7,
    MablagHokmHogugRadif8,
    MablagHokmHogugRadif9,
    MablagMamoriatRuzane1,
    MablagMamoriatRuzane2,
    MablagMamoriatRuzane3,
    MablagMamoriatRuzane4,
    MablagMamoriatRuzane5,
    MablagMazayaHogugRadif1,
    MablagMazayaHogugRadif10,
    MablagMazayaHogugRadif11,
    MablagMazayaHogugRadif12,
    MablagMazayaHogugRadif13,
    MablagMazayaHogugRadif14,
    MablagMazayaHogugRadif15,
    MablagMazayaHogugRadif16,
    MablagMazayaHogugRadif17,
    MablagMazayaHogugRadif18,
    MablagMazayaHogugRadif19,
    MablagMazayaHogugRadif2,
    MablagMazayaHogugRadif20,
    MablagMazayaHogugRadif3,
    MablagMazayaHogugRadif4,
    MablagMazayaHogugRadif5,
    MablagMazayaHogugRadif6,
    MablagMazayaHogugRadif7,
    MablagMazayaHogugRadif8,
    MablagMazayaHogugRadif9,
    MablagNobatKariRuzane1,
    MablagNobatKariRuzane2,
    MablagNobatKariRuzane3,
    MablagShabKariSaati,
    MablagTatilKariSaati,
    RoundMahGhabl,
  } = data.data

  return (
    <Grid container style={{textAlign:'center'}}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" style={{borderBottom:'2px solid'}}>مزایای حقوق</Typography>
      </Grid>
      <Grid item xs={12} style={{display:'flex' , flexDirection:'column' , padding:'0.5px' , gap:1}}>
        {MablagHokmHogugRadif1 != 0 && <Typography variant="caption">حقوق پایه : {sp(MablagHokmHogugRadif1)}</Typography>}
        {MablagHokmHogugRadif2 != 0 && <Typography variant="caption">فوق العاده شغل: {sp(MablagHokmHogugRadif2)}</Typography>}
        {MablagHokmHogugRadif3 != 0 && <Typography variant="caption">بن: {sp(MablagHokmHogugRadif3)}</Typography>}
        {MablagHokmHogugRadif4 != 0 && <Typography variant="caption">خوارو بار و مسکن: {sp(MablagHokmHogugRadif4)}</Typography>}
        {MablagHokmHogugRadif5 != 0 && <Typography variant="caption">حکم ردیف 5: {sp(MablagHokmHogugRadif5)}</Typography>}
        {MablagHokmHogugRadif6 != 0 && <Typography variant="caption">حق اولاد: {sp(MablagHokmHogugRadif6)}</Typography>}
        {MablagHokmHogugRadif7 != 0 && <Typography variant="caption">بازخرید مرخصی: {sp(MablagHokmHogugRadif7)}</Typography>}
        {MablagHokmHogugRadif8 != 0 && <Typography variant="caption">حق تاهل: {sp(MablagHokmHogugRadif8)}</Typography>}
        {MablagHokmHogugRadif9 != 0 && <Typography variant="caption">پایه سنوات: {sp(MablagHokmHogugRadif9)}</Typography>}
        {MablagHokmHogugRadif10 != 0 && <Typography variant="caption">حکم ردیف 10: {sp(MablagHokmHogugRadif10)}</Typography>}
        {MablagHokmHogugRadif11 != 0 && <Typography variant="caption">حکم ردیف 11: {sp(MablagHokmHogugRadif11)}</Typography>}
        {MablagHokmHogugRadif12 != 0 && <Typography variant="caption">حکم ردیف 12: {sp(MablagHokmHogugRadif12)}</Typography>}
        {MablagHokmHogugRadif13 != 0 && <Typography variant="caption">حکم ردیف 13: {sp(MablagHokmHogugRadif13)}</Typography>}
        {MablagHokmHogugRadif14 != 0 && <Typography variant="caption">حکم ردیف 14: {sp(MablagHokmHogugRadif14)}</Typography>}
        {MablagHokmHogugRadif15 != 0 && <Typography variant="caption">حکم ردیف 15: {sp(MablagHokmHogugRadif15)}</Typography>}
        {MablagHokmHogugRadif16 != 0 && <Typography variant="caption">حکم ردیف 16: {sp(MablagHokmHogugRadif16)}</Typography>}
        {MablagHokmHogugRadif17 != 0 && <Typography variant="caption">حکم ردیف 17: {sp(MablagHokmHogugRadif17)}</Typography>}
        {MablagHokmHogugRadif18 != 0 && <Typography variant="caption">حکم ردیف 18: {sp(MablagHokmHogugRadif18)}</Typography>}
        {MablagHokmHogugRadif19 != 0 && <Typography variant="caption">حکم ردیف 19: {sp(MablagHokmHogugRadif19)}</Typography>}
        {MablagHokmHogugRadif20 != 0 && <Typography variant="caption">حکم ردیف 20: {sp(MablagHokmHogugRadif20)}</Typography>}
        {MablagMazayaHogugRadif1 != 0 && <Typography variant="caption">مزایای موردی ردیف 1: {sp(MablagMazayaHogugRadif1)}</Typography>}
        {MablagMazayaHogugRadif2 != 0 && <Typography variant="caption">پاداش: {sp(MablagMazayaHogugRadif2)}</Typography>}
        {MablagMazayaHogugRadif3 != 0 && <Typography variant="caption">مزایای موردی ردیف 3: {sp(MablagMazayaHogugRadif3)}</Typography>}
        {MablagMazayaHogugRadif4 != 0 && <Typography variant="caption">مزایای موردی ردیف 4: {sp(MablagMazayaHogugRadif4)}</Typography>}
        {MablagMazayaHogugRadif5 != 0 && <Typography variant="caption">مزایای موردی ردیف 5: {sp(MablagMazayaHogugRadif5)}</Typography>}
        {MablagMazayaHogugRadif6 != 0 && <Typography variant="caption">مزایای موردی ردیف 6: {sp(MablagMazayaHogugRadif6)}</Typography>}
        {MablagMazayaHogugRadif7 != 0 && <Typography variant="caption">مزایای موردی ردیف 7: {sp(MablagMazayaHogugRadif7)}</Typography>}
        {MablagMazayaHogugRadif8 != 0 && <Typography variant="caption">مزایای موردی ردیف 8: {sp(MablagMazayaHogugRadif8)}</Typography>}
        {MablagMazayaHogugRadif9 != 0 && <Typography variant="caption">مزایای موردی ردیف 9: {sp(MablagMazayaHogugRadif9)}</Typography>}
        {MablagMazayaHogugRadif10 != 0 && <Typography variant="caption">مزایای موردی ردیف 10: {sp(MablagMazayaHogugRadif10)}</Typography>}
        {MablagMazayaHogugRadif11 != 0 && <Typography variant="caption">مزایای موردی ردیف 11: {sp(MablagMazayaHogugRadif11)}</Typography>}
        {MablagMazayaHogugRadif12 != 0 && <Typography variant="caption">مزایای موردی ردیف 12: {sp(MablagMazayaHogugRadif12)}</Typography>}
        {MablagMazayaHogugRadif13 != 0 && <Typography variant="caption">مزایای موردی ردیف 13: {sp(MablagMazayaHogugRadif13)}</Typography>}
        {MablagMazayaHogugRadif14 != 0 && <Typography variant="caption">مزایای موردی ردیف 14: {sp(MablagMazayaHogugRadif14)}</Typography>}
        {MablagMazayaHogugRadif15 != 0 && <Typography variant="caption">مزایای موردی ردیف 15: {sp(MablagMazayaHogugRadif15)}</Typography>}
        {MablagMazayaHogugRadif16 != 0 && <Typography variant="caption">مزایای موردی ردیف 16: {sp(MablagMazayaHogugRadif16)}</Typography>}
        {MablagMazayaHogugRadif17 != 0 && <Typography variant="caption">مزایای موردی ردیف 17: {sp(MablagMazayaHogugRadif17)}</Typography>}
        {MablagMazayaHogugRadif18 != 0 && <Typography variant="caption">مزایای موردی ردیف 18: {sp(MablagMazayaHogugRadif18)}</Typography>}
        {MablagMazayaHogugRadif19 != 0 && <Typography variant="caption">مزایای موردی ردیف 19: {sp(MablagMazayaHogugRadif19)}</Typography>}
        {MablagMazayaHogugRadif20 != 0 && <Typography variant="caption">مزایای موردی ردیف 20: {sp(MablagMazayaHogugRadif20)}</Typography>}
        {MablagEzafeKariSaati1 != 0 && <Typography variant="caption">اضافه کاری: {sp(MablagEzafeKariSaati1)}</Typography>}
        {MablagEzafeKariSaati2 != 0 && <Typography variant="caption">2 اضافه کاری: {sp(MablagEzafeKariSaati2)}</Typography>}
        {MablagEzafeKariSaati3 != 0 && <Typography variant="caption">3 اضافه کاری: {sp(MablagEzafeKariSaati3)}</Typography>}
        {MablagEzafeKariSaati4 != 0 && <Typography variant="caption">4 اضافه کاری: {sp(MablagEzafeKariSaati4)}</Typography>}
        {MablagEzafeKariSaati5 != 0 && <Typography variant="caption">5 اضافه کاری: {sp(MablagEzafeKariSaati5)}</Typography>}
        {MablagGomeKariSaati != 0 && <Typography variant="caption">جمعه کاری : {sp(MablagGomeKariSaati)}</Typography>}
        {MablagTatilKariSaati != 0 && <Typography variant="caption">تعطیل کاری : {sp(MablagTatilKariSaati)}</Typography>}
        {MablagShabKariSaati != 0 && <Typography variant="caption">شب کاری : {sp(MablagShabKariSaati)}</Typography>}
        {MablagMamoriatRuzane1 != 0 && <Typography variant="caption">ماموریت 1: {sp(MablagMamoriatRuzane1)}</Typography>}
        {MablagMamoriatRuzane2 != 0 && <Typography variant="caption">ماموریت 2: {sp(MablagMamoriatRuzane2)}</Typography>}
        {MablagMamoriatRuzane3 != 0 && <Typography variant="caption">ماموریت 3: {sp(MablagMamoriatRuzane3)}</Typography>}
        {MablagMamoriatRuzane4 != 0 && <Typography variant="caption">ماموریت 4: {sp(MablagMamoriatRuzane4)}</Typography>}
        {MablagMamoriatRuzane5 != 0 && <Typography variant="caption">ماموریت 5: {sp(MablagMamoriatRuzane5)}</Typography>}
        {MablagNobatKariRuzane1 != 0 && <Typography variant="caption">نوبت کاری 1: {sp(MablagNobatKariRuzane1)}</Typography>}
        {MablagNobatKariRuzane2 != 0 && <Typography variant="caption">نوبت کاری 2: {sp(MablagNobatKariRuzane2)}</Typography>}
        {MablagNobatKariRuzane3 != 0 && <Typography variant="caption">نوبت کاری 3: {sp(MablagNobatKariRuzane3)}</Typography>}
        {MablagBazkharidBon != 0 && <Typography variant="caption">باز خرید بن: {sp(MablagBazkharidBon)}</Typography>}
        {MablagBazkharidEidi != 0 && <Typography variant="caption">باز خرید عیدی: {sp(MablagBazkharidEidi)}</Typography>}
        {MablagBazkharidMorkhasi != 0 && <Typography variant="caption">باز خرید مرخصی: {sp(MablagBazkharidMorkhasi)}</Typography>}
        {MablagBazkharidSanavat != 0 && <Typography variant="caption">باز خرید سنوات: {sp(MablagBazkharidSanavat)}</Typography>}
        {RoundMahGhabl != 0 && <Typography variant="caption">روند ماه قبل: {sp(RoundMahGhabl)}</Typography>}
      </Grid>
    </Grid>
  );
}
