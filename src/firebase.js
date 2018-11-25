import Rebase from  "re-base"
import firebase from  "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBcKycJkuVEFnSsnvd2KiJLSV9o5C7-gOs",
    authDomain: "bookstore-4e0b1.firebaseapp.com",
    databaseURL: "https://bookstore-4e0b1.firebaseio.com",
    projectId: "bookstore-4e0b1",
    storageBucket: "bookstore-4e0b1.appspot.com",
    messagingSenderId: "136103090878"
});

const fbase= Rebase.createClass(firebaseApp.database());

export {fbase, firebaseApp};