import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Link, makeStyles, Container } from '@material-ui/core';

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
    link: {
        color: "#F26A2A",
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const SocialMedia = () => {
    const classes = useStyles();

    // Mock data for the table
    const socialMediaData = [
        { soNo: 1, platform: 'Facebook', link: 'https://facebook.com/greenwood' },
        { soNo: 2, platform: 'Twitter', link: 'https://twitter.com/greenwood' },
        { soNo: 3, platform: 'LinkedIn', link: 'https://linkedin.com/company/greenwood' },
    ];

    return (
        <Container className={classes.root}>
            <Typography variant="h5" className={classes.header}>
                Social Media
            </Typography>
            <TableContainer component={Paper}>
                <Table className={classes.table}>
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableCell}>SO No</TableCell>
                            <TableCell className={classes.tableCell}>Platform</TableCell>
                            <TableCell className={classes.tableCell}>Link</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {socialMediaData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.soNo}</TableCell>
                                <TableCell>{row.platform}</TableCell>
                                <TableCell>
                                    <Link href={row.link} target="_blank" rel="noopener noreferrer" className={classes.link}>
                                        {row.link}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default SocialMedia;
