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
        backgroundColor: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
        height: 500,
        margin: '0 auto',
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
                    {/* <Modal className={classes.modal}></Modal> */}
                    <Modal
                        style={{
                            top: '20%',
                        }}
                        aria-labelledby='spring-modal-title'
                        aria-describedby='spring-modal-description'
                        className={classes.modal}
                        open={openModal}
                        // onClose={handleClose}
                        closeAfterTransition
                        // BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Container>
                            <div className={classes.paper}>
                                <h2 id='spring-modal-title'>Spring modal</h2>
                                <p id='spring-modal-description'>
                                    react-spring animates me.
                                </p>
                                <Button color='inherit' onClick={handleClose}>
                                    Close
                                </Button>
                            </div>
                        </Container>
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
