import firebase from 'firebase/app'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyB7Pwe0svPkxZb9e4Z76y6wxZTBtOwIkS8",
    authDomain: "ptpfilesystem.firebaseapp.com",
    databaseURL: "https://ptpfilesystem.firebaseio.com",
    projectId: "ptpfilesystem",
    storageBucket: "ptpfilesystem.appspot.com",
    messagingSenderId: "460431888758",
    appId: "1:460431888758:web:ddaa198b345a7dcdac2a57",
    measurementId: "G-PG3LWET9VD"

}

firebase.initializeApp(config)

const storage = firebase.storage();

export {
    storage, firebase as default
}