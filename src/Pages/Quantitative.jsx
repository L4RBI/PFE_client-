

import { Box, Button, Paper, Typography } from "@mui/material";


import Navbar from "../Components/Navbar";


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import illustration1 from '../illustration1.png';



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

function createData(metric, value) {
  return { metric, value  };
}

const rows = [
    createData('SSIM', 111),
    createData('L1', 237),
    createData('PNSR', 262),
    createData('MSE', 305),
  ];



const style = {
    Home: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    HomePaper: {
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "0",
    },
    imagesContainer: {
        width: "75%",
        justifyContent: "space-around",
       
    },
    imageContainer: {
        width: "70%",
    },
};

function Quantitative () {


    return (
        <Box sx={style.Home}>
            <Box sx={{ flexGrow: 0 }}>
                <Navbar />
            </Box>
            <Paper sx={style.HomePaper}>
                    
                <Box sx={style.imagesContainer}>
                    <Typography variant="h3"  style={{ textAlign:"center"}}>
                            Down below you will find the quantitative results we gathered 
                    </Typography>
                    <Typography variant="h6" >
                        <br />
                            this is a table that respresents the metric we used and their values.
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Metric</StyledTableCell>
                                    <StyledTableCell align="center">Value</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row" align="center">
                                        {row.metric}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.value}</StyledTableCell>
                                </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography variant="h6" >
                        <br />
                            this is an illustration that illustrates ? 
                    </Typography>
                    <img
                        style={style.imageContainer}
                        src= {illustration1}
                        alt= "illustration1"
                    />
                    <Typography variant="h6" >
                        <br />
                            this is an illustration that illustrates ? 
                    </Typography>
                    <img
                        style={style.imageContainer}
                        src= {illustration1}
                        alt= "illustration1"
                    />
                                    
                </Box>

            </Paper>
        </Box>
    );
}

export default Quantitative;
