import {
    Breadcrumbs,
    Container,
    Link,
    makeStyles,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    content: { backgroundColor: '#f5f5f5', height: '100vh' },
    container: {
        paddingTop: theme.spacing(10),
    },
}));

const Content = () => {
    const classes = useStyles();

    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }

    return (
        <div className={classes.content}>
            <Container className={classes.container}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link color='inherit' href='/' onClick={handleClick}>
                        BlackWood
                    </Link>
                    <Typography color='textPrimary'>Partnership</Typography>
                </Breadcrumbs>
            </Container>
        </div>
    );
};

export default Content;
