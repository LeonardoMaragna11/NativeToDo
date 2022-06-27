import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBSck85kUtatqlNRXSkijFD4deIl8W8rCw",
    authDomain: "todo-5d5f7.firebaseapp.com",
    databaseURL: "https://todo-5d5f7-default-rtdb.firebaseio.com",
    projectId: "todo-5d5f7",
    storageBucket: "todo-5d5f7.appspot.com",
    messagingSenderId: "52576695145",
    appId: "1:52576695145:web:2ec28cf733ae50abebc3f8"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)