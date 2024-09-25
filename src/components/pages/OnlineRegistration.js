import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Grid, MenuItem } from '@mui/material';

const RegistrationForm = () => {
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
        class: '', // Changed 'course' to 'class'
    });

    const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4']; // Example classes

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic goes here
        console.log('Form Submitted:', formValues);
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
                Online Registration & Admission
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            label="Full Name"
                            fullWidth
                            name="fullName"
                            value={formValues.fullName}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Email"
                            fullWidth
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Phone"
                            fullWidth
                            name="phone"
                            value={formValues.phone}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Date of Birth"
                            type="date"
                            fullWidth
                            name="dob"
                            value={formValues.dob}
                            onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Gender"
                            fullWidth
                            select
                            name="gender"
                            value={formValues.gender}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                        </TextField>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Class" // Changed label to 'Class'
                            fullWidth
                            select
                            name="class" // Changed from 'course' to 'class'
                            value={formValues.class}
                            onChange={handleChange}
                            variant="outlined"
                            required
                        >
                            {classes.map((classOption) => (
                                <MenuItem key={classOption} value={classOption}>
                                    {classOption}
                                </MenuItem>
                            ))}
                        </TextField>
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
                    Submit Registration
                </Button>
            </form>
        </Paper>
    );
};

export default RegistrationForm;
