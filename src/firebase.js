import firebase from 'firebase/compat/app';

const {
  VUE_APP_API_KEY,
  VUE_APP_AUTH_DOMAIN,
  VUE_APP_PROJECT_ID,
  VUE_APP_STORAGE_BUCKET,
  VUE_APP_MESSAGING_SENDER_ID,
  VUE_APP_APP_ID
} = process.env;

const firebaseConfig = {
  apiKey: VUE_APP_API_KEY,
  authDomain: VUE_APP_AUTH_DOMAIN,
  projectId: VUE_APP_PROJECT_ID,
  storageBucket: VUE_APP_STORAGE_BUCKET,
  messagingSenderId: VUE_APP_MESSAGING_SENDER_ID,
  appId: VUE_APP_APP_ID
};

export default firebase.initializeApp(firebaseConfig);
