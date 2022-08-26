import React from 'react';
import { Button } from '@mui/material';
import Modal from '../atom/Modal';

const ConfirmModal = ({ text, close }) => {
	return (
		<Modal
			title={'Confirm'}
			footer={
				<React.Fragment>
					<Button variant="outlined" onClick={() => close?.(false)}>
						Cancel
					</Button>
					&nbsp;&nbsp;
					<Button variant="contained" onClick={() => close?.(true)}>
						Ok
					</Button>
				</React.Fragment>
			}
			toggler={() => close?.(false)}
		>
			<p>{text}</p>
		</Modal>
	);
};

export default React.memo(ConfirmModal);
