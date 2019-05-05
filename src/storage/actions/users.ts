import database, { firebase } from '../../firebase/firebase';

const createUser = (user: User, password: string) => {
  return (dispatch: any) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, password)
      .then((response) => {
        database.ref(`users/${response.user.uid}`).set({ ...user }).then(() => {
          dispatch(addUser(user));
        }); 
      });
  }
}

const addUser = (user: User) => ({
  type: 'ADD_USER',
  user
});
