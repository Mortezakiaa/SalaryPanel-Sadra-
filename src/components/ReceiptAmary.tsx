"use client";

import { AmarySelector } from "@/statemanagment/slice/AmaryReceipt";
import { sp } from "@/utils/replaceNumber";
import { Grid, Typography } from "@mui/material";
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
      <Grid item xs={12}>
        <Typography variant="subtitle1" style={{borderBottom:'2px solid'}}>مزایای حقوق</Typography>
      </Grid>
      <Grid item xs={12} style={{display:'flex' , flexDirection:'column' , padding:'0.5px' , gap:1}}>
        {HogugSaatiFish != 0 && <Typography variant="caption">دستمزد ساعتی : {sp(HogugSaatiFish)}</Typography>}
        {HogugRuzaneFish != 0 && <Typography variant="caption">دستمزد روزانه : {sp(HogugRuzaneFish)}</Typography>}
        {DaramadMashmolBimeFish != 0 && <Typography variant="caption">درآمد مشمول بیمه: {sp(DaramadMashmolBimeFish)}</Typography>}
        {DaramadMashmolGheireMashmolBimeFish != 0 && <Typography variant="caption">مشمول غیر مشمول بیمه: {sp(DaramadMashmolGheireMashmolBimeFish)}</Typography>}
        {BimeSahmeKarfarma != 0 && <Typography variant="caption">بیمه سهم کارفرما: {sp(BimeSahmeKarfarma)}</Typography>}
        {BimeSahmeBikari != 0 && <Typography variant="caption">بیمه بیکاری: {sp(BimeSahmeBikari)}</Typography>}
        {DaramadMashmolMaliatFish != 0 && <Typography variant="caption">درآمد مشمول مالیات: {sp(DaramadMashmolMaliatFish)}</Typography>}
        {DaramadMashmolGheireMashmolMaliatFish != 0 && <Typography variant="caption">مشمول غیر مشمول مالیات: {sp(DaramadMashmolGheireMashmolMaliatFish)}</Typography>}
        {DaramadMashmolMaliatMade131Fish != 0 && <Typography variant="caption">مشمول مالیات ماده 131: {sp(DaramadMashmolMaliatMade131Fish)}</Typography>}
        {DaramadMashmolMaliatNoe1Fish != 0 && <Typography variant="caption">مشمول مالیات نوع 1: {sp(DaramadMashmolMaliatNoe1Fish)}</Typography>}
        {DaramadMashmolMaliatNoe2Fish != 0 && <Typography variant="caption">مشمول مالیات نوع 2: {sp(DaramadMashmolMaliatNoe2Fish)}</Typography>}
        {DaramadMashmolMaliatNoe3Fish != 0 && <Typography variant="caption">مشمول مالیات نوع 3: {sp(DaramadMashmolMaliatNoe3Fish)}</Typography>}
        {DaramadMashmolMaliatNoe4Fish != 0 && <Typography variant="caption">مشمول مالیات نوع 4: {sp(DaramadMashmolMaliatNoe4Fish)}</Typography>}
        {DaramadMashmolMaliatNoe5Fish != 0 && <Typography variant="caption">مشمول مالیات نوع 5: {sp(DaramadMashmolMaliatNoe5Fish)}</Typography>}
        {DaramadMashmolMaliatNoe6Fish != 0 && <Typography variant="caption">مشمول مالیات نوع 6: {sp(DaramadMashmolMaliatNoe6Fish)}</Typography>}
      </Grid>
    </Grid>
  );
}
