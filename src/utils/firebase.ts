import firebase from 'firebase';
import { IMessage } from './models/firebase.models';

class Firebase {
    constructor() {
        this.init();
        this.checkAuth();
    }

    init = () => {
        if (firebase.apps.length === 0) {
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
              firebase.initializeApp(firebaseConfig);
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        })
    }

    send = (messages: any[]) => {
        messages.forEach(item => {
            const message: IMessage = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            this.db.push(message) 
        })
    }

    parse = (message: any) => {
        const {user, text, timestamp} = message.val();
        const { key: _id } = message;
        const createAt = new Date(timestamp);

        return {
            _id,
            createAt,
            text,
            user
        }
    }


    get = (callback: any) => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)))
    }

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages")
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    };
}

export default new Firebase()
