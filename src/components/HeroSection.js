import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";

const HeroSection = () => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
        <Typography variant="h3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, adipisci?
        </Typography>
        <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
        <Button variant="contained" size="large" sx={{ borderRadius: 5 }}>
          Order Us
        </Button>
      </Grid>
      <Grid container item xs={12} sm={6} justifyContent="center" order={{ xs: 1, sm: 2 }}>
        <Box component="img" maxWidth="100%" src="https://unsplash.it/1000"></Box>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
