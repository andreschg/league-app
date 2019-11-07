import { useDispatch } from 'react-redux';
import { 
  startLoading,
  stopLoading,
  setInfoMessage 
} from '../../storage/actions/status';

export default class CommontActions {
  static dispatch = useDispatch();

  static logMessage(message: string) {
    this.dispatch(setInfoMessage(message));
  }

  static startLoading() {
    this.dispatch(startLoading());
  }

  static stopLoading() {
    this.dispatch(stopLoading());
  }
}