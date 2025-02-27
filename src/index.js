// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {initializeApp} from 'firebase/app'

import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD2cRCZq2Ngz2fWnkDtzG43p3OzPRHX0CA",
  authDomain: "hack-n-win-910fb.firebaseapp.com",
  projectId: "hack-n-win-910fb",
  storageBucket: "hack-n-win-910fb.firebasestorage.app",
  messagingSenderId: "70627595785",
  appId: "1:70627595785:web:40d57850350a2988080ad8",
  measurementId: "G-M5DKCVVVSV",
};


//init firebase app
initializeApp(firebaseConfig)

//init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'UserInfo')

//get collection data
getDocs(colRef)
  .then((snapshot)=>{
    let UserInfo = [];
    snapshot.docs.forEach((doc) => {
      UserInfo.push( {...doc.data(), id: doc.id })
    })
    console.log(UserInfo)
  })
    .catch((error)=>{
      console.log(error)
    })
