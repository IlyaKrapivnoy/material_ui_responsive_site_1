import { TextField, makeStyles, Typography, Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    formItem: {
        marginBottom: 20,
        width: '100%',
    },
    logIn: {
        color: theme.palette.primary.main,
        marginBottom: 40,
        textAlign: 'center',
    },
    closeIcon: {
        cursor: 'pointer',
        '&:hover': {
            color: '#7d7d7d',
        },
    },
}));

const Form = ({ handleClose }) => {
    const classes = useStyles();

    return (
        <>
            <Box display='flex' alignItems='end' justifyContent='space-between'>
                <Typography variant='h3' className={classes.logIn}>
                    Welcome
                </Typography>
                <CloseIcon
                    onClick={handleClose}
                    className={classes.closeIcon}
                />
            </Box>
            <form className={classes.form}>
                <TextField
                    className={classes.formItem}
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                />
                <TextField
                    className={classes.formItem}
                    id='outlined-password'
                    label='Password'
                    variant='outlined'
                    type='password'
                />
            </form>
        </>
    );
};

export default Form;
