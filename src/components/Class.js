import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button, makeStyles, Container } from '@material-ui/core';

// Custom styles for the table and container
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#f4f6f8',
        marginTop: theme.spacing(4),
        borderRadius: '8px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
        color: "#F26A2A",
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: '#F26A2A',
    },
    tableCell: {
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        backgroundColor: "#F26A2A",
        color: '#fff',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const Class = () => {
    const classes = useStyles();

    // Mock data for the table
    const classData = [
        { soNo: 1, class: '10', section: 'A', list: 'View', update: 'Update' },
        { soNo: 2, class: '9', section: 'B', list: 'View', update: 'Update' },
        { soNo: 3, class: '8', section: 'C', list: 'View', update: 'Update' },
    ];

    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>
                Class
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableCell}>SO No</TableCell>
                            <TableCell className={classes.tableCell}>Class</TableCell>
                            <TableCell className={classes.tableCell}>Section</TableCell>
                            <TableCell className={classes.tableCell}>List</TableCell>
                            <TableCell className={classes.tableCell}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {classData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.soNo}</TableCell>
                                <TableCell>{row.class}</TableCell>
                                <TableCell>{row.section}</TableCell>
                                <TableCell>
                                    <Button className={classes.button}>{row.list}</Button>
                                </TableCell>
                                <TableCell>
                                    <Button className={classes.button}>{row.update}</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Class;
