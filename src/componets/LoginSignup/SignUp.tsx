import * as React from "react";
import { connect } from 'react-redux';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import { createUser } from '../../storage/actions/users';

interface Properties {
  classes?: any;
  createUser?: Function
}

interface State {
  name?: string;
  lastName?: string;
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
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

  handleChanges = ({ target }: any): void => {
    const updateObj: State = {
      [target.name]: target.value
    };
    this.setState(updateObj);
  }

  handleOnSubmit = (event: any):void => {
    event.preventDefault();
    const { value: pass } = document.getElementById('password') as HTMLInputElement;
    const { value: confPass } = document.getElementById('confirm_password') as HTMLInputElement;
    
    if (pass === confPass) {
      const { name, lastName, email, username } = this.state;
      const user = {
        name,
        lastName,
        username,
        email
      };
      this.props.createUser(user, pass);
    }
  }

  render() {
    return (
      <div className="form-container">
        <Typography component="h1" variant="h5">
          Sign up
            </Typography>
        <form className="form-container__form" onSubmit={this.handleOnSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="name">Name</InputLabel>
            <Input id="name" name="name" onChange={this.handleChanges} value={this.state.name} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="last_name" >Last Name</InputLabel>
            <Input id="last_name" name="lastName" onChange={this.handleChanges} value={this.state.lastName} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username" >Username</InputLabel>
            <Input id="username" name="username" onChange={this.handleChanges} value={this.state.username} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" onChange={this.handleChanges} value={this.state.email} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
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
          >
            Sign Up
              </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  createUser: (user: User, password:string) => dispatch(createUser(user, password))
});

export default connect(undefined, mapDispatchToProps)(SignUp);