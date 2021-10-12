import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';
import { startLogout } from '../../storage/actions/auth';

interface HeaderProps {
  logout: Function
}
interface HeaderState {
  anchorEl: any
}
class Header extends React.Component<HeaderProps, HeaderState> {

  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  handleProfileMenuOption = (event: React.FormEvent<EventTarget>): void => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  }

  handleLogout = () => {
    this.props.logout();
  }

  render() {
    return (
      <AppBar position="static" >
        <Toolbar>
          <Grid container>
            <Grid item xs={6} >
              <IconButton color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6} >
              <Grid container justify="flex-end">
                <IconButton
                  aria-haspopup="true"
                  color="inherit"
                  onClick={this.handleProfileMenuOption}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={this.state.anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={!!this.state.anchorEl}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapDispathToProps = (dispath: any) => ({
  logout: () => dispath(startLogout())
})

export default connect(undefined, mapDispathToProps)(Header);