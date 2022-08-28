import React, { useEffect } from 'react';
import { Button, IconButton } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import OpenInNew from '@mui/icons-material/OpenInNew';
import Web3 from 'web3';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// import { getUserWalletAddress } from 'nftea-sdk/base/frontend';
import './style.css';
const MainHeader = () => {
	const [expandMenu, setExpandMenu] = React.useState(false);
	// checking for authentication
	const isAuth = () => {
		return window.localStorage.getItem('isAuth') !== null;
	};
	useEffect(() => {
		isAuth();
	});

	async function Logout() {
		try {
			window.localStorage.removeItem('isAuth');
			window.location.href = '/';
			return true;
		} catch (error) {
			console.log(error);
			return false;
		}
	}

	return (
		<React.Fragment>
			<header className="mainheader">
				<a href="/" className="mainheader-left">
					NFTea
				</a>
				<div className="mainheader-right">
					<Link to="/#about" className="mainheaderLink">
						<Button variant="contained">About</Button>
					</Link>
					&nbsp;&nbsp;
					<Link to="/">
						<Button variant="contained">
							SDK
							<OpenInNew />
						</Button>
					</Link>
					&nbsp;&nbsp;
					<Link to="/docs">
						<Button variant="contained">View Docs</Button>
					</Link>
					&nbsp;&nbsp;
					{!isAuth() ? (
						<>
							<Link to="/login">
								&nbsp;&nbsp;
								<Button variant="contained" color="success">
									Login
								</Button>
							</Link>
							&nbsp; &nbsp;
						</>
					) : (
						<>
							<Link to="/dashboard" className="mainheaderLink">
								<Button variant="contained">DashBoard</Button>
							</Link>
							&nbsp;&nbsp;
							<Link to="/">
								&nbsp;&nbsp;
								<Button variant="contained" color="success" onClick={Logout}>
									Logout
								</Button>
							</Link>
							&nbsp; &nbsp;
						</>
					)}
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
					<Link to="/#about" className="mainheaderLink">
						<Button variant="contained">About</Button>
					</Link>
					&nbsp;&nbsp;
					<Link to="/">
						<Button variant="contained">
							SDK
							<OpenInNew />
						</Button>
					</Link>
					&nbsp;&nbsp;
					<Link to="/docs">
						<Button variant="contained">View Docs</Button>
					</Link>
					{!isAuth() ? (
						<>
							&nbsp;&nbsp;
							<Link to="/login">
								<Button variant="contained" color="success">
									Login
								</Button>
							</Link>
						</>
					) : (
						<>
							&nbsp;&nbsp;
							<Link to="/dashboard" className="mainheaderLink">
								<Button variant="contained">DashBoard</Button>
							</Link>
							&nbsp;&nbsp;
							<Link to="/">
								<Button variant="contained" color="success" onClick={Logout}>
									Logout
								</Button>
							</Link>
						</>
					)}
				</motion.div>
			) : null}
		</React.Fragment>
	);
};

export default MainHeader;
