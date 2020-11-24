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
                apiKey: "AIzaSyABUgBtx0etFBBuf10_70b765B644Rwg7o",
                authDomain: "chatapp-1add8.firebaseapp.com",
                databaseURL: "https://chatapp-1add8.firebaseio.com",
                projectId: "chatapp-1add8",
                storageBucket: "chatapp-1add8.appspot.com",
                messagingSenderId: "590133004109",
                appId: "1:590133004109:web:ed89033969481a2b9c5904",
                measurementId: "G-5WZGJ2XM6Q"
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
