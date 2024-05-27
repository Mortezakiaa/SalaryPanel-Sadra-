import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";

const initialState = {}

const Slice = createSlice({
    name:"Salary",
    initialState,
    reducers:{

    }
})  


export default Slice.reducer

export const SalarySelector = (store:IRootState) => store.SalaryReducer 