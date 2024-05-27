"use client";

import { AmarySelector } from "@/statemanagment/slice/AmaryReceipt";
import { Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ReceiptAmary() {
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
  } = useSelector(AmarySelector);
  return (
    <Grid container>
      <Grid item xs={12}>
        {HogugSaatiFish != 0 && <Typography variant="h6">دستمزد ساعتی : {HogugSaatiFish}</Typography>}
        {HogugRuzaneFish != 0 && <Typography variant="h6">دستمزد روزانه : {HogugRuzaneFish}</Typography>}
        {DaramadMashmolBimeFish != 0 && <Typography variant="h6">درآمد مشمول بیمه: {DaramadMashmolBimeFish}</Typography>}
        {DaramadMashmolGheireMashmolBimeFish != 0 && <Typography variant="h6">مشمول غیر مشمول بیمه: {DaramadMashmolGheireMashmolBimeFish}</Typography>}
        {BimeSahmeKarfarma != 0 && <Typography variant="h6">بیمه سهم کارفرما: {BimeSahmeKarfarma}</Typography>}
        {BimeSahmeBikari != 0 && <Typography variant="h6">بیمه بیکاری: {BimeSahmeBikari}</Typography>}
        {DaramadMashmolMaliatFish != 0 && <Typography variant="h6">درآمد مشمول مالیات: {DaramadMashmolMaliatFish}</Typography>}
        {DaramadMashmolGheireMashmolMaliatFish != 0 && <Typography variant="h6">مشمول غیر مشمول مالیات: {DaramadMashmolGheireMashmolMaliatFish}</Typography>}
        {DaramadMashmolMaliatMade131Fish != 0 && <Typography variant="h6">مشمول مالیات ماده 131: {DaramadMashmolMaliatMade131Fish}</Typography>}
        {DaramadMashmolMaliatNoe1Fish != 0 && <Typography variant="h6">مشمول مالیات نوع 1: {DaramadMashmolMaliatNoe1Fish}</Typography>}
        {DaramadMashmolMaliatNoe2Fish != 0 && <Typography variant="h6">مشمول مالیات نوع 2: {DaramadMashmolMaliatNoe2Fish}</Typography>}
        {DaramadMashmolMaliatNoe3Fish != 0 && <Typography variant="h6">مشمول مالیات نوع 3: {DaramadMashmolMaliatNoe3Fish}</Typography>}
        {DaramadMashmolMaliatNoe4Fish != 0 && <Typography variant="h6">مشمول مالیات نوع 4: {DaramadMashmolMaliatNoe4Fish}</Typography>}
        {DaramadMashmolMaliatNoe5Fish != 0 && <Typography variant="h6">مشمول مالیات نوع 5: {DaramadMashmolMaliatNoe5Fish}</Typography>}
        {DaramadMashmolMaliatNoe6Fish != 0 && <Typography variant="h6">مشمول مالیات نوع 6: {DaramadMashmolMaliatNoe6Fish}</Typography>}
      </Grid>
    </Grid>
  );
}
