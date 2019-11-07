import * as React from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Login from './Login';
import SignUp  from './SignUp';

interface Props {
  classes?: any
}

interface State {
  value: number
}

class LoginSignUp extends React.Component<Props, State> {
  state = {
    value: 0
  };
  
  constructor(props: Props) {
    super(props);
  }

  handleTabChange = (event:any, value:number): void => {
    this.setState({
      value
    });
  }

  render() {
    const { value } = this.state; 
    return (
      <Grid container justify="center" className="login__container">
        <Grid item lg={6} md={10} sm={12}>
          <Paper>
            <AppBar position="static" color="default">
              <Tabs 
                value={value}
                onChange={this.handleTabChange}
                indicatorColor="primary"
                variant="fullWidth"
              >
                <Tab label="Login" />
                <Tab label="Sign Up" />
              </Tabs>
            </AppBar>
            {value === 0 && <Login />}
            {value === 1 && <SignUp />}
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default LoginSignUp;

