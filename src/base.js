//Facilite l'intégration de firebase dans React - community
import Rebase from 're-base'

import firebase from 'firebase/app'
//Optimize the library - lighter
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyD_wOs_GulO5xc758smzFPIG4etL4kd3xE",
    authDomain: "reactjs-chatbox-app.firebaseapp.com",
    databaseURL: "https://reactjs-chatbox-app-default-rtdb.firebaseio.com",
    projectId: "reactjs-chatbox-app",
    storageBucket: "reactjs-chatbox-app.appspot.com",
    messagingSenderId: "151858326057",
    appId: "1:151858326057:web:48acaff2329d63e4568a38"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base