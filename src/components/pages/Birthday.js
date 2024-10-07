import React from 'react';
import { Card, CardContent, Typography, Grid, makeStyles, Avatar } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        padding: theme.spacing(3),
        backgroundColor: '#f9f9f9',
        boxShadow: theme.shadows[3],
        borderRadius: theme.shape.borderRadius,
        maxWidth: 900,
        margin: 'auto',
    },
    title: {
        color: "#F26A2A",
        marginBottom: theme.spacing(3),
        fontWeight: 700,
        textAlign: 'center',
        fontSize: '2rem',
        borderBottom: `2px solid ${"#F26A2A"}`,
        paddingBottom: theme.spacing(1),
    },
    sectionTitle: {
        marginTop: theme.spacing(4),
        color: "#F26A2A",
        fontWeight: 600,
        textAlign: 'left',
        fontSize: '1.6rem',
    },
    noBirthdays: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        fontStyle: 'italic',
        paddingTop: theme.spacing(2),
    },
    birthdayCard: {
        backgroundColor: '#ffffff',
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        borderRadius: 10,
        boxShadow: theme.shadows[2],
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderLeft: `5px solid ${"#F26A2A"}`,
        '&:hover': {
            boxShadow: theme.shadows[6],
        },
    },
    studentInfo: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: theme.spacing(6),
        height: theme.spacing(6),
        marginRight: theme.spacing(2),
    },
    studentName: {
        fontWeight: 600,
        fontSize: '1.2rem',
        color: "#F26A2A",
    },
    birthdayDate: {
        fontSize: '1.1rem',
        color: theme.palette.secondary.dark,
        fontWeight: 500,
    },
}));

const students = [
    { name: 'John Doe', birthday: '1998-09-23', avatar: 'https://via.placeholder.com/150' },
    { name: 'Jane Smith', birthday: '2000-09-24', avatar: 'https://via.placeholder.com/150' },
    { name: 'Mark Johnson', birthday: '2003-09-21', avatar: 'https://via.placeholder.com/150' },
    { name: 'Emily Davis', birthday: '1995-09-21', avatar: 'https://via.placeholder.com/150' }, // Today's birthday
];

const BirthdayComponent = () => {
    const classes = useStyles();
    const today = moment().format('YYYY-MM-DD');

    // Filter today's birthdays
    const todaysBirthdays = students.filter(student =>
        moment(student.birthday).format('MM-DD') === moment().format('MM-DD')
    );

    // Filter upcoming birthdays (excluding today)
    const upcomingBirthdays = students.filter(student =>
        moment(student.birthday).format('MM-DD') > moment().format('MM-DD')
    );

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" className={classes.title}>
                    Birthdays
                </Typography>

                {/* Today's Birthdays Section */}
                <Typography variant="h6" className={classes.sectionTitle}>
                    Today's Birthdays
                </Typography>
                {todaysBirthdays.length > 0 ? (
                    todaysBirthdays.map((student, index) => (
                        <div key={index} className={classes.birthdayCard}>
                            <div className={classes.studentInfo}>
                                <Avatar src={student.avatar} alt={student.name} className={classes.avatar} />
                                <Typography variant="body1" className={classes.studentName}>
                                    {student.name}
                                </Typography>
                            </div>
                            <Typography variant="body2" className={classes.birthdayDate}>
                                {moment(student.birthday).format('MMMM Do')}
                            </Typography>
                        </div>
                    ))
                ) : (
                    <Typography className={classes.noBirthdays}>
                        No birthdays today.
                    </Typography>
                )}

                {/* Upcoming Birthdays Section */}
                <Typography variant="h6" className={classes.sectionTitle}>
                    Upcoming Birthdays
                </Typography>
                {upcomingBirthdays.length > 0 ? (
                    upcomingBirthdays.map((student, index) => (
                        <div key={index} className={classes.birthdayCard}>
                            <div className={classes.studentInfo}>
                                <Avatar src={student.avatar} alt={student.name} className={classes.avatar} />
                                <Typography variant="body1" className={classes.studentName}>
                                    {student.name}
                                </Typography>
                            </div>
                            <Typography variant="body2" className={classes.birthdayDate}>
                                {moment(student.birthday).format('MMMM Do')}
                            </Typography>
                        </div>
                    ))
                ) : (
                    <Typography className={classes.noBirthdays}>
                        No upcoming birthdays.
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default BirthdayComponent;
