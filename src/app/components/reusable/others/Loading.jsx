import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = () => {
	return (
		<AnimatePresence>
			<motion.div
				className="modal-backdrop"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<motion.img
					className={`modal-main modal-loadingmodal`}
					src="/images/ic_animated.svg"
					alt="NFTea Loading"
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
					transition={{
						duration: 0.35,
					}}
				></motion.img>
			</motion.div>
		</AnimatePresence>
	);
};

export default React.memo(Modal);
