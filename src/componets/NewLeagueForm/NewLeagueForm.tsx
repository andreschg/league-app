import * as React from 'react';
import { connect } from 'react-redux';
import FormControl from "@material-ui/core/FormControl";
import { Input, InputLabel, Typography } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import NewLeagueBasicForm from './Forms/NewLeagueBasicForm';
import SelectPlayerForm from './Forms/SelectPlayersForm';

interface INewLeagueState {
  activeStep: number;
  name: string;
  numberOfTeams: number;
  players: string[];
}
const steps = ['Basic Information', 'Select players', 'Select teams'];

export default class NewLeagueForm extends React.Component<{}, INewLeagueState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      activeStep: 0,
      name: '',
      numberOfTeams: 0,
      players: []
    };
   }

  getStepContent = (step: number) => {
    switch(step) {
      case 0:
        return <NewLeagueBasicForm />
      case 1:
        return <SelectPlayerForm
                selectedFriends={this.state.players}
                handleSelectPlayer={this.handleSelectPlayer}
              />
      case 2:
        return <div>Last Step</div>
    }
  }

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  }

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
  }

  handleReset = () => {
    this.setState({ activeStep: 0 });
  }

  handleSelectPlayer = (playerId: string) => {
    const index = this.state.players.indexOf(playerId);
    const players = index < 0
      ? this.state.players.concat(playerId)
      : [...this.state.players].splice(index, 1);

    this.setState({ players });
  }

  render() {
    return (
      <div className="form-container">
        <Stepper activeStep={this.state.activeStep}>
          {steps.map((label, index) =>  {
            const stepProps: { completed?: boolean } = {};
            return (
              <Step key={label}>
                <StepLabel>{ label }</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
            { this.getStepContent(this.state.activeStep) }
          </div>
          <div>
            <Button
              disabled={this.state.activeStep === 0}
              onClick={this.handleBack}
              variant="contained">Back</Button>
            <Button
              onClick={this.handleNext}
              variant="contained"
            >{ this.state.activeStep === steps.length - 1 ? 'Finish' : 'Next'}</Button>
          </div>
      </div>
      );
  }
}
