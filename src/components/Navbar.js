import React, { useState, useEffect, useRef } from 'react';
import {
    AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon,
    ListItemText, useMediaQuery, Divider
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    Menu as MenuIcon, Home as HomeIcon, AccountCircle as AccountCircleIcon,
    People as PeopleIcon, School as SchoolIcon, Person as PersonIcon,
    ExitToApp as ExitToAppIcon, DateRange
} from '@material-ui/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Paid } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.primary.main,
        zIndex: theme.zIndex.drawer + 1,
        position: 'sticky',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navItems: {
        display: 'flex',
        overflowX: 'auto',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
        scrollbarWidth: 'none',
        flexGrow: 1,
        whiteSpace: 'nowrap',
    },
    iconButton: {
        color: '#fff',
        marginLeft: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    iconLabel: {
        marginLeft: theme.spacing(0.5),
        fontWeight: 500,
        color: '#fff',
        fontFamily: theme.typography.fontFamily, // Use the same font family as other components
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    drawerPaper: {
        width: 250,
        fontFamily: theme.typography.fontFamily, // Consistent font family in drawer
    },
    drawerItem: {
        '&.Mui-selected, &.Mui-selected:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: '#fff',
        },
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: '#fff',
        },
        fontFamily: theme.typography.fontFamily, // Consistent font family in drawer items
    },
    drawerItemText: {
        fontWeight: 500,
    },
    active: {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: '#fff',
        },
        borderRadius: '8px',
    },
}));

const Navbar = () => {
    const { logout, role } = useAuth(); // Get the user's role from the Auth context
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [useMobileView, setUseMobileView] = useState(false);
    const navRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const classes = useStyles();
    const location = useLocation(); // Hook to track the current route
    const navigate = useNavigate();

    useEffect(() => {
        if (navRef.current) {
            const navWidth = navRef.current.scrollWidth;
            const screenWidth = window.innerWidth;
            setUseMobileView(navWidth > screenWidth);
        }
    }, [navRef, isMobile]);

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
        { label: 'Students', icon: <PeopleIcon />, link: '/students' },
        { label: 'School', icon: <SchoolIcon />, link: '/school' },
        { label: 'Registration', icon: <DateRange />, link: '/registration' },
        { label: 'Attendance', icon: <DateRange />, link: '/attendance' },
        { label: 'Fee Structure', icon: <Paid />, link: '/fee-structure' },
        { label: 'Log Out', icon: <ExitToAppIcon />, action: handleLogout }
    ];

    // Navigation items for partner
    const partnerNavItems = [
        { label: 'Home', icon: <HomeIcon />, link: '/' },
        { label: 'Attendance', icon: <DateRange />, link: '/attendance' },
        { label: 'Birthday', icon: <DateRange />, link: '/birthday' },
        { label: 'Report Card', icon: <DateRange />, link: '/report' },
        { label: 'Assignment', icon: <DateRange />, link: '/assignment' },
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
                className={`${isActive ? classes.active : ''}`}
            >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} className={classes.drawerItemText} />
            </ListItem>
        );
    };

    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                {(isMobile || useMobileView) ? (
                    <>
                        <IconButton color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="left"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                            classes={{ paper: classes.drawerPaper }}
                        >
                            <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
                                {navItems.map((item, index) => renderNavItem(item, index))}
                            </List>
                            <Divider />
                        </Drawer>
                    </>
                ) : (
                    <div className={classes.navItems} ref={navRef}>
                        {navItems.map((item, index) => {
                            const isActive = location.pathname === item.link;

                            return (
                                <IconButton
                                    color="inherit"
                                    component={item.link ? Link : 'button'}
                                    to={item.link || undefined}
                                    onClick={item.action || undefined}
                                    key={index}
                                    className={`${classes.iconButton} ${isActive ? classes.active : ''}`}
                                >
                                    {item.icon}
                                    <span className={classes.iconLabel}>{item.label}</span>
                                </IconButton>
                            );
                        })}
                    </div>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
