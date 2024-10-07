import React from 'react';
import {
    Container, Typography, Grid, Card, CardContent, Avatar, makeStyles, Link
} from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import PersonIcon from '@material-ui/icons/Person';
import WcIcon from '@material-ui/icons/Wc';
import CodeIcon from '@material-ui/icons/Code';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

// Custom industry-standard styling
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)',
        marginBottom: theme.spacing(4),
    },
    header: {
        fontWeight: 700,
        fontSize: '1.8rem',
        color: "#F26A2A",
        marginBottom: theme.spacing(3),
        textAlign: 'center',
    },
    card: {
        padding: theme.spacing(3),
        borderRadius: '12px',
        backgroundColor: '#fafafa',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
    },
    avatar: {
        width: theme.spacing(18),
        height: theme.spacing(18),
        marginBottom: theme.spacing(2),
    },
    detailItem: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1.5),
    },
    detailIcon: {
        marginRight: theme.spacing(2),
        color: "#F26A2A",
    },
    detailText: {
        fontWeight: 500,
        fontSize: '1rem',
        color: theme.palette.text.primary,
    },
    clickableLink: {
        color: "#F26A2A",
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

const SelectGroup = () => {
    const classes = useStyles();

    const schoolDetails = {
        image: 'https://via.placeholder.com/200',
        schoolName: 'Greenwood High School',
        ownerName: 'John Doe',
        gender: 'Co-ed',
        schoolCode: 'GH12345',
        contact: 'Jane Smith',
        phone: '123-456-7890',
        email: 'greenwood@example.com',
        address: '123 Elm Street, Springfield',
        microWebsite: 'https://www.greenwoodhigh.com',
    };

    return (
        <Container maxWidth="md" className={classes.container}>
            <Typography className={classes.header}>Select Group</Typography>
            <Card className={classes.card}>
                <CardContent>
                    <Grid container justifyContent="center">
                        <Avatar alt="School Image" src={schoolDetails.image} className={classes.avatar} />
                    </Grid>
                    <div className={classes.detailItem}>
                        <SchoolIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>School Name: {schoolDetails.schoolName}</Typography>
                    </div>
                    <div className={classes.detailItem}>
                        <PersonIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>Owner Name: {schoolDetails.ownerName}</Typography>
                    </div>
                    <div className={classes.detailItem}>
                        <WcIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>Gender: {schoolDetails.gender}</Typography>
                    </div>
                    <div className={classes.detailItem}>
                        <CodeIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>School Code: {schoolDetails.schoolCode}</Typography>
                    </div>
                    <div className={classes.detailItem}>
                        <PersonIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>Contact: {schoolDetails.contact}</Typography>
                    </div>
                    <div className={classes.detailItem}>
                        <PhoneIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>Phone: {schoolDetails.phone}</Typography>
                    </div>
                    <div className={classes.detailItem}>
                        <EmailIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>Email: {schoolDetails.email}</Typography>
                    </div>
                    <div className={classes.detailItem}>
                        <HomeIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>Address: {schoolDetails.address}</Typography>
                    </div>
                    <div className={classes.detailItem}>
                        <WebIcon className={classes.detailIcon} />
                        <Typography className={classes.detailText}>
                            Micro Website: <Link href={schoolDetails.microWebsite} className={classes.clickableLink} target="_blank" rel="noopener noreferrer">
                            {schoolDetails.microWebsite}
                        </Link>
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </Container>
    );
};

export default SelectGroup;
