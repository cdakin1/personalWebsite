const firebase = require('firebase');

const config = {
  apiKey: 'AIzaSyA7wTwOKQWR4Fuvq2IIGxmphkYS6rXgp6U',
  authDomain: 'my-website-2c167.firebaseapp.com',
  databaseURL: 'https://my-website-2c167.firebaseio.com',
  storageBucket: 'my-website-2c167.appspot.com',
  messagingSenderId: '1034834868869',
};
firebase.initializeApp(config);
console.log(firebase);
console.log('hello world');
