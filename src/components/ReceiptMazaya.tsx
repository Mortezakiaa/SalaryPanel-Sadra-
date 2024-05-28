"use client";

import { MazayaSelector } from "@/statemanagment/slice/MazayaReceipt";
import { sp } from "@/utils/replaceNumber";
import { Grid } from "@mui/material";
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
      <Grid item xs={12} style={{borderBottom:'2px solid'}}>
        <span>مزایای حقوق</span>
      </Grid>
      <Grid item xs={12} style={{display:'flex' , flexDirection:'column' , padding:'0.5px' , gap:1}}>
        {MablagHokmHogugRadif1 != 0 && <span>حقوق پایه : {sp(MablagHokmHogugRadif1)}</span>}
        {MablagHokmHogugRadif2 != 0 && <span>فوق العاده شغل: {sp(MablagHokmHogugRadif2)}</span>}
        {MablagHokmHogugRadif3 != 0 && <span>بن: {sp(MablagHokmHogugRadif3)}</span>}
        {MablagHokmHogugRadif4 != 0 && <span>خوارو بار و مسکن: {sp(MablagHokmHogugRadif4)}</span>}
        {MablagHokmHogugRadif5 != 0 && <span>حکم ردیف 5: {sp(MablagHokmHogugRadif5)}</span>}
        {MablagHokmHogugRadif6 != 0 && <span>حق اولاد: {sp(MablagHokmHogugRadif6)}</span>}
        {MablagHokmHogugRadif7 != 0 && <span>بازخرید مرخصی: {sp(MablagHokmHogugRadif7)}</span>}
        {MablagHokmHogugRadif8 != 0 && <span>حق تاهل: {sp(MablagHokmHogugRadif8)}</span>}
        {MablagHokmHogugRadif9 != 0 && <span>پایه سنوات: {sp(MablagHokmHogugRadif9)}</span>}
        {MablagHokmHogugRadif10 != 0 && <span>حکم ردیف 10: {sp(MablagHokmHogugRadif10)}</span>}
        {MablagHokmHogugRadif11 != 0 && <span>حکم ردیف 11: {sp(MablagHokmHogugRadif11)}</span>}
        {MablagHokmHogugRadif12 != 0 && <span>حکم ردیف 12: {sp(MablagHokmHogugRadif12)}</span>}
        {MablagHokmHogugRadif13 != 0 && <span>حکم ردیف 13: {sp(MablagHokmHogugRadif13)}</span>}
        {MablagHokmHogugRadif14 != 0 && <span>حکم ردیف 14: {sp(MablagHokmHogugRadif14)}</span>}
        {MablagHokmHogugRadif15 != 0 && <span>حکم ردیف 15: {sp(MablagHokmHogugRadif15)}</span>}
        {MablagHokmHogugRadif16 != 0 && <span>حکم ردیف 16: {sp(MablagHokmHogugRadif16)}</span>}
        {MablagHokmHogugRadif17 != 0 && <span>حکم ردیف 17: {sp(MablagHokmHogugRadif17)}</span>}
        {MablagHokmHogugRadif18 != 0 && <span>حکم ردیف 18: {sp(MablagHokmHogugRadif18)}</span>}
        {MablagHokmHogugRadif19 != 0 && <span>حکم ردیف 19: {sp(MablagHokmHogugRadif19)}</span>}
        {MablagHokmHogugRadif20 != 0 && <span>حکم ردیف 20: {sp(MablagHokmHogugRadif20)}</span>}
        {MablagMazayaHogugRadif1 != 0 && <span>مزایای موردی ردیف 1: {sp(MablagMazayaHogugRadif1)}</span>}
        {MablagMazayaHogugRadif2 != 0 && <span>پاداش: {sp(MablagMazayaHogugRadif2)}</span>}
        {MablagMazayaHogugRadif3 != 0 && <span>مزایای موردی ردیف 3: {sp(MablagMazayaHogugRadif3)}</span>}
        {MablagMazayaHogugRadif4 != 0 && <span>مزایای موردی ردیف 4: {sp(MablagMazayaHogugRadif4)}</span>}
        {MablagMazayaHogugRadif5 != 0 && <span>مزایای موردی ردیف 5: {sp(MablagMazayaHogugRadif5)}</span>}
        {MablagMazayaHogugRadif6 != 0 && <span>مزایای موردی ردیف 6: {sp(MablagMazayaHogugRadif6)}</span>}
        {MablagMazayaHogugRadif7 != 0 && <span>مزایای موردی ردیف 7: {sp(MablagMazayaHogugRadif7)}</span>}
        {MablagMazayaHogugRadif8 != 0 && <span>مزایای موردی ردیف 8: {sp(MablagMazayaHogugRadif8)}</span>}
        {MablagMazayaHogugRadif9 != 0 && <span>مزایای موردی ردیف 9: {sp(MablagMazayaHogugRadif9)}</span>}
        {MablagMazayaHogugRadif10 != 0 && <span>مزایای موردی ردیف 10: {sp(MablagMazayaHogugRadif10)}</span>}
        {MablagMazayaHogugRadif11 != 0 && <span>مزایای موردی ردیف 11: {sp(MablagMazayaHogugRadif11)}</span>}
        {MablagMazayaHogugRadif12 != 0 && <span>مزایای موردی ردیف 12: {sp(MablagMazayaHogugRadif12)}</span>}
        {MablagMazayaHogugRadif13 != 0 && <span>مزایای موردی ردیف 13: {sp(MablagMazayaHogugRadif13)}</span>}
        {MablagMazayaHogugRadif14 != 0 && <span>مزایای موردی ردیف 14: {sp(MablagMazayaHogugRadif14)}</span>}
        {MablagMazayaHogugRadif15 != 0 && <span>مزایای موردی ردیف 15: {sp(MablagMazayaHogugRadif15)}</span>}
        {MablagMazayaHogugRadif16 != 0 && <span>مزایای موردی ردیف 16: {sp(MablagMazayaHogugRadif16)}</span>}
        {MablagMazayaHogugRadif17 != 0 && <span>مزایای موردی ردیف 17: {sp(MablagMazayaHogugRadif17)}</span>}
        {MablagMazayaHogugRadif18 != 0 && <span>مزایای موردی ردیف 18: {sp(MablagMazayaHogugRadif18)}</span>}
        {MablagMazayaHogugRadif19 != 0 && <span>مزایای موردی ردیف 19: {sp(MablagMazayaHogugRadif19)}</span>}
        {MablagMazayaHogugRadif20 != 0 && <span>مزایای موردی ردیف 20: {sp(MablagMazayaHogugRadif20)}</span>}
        {MablagEzafeKariSaati1 != 0 && <span>اضافه کاری: {sp(MablagEzafeKariSaati1)}</span>}
        {MablagEzafeKariSaati2 != 0 && <span>2 اضافه کاری: {sp(MablagEzafeKariSaati2)}</span>}
        {MablagEzafeKariSaati3 != 0 && <span>3 اضافه کاری: {sp(MablagEzafeKariSaati3)}</span>}
        {MablagEzafeKariSaati4 != 0 && <span>4 اضافه کاری: {sp(MablagEzafeKariSaati4)}</span>}
        {MablagEzafeKariSaati5 != 0 && <span>5 اضافه کاری: {sp(MablagEzafeKariSaati5)}</span>}
        {MablagGomeKariSaati != 0 && <span>جمعه کاری : {sp(MablagGomeKariSaati)}</span>}
        {MablagTatilKariSaati != 0 && <span>تعطیل کاری : {sp(MablagTatilKariSaati)}</span>}
        {MablagShabKariSaati != 0 && <span>شب کاری : {sp(MablagShabKariSaati)}</span>}
        {MablagMamoriatRuzane1 != 0 && <span>ماموریت 1: {sp(MablagMamoriatRuzane1)}</span>}
        {MablagMamoriatRuzane2 != 0 && <span>ماموریت 2: {sp(MablagMamoriatRuzane2)}</span>}
        {MablagMamoriatRuzane3 != 0 && <span>ماموریت 3: {sp(MablagMamoriatRuzane3)}</span>}
        {MablagMamoriatRuzane4 != 0 && <span>ماموریت 4: {sp(MablagMamoriatRuzane4)}</span>}
        {MablagMamoriatRuzane5 != 0 && <span>ماموریت 5: {sp(MablagMamoriatRuzane5)}</span>}
        {MablagNobatKariRuzane1 != 0 && <span>نوبت کاری 1: {sp(MablagNobatKariRuzane1)}</span>}
        {MablagNobatKariRuzane2 != 0 && <span>نوبت کاری 2: {sp(MablagNobatKariRuzane2)}</span>}
        {MablagNobatKariRuzane3 != 0 && <span>نوبت کاری 3: {sp(MablagNobatKariRuzane3)}</span>}
        {MablagBazkharidBon != 0 && <span>باز خرید بن: {sp(MablagBazkharidBon)}</span>}
        {MablagBazkharidEidi != 0 && <span>باز خرید عیدی: {sp(MablagBazkharidEidi)}</span>}
        {MablagBazkharidMorkhasi != 0 && <span>باز خرید مرخصی: {sp(MablagBazkharidMorkhasi)}</span>}
        {MablagBazkharidSanavat != 0 && <span>باز خرید سنوات: {sp(MablagBazkharidSanavat)}</span>}
        {RoundMahGhabl != 0 && <span>روند ماه قبل: {sp(RoundMahGhabl)}</span>}
      </Grid>
    </Grid>
  );
}
