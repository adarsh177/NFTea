import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#554994',
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				size: 'small',
			},
		},
	},
});

export default theme;
