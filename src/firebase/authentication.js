// File to house the global authentication ref of firebase.

import mainFirebase from 'firebase/app';
import 'firebase/auth';
import firebase from './index';

const auth = firebase.auth();

// Providers
let googleProvider = new mainFirebase.auth.GoogleAuthProvider();

export default auth;
export const providers = { googleProvider, mainFirebase };

const getToken = async (refreshToken = true) => {
	if (auth.currentUser) {
		let token = await auth.currentUser.getIdToken(refreshToken);
		localStorage.setItem('usertoken', token);
		return token;
	} else return localStorage.getItem('usertoken') || '';
};

const createCredential = (email, password) => {
	return mainFirebase.auth.EmailAuthProvider.credential(email, password);
};

export { getToken, createCredential };
