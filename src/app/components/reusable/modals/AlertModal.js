import React from 'react';
import { Button } from '@mui/material';
import Modal from '../atom/Modal';

const AlertModal = ({ text, close }) => {
	return (
		<Modal
			title={'Alert'}
			footer={
				<Button variant="text" onClick={() => close?.()}>
					OK
				</Button>
			}
			toggler={close}
		>
			<p>{text}</p>
		</Modal>
	);
};

export default React.memo(AlertModal);
