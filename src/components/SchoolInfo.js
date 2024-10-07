import React, { useState } from 'react';
import {Button, Container, makeStyles, Typography} from '@material-ui/core';
import BasicDetails from './BasicDetails';
import Class from "./Class";
import SocialMedia from "./SocialMedia";
import Document from "./Document";
import Facility from "./Facility"; // Import the BasicDetails component

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(3),
        backgroundColor: '#f4f6f8',
    },header: {
        fontWeight: 'bold',
        marginBottom: theme.spacing(3),
        color: "#F26A2A",
    },
    toggleButton: {
        marginRight: theme.spacing(2),
        padding: theme.spacing(1, 3),
        fontWeight: 'bold',
        borderRadius: '30px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
        '&:hover': {
            backgroundColor: '#F26A2A',
            color: '#fff',
        },
    },
    activeButton: {
        backgroundColor: "#F26A2A",
        color: '#fff',
    },
    content: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(2),
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: "#F26A2A",
        marginBottom: theme.spacing(2),
    },
}));

const SchoolInfo = () => {
    const classes = useStyles();
    const [activeSection, setActiveSection] = useState('Basic Details');

    // Mock components for each section
    const renderContent = () => {
        switch (activeSection) {
            case 'Basic Details':
                return <BasicDetails />;
            case 'Class':
                return <Class />;
            case 'Social Media':
                return <SocialMedia />;
            case 'Documents':
                return <Document />;
            case 'Facility':
                return <Facility />;
            default:
                return null;
        }
    };

    return (
        <Container className={classes.root}>
            <Typography variant="h4" className={classes.header}>
                Details
            </Typography>
            <div>
                {['Basic Details', 'Class', 'Social Media', 'Documents', 'Facility'].map((section) => (
                    <Button
                        key={section}
                        className={`${classes.toggleButton} ${activeSection === section && classes.activeButton}`}
                        onClick={() => setActiveSection(section)}
                    >
                        {section}
                    </Button>
                ))}
            </div>
            <div className={classes.content}>
                {renderContent()}
            </div>
        </Container>
    );
};

export default SchoolInfo;
