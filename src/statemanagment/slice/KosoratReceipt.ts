import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TKosoratReceipt } from "@/Types/Types";

const initialState: TKosoratReceipt = {
  Code: "",
  DateAsarStr: "",
  MablagKosorMahaneHogugRadif1: 0,
  MablagKosorMahaneHogugRadif2: 0,
  MablagKosorMahaneHogugRadif4: 0,
  MablagKosorMahaneHogugRadif5: 0,
  MablagKosorMahaneHogugRadif6: 0,
  MablagKosorMahaneHogugRadif7: 0,
  MablagKosorMahaneHogugRadif8: 0,
  MablagKosorMahaneHogugRadif9: 0,
  MablagKosorMahaneHogugRadif10: 0,
  MablagKosorMahaneHogugRadif11: 0,
  MablagKosorMahaneHogugRadif12: 0,
  MablagKosorMahaneHogugRadif14: 0,
  MablagKosorMahaneHogugRadif15: 0,
  MablagKosorMahaneHogugRadif16: 0,
  MablagKosorMahaneHogugRadif17: 0,
  MablagKosorMahaneHogugRadif18: 0,
  MablagKosorMahaneHogugRadif19: 0,
  MablagKosorMahaneHogugRadif20: 0,
  MablagKosorModavem1HogugRadif1: 0,
  MablagKosorModavem1HogugRadif2: 0,
  MablagKosorModavem1HogugRadif3: 0,
  MablagKosorModavem1HogugRadif4: 0,
  MablagKosorModavem1HogugRadif5: 0,
  MablagKosorModavem1HogugRadif6: 0,
  MablagKosorModavem1HogugRadif7: 0,
  MablagKosorModavem1HogugRadif8: 0,
  MablagKosorModavem1HogugRadif9: 0,
  MablagKosorModavem1HogugRadif10: 0,
  MablagKosorModavem2HogugRadif1: 0,
  MablagKosorModavem2HogugRadif2: 0,
  MablagKosorModavem2HogugRadif3: 0,
  MablagKosorModavem2HogugRadif4: 0,
  MablagKosorModavem2HogugRadif5: 0,
  MablagKosorModavem2HogugRadif6: 0,
  MablagKosorModavem2HogugRadif7: 0,
  MablagKosorModavem2HogugRadif8: 0,
  MablagKosorModavem2HogugRadif9: 0,
  MablagKosorModavem2HogugRadif10: 0,
  MablagTakhirSaati: 0,
  MablagTagilSaati: 0,
  MablagGibatRuzane: 0,
  MablagKasrKarRuzane: 0,
  BimeSahmeKargar: 0,
  MaliatFish: 0,
  RoundMahGari: 0,
};

const KosoratSlice = createSlice({
  name: "Kosorat",
  initialState,
  reducers: {
    setKosorat: (state, action) => {
      state = action.payload;
    },
  },
});

export default KosoratSlice.reducer;
export const { setKosorat } = KosoratSlice.actions;
export const KosoratSelector = (store: IRootState) => store.KosoratReducer;
