
import { initializeApp } from 'firebase';
   
   
// Initialize Firebase
 const app = initializeApp({
     apiKey: "AIzaSyAHp3vB8Mc8JzdSXptEh3KY9LBQ97PeNLg",
     authDomain: "basedatos2-ccc9b.firebaseapp.com",
     databaseURL: "https://basedatos2-ccc9b.firebaseio.com",
     projectId: "basedatos2-ccc9b",
     storageBucket: "basedatos2-ccc9b.appspot.com",
     messagingSenderId: "965566008304"
 });

     export const db = app.database();
     export const namesRef = db.ref('names');
 
