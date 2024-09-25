import React from 'react';
import { Grid, Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';

// Custom styles
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
        backgroundColor: '#f4f6f8',
        margin: 0, // Prevent margin collapsing
        width: '100%', // Ensure the container doesn't overflow
        boxSizing: 'border-box', // Include padding in the element's width and height
    },
    gridItem: {
        padding: theme.spacing(2), // Make sure there's spacing between items without causing overflow
    },
    card: {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
            transform: 'translateY(-10px)', // Lift the card on hover
        },
    },
    cardContent: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    icon: {
        fontSize: '3rem',
        color: theme.palette.primary.main,
        marginBottom: theme.spacing(1),
    },
    label: {
        fontWeight: 500,
        color: theme.palette.text.secondary,
    },
    count: {
        fontWeight: 700,
        color: theme.palette.text.primary,
    },
}));

const Home = ({ stats }) => {
    const classes = useStyles();

    // Destructure the stats
    const { numStudents, numSchools, numTeachers, numDistrictAgents } = stats;

    // Function to render each card
    const renderCard = (icon, label, count) => (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography className={classes.icon}>{icon}</Typography>
                <Typography variant="h6" className={classes.label}>
                    {label}
                </Typography>
                <Typography variant="h4" className={classes.count}>
                    {count}
                </Typography>
            </CardContent>
        </Card>
    );

    return (
        <Grid container spacing={4} className={classes.container} justifyContent="center">
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
                {renderCard(<PeopleIcon className={classes.icon} />, 'Students', numStudents)}
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
                {renderCard(<SchoolIcon className={classes.icon} />, 'Schools', numSchools)}
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
                {renderCard(<PersonIcon className={classes.icon} />, 'Teachers', numTeachers)}
            </Grid>
            <Grid item xs={12} sm={6} md={3} className={classes.gridItem}>
                {renderCard(<BusinessIcon className={classes.icon} />, 'District Agents', numDistrictAgents)}
            </Grid>
        </Grid>
    );
};

export default Home;
