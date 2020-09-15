import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDwdD0hTrFIl35soqbN7PKpbao52GbpuFA",
    databaseURL: "https://react-chat-138f3.firebaseio.com/"
};

firebase.initializeApp(config);

export const database = firebase.database();