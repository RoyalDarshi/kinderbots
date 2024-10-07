import React, { useState } from 'react';
import {
    Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography, TableFooter, TablePagination, makeStyles
} from '@material-ui/core';

// Custom industry-standard styling similar to School component
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
        color: "#F26A2A",
        marginBottom: theme.spacing(3),
    },
    table: {
        minWidth: 750,
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)',
    },
    tableHead: {
        backgroundColor: '#F26A2A',
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
    presentButton: {
        backgroundColor: theme.palette.success.main,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'none',
        padding: theme.spacing(1, 3),
        borderRadius: '30px',
        '&:hover': {
            backgroundColor: theme.palette.success.dark,
        },
    },
    absentButton: {
        backgroundColor: theme.palette.error.main,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'none',
        padding: theme.spacing(1, 3),
        borderRadius: '30px',
        marginLeft: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.error.dark,
        },
    },
    statusText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    presentText: {
        color: theme.palette.success.main,
    },
    absentText: {
        color: theme.palette.error.main,
    },
    paginationContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
}));

const Attendance = () => {
    const classes = useStyles();

    const initialStudents = [
        { id: 1, name: 'John Doe', status: null },
        { id: 2, name: 'Jane Smith', status: null },
        { id: 3, name: 'Michael Brown', status: null },
        { id: 4, name: 'Emily Johnson', status: null },
    ];

    const [students, setStudents] = useState(initialStudents);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const markAttendance = (id, status) => {
        const updatedStudents = students.map((student) =>
            student.id === id ? { ...student, status } : student
        );
        setStudents(updatedStudents);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedStudents = students.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Container className={classes.container}>
            <Typography className={classes.header}>Student Attendance</Typography>
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="attendance table">
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableHeadText}>Student Name</TableCell>
                            <TableCell className={classes.tableHeadText} align="center">Attendance</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedStudents.map((student, index) => (
                            <TableRow key={student.id} className={classes.tableBodyRow}>
                                <TableCell>{student.name}</TableCell>
                                <TableCell align="center">
                                    {student.status === null ? (
                                        <>
                                            <Button
                                                className={classes.presentButton}
                                                onClick={() => markAttendance(student.id, 'Present')}
                                            >
                                                Present
                                            </Button>
                                            <Button
                                                className={classes.absentButton}
                                                onClick={() => markAttendance(student.id, 'Absent')}
                                            >
                                                Absent
                                            </Button>
                                        </>
                                    ) : (
                                        <Typography
                                            className={`${classes.statusText} ${student.status === 'Present' ? classes.presentText : classes.absentText}`}
                                        >
                                            {student.status}
                                        </Typography>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                count={students.length}
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

export default Attendance;
