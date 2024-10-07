import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Divider } from '@mui/material';

const ReportCard = () => {
    const [studentData, setStudentData] = useState({
        name: 'John Doe',
        grade: '10',
        rollNumber: '123456',
        subjects: [
            { name: 'Mathematics', marks: 88 },
            { name: 'Science', marks: 92 },
            { name: 'English', marks: 85 },
            { name: 'History', marks: 90 },
            { name: 'Physical Education', marks: 95 }
        ],
    });

    const handleSubjectChange = (index, field, value) => {
        const newSubjects = [...studentData.subjects];
        newSubjects[index][field] = value;
        setStudentData({ ...studentData, subjects: newSubjects });
    };

    const calculateTotalMarks = () => studentData.subjects.reduce((total, subject) => total + parseFloat(subject.marks || 0), 0);

    const calculateAverageMarks = () => (calculateTotalMarks() / studentData.subjects.length).toFixed(2);

    return (
        <Paper elevation={3} style={{ padding: '40px', margin: '30px auto', maxWidth: 800, borderRadius: '10px', textAlign: 'center' }}>
            <Box marginBottom={3}>
                <Typography variant="h4" gutterBottom style={{ fontWeight: 600, color: '#F26A2A' }}>
                    Student Report Card
                </Typography>
            </Box>

            <Divider style={{ marginBottom: '30px' }} />

            <Box display="flex" justifyContent="space-between" marginBottom={3}>
                <Typography variant="h6">Name: <TextField value={studentData.name} onChange={(e) => setStudentData({ ...studentData, name: e.target.value })} /></Typography>
                <Typography variant="h6">Grade: <TextField value={studentData.grade} onChange={(e) => setStudentData({ ...studentData, grade: e.target.value })} /></Typography>
                <Typography variant="h6">Roll Number: <TextField value={studentData.rollNumber} onChange={(e) => setStudentData({ ...studentData, rollNumber: e.target.value })} /></Typography>
            </Box>

            <TableContainer component={Paper} style={{ padding: '20px', margin: '0 auto', maxWidth: '90%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" style={{ backgroundColor: '#F26A2A', color: 'white', fontSize: '16px', fontWeight: 'bold', padding: '10px' }}>
                                Subject
                            </TableCell>
                            <TableCell align="center" style={{ backgroundColor: '#F26A2A', color: 'white', fontSize: '16px', fontWeight: 'bold', padding: '10px' }}>
                                Marks
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {studentData.subjects.map((subject, index) => (
                            <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#ffffff' }}>
                                <TableCell align="center" style={{ fontSize: '15px', fontWeight: '500', padding: '10px' }}>
                                    <TextField
                                        value={subject.name}
                                        onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
                                        style={{ width: '150px' }}
                                    />
                                </TableCell>
                                <TableCell align="center" style={{ fontSize: '15px', fontWeight: '500', padding: '10px' }}>
                                    <TextField
                                        type="number"
                                        value={subject.marks}
                                        onChange={(e) => handleSubjectChange(index, 'marks', e.target.value)}
                                        style={{ width: '100px' }}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', padding: '10px' }}>Total Marks</TableCell>
                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', padding: '10px' }}>{calculateTotalMarks()}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', padding: '10px' }}>Average Marks</TableCell>
                            <TableCell align="center" style={{ fontWeight: '600', fontSize: '16px', padding: '10px' }}>{calculateAverageMarks()}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default ReportCard;
