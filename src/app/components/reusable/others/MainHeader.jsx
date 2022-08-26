import React from 'react';
import { Button, IconButton } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import OpenInNew from '@mui/icons-material/OpenInNew';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MainHeader = () => {
	const [expandMenu, setExpandMenu] = React.useState(false);

	return (
		<React.Fragment>
			<header className="mainheader">
				<a href="/" className="mainheader-left">
					NFTea
				</a>
				<div className="mainheader-right">
					<Link to="/">
						<Button variant="outlined">
							SDK &nbsp; <OpenInNew />
						</Button>
					</Link>
					&nbsp;&nbsp;
					<Link to="/docs">
						<Button variant="outlined">View Docs</Button>
					</Link>
					&nbsp;&nbsp;
					<Button variant="contained">Login</Button>
				</div>
				<div className="mainheader-rightmobile">
					<IconButton onClick={() => setExpandMenu((v) => !v)} size="small">
						{expandMenu ? <Close /> : <Menu />}
					</IconButton>
				</div>
			</header>

			{/* Mobile Header Menu */}
			{expandMenu ? (
				<motion.div
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					className="mainheader-mobilemenu"
				>
					<Button variant="outlined" className="mainheader-mobilemenu-item">
						SDK &nbsp; <OpenInNew />
					</Button>
					<Button variant="outlined" className="mainheader-mobilemenu-item">
						View Docs
					</Button>
					<Button variant="contained" className="mainheader-mobilemenu-item">
						Login
					</Button>
				</motion.div>
			) : null}
		</React.Fragment>
	);
};

export default MainHeader;