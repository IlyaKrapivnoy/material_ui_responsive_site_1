import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        color: 'red',
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <div>
            <Button variant='contained' size='small' className={classes.button}>
                test
            </Button>
        </div>
    );
};

export default Header;
