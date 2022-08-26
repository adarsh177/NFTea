import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const Modal = ({
	className,
	headerClassName,
	footerClassName,
	contentClassName,
	title,
	toggler,
	children,
	footer,
}) => {
	return (
		<AnimatePresence>
			<motion.div
				className="modal-backdrop"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<motion.div
					className={`modal-main ${className}`}
					initial={{ scale: 0 }}
					animate={{ scale: 1 }}
					exit={{ scale: 0 }}
					transition={{
						duration: 0.35,
					}}
				>
					<div className={`modal-header ${headerClassName}`}>
						<p className="modal-header-title">{title}</p>
						<IconButton onClick={() => toggler()}>
							<Close htmlColor="#fff" />
						</IconButton>
					</div>
					<div className={`modal-content ${contentClassName}`}>{children}</div>
					{footer ? (
						<div className={`modal-footer ${footerClassName}`}>{footer}</div>
					) : null}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
};

export default React.memo(Modal);
