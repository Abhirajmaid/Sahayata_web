import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyDm4Ykt8SS7wG7qf7zsdYDYR3rohb64ZKs",
    authDomain: "sahayata-becce.firebaseapp.com",
    databaseURL: "https://sahayata-becce-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sahayata-becce",
    storageBucket: "sahayata-becce.appspot.com",
    messagingSenderId: "723850327793",
    appId: "1:723850327793:web:c32a546b2b8fde45101b50",
    measurementId: "G-4XCL4PV656"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);