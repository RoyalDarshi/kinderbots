import React, { useState } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Button,
    Grid,
    Divider,
} from '@mui/material';

const AssignmentComponent = () => {
    const [assignments, setAssignments] = useState([]);
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        date: '',
    });

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.title && formValues.description && formValues.date) {
            setAssignments([...assignments, { ...formValues }]);
            setFormValues({ title: '', description: '', date: '' });
        }
    };

    return (
        <Paper
            elevation={4}
            sx={{
                margin: '30px auto',
                padding: '30px',
                maxWidth: '650px',
                borderRadius: '15px',
                backgroundColor: '#f7f7f7',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    marginBottom: '30px',
                    fontWeight: 600,
                    color: '#3f51b5', // Primary theme color
                }}
            >
                Assignments
            </Typography>

            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Title"
                            fullWidth
                            name="title"
                            value={formValues.title}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Description"
                            fullWidth
                            multiline
                            rows={4}
                            name="description"
                            value={formValues.description}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Assigned Date"
                            type="date"
                            fullWidth
                            name="date"
                            value={formValues.date}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            required
                        />
                    </Grid>
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    sx={{
                        marginTop: 3,
                        padding: '12px 0',
                        backgroundColor: '#3f51b5', // Primary theme color
                        color: '#fff',
                        fontWeight: 600,
                        '&:hover': {
                            backgroundColor: '#303f9f', // Darker shade on hover
                        },
                    }}
                >
                    Add Assignment
                </Button>
            </form>

            <Divider sx={{ margin: '16px 0' }} />

            {assignments.map((assignment, index) => (
                <div key={index} style={{ margin: '16px 0', padding: '16px', borderRadius: '8px', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
                    <Typography variant="h6">{assignment.title}</Typography>
                    <Typography variant="body2">{assignment.description}</Typography>
                    <Typography variant="caption" style={{ color: '#888', marginTop: '8px' }}>
                        Assigned Date: {assignment.date}
                    </Typography>
                </div>
            ))}
        </Paper>
    );
};

export default AssignmentComponent;
