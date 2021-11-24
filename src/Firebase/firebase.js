import firebase from 'firebase/compat/app';
import firebaseConfig from "./config";
import "firebase/compat/storage";
import "firebase/compat/firestore"

const app = firebase.initializeApp(firebaseConfig);

const firestore = app.firestore()
export const database = {
    folders: firestore.collection("folders"),
    files: firestore.collection("files"),
    formatDoc: doc => {
        return { id: doc.id, ...doc.data() }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export default app