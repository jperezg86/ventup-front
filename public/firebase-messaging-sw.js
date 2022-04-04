/* eslint-disable no-undef */
// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyA_hjsW57A4rY7SAPMqIeARVj7s8BEQzMo",
    authDomain: "mi-almacn.firebaseapp.com",
    projectId: "mi-almacn",
    storageBucket: "mi-almacn.appspot.com",
    messagingSenderId: "958612755045",
    appId: "1:958612755045:web:9ccd8ea9285389678c6c8c",
    measurementId: "G-DZ64908QFF",
  };
  

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});