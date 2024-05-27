import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TFooterReceipt } from "@/Types/Types";

const initialState: TFooterReceipt = {
  Code: "",
  DateAsarStr: "",
  JamGhabelPardakhtFish: 0,
  JamEzafatFish: 0,
  JamKosuratFish: 0,
};

const FooterSlice = createSlice({
  name: "Footer",
  initialState,
  reducers: {
    setFooter: (state, action) => {
      state = action.payload;
    },
  },
});

export default FooterSlice.reducer;
export const { setFooter } = FooterSlice.actions;
export const FooterSelector = (store: IRootState) => store.FooterReducer;
