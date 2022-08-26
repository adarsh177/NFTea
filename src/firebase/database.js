// File to house the global database ref of firebase.

// Complementary firestore file.

import mainFirebase from 'firebase/app';
import firebase from './index';
import 'firebase/firestore';

const db = firebase.firestore();

if (process.env.REACT_APP_USE_ENV === 'development') {
	// Experimental Firestore Local Cache for better offline performance.
	db.settings({
		cacheSizeBytes: 5242880, // 5 Megabytes cache
	});

	try {
		db.enablePersistence();
	} catch (err) {
		console.log('Failed to setup offline cache for FireStore: ', err);
	}
}

export default db;
export const firestore = mainFirebase.firestore;
