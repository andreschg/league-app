import * as firebase from 'firebase';

declare let process: any;

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

console.log(config);

firebase.initializeApp(config);

const database = firebase.database();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, database as default };