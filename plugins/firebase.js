import firebase from 'firebase/app'
import 'firebase/database'

if (!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyAiP28gmUTp9UgVV3NYpcyNcyLuNK-ylW0",
    authDomain: "training-vue-67f1a.firebaseapp.com",
    databaseURL: "https://training-vue-67f1a.firebaseio.com",
    projectId: "training-vue-67f1a",
    storageBucket: "training-vue-67f1a.appspot.com",
    messagingSenderId: "2211659948",
    appId: "1:2211659948:web:876cd8fefd4a096b"
  }

  firebase.initializeApp(config)
}

const database = firebase.database()
export { database }
