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
    imageFile: {
        width: '180px',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.2)',
    },
    downloadBtn: {
        color: '#fff',
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}));

const Document = () => {
    const classes = useStyles();

    const documentDetails = [
        { soNo: 1, title: 'Photo', file: 'https://via.placeholder.com/180'},
        { soNo: 2, title: 'Aadhar Card', file: 'https://via.placeholder.com/180'},
        { soNo: 3, title: 'Pancard', file: 'https://via.placeholder.com/180'},
        { soNo: 4, title: 'Agreement', file: '', downloadLink: '#download-link-4'},
    ];

    return (
        <div className={classes.root}>
            <Typography variant={"h5"} className={classes.sectionTitle}>Document</Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell className={classes.tableHeaderCell}>SO No</TableCell>
                            <TableCell className={classes.tableHeaderCell}>Title</TableCell>
                            <TableCell className={classes.tableHeaderCell}>File</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {documentDetails.map((doc, index) => (
                            <TableRow key={index}>
                                <TableCell className={classes.tableCell}>{doc.soNo}</TableCell>
                                <TableCell className={classes.tableCell}>{doc.title}</TableCell>
                                <TableCell className={classes.tableCell}>
                                    {doc.file ? (
                                        <img src={doc.file} alt={doc.title} className={classes.imageFile} />
                                    ) : (
                                        <Button
                                            variant="contained"
                                            className={classes.downloadBtn}
                                            href={doc.downloadLink}
                                            download
                                        >
                                            View Agreement
                                        </Button>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Document;
