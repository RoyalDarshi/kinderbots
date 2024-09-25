import React, { useState } from 'react';
import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// Initial fee structure details
const initialFeeDetails = [
    { label: 'Admission Form + Prospectus', amount: 0 },
    { label: 'Admission Fees + Activity Charges (One-time, non-refundable)', amount: 0 },
    { label: 'Student Kit (Books, Bag, Two sets of uniform, etc.)', amount: 0 },
    { label: 'Annual Day / Sports Day', amount: 0 },
    { label: 'Fees Per Month / Tuition Fees', amount: 0 },
    { label: 'Transport Charges', amount: 0 },
    { label: 'Others', amount: 0 },
];

// Custom styles using makeStyles
const useStyles = makeStyles((theme) => ({
    container: {
        margin: '40px auto',
        padding: '40px',
        maxWidth: '700px',
        borderRadius: '20px',
        backgroundColor: '#f5f5f5',
    },
    title: {
        textAlign: 'center',
        marginBottom: '30px',
        fontWeight: 700,
        color: theme.palette.primary.main,
    },
    tableHeadCell: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    totalCell: {
        fontWeight: 'bold',
        fontSize: '16px',
    },
    textField: {
        width: '120px',
        '& .MuiInputBase-root': {
            backgroundColor: '#fff',
            borderRadius: '8px',
        },
    },
    submitButton: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(1.5, 0),
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        fontWeight: 700,
        borderRadius: '12px',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
    },
}));

const OnlineFeesPayment = () => {
    const classes = useStyles();
    const [feeDetails, setFeeDetails] = useState(initialFeeDetails);

    const handleAmountChange = (index, newAmount) => {
        const updatedFees = [...feeDetails];
        updatedFees[index].amount = parseFloat(newAmount) || 0;
        setFeeDetails(updatedFees);
    };

    const getTotal = () => {
        return feeDetails.reduce((acc, fee) => acc + fee.amount, 0).toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted Fee Details:', feeDetails);
    };

    return (
        <Paper elevation={6} className={classes.container}>
            <Typography variant="h4" className={classes.title}>
                Online Fee
            </Typography>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHeadCell}>Fee Type</TableCell>
                            <TableCell className={classes.tableHeadCell} align="right">Amount (₹)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {feeDetails.map((fee, index) => (
                            <TableRow key={index}>
                                <TableCell>{fee.label}</TableCell>
                                <TableCell align="right">
                                    <TextField
                                        type="number"
                                        value={fee.amount}
                                        onChange={(e) => handleAmountChange(index, e.target.value)}
                                        variant="outlined"
                                        size="small"
                                        className={classes.textField}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell className={classes.totalCell}>Total</TableCell>
                            <TableCell align="right" className={classes.totalCell}>
                                ₹ {getTotal()}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <Button
                type="submit"
                onClick={handleSubmit}
                fullWidth
                className={classes.submitButton}
            >
                Submit Fee
            </Button>
        </Paper>
    );
};

export default OnlineFeesPayment;
