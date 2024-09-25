// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging,getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpolleYdPDn5Ahcxu8qUKqXfSrqQdZDQI",
    authDomain: "notification-a875e.firebaseapp.com",
    projectId: "notification-a875e",
    storageBucket: "notification-a875e.appspot.com",
    messagingSenderId: "291074603952",
    appId: "1:291074603952:web:c5d2dc2ac6c34d9bd4b475",
    measurementId: "G-EH9HT9HYZ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const generateToken=async ()=>{
    const permission=await Notification.requestPermission();
    console.log(permission);
    if(permission==="granted"){
        const token=await getToken(messaging, {
                vapidKey:"BACBn8A68QYpwIRsFNKnRJmzH2HbI36BqrueppASnGETc82QW1LKnPBpKf6a_VYp1jjX2JtSSQc5Sj2IvPzdLos"
        })
        console.log(token)
    }
}
