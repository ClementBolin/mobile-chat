import firebase from 'firebase';
import 'firebase/firestore';

export const InitFirebase = () => {
    var firebaseConfig = {
        apiKey: "AIzaSyBb9ZAox76BYXzwKI5SwDLpsOOw1jTbnIc",
        authDomain: "familiechatfirebase.firebaseapp.com",
        databaseURL: "https://familiechatfirebase.firebaseio.com",
        projectId: "familiechatfirebase",
        storageBucket: "familiechatfirebase.appspot.com",
        messagingSenderId: "588722856318",
        appId: "1:588722856318:web:304ca10c13ba6a692b532f"
      };
      // Initialize Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    firebase.firestore.setLogLevel('debug')
}
