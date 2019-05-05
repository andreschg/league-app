import * as React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";

interface Properties {
  classes: any;
}

interface State {
  name?: string,
  lastName?: string,
  email?: string,
  password?: string,
  confirmPassword?: string
}

export class SignUp extends React.Component<Properties, State> {

  constructor(props: any) {
    super(props);
    this.state = {
      name: '',
      lastName: '',
      email: '',
    }
  }

  handleChanges = ({ target }: any) => {
    const updateObj: State = { 
      [target.name]: target.value
    };
    this.setState(updateObj);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className="form-container">
        <Typography component="h1" variant="h5">
          Sign up
            </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="name" autoComplete="name" onChange={this.handleChanges} value={this.state.name} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="last_name" >Last Name</InputLabel>
            <Input id="last_name" name="lastName" autoComplete="last_name" onChange={this.handleChanges} value={this.state.lastName} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" onChange={this.handleChanges} value={this.state.email} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="confirm_password">Confirm Password</InputLabel>
            <Input
              name="confirmPassword"
              type="password"
              id="confirm_password"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
              </Button>
        </form>
      </div>
    );
  }
}