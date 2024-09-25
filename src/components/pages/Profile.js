import React from 'react';
import { Container, Typography } from '@material-ui/core';

const Profile = () => {
    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Profile Page
            </Typography>
            <Typography variant="body1">
                This is the profile page.
            </Typography>
        </Container>
    );
};

export default Profile;
