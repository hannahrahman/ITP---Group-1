import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyBh1FhY8pairNZX7xV6WBRVRkyEBrAcoFg",
    authDomain: "police-management.firebaseapp.com",
    databaseURL: "https://police-management.firebaseio.com",
    projectId: "police-management",
    storageBucket: "police-management.appspot.com",
    messagingSenderId: "914921117190",
    //  appId: "1:914921117190:web:82616c259d98a4b2365587",
    // measurementId: "G-L26TSS5HEV"
};


// Initialize Firebase
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}