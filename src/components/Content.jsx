import {
    Box,
    Breadcrumbs,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Link,
    makeStyles,
    Typography,
} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
    content: { backgroundColor: '#f5f5f5', height: '100vh' },
    container: {
        paddingTop: theme.spacing(10),
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    cardField: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '40px 0',
    },
    card: {
        width: '30%',
    },
    longCardField: {
        marginBottom: 30,
    },
    longCard: {
        width: '100%',
    },
    longCardActionArea: {
        display: 'flex',
    },
    longCardMedia: {
        width: '30%',
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
                <Breadcrumbs
                    aria-label='breadcrumb'
                    separator={<NavigateNextIcon fontSize='small' />}
                >
                    <Link color='inherit' href='/' onClick={handleClick}>
                        BlackWood
                    </Link>
                    <Typography color='textPrimary'>Partnership</Typography>
                </Breadcrumbs>
                <Box className={classes.cardField}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Contemplative Reptile'
                                height='140'
                                image='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
                                square='true'
                                title='Contemplative Reptile'
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='h2'
                                >
                                    Card 1
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Contemplative Reptile'
                                height='140'
                                image='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
                                square='true'
                                title='Contemplative Reptile'
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='h2'
                                >
                                    Card 2
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                alt='Contemplative Reptile'
                                height='140'
                                image='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
                                square='true'
                                title='Contemplative Reptile'
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='h2'
                                >
                                    Card 3
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                >
                                    Lizards are a widespread group of squamate
                                    reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
                <Box className={classes.longCardField}>
                    <Card className={classes.longCard}>
                        <CardActionArea className={classes.longCardActionArea}>
                            <CardMedia
                                component='img'
                                alt='Contemplative Reptile'
                                height='140'
                                image='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
                                square='true'
                                title='Contemplative Reptile'
                                className={classes.longCardMedia}
                            />
                            <CardContent className={classes.longCardContent}>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='h2'
                                >
                                    Long Card
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum numquam quae sed nam
                                    ipsum illum nulla quis, aspernatur delectus
                                    nihil et nobis harum explicabo dicta!
                                    Voluptatibus, quaerat. Odio atque
                                    consectetur voluptates perspiciatis aliquid
                                    cumque libero maxime ipsa. Aliquid magnam
                                    hic vero modi doloribus. Doloremque
                                    praesentium dignissimos quo possimus quis.
                                    Eius sed deserunt suscipit id fuga aliquam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
                <Box className={classes.longCardField}>
                    <Card className={classes.longCard}>
                        <CardActionArea className={classes.longCardActionArea}>
                            <CardMedia
                                component='img'
                                alt='Contemplative Reptile'
                                height='140'
                                image='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
                                square='true'
                                title='Contemplative Reptile'
                                className={classes.longCardMedia}
                            />
                            <CardContent className={classes.longCardContent}>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='h2'
                                >
                                    Long Card
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='textSecondary'
                                    component='p'
                                >
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Earum numquam quae sed nam
                                    ipsum illum nulla quis, aspernatur delectus
                                    nihil et nobis harum explicabo dicta!
                                    Voluptatibus, quaerat. Odio atque
                                    consectetur voluptates perspiciatis aliquid
                                    cumque libero maxime ipsa. Aliquid magnam
                                    hic vero modi doloribus. Doloremque
                                    praesentium dignissimos quo possimus quis.
                                    Eius sed deserunt suscipit id fuga aliquam.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Container>
        </div>
    );
};

export default Content;
