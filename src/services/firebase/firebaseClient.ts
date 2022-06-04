import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyC_q8onewqBEqmIImSadTghj_7p4DCIS7M',
    authDomain: 'artemis-7a7aa.firebaseapp.com',
    projectId: 'artemis-7a7aa',
    storageBucket: 'artemis-7a7aa.appspot.com',
    messagingSenderId: '253651323543',
    appId: '1:253651323543:web:5cc2aa5bc8094596d4f7d2',
    measurementId: 'G-468H43WXM9',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestoreDB = firebase.firestore();
export const firebaseAuth = firebase.auth();
