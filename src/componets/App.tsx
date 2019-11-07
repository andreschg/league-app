import * as React from 'react';
import { connect } from 'react-redux';
import AppRouter from '../router/AppRouter';

interface Props {
  isLoading: boolean
}

class App extends React.Component<Props> {

  render() {
    return (
      <div>
        <AppRouter />       
      </div>
    );
  }
}

const mapStateToProps = ({ status }: any) => ({
  isLoading: status.isLoading
});

export default connect(mapStateToProps)(App);