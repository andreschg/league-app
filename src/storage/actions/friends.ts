import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import database from '../../firebase/firebase';

export const setFriends = (friends: User[]): AnyAction => ({
  type: 'SET_FRIENDS',
  friends
});

export const startFetchingFriends = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: any) => {
    const friends: User[] = [];
    const snapshot = await database.ref('users').once('value');
    snapshot.forEach(child => {
      friends.push({
        id: child.key,
        ...child.val()
      });
      dispatch(setFriends(friends));
    });
  }
}