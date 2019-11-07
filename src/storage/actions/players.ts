import database from '../../firebase/firebase';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

export const addPlayer = (player: Player) => ({
  type: 'ADD_NEW_PLAYER',
  player
});

export const startAddPlayer = (player: Player): ThunkAction<void, {}, undefined, Action<string>> => {
  return (dispatch) => {  
    database.ref('players').push(player).then(() => {
      dispatch(addPlayer(player));
    });
  }
}
