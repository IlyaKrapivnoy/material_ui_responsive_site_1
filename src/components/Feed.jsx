import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    feed: { backgroundColor: '#f5f5f5', height: '100vh', paddingTop: 80 },
}));

const Feed = () => {
    const classes = useStyles();

    return <div className={classes.feed}>Feed</div>;
};

export default Feed;
