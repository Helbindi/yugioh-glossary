import { writable, derived } from "svelte/store";
import { initializeApp } from "firebase/app";

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);
export const suggestionData = writable([]);
export const selectedFilter = writable("");
export const pageFilter = writable("");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore();

// Get collection reference
const termsRef = collection(db, "terms");
const suggestionRef = collection(db, "suggestions");

// Get real-time updates on terms from Firebase
onSnapshot(termsRef, (snapshot) => {
  let terms = [];
  snapshot.docs.forEach((doc) => {
    terms.push({ ...doc.data(), id: doc.id });
  });
  apiData.set(terms);
});

// Get real-time updates on suggestions from Firebase
onSnapshot(suggestionRef, (snapshot) => {
  let suggestions = [];
  snapshot.docs.forEach((doc) => {
    suggestions.push({ ...doc.data(), id: doc.id });
  });
  suggestionData.set(suggestions);
});

// Add new documents to suggestions Firebase
export const addSuggestion = (suggestion) => {
  addDoc(suggestionRef, {
    name: suggestion.name,
    description: suggestion.description,
    type: suggestion.type,
  });
};
