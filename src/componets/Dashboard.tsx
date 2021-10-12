import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default () => (
  <Grid
    container
    spacing={3}
    justify="space-around"
    className="dashboard__container"
  >
    <Grid item xs={4}>
      <Card className="first-card">
        <CardContent>
          <Typography className="card__icon" variant="h5" component="h2">
            <FontAwesomeIcon icon={faTrophy} /> 
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/create-league" size="small">Create New League</Button>
        </CardActions>
      </Card>
    </Grid>

    <Grid item xs={4}>
      <Card className="first-card">
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            <FontAwesomeIcon icon={faTrophy} /> 
          </Typography>
          <Typography color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  </Grid>
)