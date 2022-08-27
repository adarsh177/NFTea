import React from 'react';
import './style.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}));

function createData(name, nft, contract, description) {
	return { name, nft, contract, description };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const DashboardUI = () => {
	return (
		<React.Fragment>
			<div className="landingSection">
				<div className="container dashboard">
					<div className="row">
						<div className="col-lg-12">
							<h2>Projects</h2>
							<TableContainer component={Paper}>
								<Table sx={{ minWidth: 700 }} aria-label="customized table">
									<TableHead>
										<TableRow>
											<StyledTableCell>Name</StyledTableCell>
											<StyledTableCell align="right">
												No. of NFTs
											</StyledTableCell>
											<StyledTableCell align="right">
												Contract Address
											</StyledTableCell>
											<StyledTableCell align="right">
												Description
											</StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<StyledTableRow key={row.name}>
												<StyledTableCell component="th" scope="row">
													{row.name}
												</StyledTableCell>
												<StyledTableCell align="right">
													{row.nft}
												</StyledTableCell>
												<StyledTableCell align="right">
													{row.contract}
												</StyledTableCell>
												<StyledTableCell align="right">
													{row.description}
												</StyledTableCell>
											</StyledTableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default DashboardUI;
