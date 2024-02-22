import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import Result from "../components/MortageComponents/Result";
import SliderSelect from "../components/MortageComponents/SliderSelect";
import TenureSelect from "../components/MortageComponents/TenureSelect";

function Mortgage() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  console.log(data);

  return (
    <div className="Mortgage">
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Mortgage;
