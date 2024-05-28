"use client";

import { AmarySelector } from "@/statemanagment/slice/AmaryReceipt";
import { sp } from "@/utils/replaceNumber";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptAmary() {
  const data = useSelector(AmarySelector);
  const {
    BimeSahmeBikari,
    HogugRuzaneFish,
    HogugSaatiFish,
    BimeSahmeKarfarma,
    DaramadMashmolBimeFish,
    DaramadMashmolGheireMashmolBimeFish,
    DaramadMashmolGheireMashmolMaliatFish,
    DaramadMashmolMaliatFish,
    DaramadMashmolMaliatMade131Fish,
    DaramadMashmolMaliatNoe1Fish,
    DaramadMashmolMaliatNoe2Fish,
    DaramadMashmolMaliatNoe3Fish,
    DaramadMashmolMaliatNoe4Fish,
    DaramadMashmolMaliatNoe5Fish,
    DaramadMashmolMaliatNoe6Fish,
  } = data.data
  return (
    <Grid container style={{textAlign:'center'}}>
      <Grid item xs={12} style={{borderBottom:'2px solid'}}>
        <span>اطلاعات آماری فیش</span>
      </Grid>
      <Grid item xs={12} style={{display:'flex' , flexDirection:'column' , padding:'0.5px' , gap:1}}>
        {HogugSaatiFish != 0 && <span>دستمزد ساعتی : {sp(HogugSaatiFish)}</span>}
        {HogugRuzaneFish != 0 && <span>دستمزد روزانه : {sp(HogugRuzaneFish)}</span>}
        {DaramadMashmolBimeFish != 0 && <span>درآمد مشمول بیمه: {sp(DaramadMashmolBimeFish)}</span>}
        {DaramadMashmolGheireMashmolBimeFish != 0 && <span>مشمول غیر مشمول بیمه: {sp(DaramadMashmolGheireMashmolBimeFish)}</span>}
        {BimeSahmeKarfarma != 0 && <span>بیمه سهم کارفرما: {sp(BimeSahmeKarfarma)}</span>}
        {BimeSahmeBikari != 0 && <span>بیمه بیکاری: {sp(BimeSahmeBikari)}</span>}
        {DaramadMashmolMaliatFish != 0 && <span>درآمد مشمول مالیات: {sp(DaramadMashmolMaliatFish)}</span>}
        {DaramadMashmolGheireMashmolMaliatFish != 0 && <span>مشمول غیر مشمول مالیات: {sp(DaramadMashmolGheireMashmolMaliatFish)}</span>}
        {DaramadMashmolMaliatMade131Fish != 0 && <span>مشمول مالیات ماده 131: {sp(DaramadMashmolMaliatMade131Fish)}</span>}
        {DaramadMashmolMaliatNoe1Fish != 0 && <span>مشمول مالیات نوع 1: {sp(DaramadMashmolMaliatNoe1Fish)}</span>}
        {DaramadMashmolMaliatNoe2Fish != 0 && <span>مشمول مالیات نوع 2: {sp(DaramadMashmolMaliatNoe2Fish)}</span>}
        {DaramadMashmolMaliatNoe3Fish != 0 && <span>مشمول مالیات نوع 3: {sp(DaramadMashmolMaliatNoe3Fish)}</span>}
        {DaramadMashmolMaliatNoe4Fish != 0 && <span>مشمول مالیات نوع 4: {sp(DaramadMashmolMaliatNoe4Fish)}</span>}
        {DaramadMashmolMaliatNoe5Fish != 0 && <span>مشمول مالیات نوع 5: {sp(DaramadMashmolMaliatNoe5Fish)}</span>}
        {DaramadMashmolMaliatNoe6Fish != 0 && <span>مشمول مالیات نوع 6: {sp(DaramadMashmolMaliatNoe6Fish)}</span>}
      </Grid>
    </Grid>
  );
}
