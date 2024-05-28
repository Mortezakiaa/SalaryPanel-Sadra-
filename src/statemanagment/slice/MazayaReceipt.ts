import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TMazayaReceipt } from "@/Types/Types";

type T = {
  data: TMazayaReceipt;
};

const initialState: T = {
  data: {
    Code: "",
    DateAsarStr: "",
    MablagHokmHogugRadif1: 0,
    MablagHokmHogugRadif2: 0,
    MablagHokmHogugRadif3: 0,
    MablagHokmHogugRadif4: 0,
    MablagHokmHogugRadif5: 0,
    MablagHokmHogugRadif6: 0,
    MablagHokmHogugRadif7: 0,
    MablagHokmHogugRadif8: 0,
    MablagHokmHogugRadif9: 0,
    MablagHokmHogugRadif10: 0,
    MablagHokmHogugRadif11: 0,
    MablagHokmHogugRadif12: 0,
    MablagHokmHogugRadif13: 0,
    MablagHokmHogugRadif14: 0,
    MablagHokmHogugRadif15: 0,
    MablagHokmHogugRadif16: 0,
    MablagHokmHogugRadif17: 0,
    MablagHokmHogugRadif18: 0,
    MablagHokmHogugRadif19: 0,
    MablagHokmHogugRadif20: 0,
    MablagMazayaHogugRadif1: 0,
    MablagMazayaHogugRadif2: 0,
    MablagMazayaHogugRadif3: 0,
    MablagMazayaHogugRadif4: 0,
    MablagMazayaHogugRadif5: 0,
    MablagMazayaHogugRadif6: 0,
    MablagMazayaHogugRadif7: 0,
    MablagMazayaHogugRadif8: 0,
    MablagMazayaHogugRadif9: 0,
    MablagMazayaHogugRadif10: 0,
    MablagMazayaHogugRadif11: 0,
    MablagMazayaHogugRadif12: 0,
    MablagMazayaHogugRadif13: 0,
    MablagMazayaHogugRadif14: 0,
    MablagMazayaHogugRadif15: 0,
    MablagMazayaHogugRadif16: 0,
    MablagMazayaHogugRadif17: 0,
    MablagMazayaHogugRadif18: 0,
    MablagMazayaHogugRadif19: 0,
    MablagMazayaHogugRadif20: 0,
    MablagEzafeKariSaati1: 0,
    MablagEzafeKariSaati2: 0,
    MablagEzafeKariSaati3: 0,
    MablagEzafeKariSaati4: 0,
    MablagEzafeKariSaati5: 0,
    MablagGomeKariSaati: 0,
    MablagTatilKariSaati: 0,
    MablagShabKariSaati: 0,
    MablagMamoriatRuzane1: 0,
    MablagMamoriatRuzane2: 0,
    MablagMamoriatRuzane3: 0,
    MablagMamoriatRuzane4: 0,
    MablagMamoriatRuzane5: 0,
    MablagNobatKariRuzane1: 0,
    MablagNobatKariRuzane2: 0,
    MablagNobatKariRuzane3: 0,
    MablagBazkharidBon: 0,
    MablagBazkharidEidi: 0,
    MablagBazkharidMorkhasi: 0,
    MablagBazkharidSanavat: 0,
    RoundMahGhabl: 0,
  },
};

const MazayaSlice = createSlice({
  name: "Mazaya",
  initialState,
  reducers: {
    setMazaya: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default MazayaSlice.reducer;
export const { setMazaya } = MazayaSlice.actions;
export const MazayaSelector = (store: IRootState) => store.MazayaReducer;
