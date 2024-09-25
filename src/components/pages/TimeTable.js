import React, { useState } from 'react';
import {
    Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Container,
    makeStyles
} from '@material-ui/core';

// Sample data
const data = {
    'Class A': [
        { day: 'Monday', period1: 'Math', period2: 'English', period3: 'History' },
        { day: 'Tuesday', period1: 'Science', period2: 'Math', period3: 'PE' },
        { day: 'Wednesday', period1: 'Art', period2: 'Geography', period3: 'Music' },
        { day: 'Thursday', period1: 'Biology', period2: 'Chemistry', period3: 'Physics' },
        { day: 'Friday', period1: 'History', period2: 'English', period3: 'Math' },
        { day: 'Saturday', period1: 'PE', period2: 'Art', period3: 'Science' },
    ],
    'Class B': [
        { day: 'Monday', period1: 'Biology', period2: 'Chemistry', period3: 'Physics' },
        { day: 'Tuesday', period1: 'Math', period2: 'English', period3: 'Art' },
        { day: 'Wednesday', period1: 'Geography', period2: 'History', period3: 'PE' },
        { day: 'Thursday', period1: 'Music', period2: 'Art', period3: 'Biology' },
        { day: 'Friday', period1: 'Chemistry', period2: 'Physics', period3: 'Math' },
        { day: 'Saturday', period1: 'English', period2: 'PE', period3: 'Science' },
    ],
};

// Industry-standard styling
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
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: theme.spacing(2),
        gap: theme.spacing(2),
    },
    toggleButton: {
        marginRight: theme.spacing(2),
        padding: theme.spacing(1, 3),
        fontWeight: 'bold',
        borderRadius: '30px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: '#fff',
        },
    },
    activeButton: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
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
        fontSize: '1.1rem',
    },
    tableBodyRow: {
        '&:nth-of-type(odd)': {
            backgroundColor: '#f4f6f8',
        },
    },
    tableBodyText: {
        fontSize: '1rem',
    },
}));

const TimeTable = () => {
    const classes = useStyles();
    const [selectedClass, setSelectedClass] = useState('Class A');

    const handleButtonClick = (className) => {
        setSelectedClass(className);
    };

    return (
        <Container className={classes.container}>
            <Typography className={classes.header}>School Time Table</Typography>
            <Box className={classes.buttonContainer}>
                {Object.keys(data).map((className) => (
                    <Button
                        key={className}
                        className={`${classes.toggleButton} ${selectedClass === className ? classes.activeButton : ''}`}
                        onClick={() => handleButtonClick(className)}
                    >
                        {className}
                    </Button>
                ))}
            </Box>
            <TableContainer component={Paper} className={classes.table}>
                <Table aria-label="time table">
                    <TableHead className={classes.tableHead}>
                        <TableRow>
                            <TableCell className={classes.tableHeadText}>Day</TableCell>
                            <TableCell className={classes.tableHeadText}>Period 1</TableCell>
                            <TableCell className={classes.tableHeadText}>Period 2</TableCell>
                            <TableCell className={classes.tableHeadText}>Period 3</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data[selectedClass].map((row, index) => (
                            <TableRow key={index} className={classes.tableBodyRow}>
                                <TableCell className={classes.tableBodyText}>{row.day}</TableCell>
                                <TableCell className={classes.tableBodyText}>{row.period1}</TableCell>
                                <TableCell className={classes.tableBodyText}>{row.period2}</TableCell>
                                <TableCell className={classes.tableBodyText}>{row.period3}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default TimeTable;
