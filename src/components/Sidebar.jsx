import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    sidebar: { paddingTop: 80 },
    sidebarTop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottom: '1px solid #eee',
    },
    avatar: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        marginBottom: 30,
    },
    userInfo: { textAlign: 'center', marginBottom: 20 },
    userMail: { fontWeight: 500, marginBottom: 2 },
    account: { color: '#5a5ffb', cursor: 'pointer' },
}));

const Sidebar = () => {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <Box className={classes.sidebarTop}>
                <Avatar
                    alt='User Picture'
                    src='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg'
                    square
                    className={classes.avatar}
                />
                <Box className={classes.userInfo}>
                    <Typography className={classes.userMail}>
                        usermail@gmail.com
                    </Typography>
                    <Typography className={classes.account}>
                        Premium Account
                    </Typography>
                </Box>
            </Box>
        </div>
    );
};

export default Sidebar;
