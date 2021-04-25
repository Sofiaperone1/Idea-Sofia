import  firebase from 'firebase/app';
import 'firebase/firestore' ;


const app = firebase.initializeApp (   {

                                    apiKey: "AIzaSyD9ikjo5Ha67ci_RnjLaO2wz2aW5kZ7IiQ",
                                    authDomain: "ecommerce-coder-462e2.firebaseapp.com",
                                    projectId: "ecommerce-coder-462e2",
                                    storageBucket: "ecommerce-coder-462e2.appspot.com",
                                    messagingSenderId: "393525526251",
                                    appId: "1:393525526251:web:25ef5d32a9682a898388ae"    }   )


export const getFirebase = () => {  return app;          } 

export const getFirestore = () => { return firebase.firestore (app)     } 