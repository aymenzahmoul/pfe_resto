import { Box, Grid } from '@mui/material';
import React from 'react';
import PageContainer from 'src/components/container/PageContainer';
import Feed from './Feed/Feed';

const chatting = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={8}>
          <div className="profile">
          <Feed />
          </div>
          </Grid>
          
        
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default chatting;
