import { configureStore } from "@reduxjs/toolkit";
import HeadReducer from "../slice/HeadReceipt";
import KarkardReducer from "../slice/KarkardReceipt";
import MazayaReducer from "../slice/MazayaReceipt";
import KosoratReducer from "../slice/KosoratReceipt";
import AmaryReducer from "../slice/AmaryReceipt";
import FooterReducer from "../slice/FooterReceipt";

const store = configureStore({
  reducer: {
    HeadReducer,
    KarkardReducer,
    MazayaReducer,
    KosoratReducer,
    AmaryReducer,
    FooterReducer,
  },
});

export type IRootState = ReturnType<typeof store.getState>;
export default store;
