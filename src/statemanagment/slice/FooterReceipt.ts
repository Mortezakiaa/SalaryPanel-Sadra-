import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TFooterReceipt } from "@/Types/Types";

type T = {
  data: TFooterReceipt;
};

const initialState: T = {
  data: {
    Code: "",
    DateAsarStr: "",
    JamGhabelPardakhtFish: 0,
    JamEzafatFish: 0,
    JamKosuratFish: 0,
  },
};

const FooterSlice = createSlice({
  name: "Footer",
  initialState,
  reducers: {
    setFooter: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default FooterSlice.reducer;
export const { setFooter } = FooterSlice.actions;
export const FooterSelector = (store: IRootState) => store.FooterReducer;
