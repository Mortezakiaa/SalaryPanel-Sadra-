import { createSlice } from "@reduxjs/toolkit";
import { IRootState } from "../store/store";
import { TAmaryReceipt } from "@/Types/Types";

const initialState: TAmaryReceipt = {
  Code: "",
  DateAsarStr: "",
  HogugRuzaneFish: 0,
  HogugSaatiFish: 0,
  DaramadMashmolBimeFish: 0,
  DaramadMashmolGheireMashmolBimeFish: 0,
  BimeSahmeKarfarma: 0,
  BimeSahmeBikari: 0,
  DaramadMashmolMaliatFish: 0,
  DaramadMashmolGheireMashmolMaliatFish: 0,
  DaramadMashmolMaliatMade131Fish: 0,
  DaramadMashmolMaliatNoe1Fish: 0,
  DaramadMashmolMaliatNoe2Fish: 0,
  DaramadMashmolMaliatNoe3Fish: 0,
  DaramadMashmolMaliatNoe4Fish: 0,
  DaramadMashmolMaliatNoe5Fish: 0,
  DaramadMashmolMaliatNoe6Fish: 0,
};

const AmarySlice = createSlice({
  name: "Amary",
  initialState,
  reducers: {
    setAmary: (state, action) => {
      state = action.payload;
    },
  },
});

export default AmarySlice.reducer;
export const { setAmary } = AmarySlice.actions;
export const AmarySelector = (store: IRootState) => store.AmaryReducer;
