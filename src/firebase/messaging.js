import firebase from './index';
import 'firebase/messaging';

let messaging = {};

try {
	messaging = firebase.messaging();
} catch (er) {}

export default messaging;
