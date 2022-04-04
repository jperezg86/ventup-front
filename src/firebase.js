import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyA_hjsW57A4rY7SAPMqIeARVj7s8BEQzMo",
  authDomain: "mi-almacn.firebaseapp.com",
  projectId: "mi-almacn",
  storageBucket: "mi-almacn.appspot.com",
  messagingSenderId: "958612755045",
  appId: "1:958612755045:web:9ccd8ea9285389678c6c8c",
  measurementId: "G-DZ64908QFF",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const getFirebaseMessagingToken = (setTokenFound) => {
  return getToken(messaging, {
    vapidKey:
      "BDhf4EHN8dmtM7Fvptbo3MEcI3f-tBgqB2XQRjZja924u2FRIdLRJjyL4yCUaKz70TZI7Xws2n0yDQiT3LAcEJ0",
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});
