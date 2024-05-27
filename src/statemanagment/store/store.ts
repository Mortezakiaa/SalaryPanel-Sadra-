import { configureStore } from "@reduxjs/toolkit";
import SalaryReducer from '../slice/SalaryReceipt'

const store = configureStore({
    reducer: {SalaryReducer}
})

export type IRootState = ReturnType<typeof store.getState>;
export default store;