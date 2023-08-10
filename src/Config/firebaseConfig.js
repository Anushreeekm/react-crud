// v9 compat packages react crud based on firebasw cloud architecture
import firebase from "firebase/compat/app"
import  "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAkqg03HgSu5Tpy-J5cEFaQ8RqZNinTjyE",
    authDomain: "react-crud-app-97f46.firebaseapp.com",
    projectId: "react-crud-app-97f46",
    storageBucket: "react-crud-app-97f46.appspot.com",
    messagingSenderId: "906951929853",
    appId: "1:906951929853:web:951f58b727669f9e267394",
    measurementId: "G-5S5N8WP926"
  };

  const Fireapp = firebase.initializeApp(firebaseConfig);

  export default Fireapp