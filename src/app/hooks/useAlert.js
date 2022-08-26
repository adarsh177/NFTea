import { useEffect, useRef, useState } from 'react';

const useAlert = () => {
	const [showAlert, setShowAlert] = useState(false);
	const origAlert = useRef(window.alert);

	const hideAlert = () => setShowAlert(false);

	useEffect(() => {
		window.alert = (text) => {
			setShowAlert(text);
		};

		return () => {
			// Returning original alert definition
			window.alert = origAlert.current;
		};
	}, []);

	return [showAlert, hideAlert];
};

export default useAlert;
