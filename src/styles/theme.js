import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#F26A2A',
        },
        secondary: {
            main: '#2DB8B0',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    margin: '10px',
                },
            },
        },
    },
});

export default theme;
