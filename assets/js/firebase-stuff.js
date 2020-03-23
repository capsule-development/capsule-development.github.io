// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBi-8qI5QDYPLAExPbLectwpD-88arhN3Y",
    authDomain: "capsule-manager.firebaseapp.com",
    databaseURL: "https://capsule-manager.firebaseio.com",
    projectId: "capsule-manager",
    storageBucket: "capsule-manager.appspot.com",
    messagingSenderId: "10045598935",
    appId: "1:10045598935:web:106c61b326a13af7cad492",
    measurementId: "G-F2XDB5FRFM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//create short calls for firebase auth instances
const auth = firebase.auth();
const analytics = firebase.analytics();