import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { THeadReceipt } from "@/Types/Types";

const initialState: THeadReceipt = {
  Code: "",
  CodeMeli: "",
  FamilyPersonel: "",
  NamePersonel: "",
  Semat: "",
  ShomareBime: "",
  ShomareHesab1: "",
  ShomareShenasname: "",
};

const HeadSlice = createSlice({
  name: "Head",
  initialState,
  reducers: {
    setHead: (state, action) => {
      state = action.payload;
    },
  },
});

export default HeadSlice.reducer;
export const { setHead } = HeadSlice.actions;
export const HeadSelector = (store: IRootState) => store.HeadReducer;
