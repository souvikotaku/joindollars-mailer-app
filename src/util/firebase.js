import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYI9Zs4_lF4VULw2oAdn3yj2eJ-jBlLkA",
  authDomain: "crud-todo-48576.firebaseapp.com",
  databaseURL:
    "https://crud-todo-48576-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud-todo-48576",
  storageBucket: "crud-todo-48576.appspot.com",
  messagingSenderId: "663243666171",
  appId: "1:663243666171:web:9abad3d887b66738fb765e",
  measurementId: "G-SQ4W1H2TLT",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
