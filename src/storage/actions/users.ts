import database, { firebase } from '../../firebase/firebase';

export const createUser = (user: User, password: string) => {
  return (dispatch: any) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, password)
      .then((response) => {
        const { uid: id } = response.user;
        database.ref(`users/${id}}`).set({ ...user, id }).then(() => {
          dispatch(addUser(user));
        }); 
      });
  }
}

export const addUser = (user: User) => ({
  type: 'ADD_USER',
  user
});

export const startFetchingUsers = 12;
