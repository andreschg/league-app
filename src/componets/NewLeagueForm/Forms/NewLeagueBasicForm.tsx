import * as React from 'react';
import FormControl from "@material-ui/core/FormControl";
import { Input, InputLabel, Typography } from '@material-ui/core';

export default () => {

  return (
  <div className="form-container">
    <Typography component="h1" variant="h5">
      Create New League
    </Typography>
    <form className="form-container__form">
      <FormControl>
        <InputLabel htmlFor="league-name">Name</InputLabel>
        <Input id="league-name" name="league-name" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="number-teams">Number of teams</InputLabel>
        <Input id="number-teams" name="number-teams" type="number"/>
      </FormControl>
    </form>
  </div>
  );
}