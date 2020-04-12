import Firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyCIw5F1qmPamBagDcNoFyNeVJ4A3kkwShw',
  authDomain: 'basket-61e29.firebaseapp.com',
  databaseURL: 'https://basket-61e29.firebaseio.com',
  projectId: 'basket-61e29',
  storageBucket: 'basket-61e29.appspot.com',
  messagingSenderId: '167876900905',
  appId: '1:167876900905:web:31e3e2d2e6940d81920438',
  measurementId: 'G-ELEM304EBB',
}
let app = Firebase.initializeApp(config)
export const db = app.database()
