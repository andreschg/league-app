import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

export default () => (
  <Grid container className="loading" direction={"column"} justify="center" alignItems="center" alignContent="center" >
    <Grid item md={8} xs={10} >
      <Paper>
        <div className="loading--circular-progress">
          <CircularProgress color="secondary" size={80} />
        </div>
      </Paper>
    </Grid>
  </Grid>
);