import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    AccountCircle as AccountCircleIcon,
    People as PeopleIcon,
    School as SchoolIcon,
    Person as PersonIcon,
    Business as BusinessIcon,
    AttachMoney as AttachMoneyIcon,
    ExitToApp as ExitToAppIcon,
    DateRange
} from '@material-ui/icons';
import {Link, useLocation, useNavigate} from 'react-router-dom'; // Use `useLocation` to track the active route
import { useAuth } from '../context/AuthContext';
import {MoneyOffCsredOutlined, Paid} from "@mui/icons-material"; // Adjust the import path as needed

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
        zIndex: theme.zIndex.drawer + 1,
        boxShadow: 'none',
        position: 'sticky',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    iconButton: {
        color: '#fff',
        marginLeft: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
        '&.active': {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: '8px',
        },
    },
    iconLabel: {
        marginLeft: theme.spacing(0.5),
        fontWeight: 'bold',
        color: '#fff',
    },
    drawer: {
        width: 250,
    },
    drawerItem: {
        '&.active': {
            backgroundColor: theme.palette.secondary.main,
        },
    },
    drawerItemText: {
        fontWeight: 500,
    },
}));

const Navbar = () => {
    const { logout, role } = useAuth(); // Get the user's role from the Auth context
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const location = useLocation(); // Hook to track the current route

    const navigate=useNavigate();
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };
    const handleLogout = () => {
        logout();
        navigate('/login'); // Redirect to login page after logout
    };

    // Navigation items for admin
    const adminNavItems = [
        { label: 'Home', icon: <HomeIcon />, link: '/' },
        { label: 'Profile', icon: <AccountCircleIcon />, link: '/profile' },
        { label: 'Students', icon: <PeopleIcon />, link: '/students' },
        { label: 'School', icon: <SchoolIcon />, link: '/school' },
        { label: 'Teacher', icon: <PersonIcon />, link: '/teacher' },
        { label: 'Attendance', icon: <DateRange />, link: '/attendance' },
        { label: 'Fee Structure', icon: <Paid />, link: '/fee-structure' },
        { label: 'Log Out', icon: <ExitToAppIcon />, action: handleLogout }
    ];

    // Navigation items for partner
    const partnerNavItems = [
        { label: 'Home', icon: <HomeIcon />, link: '/' },
        { label: 'School', icon: <SchoolIcon />, link: '/school' },
        { label: 'Attendance', icon: <DateRange />, link: '/attendance' },
        { label: 'Birthday', icon: <DateRange />, link: '/birthday' },
        { label: 'Report Card', icon: <DateRange />, link: '/report' }, { label: 'Assignment', icon: <DateRange />, link: '/assignment' },
        { label: 'Registration', icon: <DateRange />, link: '/registration' },
        { label: 'Online Payment', icon: <DateRange />, link: '/online-payment' },
        { label: 'Time Table', icon: <DateRange />, link: '/time-table' },
        { label: 'Log Out', icon: <ExitToAppIcon />, action: handleLogout }
    ];

    // Use role to decide which items to display
    const navItems = role === 'admin' ? adminNavItems : partnerNavItems;

    const renderNavItem = (item, index) => {
        const isActive = location.pathname === item.link;

        return (
            <ListItem
                button
                key={index}
                component={item.link ? Link : 'button'}
                to={item.link || undefined}
                onClick={item.action || undefined}
                className={isActive ? 'active' : ''}
            >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                    primary={item.label}
                    className={classes.drawerItemText}
                />
            </ListItem>
        );
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                {isMobile ? (
                    <>
                        <IconButton color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                {navItems.map((item, index) => renderNavItem(item, index))}
                            </List>
                        </Drawer>
                    </>
                ) : (
                    navItems.map((item, index) => {
                        const isActive = location.pathname === item.link;

                        return (
                            <IconButton
                                color="inherit"
                                component={item.link ? Link : 'button'}
                                to={item.link || undefined}
                                onClick={item.action || undefined}
                                key={index}
                                className={`${classes.iconButton} ${isActive ? 'active' : ''}`}
                            >
                                {item.icon}
                                <span className={classes.iconLabel}>{item.label}</span>
                            </IconButton>
                        );
                    })
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
