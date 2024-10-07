import React from 'react';
import { Typography, Grid, makeStyles, Card, CardContent, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#f4f6f8',
        marginTop: theme.spacing(4),
        borderRadius: '8px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    card: {
        padding: theme.spacing(3),
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '12px',
        marginBottom: theme.spacing(3),
        backgroundColor: '#fff',
    },
    detailItem: {
        marginBottom: theme.spacing(2),
    },
    detailLabel: {
        fontWeight: 'bold',
        color: "#F26A2A",
    },
    detailValue: {
        color: theme.palette.text.secondary,
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: "#F26A2A",
        marginBottom: theme.spacing(2),
    },
}));

const BasicDetails = () => {
    const classes = useStyles();

    const schoolDetails = {
        schoolName: 'Greenwood High School',
        schoolOwnerName: 'John Doe',
        contactPerson: 'Jane Smith',
        gender: 'Co-ed',
        email: 'greenwood@example.com',
        phone: '123-456-7890',
        schoolType: 'Private',
        agreementAmount: '$50,000',
        accountManager: 'Michael Johnson',
        joiningDate: '2023-05-01',
        password: '********',
    };

    const addressDetails = {
        residentialAddress: '789 Maple Street, Springfield',
        schoolAddress: '123 Elm Street, Springfield',
        country: 'United States',
        state: 'Illinois',
        city: 'Springfield',
        pincode: '62704',
    };

    return (
        <Container className={classes.root}>
            <Typography variant={"h5"} className={classes.sectionTitle}>Details</Typography>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container spacing={3}>
                        {Object.keys(schoolDetails).map((key, index) => (
                            <Grid item xs={12} md={6} key={index} className={classes.detailItem}>
                                <Typography className={classes.detailLabel}>
                                    {key.replace(/([A-Z])/g, ' $1')}:
                                </Typography>
                                <Typography className={classes.detailValue}>
                                    {schoolDetails[key]}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>

            <Typography className={classes.sectionTitle}>Address</Typography>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container spacing={3}>
                        {Object.keys(addressDetails).map((key, index) => (
                            <Grid item xs={12} md={6} key={index} className={classes.detailItem}>
                                <Typography className={classes.detailLabel}>
                                    {key.replace(/([A-Z])/g, ' $1')}:
                                </Typography>
                                <Typography className={classes.detailValue}>
                                    {addressDetails[key]}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default BasicDetails;
