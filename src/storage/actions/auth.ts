import { firebase } from '../../firebase/firebase';

export const login = (uid:string) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = (email:string, password:string) => {
  return async () => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return async (dispatch: any) => {
    await firebase.auth().signOut();
    dispatch(logout());
  }
}