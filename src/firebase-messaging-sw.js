// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.8.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: 'AIzaSyBQok8zu1fQuUHxzJIrwKlMh5yTYzmCEUw',
    authDomain: 'angular-pwa-platzi-933c4.firebaseapp.com',
    databaseURL: 'https://angular-pwa-platzi-933c4.firebaseio.com',
    projectId: 'angular-pwa-platzi-933c4',
    storageBucket: 'angular-pwa-platzi-933c4.appspot.com',
    messagingSenderId: '754006674509',
    appId: '1:754006674509:web:b2833b9200e1e924af2004'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();