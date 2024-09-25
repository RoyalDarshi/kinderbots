import React, { useState } from 'react';
import {
    Container, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton,
    Typography, TableFooter, TablePagination, InputAdornment, makeStyles
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import VisibilityIcon from '@material-ui/icons/Visibility';
import {useNavigate} from "react-router-dom";

// Custom industry-standard styling
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(4),
        backgroundColor: '#f7f9fc', // Light background for professional look
        borderRadius: '8px',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)', // Soft shadow for a modern touch
    },
    header: {
        fontWeight: 600,
        fontSize: '1.8rem',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(3),
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        backgroundColor: '#fff', // White background for search bar
        borderRadius: '8px',
        padding: '8px 16px',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)',
    },
    searchInput: {
        width: '100%',
    },
    table: {
        minWidth: 750,
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
    },
    tableHead: {
        backgroundColor: theme.palette.primary.light,
    },
    tableHeadText: {
        fontWeight: 700,
        color: '#fff', // White text on header
    },
    tableBodyRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f4f6f8',
        },
    },
    iconButton: {
        color: theme.palette.primary.main,
    },
    paginationContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
}));

const schoolsData = [
    { id: 1, code: 'SCH001', contact: '1234567890', email: 'school1@example.com', address: '123 Elm Street' },
    { id: 2, code: 'SCH002', contact: '0987654321', email: 'school2@example.com', address: '456 Oak Street' },
    { id: 3, code: 'SCH003', contact: '1122334455', email: 'school3@example.com', address: '789 Pine Street' },
    { id: 4, code: 'SCH004', contact: '2233445566', email: 'school4@example.com', address: '101 Maple Avenue' },
    { id: 5, code: 'SCH005', contact: '3344556677', email: 'school5@example.com', address: '555 Birch Lane' },
    { id: 6, code: 'SCH006', contact: '4455667788', email: 'school6@example.com', address: '789 Cedar Road' },
    { id: 7, code: 'SCH007', contact: '5566778899', email: 'school7@example.com', address: '123 Oak Street' },
    { id: 8, code: 'SCH008', contact: '6677889900', email: 'school8@example.com', address: '456 Pine Avenue' },
    { id: 9, code: 'SCH009', contact: '7788990011', email: 'school9@example.com', address: '789 Elm Drive' },
    { id: 10, code: 'SCH010', contact: '8899001122', email: 'school10@example.com', address: '123 Cedar Street' },
    // Add more school data as needed
];

const School = () => {
    const classes = useStyles();
    const navigate=useNavigate();
    const eyeBtnClickHandler=()=>{
        navigate("/school-details")
    }
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setPage(0); // Reset to first page on search
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset to first page on rows per page change
    };

    // Filter schools based on search query
    const filteredSchools = schoolsData.filter((school) =>
        school.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.contact.includes(searchQuery) ||
        school.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        school.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Paginate filtered schools
    const paginatedSchools = filteredSchools.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Container className={classes.container}>
            <Typography className={classes.header}>All Schools</Typography>
            <div className={classes.searchContainer}>
                <TextField
                    className={classes.searchInput}
                    label="Search"
                    variant="outlined"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="school table">
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableHeadText}>So. No</TableCell>
                            <TableCell className={classes.tableHeadText}>Code</TableCell>
                            <TableCell className={classes.tableHeadText}>Contact No</TableCell>
                            <TableCell className={classes.tableHeadText}>Email</TableCell>
                            <TableCell className={classes.tableHeadText}>Address</TableCell>
                            <TableCell className={classes.tableHeadText}>View</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedSchools.map((school, index) => (
                            <TableRow key={school.id} className={classes.tableBodyRow}>
                                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                                <TableCell>{school.code}</TableCell>
                                <TableCell>{school.contact}</TableCell>
                                <TableCell>{school.email}</TableCell>
                                <TableCell>{school.address}</TableCell>
                                <TableCell>
                                    <IconButton onClick={eyeBtnClickHandler} className={classes.iconButton}>
                                        <VisibilityIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                count={filteredSchools.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                labelRowsPerPage="Rows per page"
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default School;
