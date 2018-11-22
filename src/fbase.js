import Rebase from 're-base';
import firebase from 'firebase';

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtVAlhbMgIVSVKGQJFxZVZ4b-LJjTKRlg",
    authDomain: "react-bookstore-3aff1.firebaseapp.com",
    databaseURL: "https://react-bookstore-3aff1.firebaseio.com",
    projectId: "react-bookstore-3aff1",
    storageBucket: "react-bookstore-3aff1.appspot.com",
    messagingSenderId: "468617247967"
  });

  const fbase = Rebase.createClass(firebaseApp.database());


  export {fbase, firebaseApp};

