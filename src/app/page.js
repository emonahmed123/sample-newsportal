import LatesNewes from '@/component/ui/LatesNewes/LatesNewes';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatesNewes />
        </Grid>

        <Grid item xs={4}>
          <h1>SideBar</h1>
        </Grid>

      </Grid>
    </>
  );
};

export default HomePage;
