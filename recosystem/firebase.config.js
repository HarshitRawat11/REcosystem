import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBvBRbG5besqHqCYNj0iy1ErSBP4ivj_Nk',
  authDomain: 'recosystem-next-js.firebaseapp.com',
  projectId: 'recosystem-next-js',
  storageBucket: 'recosystem-next-js.appspot.com',
  messagingSenderId: '35949545253',
  appId: '1:35949545253:web:9b3f703b5269864a1cbccc',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
