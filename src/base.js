//Facilite l'intégration de firebase dans React - community
import Rebase from 're-base'

import firebase from 'firebase/app'
//Optimize the library - lighter
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyCoxgwcBcQxV24Fbih0SCQUCFTzbwIJtjA",
    authDomain: "react-js-udemy-chatbox.firebaseapp.com",
    databaseURL: "https://react-js-udemy-chatbox-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-js-udemy-chatbox",
    storageBucket: "react-js-udemy-chatbox.appspot.com",
    messagingSenderId: "580585215867",
    appId: "1:580585215867:web:6443f3242e3c4e92f2cfde"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base