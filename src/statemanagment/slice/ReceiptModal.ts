import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";

const initialState = {
  isOpen:false
};

const ReceiptModalSlice = createSlice({
  name: "ReceiptModal",
  initialState,
  reducers: {
    setReceiptModal: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export default ReceiptModalSlice.reducer;
export const { setReceiptModal } = ReceiptModalSlice.actions;
export const ReceiptModalSelector = (store: IRootState) => store.ReceiptModalReducer;
