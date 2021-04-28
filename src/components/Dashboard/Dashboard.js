import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';

const Dashboard = () => {
 return (
  <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
       <Typography variant="h6">
         Mentor Community
       </Typography>
      </Toolbar>
    </AppBar>
  </>
 )
}

export default Dashboard;