import React from 'react';
import { Typography, Grid, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#f4f6f8',
        marginTop: theme.spacing(4),
        borderRadius: '8px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    table: {
        minWidth: 650,
    },
    tableHeader: {
        backgroundColor: theme.palette.primary.light,
    },
    tableHeaderCell: {
        color: '#fff',
        fontWeight: 'bold',
    },
    tableCell: {
        color: theme.palette.text.secondary,
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(2),
    },
    updateBtn: {
        color: '#fff',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const Facility = () => {
    const classes = useStyles();

    const facilityDetails = [
        { seNo: 1, facility: 'Library', updateLink: '#update-link-1' },
        { seNo: 2, facility: 'Sports Complex', updateLink: '#update-link-2' },
        { seNo: 3, facility: 'Science Labs', updateLink: '#update-link-3' },
        { seNo: 4, facility: 'Cafeteria', updateLink: '#update-link-4' },
    ];

    return (
        <div className={classes.root}>
            <Typography variant={"h5"} className={classes.sectionTitle}>Facility Details</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>Se No</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Facility</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Update</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {facilityDetails.map((facility, index) => (
                            <TableRow key={index}>
                                <TableCell className={classes.tableCell}>{facility.seNo}</TableCell>
                                <TableCell className={classes.tableCell}>{facility.facility}</TableCell>
                                <TableCell className={classes.tableCell}>
                                    <Button
                                        variant="contained"
                                        className={classes.updateBtn}
                                        href={facility.updateLink}
                                    >
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Facility;
