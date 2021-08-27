import {
    AppBar,
    Button,
    makeStyles,
    Modal,
    Toolbar,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    nav: {
        backgroundColor: '#313131',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logoLg: {
        letterSpacing: 3,
    },
    logoSm: {
        display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
        logoLg: {
            display: 'none',
        },
        logoSm: {
            display: 'block',
        },
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='static' className={classes.nav}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h6' className={classes.logoLg}>
                        &#10065; BlackWood
                    </Typography>
                    <Typography variant='h6' className={classes.logoSm}>
                        BlackWood
                    </Typography>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
