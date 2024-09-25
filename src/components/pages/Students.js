import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    TablePagination,
    Typography,
    makeStyles,
} from '@material-ui/core';

// Custom styles
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
        backgroundColor: '#f9f9f9',
    },
    title: {
        marginBottom: theme.spacing(2),
        fontWeight: 'bold',
        color: theme.palette.primary.main,
    },
    table: {
        minWidth: 650,
    },
    tableHead: {
        backgroundColor: theme.palette.primary.light,
    },
    tableCellHeader: {
        fontWeight: 'bold',
        color: theme.palette.common.white,
    },
    stripedRow: {
        backgroundColor: '#f2f2f2',
    },
    pagination: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
    },
}));

// Dummy student data
const studentData = [
    {
        photo: 'https://via.placeholder.com/100',
        name: 'John Doe',
        class: '10th',
        section: 'A',
        admissionNo: '12345',
        fatherName: 'Mr. Doe',
        address: '123 Main St, City, Country',
    },
    {
        photo: 'https://via.placeholder.com/100',
        name: 'Jane Smith',
        class: '9th',
        section: 'B',
        admissionNo: '67890',
        fatherName: 'Mr. Smith',
        address: '456 Elm St, City, Country',
    },
    // Add more students here
];

const Students = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset page number on rows per page change
    };

    // Slice the data for pagination
    const paginatedStudents = studentData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Paper className={classes.container}>
            {/* Title for the Table */}
            <Typography variant="h5" className={classes.title}>
                All Students
            </Typography>

            <TableContainer>
                <Table className={classes.table} aria-label="student table">
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableCellHeader}>Photo</TableCell>
                            <TableCell className={classes.tableCellHeader}>Name</TableCell>
                            <TableCell className={classes.tableCellHeader}>Class</TableCell>
                            <TableCell className={classes.tableCellHeader}>Section</TableCell>
                            <TableCell className={classes.tableCellHeader}>Admission No</TableCell>
                            <TableCell className={classes.tableCellHeader}>Father's Name</TableCell>
                            <TableCell className={classes.tableCellHeader}>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedStudents.map((student, index) => (
                            <TableRow
                                key={index}
                                className={index % 2 === 0 ? classes.stripedRow : null}
                            >
                                <TableCell>
                                    <Avatar alt={student.name} src={student.photo} />
                                </TableCell>
                                <TableCell>{student.name}</TableCell>
                                <TableCell>{student.class}</TableCell>
                                <TableCell>{student.section}</TableCell>
                                <TableCell>{student.admissionNo}</TableCell>
                                <TableCell>{student.fatherName}</TableCell>
                                <TableCell>{student.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination */}
            <TablePagination
                component="div"
                count={studentData.length} // Total number of students
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                rowsPerPageOptions={[5, 10, 25]} // Customize the options
                className={classes.pagination}
            />
        </Paper>
    );
};

export default Students;
