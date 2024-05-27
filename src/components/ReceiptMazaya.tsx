"use client";

import { MazayaSelector } from "@/statemanagment/slice/MazayaReceipt";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptMazaya() {
  const {
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
  } = useSelector(MazayaSelector);
  return (
    <Grid container>
      <Grid item xs={12}>
        {MablagHokmHogugRadif1 != 0 && <Typography variant="h6">حقوق پایه : {MablagHokmHogugRadif1}</Typography>}
        {MablagHokmHogugRadif2 != 0 && <Typography variant="h6">فوق العاده شغل: {MablagHokmHogugRadif2}</Typography>}
        {MablagHokmHogugRadif3 != 0 && <Typography variant="h6">بن: {MablagHokmHogugRadif3}</Typography>}
        {MablagHokmHogugRadif4 != 0 && <Typography variant="h6">خوارو بار و مسکن: {MablagHokmHogugRadif4}</Typography>}
        {MablagHokmHogugRadif5 != 0 && <Typography variant="h6">حکم ردیف 5: {MablagHokmHogugRadif5}</Typography>}
        {MablagHokmHogugRadif6 != 0 && <Typography variant="h6">حق اولاد: {MablagHokmHogugRadif6}</Typography>}
        {MablagHokmHogugRadif7 != 0 && <Typography variant="h6">بازخرید مرخصی: {MablagHokmHogugRadif7}</Typography>}
        {MablagHokmHogugRadif8 != 0 && <Typography variant="h6">حق تاهل: {MablagHokmHogugRadif8}</Typography>}
        {MablagHokmHogugRadif9 != 0 && <Typography variant="h6">پایه سنوات: {MablagHokmHogugRadif9}</Typography>}
        {MablagHokmHogugRadif10 != 0 && <Typography variant="h6">حکم ردیف 10: {MablagHokmHogugRadif10}</Typography>}
        {MablagHokmHogugRadif11 != 0 && <Typography variant="h6">حکم ردیف 11: {MablagHokmHogugRadif11}</Typography>}
        {MablagHokmHogugRadif12 != 0 && <Typography variant="h6">حکم ردیف 12: {MablagHokmHogugRadif12}</Typography>}
        {MablagHokmHogugRadif13 != 0 && <Typography variant="h6">حکم ردیف 13: {MablagHokmHogugRadif13}</Typography>}
        {MablagHokmHogugRadif14 != 0 && <Typography variant="h6">حکم ردیف 14: {MablagHokmHogugRadif14}</Typography>}
        {MablagHokmHogugRadif15 != 0 && <Typography variant="h6">حکم ردیف 15: {MablagHokmHogugRadif15}</Typography>}
        {MablagHokmHogugRadif16 != 0 && <Typography variant="h6">حکم ردیف 16: {MablagHokmHogugRadif16}</Typography>}
        {MablagHokmHogugRadif17 != 0 && <Typography variant="h6">حکم ردیف 17: {MablagHokmHogugRadif17}</Typography>}
        {MablagHokmHogugRadif18 != 0 && <Typography variant="h6">حکم ردیف 18: {MablagHokmHogugRadif18}</Typography>}
        {MablagHokmHogugRadif19 != 0 && <Typography variant="h6">حکم ردیف 19: {MablagHokmHogugRadif19}</Typography>}
        {MablagHokmHogugRadif20 != 0 && <Typography variant="h6">حکم ردیف 20: {MablagHokmHogugRadif20}</Typography>}
        {MablagMazayaHogugRadif1 != 0 && <Typography variant="h6">مزایای موردی ردیف 1: {MablagMazayaHogugRadif1}</Typography>}
        {MablagMazayaHogugRadif2 != 0 && <Typography variant="h6">پاداش: {MablagMazayaHogugRadif2}</Typography>}
        {MablagMazayaHogugRadif3 != 0 && <Typography variant="h6">مزایای موردی ردیف 3: {MablagMazayaHogugRadif3}</Typography>}
        {MablagMazayaHogugRadif4 != 0 && <Typography variant="h6">مزایای موردی ردیف 4: {MablagMazayaHogugRadif4}</Typography>}
        {MablagMazayaHogugRadif5 != 0 && <Typography variant="h6">مزایای موردی ردیف 5: {MablagMazayaHogugRadif5}</Typography>}
        {MablagMazayaHogugRadif6 != 0 && <Typography variant="h6">مزایای موردی ردیف 6: {MablagMazayaHogugRadif6}</Typography>}
        {MablagMazayaHogugRadif7 != 0 && <Typography variant="h6">مزایای موردی ردیف 7: {MablagMazayaHogugRadif7}</Typography>}
        {MablagMazayaHogugRadif8 != 0 && <Typography variant="h6">مزایای موردی ردیف 8: {MablagMazayaHogugRadif8}</Typography>}
        {MablagMazayaHogugRadif9 != 0 && <Typography variant="h6">مزایای موردی ردیف 9: {MablagMazayaHogugRadif9}</Typography>}
        {MablagMazayaHogugRadif10 != 0 && <Typography variant="h6">مزایای موردی ردیف 10: {MablagMazayaHogugRadif10}</Typography>}
        {MablagMazayaHogugRadif11 != 0 && <Typography variant="h6">مزایای موردی ردیف 11: {MablagMazayaHogugRadif11}</Typography>}
        {MablagMazayaHogugRadif12 != 0 && <Typography variant="h6">مزایای موردی ردیف 12: {MablagMazayaHogugRadif12}</Typography>}
        {MablagMazayaHogugRadif13 != 0 && <Typography variant="h6">مزایای موردی ردیف 13: {MablagMazayaHogugRadif13}</Typography>}
        {MablagMazayaHogugRadif14 != 0 && <Typography variant="h6">مزایای موردی ردیف 14: {MablagMazayaHogugRadif14}</Typography>}
        {MablagMazayaHogugRadif15 != 0 && <Typography variant="h6">مزایای موردی ردیف 15: {MablagMazayaHogugRadif15}</Typography>}
        {MablagMazayaHogugRadif16 != 0 && <Typography variant="h6">مزایای موردی ردیف 16: {MablagMazayaHogugRadif16}</Typography>}
        {MablagMazayaHogugRadif17 != 0 && <Typography variant="h6">مزایای موردی ردیف 17: {MablagMazayaHogugRadif17}</Typography>}
        {MablagMazayaHogugRadif18 != 0 && <Typography variant="h6">مزایای موردی ردیف 18: {MablagMazayaHogugRadif18}</Typography>}
        {MablagMazayaHogugRadif19 != 0 && <Typography variant="h6">مزایای موردی ردیف 19: {MablagMazayaHogugRadif19}</Typography>}
        {MablagMazayaHogugRadif20 != 0 && <Typography variant="h6">مزایای موردی ردیف 20: {MablagMazayaHogugRadif20}</Typography>}
        {MablagEzafeKariSaati1 != 0 && <Typography variant="h6">اضافه کاری: {MablagEzafeKariSaati1}</Typography>}
        {MablagEzafeKariSaati2 != 0 && <Typography variant="h6">2 اضافه کاری: {MablagEzafeKariSaati2}</Typography>}
        {MablagEzafeKariSaati3 != 0 && <Typography variant="h6">3 اضافه کاری: {MablagEzafeKariSaati3}</Typography>}
        {MablagEzafeKariSaati4 != 0 && <Typography variant="h6">4 اضافه کاری: {MablagEzafeKariSaati4}</Typography>}
        {MablagEzafeKariSaati5 != 0 && <Typography variant="h6">5 اضافه کاری: {MablagEzafeKariSaati5}</Typography>}
        {MablagGomeKariSaati != 0 && <Typography variant="h6">جمعه کاری : {MablagGomeKariSaati}</Typography>}
        {MablagTatilKariSaati != 0 && <Typography variant="h6">تعطیل کاری : {MablagTatilKariSaati}</Typography>}
        {MablagShabKariSaati != 0 && <Typography variant="h6">شب کاری : {MablagShabKariSaati}</Typography>}
        {MablagMamoriatRuzane1 != 0 && <Typography variant="h6">ماموریت 1: {MablagMamoriatRuzane1}</Typography>}
        {MablagMamoriatRuzane2 != 0 && <Typography variant="h6">ماموریت 2: {MablagMamoriatRuzane2}</Typography>}
        {MablagMamoriatRuzane3 != 0 && <Typography variant="h6">ماموریت 3: {MablagMamoriatRuzane3}</Typography>}
        {MablagMamoriatRuzane4 != 0 && <Typography variant="h6">ماموریت 4: {MablagMamoriatRuzane4}</Typography>}
        {MablagMamoriatRuzane5 != 0 && <Typography variant="h6">ماموریت 5: {MablagMamoriatRuzane5}</Typography>}
        {MablagNobatKariRuzane1 != 0 && <Typography variant="h6">نوبت کاری 1: {MablagNobatKariRuzane1}</Typography>}
        {MablagNobatKariRuzane2 != 0 && <Typography variant="h6">نوبت کاری 2: {MablagNobatKariRuzane2}</Typography>}
        {MablagNobatKariRuzane3 != 0 && <Typography variant="h6">نوبت کاری 3: {MablagNobatKariRuzane3}</Typography>}
        {MablagBazkharidBon != 0 && <Typography variant="h6">باز خرید بن: {MablagBazkharidBon}</Typography>}
        {MablagBazkharidEidi != 0 && <Typography variant="h6">باز خرید عیدی: {MablagBazkharidEidi}</Typography>}
        {MablagBazkharidMorkhasi != 0 && <Typography variant="h6">باز خرید مرخصی: {MablagBazkharidMorkhasi}</Typography>}
        {MablagBazkharidSanavat != 0 && <Typography variant="h6">باز خرید سنوات: {MablagBazkharidSanavat}</Typography>}
        {RoundMahGhabl != 0 && <Typography variant="h6">روند ماه قبل: {RoundMahGhabl}</Typography>}
      </Grid>
    </Grid>
  );
}
