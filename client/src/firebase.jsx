import { initializeApp } from "firebase/app";

import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC03riCRkPj8r9pPJK_ch0Rc8Z0gO0ox3Q",
    authDomain: "projectimage-1df8e.firebaseapp.com",
    projectId: "projectimage-1df8e",
    storageBucket: "projectimage-1df8e.appspot.com",
    messagingSenderId: "494060031352",
    appId: "1:494060031352:web:44239d822dcf6c3f294c8d"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);