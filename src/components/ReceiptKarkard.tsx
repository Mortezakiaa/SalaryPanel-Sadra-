"use client";

import { KarkardSelector } from "@/statemanagment/slice/KarkardReceipt";
import { Grid } from "@mui/material";
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
  } = data.data;
  return (
    <Grid container style={{ textAlign: "center" }}>
      <Grid item xs={12} style={{ borderBottom: "2px solid" }}>
        <span>اطلاعات کارکرد</span>
      </Grid>
      <Grid item xs={12} style={{display:'flex' , flexDirection:'column' , padding:'0.5px' , gap:1}}>
        {KarkardMahRuzane != 0 && (
          <span>
            کارکرد روزانه : {KarkardMahRuzane}
          </span>
        )}
        {KarkardMahSaati != 0 && (
          <span>
            کارکرد ساعتی : {KarkardMahSaati}
          </span>
        )}
        {EzafeKariSaati1 != 0 && (
          <span>
            اضافه کاری: {EzafeKariSaati1}
          </span>
        )}
        {EzafeKariSaati2 != 0 && (
          <span>
            اضافه کاری 2: {EzafeKariSaati2}
          </span>
        )}
        {EzafeKariSaati3 != 0 && (
          <span>
            اضافه کاری 3: {EzafeKariSaati3}
          </span>
        )}
        {EzafeKariSaati4 != 0 && (
          <span>
            اضافه کاری 4: {EzafeKariSaati4}
          </span>
        )}
        {EzafeKariSaati5 != 0 && (
          <span>
            اضافه کاری 4: {EzafeKariSaati5}
          </span>
        )}
        {GomeKariSaati != 0 && (
          <span>
            جمعه کاری: {GomeKariSaati}
          </span>
        )}
        {TatilKariSaati != 0 && (
          <span>
            تعطیل کاری: {TatilKariSaati}
          </span>
        )}
        {ShabKariSaati != 0 && (
          <span>شب کاری: {ShabKariSaati}</span>
        )}
        {TakhirSaati != 0 && (
          <span>
            تاخیر ساعتی: {TakhirSaati}
          </span>
        )}
        {TagilSaati != 0 && (
          <span>تعجیل ساعتی: {TagilSaati}</span>
        )}
        {MamoriatRuzane1 != 0 && (
          <span>
            ماموریت 1: {MamoriatRuzane1}
          </span>
        )}
        {MamoriatRuzane2 != 0 && (
          <span>
            ماموریت 2: {MamoriatRuzane2}
          </span>
        )}
        {MamoriatRuzane3 != 0 && (
          <span>
            ماموریت 3: {MamoriatRuzane3}
          </span>
        )}
        {MamoriatRuzane4 != 0 && (
          <span>
            ماموریت 4: {MamoriatRuzane4}
          </span>
        )}
        {MamoriatRuzane5 != 0 && (
          <span>
            ماموریت 5: {MamoriatRuzane5}
          </span>
        )}
        {NobatKariRuzane1 != 0 && (
          <span>
            نوبت کاری 1: {NobatKariRuzane1}
          </span>
        )}
        {NobatKariRuzane2 != 0 && (
          <span>
            نوبت کاری 2: {NobatKariRuzane2}
          </span>
        )}
        {NobatKariRuzane3 != 0 && (
          <span>
            نوبت کاری 3: {NobatKariRuzane3}
          </span>
        )}
        {GibatRuzane != 0 && (
          <span>غیبت: {GibatRuzane}</span>
        )}
        {KasrKarRuzane != 0 && (
          <span>کسر کار: {KasrKarRuzane}</span>
        )}
        {MorkhasiEstehghaghiRuzane != 0 && (
          <span>
            مرخصی روزانه: {MorkhasiEstehghaghiRuzane}
          </span>
        )}
        {MorkhasiEstehghaghiSaati != 0 && (
          <span>
            مرخصی ساعتی: {MorkhasiEstehghaghiSaati}
          </span>
        )}
        {MorkhasiEstehlagiRuzane != 0 && (
          <span>
            مرخصی استعلاجی: {MorkhasiEstehlagiRuzane}
          </span>
        )}
        {MorkhasiTashvighiRuzane != 0 && (
          <span>
            مرخصی تشویقی: {MorkhasiTashvighiRuzane}
          </span>
        )}
        {MorkhasiBedonHogugRuzane != 0 && (
          <span>
            مرخصی بدون حقوق: {MorkhasiBedonHogugRuzane}
          </span>
        )}
        {MorkhasiSayerRuzane != 0 && (
          <span>
            مرخصی سایر: {MorkhasiSayerRuzane}
          </span>
        )}
        {ParametrSaati1 != 0 && (
          <span>
            پارامتر ساعتی 1: {ParametrSaati1}
          </span>
        )}
        {ParametrSaati2 != 0 && (
          <span>
            پارامتر ساعتی 2: {ParametrSaati2}
          </span>
        )}
        {ParametrSaati3 != 0 && (
          <span>
            پارامتر ساعتی 3: {ParametrSaati3}
          </span>
        )}
        {ParametrSaati4 != 0 && (
          <span>
            پارامتر ساعتی 4: {ParametrSaati4}
          </span>
        )}
        {ParametrSaati5 != 0 && (
          <span>
            پارامتر ساعتی 5: {ParametrSaati5}
          </span>
        )}
        {ParametrRuzane1 != 0 && (
          <span>
            پارامتر روزانه 1: {ParametrRuzane1}
          </span>
        )}
        {ParametrRuzane2 != 0 && (
          <span>
            پارامتر روزانه 2: {ParametrRuzane2}
          </span>
        )}
        {ParametrRuzane3 != 0 && (
          <span>
            پارامتر روزانه 3: {ParametrRuzane3}
          </span>
        )}
        {ParametrRuzane4 != 0 && (
          <span>
            پارامتر روزانه 4: {ParametrRuzane4}
          </span>
        )}
        {ParametrRuzane5 != 0 && (
          <span>
            پارامتر روزانه 5: {ParametrRuzane5}
          </span>
        )}
        {MorkhasiMandehInMahRuzane != 0 && (
          <span>
            مانده مرخصی روزانه: {MorkhasiMandehInMahRuzane}
          </span>
        )}
        {MorkhasiMandehInMahSaati != 0 && (
          <span>
            مانده مرخصی ساعتی: {MorkhasiMandehInMahSaati}
          </span>
        )}
      </Grid>
    </Grid>
  );
}
