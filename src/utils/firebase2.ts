import firebase from 'firebase';
import 'firebase/firestore';

export const InitFirebase = () => {
    var firebaseConfig = {
        apiKey: "API_KEY",
        authDomain: "PROJECT_ID.firebaseapp.com",
        databaseURL: "https://PROJECT_ID.firebaseio.com",
        projectId: "PROJECT_ID",
        storageBucket: "PROJECT_ID.appspot.com",
        messagingSenderId: "SENDER_ID",
        appId: "APP_ID",
        measurementId: "G-MEASUREMENT_ID",
      };
      // Initialize Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    firebase.firestore.setLogLevel('debug')
}
