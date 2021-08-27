import { TextField, makeStyles, Typography, Button } from '@material-ui/core';
import React, { useState } from 'react';

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
}));

const Form = () => {
    const classes = useStyles();

    return (
        <>
            <Typography variant='h3' className={classes.logIn}>
                Log In
            </Typography>
            <form className={classes.form} noValidate autoComplete='off'>
                <TextField
                    className={classes.formItem}
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                />
                <TextField
                    className={classes.formItem}
                    id='outlined-basic'
                    label='Password'
                    variant='outlined'
                />
            </form>
        </>
    );
};

export default Form;
