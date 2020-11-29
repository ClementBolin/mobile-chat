import firebase from 'firebase';
import 'firebase/firestore';

export const InitFirebase = () => {
    var firebaseConfig = {
        // FIREBASE CONFIG
      };
      // Initialize Firebase
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}
