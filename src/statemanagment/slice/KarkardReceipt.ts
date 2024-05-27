import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TKarkardReceipt } from "@/Types/Types";

const initialState: TKarkardReceipt = {
  Code: "",
  KarkardMahRuzane: 0,
  KarkardMahSaati: 0,
  EzafeKariSaati1: 0,
  EzafeKariSaati2: 0,
  EzafeKariSaati3: 0,
  EzafeKariSaati4: 0,
  EzafeKariSaati5: 0,
  GomeKariSaati: 0,
  TatilKariSaati: 0,
  ShabKariSaati: 0,
  TakhirSaati: 0,
  TagilSaati: 0,
  MamoriatRuzane1: 0,
  MamoriatRuzane2: 0,
  MamoriatRuzane3: 0,
  MamoriatRuzane4: 0,
  MamoriatRuzane5: 0,
  GibatRuzane: 0,
  KasrKarRuzane: 0,
  MorkhasiEstehghaghiRuzane: 0,
  MorkhasiEstehghaghiSaati: 0,
  MorkhasiEstehlagiRuzane: 0,
  MorkhasiTashvighiRuzane: 0,
  MorkhasiBedonHogugRuzane: 0,
  MorkhasiSayerRuzane: 0,
  ParametrSaati1: 0,
  ParametrSaati2: 0,
  ParametrSaati3: 0,
  ParametrSaati4: 0,
  ParametrSaati5: 0,
  ParametrRuzane1: 0,
  ParametrRuzane2: 0,
  ParametrRuzane3: 0,
  ParametrRuzane4: 0,
  ParametrRuzane5: 0,
  MorkhasiMandehInMahRuzane: 0,
  MorkhasiMandehInMahSaati: 0,
};

const KarkardSlice = createSlice({
  name: "Karkard",
  initialState,
  reducers: {
    setKarkard: (state, action) => {
      state = action.payload;
    },
  },
});

export default KarkardSlice.reducer;
export const { setKarkard } = KarkardSlice.actions;
export const KarkardSelector = (store: IRootState) => store.KarkardReducer;
