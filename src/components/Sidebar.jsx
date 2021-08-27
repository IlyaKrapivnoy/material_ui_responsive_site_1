import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebar: { paddingTop: 80 },
}));

const Sidebar = () => {
    const classes = useStyles();

    return <div className={classes.sidebar}>Sidebar</div>;
};

export default Sidebar;
