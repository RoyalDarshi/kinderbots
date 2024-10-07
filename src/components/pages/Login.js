import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, Container, Typography, MenuItem, Select, InputLabel, FormControl, Link, makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const roles = ['admin', 'partner']; // Define roles

const useStyles = makeStyles((theme) => ({
    container: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f4f6f8',
        padding: theme.spacing(4),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[5],
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    inputField: {
        marginBottom: theme.spacing(2),
    },
    submitButton: {
        margin: theme.spacing(3, 0, 2),
        padding: theme.spacing(1.5),
        fontWeight: 'bold',
        backgroundColor: '#F26A2A',  // Set custom orange background color
        color: '#FFFFFF',            // Set text color to white
        '&:hover': {
            backgroundColor: '#D65F20', // A darker shade for hover
        },
    },
    title: {
        marginBottom: theme.spacing(2),
        color: "#F26A2A",
    },
    link: {
        marginTop: theme.spacing(2),
        color: '#F26A2A',
    },
}));

const Login = () => {
    const classes = useStyles();
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = (data) => {
        console.log(data);
        login(data.email, data.password, data.role); // Pass role to login function
        navigate('/');
    };

    return (
        <Container maxWidth="sm" className={classes.container}>
            <Typography variant="h4" component="h1" gutterBottom className={classes.title}>
                Login
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                <TextField
                    label="Email"
                    {...register('email', { required: 'Email is required' })}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    fullWidth
                    className={classes.inputField}
                />
                <TextField
                    label="Password"
                    type="password"
                    {...register('password', { required: 'Password is required' })}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    fullWidth
                    className={classes.inputField}
                />
                <FormControl fullWidth margin="normal" className={classes.inputField}>
                    <InputLabel id="role-label">Role</InputLabel>
                    <Controller
                        name="role"
                        control={control}
                        defaultValue=""
                        rules={{ required: 'Role is required' }}
                        render={({ field }) => (
                            <Select
                                labelId="role-label"
                                {...field}
                                error={!!errors.role}
                            >
                                {roles.map((role) => (
                                    <MenuItem key={role} value={role}>
                                        {role}
                                    </MenuItem>
                                ))}
                            </Select>
                        )}
                    />
                    {errors.role && <Typography color="error">{errors.role.message}</Typography>}
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    className={classes.submitButton}
                >
                    Login
                </Button>
            </form>
            <Typography variant="body2" align="center" className={classes.link}>
                Don't have an account? <Link href="/register">Register</Link>
            </Typography>
        </Container>
    );
};

export default Login;
