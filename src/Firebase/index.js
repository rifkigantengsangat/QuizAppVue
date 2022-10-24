import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyArBbbpKqkfhAZ6LVI0xwtZecOOem1FAig",
  authDomain: "vue-3-9f7f3.firebaseapp.com",
  projectId: "vue-3-9f7f3",
  storageBucket: "vue-3-9f7f3.appspot.com",
  messagingSenderId: "463635922018",
  appId: "1:463635922018:web:75eb8533e48311d651253b",
  measurementId: "G-LZZM1CWLJ7"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
