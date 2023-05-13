import React from 'react';
import { Grid, Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';


import SalesOverview from './components/SalesOverview';
import YearlyBreakup from './components/YearlyBreakup';


import MonthlyEarnings from './components/MonthlyEarnings';
import TypographyPage from '../utilities/TypographyPage';

import Categorie from '../products/Categorie';
import Map from '../dashboard/components/Map';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
            <SalesOverview />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
              <Grid item xs={12}>
                <MonthlyEarnings />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Map/>
          </Grid>
          <Grid item xs={12} lg={8}>
          < TypographyPage/>
          </Grid>
          <Grid item xs={12} >
           <Categorie/>
          </Grid>
        
          
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Dashboard;
