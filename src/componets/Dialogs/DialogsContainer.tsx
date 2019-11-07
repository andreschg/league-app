import * as React from 'react';
import { connect } from 'react-redux';
import { setInfoMessage } from '../../storage/actions/status';
import MessageDialog from './MessageDialog';
import LoadingDialog from './LoadingDialog';

interface Props {
  infoMessage: string,
  errorMessage: string,
  isLoading: boolean,
  dispatch: any
}

class DialogsContainer extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
  }

  onCloseHandler = () => {
    this.props.dispatch(setInfoMessage(''));
  }

  render() {
    return (
      <div>
        <MessageDialog message={this.props.infoMessage} onCloseHandler={this.onCloseHandler} />
        <LoadingDialog isLoading={this.props.isLoading}/>
      </div>
    );
  }
}

const mapStateToProps = ({ status }: any) => ({
  infoMessage: status.infoMessage,
  errorMessage: status.errorMessage,
  isLoading: status.isLoading,
});

export default connect(mapStateToProps)(DialogsContainer);
