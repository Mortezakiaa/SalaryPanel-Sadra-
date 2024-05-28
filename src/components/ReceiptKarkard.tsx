"use client";

import { KarkardSelector } from "@/statemanagment/slice/KarkardReceipt";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptKarkard() {
  const data = useSelector(KarkardSelector);

  const {
    NobatKariRuzane1,
    NobatKariRuzane2,
    NobatKariRuzane3,
    EzafeKariSaati1,
    EzafeKariSaati2,
    EzafeKariSaati3,
    EzafeKariSaati4,
    EzafeKariSaati5,
    GibatRuzane,
    GomeKariSaati,
    KarkardMahRuzane,
    KarkardMahSaati,
    KasrKarRuzane,
    MamoriatRuzane1,
    MamoriatRuzane2,
    MamoriatRuzane3,
    MamoriatRuzane4,
    MamoriatRuzane5,
    MorkhasiBedonHogugRuzane,
    MorkhasiEstehghaghiRuzane,
    MorkhasiEstehghaghiSaati,
    MorkhasiEstehlagiRuzane,
    MorkhasiMandehInMahRuzane,
    MorkhasiMandehInMahSaati,
    MorkhasiSayerRuzane,
    MorkhasiTashvighiRuzane,
    ParametrRuzane1,
    ParametrRuzane2,
    ParametrRuzane3,
    ParametrRuzane4,
    ParametrRuzane5,
    ParametrSaati1,
    ParametrSaati2,
    ParametrSaati3,
    ParametrSaati4,
    ParametrSaati5,
    ShabKariSaati,
    TagilSaati,
    TakhirSaati,
    TatilKariSaati,
  } = data.data
  return (
    <Grid container>
      <Grid item xs={12}>
        {KarkardMahRuzane != 0 && <Typography variant="h6">کارکرد روزانه : {KarkardMahRuzane}</Typography>}
        {KarkardMahSaati != 0 && <Typography variant="h6">کارکرد ساعتی : {KarkardMahSaati}</Typography>}
        {EzafeKariSaati1 != 0 && <Typography variant="h6">اضافه کاری: {EzafeKariSaati1}</Typography>}
        {EzafeKariSaati2 != 0 && <Typography variant="h6">اضافه کاری 2: {EzafeKariSaati2}</Typography>}
        {EzafeKariSaati3 != 0 && <Typography variant="h6">اضافه کاری 3: {EzafeKariSaati3}</Typography>}
        {EzafeKariSaati4 != 0 && <Typography variant="h6">اضافه کاری 4: {EzafeKariSaati4}</Typography>}
        {EzafeKariSaati5 != 0 && <Typography variant="h6">اضافه کاری 4: {EzafeKariSaati5}</Typography>}
        {GomeKariSaati != 0 && <Typography variant="h6">جمعه کاری: {GomeKariSaati}</Typography>}
        {TatilKariSaati != 0 && <Typography variant="h6">تعطیل کاری: {TatilKariSaati}</Typography>}
        {ShabKariSaati != 0 && <Typography variant="h6">شب کاری: {ShabKariSaati}</Typography>}
        {TakhirSaati != 0 && <Typography variant="h6">تاخیر ساعتی: {TakhirSaati}</Typography>}
        {TagilSaati != 0 && <Typography variant="h6">تعجیل ساعتی: {TagilSaati}</Typography>}
        {MamoriatRuzane1 != 0 && <Typography variant="h6">ماموریت 1: {MamoriatRuzane1}</Typography>}
        {MamoriatRuzane2 != 0 && <Typography variant="h6">ماموریت 2: {MamoriatRuzane2}</Typography>}
        {MamoriatRuzane3 != 0 && <Typography variant="h6">ماموریت 3: {MamoriatRuzane3}</Typography>}
        {MamoriatRuzane4 != 0 && <Typography variant="h6">ماموریت 4: {MamoriatRuzane4}</Typography>}
        {MamoriatRuzane5 != 0 && <Typography variant="h6">ماموریت 5: {MamoriatRuzane5}</Typography>}
        {NobatKariRuzane1 != 0 && <Typography variant="h6">نوبت کاری 1: {NobatKariRuzane1}</Typography>}
        {NobatKariRuzane2 != 0 && <Typography variant="h6">نوبت کاری 2: {NobatKariRuzane2}</Typography>}
        {NobatKariRuzane3 != 0 && <Typography variant="h6">نوبت کاری 3: {NobatKariRuzane3}</Typography>}
        {GibatRuzane != 0 && <Typography variant="h6">غیبت: {GibatRuzane}</Typography>}
        {KasrKarRuzane != 0 && <Typography variant="h6">کسر کار: {KasrKarRuzane}</Typography>}
        {MorkhasiEstehghaghiRuzane != 0 && <Typography variant="h6">مرخصی روزانه: {MorkhasiEstehghaghiRuzane}</Typography>}
        {MorkhasiEstehghaghiSaati != 0 && <Typography variant="h6">مرخصی ساعتی: {MorkhasiEstehghaghiSaati}</Typography>}
        {MorkhasiEstehlagiRuzane != 0 && <Typography variant="h6">مرخصی استعلاجی: {MorkhasiEstehlagiRuzane}</Typography>}
        {MorkhasiTashvighiRuzane != 0 && <Typography variant="h6">مرخصی تشویقی: {MorkhasiTashvighiRuzane}</Typography>}
        {MorkhasiBedonHogugRuzane != 0 && <Typography variant="h6">مرخصی بدون حقوق: {MorkhasiBedonHogugRuzane}</Typography>}
        {MorkhasiSayerRuzane != 0 && <Typography variant="h6">مرخصی سایر: {MorkhasiSayerRuzane}</Typography>}
        {ParametrSaati1 != 0 && <Typography variant="h6">پارامتر ساعتی 1: {ParametrSaati1}</Typography>}
        {ParametrSaati2 != 0 && <Typography variant="h6">پارامتر ساعتی 2: {ParametrSaati2}</Typography>}
        {ParametrSaati3 != 0 && <Typography variant="h6">پارامتر ساعتی 3: {ParametrSaati3}</Typography>}
        {ParametrSaati4 != 0 && <Typography variant="h6">پارامتر ساعتی 4: {ParametrSaati4}</Typography>}
        {ParametrSaati5 != 0 && <Typography variant="h6">پارامتر ساعتی 5: {ParametrSaati5}</Typography>}
        {ParametrRuzane1 != 0 && <Typography variant="h6">پارامتر روزانه 1: {ParametrRuzane1}</Typography>}
        {ParametrRuzane2 != 0 && <Typography variant="h6">پارامتر روزانه 2: {ParametrRuzane2}</Typography>}
        {ParametrRuzane3 != 0 && <Typography variant="h6">پارامتر روزانه 3: {ParametrRuzane3}</Typography>}
        {ParametrRuzane4 != 0 && <Typography variant="h6">پارامتر روزانه 4: {ParametrRuzane4}</Typography>}
        {ParametrRuzane5 != 0 && <Typography variant="h6">پارامتر روزانه 5: {ParametrRuzane5}</Typography>}
        {MorkhasiMandehInMahRuzane != 0 && <Typography variant="h6">مانده مرخصی روزانه: {MorkhasiMandehInMahRuzane}</Typography>}
        {MorkhasiMandehInMahSaati != 0 && <Typography variant="h6">مانده مرخصی ساعتی: {MorkhasiMandehInMahSaati}</Typography>}
      </Grid>
    </Grid>
  );
}
