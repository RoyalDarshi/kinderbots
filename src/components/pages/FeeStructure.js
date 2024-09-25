import React, { useState } from 'react';
import {
    Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, makeStyles, Container
} from '@material-ui/core';

// Reuse the School component's styling for consistency
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        backgroundColor: '#f7f9fc',
        borderRadius: '8px',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
    },
    header: {
        fontWeight: 600,
        fontSize: '1.8rem',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(3),
    },
    table: {
        minWidth: 650,
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
    },
    tableHead: {
        backgroundColor: theme.palette.primary.light,
    },
    tableHeadText: {
        fontWeight: 700,
        color: '#fff',
    },
    tableBodyRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f4f6f8',
        },
    },
    input: {
        width: '100%',
    },
    updateButton: {
        marginTop: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    currencyField: {
        display: 'flex',
        alignItems: 'center',
    },
    currencySymbol: {
        marginRight: theme.spacing(1),
        fontWeight: 'bold',
    },
}));

const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

const FeeStructure = () => {
    const classes = useStyles();

    const [feeDetails, setFeeDetails] = useState([
        { seNo: 1, feeType: 'Tuition Fee', amount: '1000', dueDate: '2023-12-15' },
        { seNo: 2, feeType: 'Lab Fee', amount: '200', dueDate: '2023-11-10' },
        { seNo: 3, feeType: 'Sports Fee', amount: '150', dueDate: '2024-01-05' },
        { seNo: 4, feeType: 'Library Fee', amount: '100', dueDate: '2023-10-20' },
    ]);

    const handleInputChange = (e, index, field) => {
        const { value } = e.target;
        const updatedFees = [...feeDetails];
        updatedFees[index][field] = value;
        setFeeDetails(updatedFees);
    };

    const handleUpdate = (index) => {
        console.log(`Updated Fee Entry ${index + 1}:`, feeDetails[index]);
    };

    return (
        <Container className={classes.container}>
            <Typography className={classes.header}>Fee Structure</Typography>
            <TableContainer component={Paper} className={classes.table}>
                <Table>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableHeadText}>Se No</TableCell>
                            <TableCell className={classes.tableHeadText}>Fee Type</TableCell>
                            <TableCell className={classes.tableHeadText}>Amount</TableCell>
                            <TableCell className={classes.tableHeadText}>Due Date</TableCell>
                            <TableCell className={classes.tableHeadText}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feeDetails.map((fee, index) => (
                            <TableRow key={index} className={classes.tableBodyRow}>
                                <TableCell>{fee.seNo}</TableCell>
                                <TableCell>
                                    <TextField
                                        className={classes.input}
                                        value={fee.feeType}
                                        onChange={(e) => handleInputChange(e, index, 'feeType')}
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell>
                                    <div className={classes.currencyField}>
                                        <span className={classes.currencySymbol}>₹</span>
                                        <TextField
                                            className={classes.input}
                                            value={fee.amount}
                                            onChange={(e) => handleInputChange(e, index, 'amount')}
                                            variant="outlined"
                                        />
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        className={classes.input}
                                        value={fee.dueDate}
                                        onChange={(e) => handleInputChange(e, index, 'dueDate')}
                                        type="date"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="outlined"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        className={classes.updateButton}
                                        onClick={() => handleUpdate(index)}
                                        variant="contained"
                                    >
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default FeeStructure;
