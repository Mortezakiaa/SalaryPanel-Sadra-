import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { THeadReceipt } from "@/Types/Types";

type T = {
  data: THeadReceipt;
};

const initialState: T = {
  data: {
    Code: "",
    NamePersonel: "",
    FamilyPersonel: "",
    CodeMeli: "",
    ShomareShenasname: "",
    ShomareHesab1: "",
    ShomareBime: "",
    Semat: "",
  },
};

const HeadSlice = createSlice({
  name: "Head",
  initialState,
  reducers: {
    setHead: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default HeadSlice.reducer;
export const { setHead } = HeadSlice.actions;
export const HeadSelector = (store: IRootState) => store.HeadReducer;
