import * as React from "react";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import { connect } from 'react-redux';
import { startLogin } from '../../storage/actions/auth';
import { 
  startLoading, 
  stopLoading, 
  setInfoMessage } from '../../storage/actions/status';

interface LoginProps {
  login: Function
}

interface LoginState {
  email?: string;
  password?: string;
}
class Login extends React.Component<LoginProps, LoginState> {

  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChanges = ({ target }: any): void => {
    const updateObj: LoginState = {
      [target.name]: target.value
    };
    this.setState(updateObj);
  }

  handleLogin = (event: any): void => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="form-container">
        <Typography component="h1" variant="h5">
          Login
            </Typography>
        <form onSubmit={this.handleLogin}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" value={this.state.email} onChange={this.handleChanges} autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChanges}
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign in
              </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  login: (email: string, password: string) => {
    dispatch(startLoading());
    return dispatch(startLogin(email, password)).catch((e: Error) => {
      dispatch(stopLoading());
      dispatch(setInfoMessage(`An error has ocurred: ${e.message}`));
    })
  }
});

export default connect(undefined, mapDispatchToProps)(Login);
