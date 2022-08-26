import { useEffect, useRef, useState } from 'react';

const useConfirm = () => {
	const [showConfirm, setShowConfirm] = useState(false);
	const origAlert = useRef(window.confirm);
	const callbackRef = useRef();

	const closeConfirm = (ans) => {
		callbackRef.current?.(ans);
		callbackRef.current = null;
		setShowConfirm(false);
	};

	useEffect(() => {
		window.confirm = (text, callback) => {
			setShowConfirm(text);
			callbackRef.current = callback;
		};

		return () => {
			// Returning original confirm definition
			window.confirm = origAlert.current;
		};
	}, []);

	return [showConfirm, closeConfirm];
};

export default useConfirm;
