import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB8fICn37GI5l12-EDEO1yhLnY-wKuiKy4",
  authDomain: "react-learning-8380e.firebaseapp.com",
  databaseURL: "https://react-learning-8380e.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
