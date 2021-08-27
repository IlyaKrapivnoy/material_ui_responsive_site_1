import {
    AppBar,
    Button,
    Container,
    makeStyles,
    Modal,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { Box } from '@material-ui/core';
import Form from './Form';

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
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
    },
    paper: {
        position: 'absolute',
        width: 340,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        borderRadius: '6px',
    },
    logIn: {
        color: theme.palette.primary.main,
        marginBottom: 40,
        textAlign: 'center',
    },
}));

const Header = () => {
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

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
                    <Button color='inherit' onClick={handleOpen}>
                        Login
                    </Button>
                    <Modal className={classes.modal} open={openModal}>
                        <Container>
                            <Box
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                            >
                                <div className={classes.paper}>
                                    <Form />
                                    <Button
                                        color='primary'
                                        onClick={handleClose}
                                        size='large'
                                    >
                                        Log in
                                    </Button>
                                    <Button
                                        color='secondary'
                                        onClick={handleClose}
                                        size='large'
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </Box>
                        </Container>
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
